import React, { useState } from 'react';
import '../../styles/sections/Section5.css';

function Section5ActionPlan({ userRole, data, onComplete, onFinish }) {
  const [actionPlan, setActionPlan] = useState(data?.actionPlan || '');
  const [keyTakeaway, setKeyTakeaway] = useState(data?.keyTakeaway || '');

  const handleSave = () => {
    onComplete({ actionPlan, keyTakeaway });
    setTimeout(onFinish, 500);
  };

  return (
    <div className="section5-container">
      <div className="section-header">
        <div className="section-header-accent"></div>
        <h1>Your Action Plan</h1>
        <p className="section-subtitle">
          Concrete steps you can take immediately in your role
        </p>
      </div>

      <div className="action-plan-card">
        <div className="action-plan-section">
          <label htmlFor="action-plan-text">
            <h3>What will you do differently?</h3>
            <p className="label-hint">
              Based on what you\'ve learned, what\'s one specific thing you\'ll change in how you
              respond to DV survivors?
            </p>
          </label>
          <textarea
            id="action-plan-text"
            className="action-input"
            placeholder="Example: I will screen all patients privately using HARK..."
            value={actionPlan}
            onChange={(e) => {
              setActionPlan(e.target.value);
              onComplete({ actionPlan: e.target.value, keyTakeaway });
            }}
          />
        </div>

        <div className="action-plan-section">
          <label htmlFor="key-takeaway">
            <h3>Your Key Takeaway</h3>
            <p className="label-hint">
              What will you remember most from this workbook?
            </p>
          </label>
          <textarea
            id="key-takeaway"
            className="action-input"
            placeholder="The one thing I won't forget..."
            value={keyTakeaway}
            onChange={(e) => {
              setKeyTakeaway(e.target.value);
              onComplete({ actionPlan, keyTakeaway: e.target.value });
            }}
          />
        </div>
      </div>

      <div className="closing-message">
        <h3>Thank you</h3>
        <p>
          Your willingness to deepen your understanding of domestic violence matters. Survivors
          need professionals who show up with compassion, expertise, and a commitment to safety.
          You are making a difference.
        </p>
        <p className="signed">— Fonda J. Royster, MA</p>
      </div>

      <div className="section-navigation">
        <button className="nav-button secondary" onClick={() => window.history.back()}>
          ← Back
        </button>
        <button className="nav-button primary" onClick={handleSave}>
          Download Your Workbook →
        </button>
      </div>
    </div>
  );
}

export default Section5ActionPlan;
