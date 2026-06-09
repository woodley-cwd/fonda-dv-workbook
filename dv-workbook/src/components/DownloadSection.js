import React, { useState } from 'react';
import '../styles/DownloadSection.css';

const DownloadSection = ({ role, workbookData, sessionId }) => {
  const [downloadFormat, setDownloadFormat] = useState('pdf');
  const [isDownloading, setIsDownloading] = useState(false);

  const generatePDF = () => {
    setIsDownloading(true);

    // Create a simple HTML to PDF conversion
    const content = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Domestic Violence Workbook - ${role}</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
          .header { color: #fd2b60; border-bottom: 3px solid #fd2b60; margin-bottom: 30px; }
          .role-badge { display: inline-block; background: #1e9ab4; color: white; padding: 8px 12px; border-radius: 4px; margin-bottom: 20px; }
          h1, h2, h3 { color: #1a1a1a; }
          h2 { margin-top: 30px; border-left: 4px solid #fe6410; padding-left: 10px; }
          .section { margin-bottom: 25px; }
          .label { font-weight: bold; color: #fe6410; margin-top: 15px; }
          .content { background: #f5f5f5; padding: 15px; border-radius: 4px; margin-top: 8px; }
          .action-plan { background: #faf8f3; padding: 20px; margin: 20px 0; border-left: 4px solid #fd2b60; }
          .footer { margin-top: 50px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; }
          .date { color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="header">
          <h1>Domestic Violence Workbook</h1>
          <p>Supporting Survivors Through Systems</p>
          <div class="role-badge">${role}</div>
        </div>

        <div class="section">
          <h2>Your Workbook Summary</h2>
          <p class="date">Completed: ${new Date().toLocaleDateString()}</p>
          <p>Session ID: ${sessionId}</p>
        </div>

        <div class="section">
          <h2>What You've Learned</h2>
          <p>In this workbook, you've explored:</p>
          <ul>
            <li>What domestic violence is and its different forms</li>
            <li>How trauma affects survivors and their responses</li>
            <li>Your unique role and power in supporting survivors</li>
            <li>Real-world scenarios and evidence-based responses</li>
            <li>Practical tools, scripts, and templates for your practice</li>
          </ul>
        </div>

        <div class="action-plan">
          <h2>Your Personal Action Plan</h2>

          <div class="label">Your Commitment:</div>
          <div class="content">${workbookData.actionPlan?.commitment || 'Not completed'}</div>

          <div class="label">First Step (Next 2 Weeks):</div>
          <div class="content">${workbookData.actionPlan?.firstStep || 'Not completed'}</div>

          <div class="label">Support You Need:</div>
          <div class="content">${workbookData.actionPlan?.support || 'Not specified'}</div>

          <div class="label">Timeline:</div>
          <div class="content">${workbookData.actionPlan?.timeline || 'Not specified'}</div>
        </div>

        <div class="section">
          <h2>Key Takeaways for ${role}s</h2>
          ${getKeyTakeaways(role)}
        </div>

        <div class="section">
          <h2>Quick Reference Resources</h2>
          <ul>
            <li><strong>National Domestic Violence Hotline:</strong> 1-800-799-7233 (24/7)</li>
            <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
            <li><strong>RAINN (Sexual Assault):</strong> 1-800-656-4673</li>
            <li><strong>National Child Abuse Hotline:</strong> 1-800-422-4453</li>
          </ul>
        </div>

        <div class="section">
          <h2>Notes from This Workbook</h2>
          <div class="content">
            ${workbookData.toolkitNotes?.[role] || 'No additional notes'}
          </div>
        </div>

        <div class="footer">
          <p><strong>About This Workbook</strong></p>
          <p>Created by Fonda J. Royster, MA | RESA Solutions LLC</p>
          <p>Trauma-informed professional training for supporting domestic violence survivors</p>
          <p>Visit: fondajroyster.com</p>
          <p><em>This workbook is a confidential resource for professional development. Keep it secure.</em></p>
        </div>
      </body>
      </html>
    `;

    // Use html2pdf or fallback to simple download
    try {
      const element = document.createElement('div');
      element.innerHTML = content;

      // Simple text export as fallback
      const textContent = `
DOMESTIC VIOLENCE WORKBOOK
Supporting Survivors Through Systems
Role: ${role}
Completed: ${new Date().toLocaleDateString()}
Session ID: ${sessionId}

YOUR ACTION PLAN:
Commitment: ${workbookData.actionPlan?.commitment || 'Not completed'}
First Step: ${workbookData.actionPlan?.firstStep || 'Not completed'}
Support Needed: ${workbookData.actionPlan?.support || 'Not specified'}
Timeline: ${workbookData.actionPlan?.timeline || 'Not specified'}

NOTES FROM THIS WORKBOOK:
${workbookData.toolkitNotes?.[role] || 'No additional notes'}

KEY RESOURCES:
National DV Hotline: 1-800-799-7233
Crisis Text Line: Text HOME to 741741

For more information, visit: fondajroyster.com
      `;

      // Create download
      const blob = new Blob([textContent], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `DV-Workbook-${role}-${new Date().toISOString().split('T')[0]}.txt`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download error:', error);
      alert('There was an issue downloading your workbook. Please try again.');
    }

    setIsDownloading(false);
  };

  const getKeyTakeaways = (role) => {
    const takeaways = {
      'Healthcare Provider': `
        <ul>
          <li>Screen every patient privately using a validated tool</li>
          <li>Document injuries in detail—your documentation becomes legal evidence</li>
          <li>Believe survivors, even when their story changes or seems unclear</li>
          <li>Provide resources before discharge, even if patient won't press charges</li>
          <li>Understand that trauma affects memory, emotion, and behavior</li>
        </ul>
      `,
      'Law Enforcement': `
        <ul>
          <li>Base arrest decisions on evidence, not victim cooperation</li>
          <li>Interview parties separately and photograph all injuries</li>
          <li>Recognize that abusers are often charming and abusers often appear calm</li>
          <li>Document everything—victim reluctance is expected and is not cause for inaction</li>
          <li>Provide resources and connect to advocates, even if charges won't be filed</li>
        </ul>
      `,
      'Social Worker': `
        <ul>
          <li>Work at the survivor's pace—no forced timelines</li>
          <li>Create safety plans that address economic barriers to leaving</li>
          <li>Understand that staying is sometimes the safest choice—your role is to support options</li>
          <li>Recognize when victim is defending/minimizing abuser—this is trauma response</li>
          <li>Coordinate across systems and provide long-term support</li>
        </ul>
      `,
      'Faith Leader': `
        <ul>
          <li>Reframe theology: God does not require suffering in abusive relationships</li>
          <li>Refer to professional DV advocates—pastoral care is support, not treatment</li>
          <li>Address abusers in your community clearly and hold them accountable</li>
          <li>Create a community that names and prevents abuse, not hides it</li>
          <li>Provide spiritual permission for safety and healing</li>
        </ul>
      `
    };
    return takeaways[role] || takeaways['Healthcare Provider'];
  };

  return (
    <div className="download-section">
      <div className="download-header">
        <h1>✓ Workbook Complete!</h1>
        <p className="congratulations">
          You've completed a comprehensive 30-45 minute training on supporting domestic violence survivors.
        </p>
      </div>

      <div className="completion-summary">
        <div className="summary-card">
          <h3>Sections Completed</h3>
          <ul>
            <li>✓ What is Domestic Violence</li>
            <li>✓ Understanding Trauma Response</li>
            <li>✓ Your Role-Specific Context</li>
            <li>✓ 3 Real-World Scenarios</li>
            <li>✓ Professional Toolkit</li>
            <li>✓ Personal Action Plan</li>
          </ul>
        </div>

        <div className="summary-card">
          <h3>Your Commitment</h3>
          <p className="commitment-text">
            {workbookData.actionPlan?.commitment || 'Action plan pending'}
          </p>
        </div>
      </div>

      <div className="download-box">
        <h2>Download Your Workbook</h2>
        <p>Save this completed workbook for your records and future reference.</p>

        <div className="format-options">
          <label className="format-option">
            <input
              type="radio"
              name="format"
              value="pdf"
              checked={downloadFormat === 'pdf'}
              onChange={(e) => setDownloadFormat(e.target.value)}
            />
            <span className="format-label">📄 Text File (Recommended)</span>
            <span className="format-desc">Easy to save, open, and share</span>
          </label>
        </div>

        <button
          className="download-btn"
          onClick={generatePDF}
          disabled={isDownloading}
        >
          {isDownloading ? 'Downloading...' : '⬇ Download Your Workbook'}
        </button>
      </div>

      <div className="next-steps">
        <h2>What's Next?</h2>
        <div className="next-steps-content">
          <div className="step">
            <h3>1. Take Action</h3>
            <p>Begin with your first step (within 2 weeks) as outlined in your action plan.</p>
          </div>
          <div className="step">
            <h3>2. Build Your Knowledge</h3>
            <p>
              Continue learning through the resources listed below and training opportunities in your organization.
            </p>
          </div>
          <div className="step">
            <h3>3. Connect & Support</h3>
            <p>
              Share resources with colleagues. Build a culture in your organization that recognizes and responds to DV.
            </p>
          </div>
          <div className="step">
            <h3>4. Stay Updated</h3>
            <p>DV dynamics, research, and community resources change. Stay current with training and resources.</p>
          </div>
        </div>
      </div>

      <div className="resources-section">
        <h2>Additional Resources</h2>
        <ul className="resources-list">
          <li>
            <strong>National Domestic Violence Hotline:</strong> 1-800-799-7233 (24/7)
            <br />
            <em>Free, confidential, multilingual support</em>
          </li>
          <li>
            <strong>Futures Without Violence:</strong> futureswithoutviolence.org
            <br />
            <em>Professional training and resources</em>
          </li>
          <li>
            <strong>National Center on Domestic and Sexual Violence:</strong> ncddsv.org
            <br />
            <em>Training, consultation, and resources</em>
          </li>
          <li>
            <strong>Fonda J. Royster:</strong> fondajroyster.com
            <br />
            <em>Speaking, consulting, and professional development</em>
          </li>
        </ul>
      </div>

      <div className="closing-section">
        <h3>Thank You</h3>
        <p>
          Thank you for dedicating time to understanding domestic violence and strengthening your ability to support survivors.
          Your work matters. Your compassion matters. Your expertise matters.
        </p>
        <p>
          <em>
            "I don't do fluff. I do truth." — Fonda J. Royster
          </em>
        </p>
      </div>
    </div>
  );
};

export default DownloadSection;
