import React from 'react';
import { ChevronRight } from 'lucide-react';
import '../styles/Welcome.css';

function Welcome({ onStart }) {
  return (
    <div className="welcome-container">
      {/* Hero Section */}
      <div className="welcome-hero">
        <div className="hero-gradient-bg">
          <div className="hero-accent-bar"></div>

          <div className="hero-content">
            <div className="resa-logo">RESA</div>

            <h1 className="hero-headline">
              Supporting Survivors<br />Through Systems
            </h1>

            <p className="hero-subhead">
              A 30-45 minute workbook<br />tailored to YOUR role
            </p>
          </div>

          <div className="hero-visual-element"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="welcome-content">
        <div className="content-card">
          <div className="content-accent-left"></div>

          <h2>What You'll Learn</h2>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">📋</div>
              <h3>The Cycle of Abuse</h3>
              <p>Understand the dynamics that keep survivors trapped</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🎯</div>
              <h3>Real Scenarios</h3>
              <p>Apply your knowledge to realistic situations you'll face</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">💬</div>
              <h3>Scripts & Tools</h3>
              <p>Ready-made language and resources for your role</p>
            </div>

            <div className="feature-item">
              <div className="feature-icon">🛠️</div>
              <h3>Action Plan</h3>
              <p>Concrete next steps you can take immediately</p>
            </div>
          </div>

          <div className="who-this-is-for">
            <p className="label">This workbook is for:</p>
            <div className="role-tags">
              <span className="tag healthcare">Healthcare Providers</span>
              <span className="tag law-enforcement">Law Enforcement</span>
              <span className="tag social-worker">Social Workers</span>
              <span className="tag faith-leader">Faith Leaders</span>
            </div>
          </div>

          <p className="welcome-description">
            Learn how to respond to domestic violence survivors with the skill,
            compassion, and system knowledge YOUR role requires.
          </p>

          <div className="progress-info">
            <div className="progress-item">
              <span className="number">5</span>
              <span className="label">Sections</span>
            </div>
            <div className="progress-item">
              <span className="number">30-45</span>
              <span className="label">Minutes</span>
            </div>
            <div className="progress-item">
              <span className="number">Real</span>
              <span className="label">Scenarios</span>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="welcome-footer">
        <button className="cta-button" onClick={onStart}>
          <span>Start the Workbook</span>
          <ChevronRight size={20} />
        </button>

        <p className="footer-credit">
          Fonda J. Royster, MA · RESA Solutions LLC
        </p>
      </div>
    </div>
  );
}

export default Welcome;
