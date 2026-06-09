import React, { useState, useEffect } from 'react';
import Section2CycleOfAbuse from './sections/Section2CycleOfAbuse';
import Section3Scenarios from './sections/Section3Scenarios';
import Section4Toolkit from './sections/Section4Toolkit';
import Section5ActionPlan from './sections/Section5ActionPlan';
import '../styles/WorkbookSection.css';

const ROLE_COLORS = {
  healthcare: '#1e9ab4',
  law_enforcement: '#fe6410',
  social_worker: '#f6538c',
  faith_leader: '#fd2b60'
};

function WorkbookSection({
  section,
  userRole,
  workbookData,
  onComplete,
  onNavigate,
  sessionId
}) {
  const [completionStatus, setCompletionStatus] = useState({});

  useEffect(() => {
    // Track completion for navigation
    const status = {
      section2: Object.keys(workbookData.section2 || {}).length > 0,
      section3: Object.keys(workbookData.section3 || {}).length > 0,
      section4: Object.keys(workbookData.section4 || {}).length > 0,
      section5: Object.keys(workbookData.section5 || {}).length > 0
    };
    setCompletionStatus(status);
  }, [workbookData]);

  const roleColor = ROLE_COLORS[userRole] || '#1a1a1a';

  const renderSection = () => {
    switch (section) {
      case 'section2':
        return (
          <Section2CycleOfAbuse
            userRole={userRole}
            data={workbookData.section2}
            onComplete={(data) => {
              onComplete('section2', data);
            }}
          />
        );
      case 'section3':
        return (
          <Section3Scenarios
            userRole={userRole}
            data={workbookData.section3}
            onComplete={(data) => {
              onComplete('section3', data);
            }}
          />
        );
      case 'section4':
        return (
          <Section4Toolkit
            userRole={userRole}
            data={workbookData.section4}
            onComplete={(data) => {
              onComplete('section4', data);
            }}
          />
        );
      case 'section5':
        return (
          <Section5ActionPlan
            userRole={userRole}
            data={workbookData.section5}
            onComplete={(data) => {
              onComplete('section5', data);
            }}
            onFinish={() => onNavigate('download')}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="workbook-container">
      {/* Navigation Bar */}
      <nav className="workbook-nav" style={{ '--role-color': roleColor }}>
        <div className="nav-brand">
          <span className="nav-logo">RESA</span>
          <span className="nav-title">Domestic Violence Workbook</span>
        </div>

        <div className="nav-progress">
          {['section2', 'section3', 'section4', 'section5'].map(sec => (
            <button
              key={sec}
              className={`nav-item ${section === sec ? 'active' : ''} ${
                completionStatus[sec] ? 'completed' : ''
              }`}
              onClick={() => onNavigate(sec)}
              title={`Go to ${sec}`}
            >
              <span className="step-number">{sec.replace('section', '')}</span>
            </button>
          ))}
        </div>

        <div className="nav-user-role" style={{ color: roleColor }}>
          {userRole === 'healthcare' && 'Healthcare Provider'}
          {userRole === 'law_enforcement' && 'Law Enforcement'}
          {userRole === 'social_worker' && 'Social Worker'}
          {userRole === 'faith_leader' && 'Faith Leader'}
        </div>
      </nav>

      {/* Section Content */}
      <div className="section-content">
        {renderSection()}
      </div>
    </div>
  );
}

export default WorkbookSection;
