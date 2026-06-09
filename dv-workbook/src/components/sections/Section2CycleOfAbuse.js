import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import '../../styles/sections/Section2.css';

function Section2CycleOfAbuse({ userRole, data, onComplete }) {
  const [expandedStage, setExpandedStage] = useState(null);
  const [responses, setResponses] = useState(data || {});

  const stages = [
    {
      id: 'tension',
      number: '1',
      title: 'Tension Building',
      description: 'Arguments escalate',
      details: 'Walking on eggshells, inability to predict abuser\'s mood, anything can trigger rage',
      color: '#fd2b60'
    },
    {
      id: 'incident',
      number: '2',
      title: 'Incident',
      description: 'Physical or emotional abuse occurs',
      details: 'The acute battering event. Abuser loses control or intentionally escalates the conflict.',
      color: '#fe6410'
    },
    {
      id: 'reconciliation',
      number: '3',
      title: 'Reconciliation',
      description: '"I\'m sorry" apologies, promises to change',
      details: 'The abuser apologizes profusely, promises it won\'t happen again, acts loving and attentive.',
      color: '#f6538c'
    },
    {
      id: 'calm',
      number: '4',
      title: 'Calm',
      description: 'Honeymoon phase, love bombing',
      details: 'A period of relative peace. Abuser is kind and attentive. Survivor feels hopeful change is possible.',
      color: '#1e9ab4'
    }
  ];

  const toggleStage = (id) => {
    setExpandedStage(expandedStage === id ? null : id);
  };

  const handleResponseChange = (stageId, text) => {
    const newResponses = { ...responses, [stageId]: text };
    setResponses(newResponses);
    onComplete(newResponses);
  };

  return (
    <div className="section2-container">
      <div className="section-header">
        <div className="section-header-accent"></div>
        <h1>Understanding the Cycle of Abuse</h1>
        <p className="section-subtitle">
          Every abusive relationship follows a repeating pattern. Understanding this cycle helps you recognize warning signs and respond compassionately.
        </p>
      </div>

      <div className="cycle-stages">
        {stages.map(stage => (
          <div
            key={stage.id}
            className={`cycle-card ${expandedStage === stage.id ? 'expanded' : ''}`}
            style={{ '--stage-color': stage.color }}
          >
            <button
              className="cycle-header"
              onClick={() => toggleStage(stage.id)}
            >
              <div className="cycle-number">{stage.number}</div>
              <div className="cycle-text">
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
              <ChevronDown
                size={24}
                className={`expand-icon ${expandedStage === stage.id ? 'rotated' : ''}`}
              />
            </button>

            {expandedStage === stage.id && (
              <div className="cycle-expanded">
                <div className="expanded-content">
                  <div className="stage-details">
                    <h4>What Happens</h4>
                    <p>{stage.details}</p>
                  </div>

                  <div className="reflection-section">
                    <label htmlFor={`reflection-${stage.id}`}>
                      Where do you see this stage in your work?
                    </label>
                    <textarea
                      id={`reflection-${stage.id}`}
                      className="reflection-input"
                      placeholder="Share your observations or experiences..."
                      value={responses[stage.id] || ''}
                      onChange={(e) => handleResponseChange(stage.id, e.target.value)}
                    />
                    <p className="input-hint">
                      This is for your reflection only. Save often as you work.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="section-callout">
        <h4>Key Understanding</h4>
        <p>
          The cycle repeats faster over time. What matters most: each cycle is designed to keep
          the survivor invested in the relationship and unable to plan escape. This isn't love.
        </p>
      </div>

      <div className="section-navigation">
        <button className="nav-button primary" onClick={() => setExpandedStage(null)}>
          Next Section →
        </button>
      </div>
    </div>
  );
}

export default Section2CycleOfAbuse;
