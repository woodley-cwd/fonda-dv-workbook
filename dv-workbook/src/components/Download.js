import React, { useState } from 'react';
import { Download as DownloadIcon } from 'lucide-react';
import '../styles/Download.css';

function Download({ workbookData, userRole, onRestart }) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    try {
      // For now, create a simple text summary
      const content = `
FONDA J. ROYSTER - DOMESTIC VIOLENCE WORKBOOK
Role: ${getRoleDisplay(userRole)}
Completed: ${new Date().toLocaleDateString()}

YOUR RESPONSES:
${JSON.stringify(workbookData, null, 2)}

This workbook was designed to deepen your understanding of domestic violence
and strengthen your response as a professional.

Resources:
National DV Hotline: 1-800-799-7233
Fonda J. Royster, MA - RESA Solutions LLC
fondajroyster.com
      `;

      const element = document.createElement('a');
      const file = new Blob([content], { type: 'text/plain' });
      element.href = URL.createObjectURL(file);
      element.download = `DV-Workbook-${userRole}-${Date.now()}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } catch (error) {
      console.error('Error downloading:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const getRoleDisplay = (role) => {
    const roles = {
      healthcare: 'Healthcare Provider',
      law_enforcement: 'Law Enforcement',
      social_worker: 'Social Worker',
      faith_leader: 'Faith Leader'
    };
    return roles[role] || role;
  };

  return (
    <div className="download-container">
      <div className="download-hero">
        <div className="hero-content">
          <h1>Congratulations!</h1>
          <p className="hero-message">
            You've completed the Domestic Violence Professional Workbook
          </p>
        </div>
      </div>

      <div className="download-content">
        <div className="completion-summary">
          <h2>What You've Completed</h2>
          <div className="summary-grid">
            <div className="summary-item">
              <span className="icon">📚</span>
              <span>Understanding the Cycle</span>
            </div>
            <div className="summary-item">
              <span className="icon">🎯</span>
              <span>Real-World Scenarios</span>
            </div>
            <div className="summary-item">
              <span className="icon">🛠️</span>
              <span>Your Professional Toolkit</span>
            </div>
            <div className="summary-item">
              <span className="icon">✅</span>
              <span>Personal Action Plan</span>
            </div>
          </div>
        </div>

        <div className="download-card">
          <h3>Download Your Workbook</h3>
          <p>
            Your completed responses, scripts, and action plan are ready to download. Save this for
            future reference.
          </p>
          <button
            className="download-button"
            onClick={handleDownloadPDF}
            disabled={isGenerating}
          >
            <DownloadIcon size={20} />
            {isGenerating ? 'Generating...' : 'Download PDF'}
          </button>
        </div>

        <div className="resources-section">
          <h3>Important Resources</h3>
          <div className="resources-grid">
            <div className="resource-card">
              <h4>National DV Hotline</h4>
              <p className="resource-number">1-800-799-7233</p>
              <p className="resource-hint">24/7, confidential, multilingual</p>
            </div>
            <div className="resource-card">
              <h4>Get Training</h4>
              <p className="resource-link">Book Fonda for speaking</p>
              <p className="resource-hint">bookings@fondaroyster.com</p>
            </div>
            <div className="resource-card">
              <h4>More Resources</h4>
              <p className="resource-link">fondajroyster.com</p>
              <p className="resource-hint">Free guides and materials</p>
            </div>
          </div>
        </div>

        <div className="closing-section">
          <h3>Thank You</h3>
          <p>
            Your commitment to understanding domestic violence and responding with skill and
            compassion makes a difference in survivors' lives.
          </p>
          <p className="quote">
            "The conversation that feels awkward to you may be the one that changes everything
            for them."
          </p>
          <p className="signed">— Fonda J. Royster, MA</p>
        </div>
      </div>

      <div className="download-footer">
        <button className="footer-button secondary" onClick={onRestart}>
          Start Over
        </button>
        <button className="footer-button primary" onClick={() => window.close()}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Download;
