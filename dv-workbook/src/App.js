import React, { useState, useEffect } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import RoleSelector from './components/RoleSelector';
import EducationalModule from './components/EducationalModule';
import ScenarioSection from './components/ScenarioSection';
import ToolkitSection from './components/ToolkitSection';
import ActionPlanSection from './components/ActionPlanSection';
import DownloadSection from './components/DownloadSection';
import { updateProgress, loadProgress } from './firebase';

function App() {
  const [sessionId] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const session = params.get('session') || `dv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    if (!params.get('session')) {
      window.history.replaceState({}, '', `?session=${session}`);
    }
    return session;
  });

  const [currentSection, setCurrentSection] = useState(0);
  const [userRole, setUserRole] = useState(null);
  const [workbookData, setWorkbookData] = useState({
    role: null,
    educationProgress: {},
    scenarioAnswers: {},
    reflections: {},
    actionPlan: {},
    toolkitNotes: {}
  });
  const [loading, setLoading] = useState(true);

  // Load saved progress
  useEffect(() => {
    const loadData = async () => {
      const saved = await loadProgress(sessionId);
      if (saved) {
        setWorkbookData(saved);
        setUserRole(saved.role);
        setCurrentSection(saved.currentSection || 0);
      }
      setLoading(false);
    };
    loadData();
  }, [sessionId]);

  // Auto-save progress
  useEffect(() => {
    if (userRole) {
      const timer = setTimeout(() => {
        updateProgress(sessionId, { ...workbookData, role: userRole, currentSection });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [workbookData, currentSection, sessionId, userRole]);

  const handleRoleSelect = (role) => {
    setUserRole(role);
    setWorkbookData(prev => ({ ...prev, role }));
    setCurrentSection(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToNextSection = () => {
    setCurrentSection(prev => prev + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPreviousSection = () => {
    setCurrentSection(prev => Math.max(0, prev - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const updateWorkbookData = (updates) => {
    setWorkbookData(prev => ({ ...prev, ...updates }));
  };

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading your workbook...</p>
      </div>
    );
  }

  // Define all sections
  const sections = [
    { id: 'welcome', component: <Welcome key="welcome" onStart={() => setCurrentSection(1)} /> },
    { id: 'roleSelect', component: <RoleSelector key="roleSelect" onRoleSelect={handleRoleSelect} /> },
    ...(userRole ? [
      { id: 'edu-what-is-dv', component: <EducationalModule key="edu1" role={userRole} moduleType="what-is-dv" onNext={goToNextSection} /> },
      { id: 'edu-trauma', component: <EducationalModule key="edu2" role={userRole} moduleType="trauma-response" onNext={goToNextSection} /> },
      { id: 'edu-role', component: <EducationalModule key="edu3" role={userRole} moduleType="role-context" onNext={goToNextSection} /> },
      { id: 'scenarios', component: <ScenarioSection key="scenarios" role={userRole} workbookData={workbookData} onUpdateData={updateWorkbookData} onNext={goToNextSection} /> },
      { id: 'toolkit', component: <ToolkitSection key="toolkit" role={userRole} workbookData={workbookData} onUpdateData={updateWorkbookData} onNext={goToNextSection} /> },
      { id: 'action-plan', component: <ActionPlanSection key="actionPlan" role={userRole} workbookData={workbookData} onUpdateData={updateWorkbookData} onNext={goToNextSection} /> },
      { id: 'download', component: <DownloadSection key="download" role={userRole} workbookData={workbookData} sessionId={sessionId} /> }
    ] : [])
  ];

  const totalSections = sections.length;

  return (
    <div className="app">
      {/* Header with progress */}
      {currentSection > 0 && (
        <header className="workbook-header">
          <div className="header-content">
            <div className="logo-section">
              <span className="logo-icon">RESA</span>
              <span className="workbook-title">Domestic Violence Workbook</span>
            </div>
            <div className="progress-section">
              <div className="progress-steps">
                {sections.map((_, i) => (
                  <button
                    key={i}
                    className={`progress-dot ${i === currentSection ? 'active' : ''} ${i < currentSection ? 'completed' : ''}`}
                    onClick={() => i <= currentSection && setCurrentSection(i)}
                    title={`Step ${i + 1}`}
                  >
                    {i < currentSection ? '✓' : i + 1}
                  </button>
                ))}
              </div>
              {userRole && <span className="role-badge">{userRole}</span>}
            </div>
          </div>
        </header>
      )}

      {/* Main content */}
      <main className="workbook-content">
        {sections[currentSection]?.component}
      </main>

      {/* Navigation footer */}
      {currentSection > 0 && currentSection < totalSections - 1 && (
        <footer className="workbook-footer">
          <button
            className="nav-button prev-btn"
            onClick={goToPreviousSection}
            disabled={currentSection === 0}
          >
            ← Previous
          </button>
          <span className="progress-indicator">
            Section {currentSection} of {totalSections - 1}
          </span>
          <button
            className="nav-button next-btn"
            onClick={goToNextSection}
          >
            Next →
          </button>
        </footer>
      )}
    </div>
  );
}

export default App;
