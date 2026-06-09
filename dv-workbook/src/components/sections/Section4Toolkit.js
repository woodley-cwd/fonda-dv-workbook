import React, { useState } from 'react';
import '../../styles/sections/Section4.css';

function Section4Toolkit({ userRole, data, onComplete }) {
  const [responses, setResponses] = useState(data || {});

  const toolkits = {
    healthcare: {
      scripts: [
        '"I ask all my patients about safety at home. In the last year, has your partner pushed, hit, or hurt you?"',
        '"I\'m concerned about these injuries. Can you tell me what happened?"',
        '"You\'re not in trouble. I\'m here to help. I have resources available."'
      ],
      checklist: [
        'Screen all patients in private (using validated tool)',
        'Document injuries & statements accurately',
        'Provide DV resources before discharge',
        'Know your state\'s mandatory reporting laws',
        'Connect to local DV services'
      ]
    },
    law_enforcement: {
      scripts: [
        '"You\'re not in trouble. I\'m here to help keep you safe. Can you tell me what happened?"',
        '"I need to ask you some questions privately. Let\'s step away."',
        '"Your safety matters. I want to understand what you need right now."'
      ],
      checklist: [
        'Never tell her to drop charges',
        'Interview safely (alone, private)',
        'Understand trauma responses aren\'t "unreliable"',
        'Take photos of injuries/scene',
        'Provide written resources'
      ]
    },
    social_worker: {
      scripts: [
        '"Your safety is my priority. Let\'s talk about what you need right now."',
        '"I\'m not here to judge. I\'m here to help you and your child be safe."',
        '"You\'re not alone in this. There are resources and people who can help."'
      ],
      checklist: [
        'Ask about safety before case planning',
        'Understand custody implications',
        'Don\'t force leaving—work at her pace',
        'Know community resources by heart',
        'Build trust over time'
      ]
    },
    faith_leader: {
      scripts: [
        '"You deserve safety and dignity. Let me connect you with professional advocates."',
        '"Your faith is important. So is your safety. These aren\'t in conflict."',
        '"God\'s desire for you is wholeness. That starts with safety."'
      ],
      checklist: [
        'Don\'t default to "stay and pray"',
        'Know when to refer (DV is bigger than counseling)',
        'Provide sanctuary if needed',
        'Support her spiritual journey, not your theology',
        'Connect to professional help'
      ]
    }
  };

  const toolkit = toolkits[userRole] || toolkits.healthcare;

  return (
    <div className="section4-container">
      <div className="section-header">
        <div className="section-header-accent"></div>
        <h1>Your Professional Toolkit</h1>
        <p className="section-subtitle">
          Ready-made language and resources specifically for your role
        </p>
      </div>

      <div className="toolkit-grid">
        <div className="toolkit-card scripts-card">
          <h3>Scripts You Can Use</h3>
          <div className="scripts-list">
            {toolkit.scripts.map((script, idx) => (
              <div key={idx} className="script-item">
                <span className="script-marker">"</span>
                <p>{script.replace(/^"/, '').replace(/"$/, '')}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="toolkit-card checklist-card">
          <h3>Action Checklist</h3>
          <div className="checklist">
            {toolkit.checklist.map((item, idx) => (
              <label key={idx} className="checklist-item">
                <input
                  type="checkbox"
                  onChange={(e) => {
                    const newResponses = { ...responses };
                    if (!newResponses.checkedItems) newResponses.checkedItems = [];
                    if (e.target.checked) {
                      newResponses.checkedItems.push(idx);
                    } else {
                      newResponses.checkedItems = newResponses.checkedItems.filter(
                        i => i !== idx
                      );
                    }
                    setResponses(newResponses);
                    onComplete(newResponses);
                  }}
                  checked={responses.checkedItems?.includes(idx) || false}
                />
                <span>{item}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="safety-planning-section">
        <h3>Safety Planning Basics</h3>
        <div className="safety-elements">
          <div className="safety-element">
            <h4>1. Danger Assessment</h4>
            <p>Ask about strangulation (700% increased homicide risk)</p>
          </div>
          <div className="safety-element">
            <h4>2. Safe Places</h4>
            <p>Where can she go if she needs to leave?</p>
          </div>
          <div className="safety-element">
            <h4>3. Important Documents</h4>
            <p>IDs, financial records, custody papers, medications</p>
          </div>
          <div className="safety-element">
            <h4>4. Support Network</h4>
            <p>Who knows about the abuse? Who can help?</p>
          </div>
        </div>
      </div>

      <div className="section-navigation">
        <button className="nav-button primary">
          Next Section →
        </button>
      </div>
    </div>
  );
}

export default Section4Toolkit;
