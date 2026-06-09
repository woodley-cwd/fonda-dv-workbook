import React, { useState } from 'react';
import '../styles/ActionPlanSection.css';

const ActionPlanSection = ({ role, workbookData, onUpdateData, onNext }) => {
  const [actionPlan, setActionPlan] = useState(workbookData?.actionPlan || {
    commitment: '',
    barrier1: '',
    solution1: '',
    barrier2: '',
    solution2: '',
    firstStep: '',
    support: '',
    timeline: ''
  });

  const roleFocuses = {
    'Healthcare Provider': {
      focus: 'How will you screen for DV in your clinical practice?',
      commitment: 'What is your commitment to supporting DV survivors in your care?',
      barriers: 'What barriers exist in your workplace?',
      solutions: 'How will you overcome these barriers?'
    },
    'Law Enforcement': {
      focus: 'How will you respond differently to DV calls?',
      commitment: 'What is your commitment to evidence-based investigation?',
      barriers: 'What challenges do you anticipate?',
      solutions: 'How will you address victim reluctance to cooperate?'
    },
    'Social Worker': {
      focus: 'How will you support survivors without forcing timelines?',
      commitment: 'What is your commitment to trauma-informed case work?',
      barriers: 'What system barriers will you face?',
      solutions: 'How will you navigate these barriers for your clients?'
    },
    'Faith Leader': {
      focus: 'How will you address DV in your faith community?',
      commitment: 'What is your commitment to survivor safety over "family unity"?',
      barriers: 'What theological or community barriers exist?',
      solutions: 'How will you reframe theology and policy?'
    }
  };

  const content = roleFocuses[role] || roleFocuses['Healthcare Provider'];

  const handleInputChange = (field, value) => {
    setActionPlan(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSaveAndContinue = () => {
    onUpdateData({
      actionPlan: actionPlan
    });
    onNext();
  };

  const isComplete = actionPlan.commitment && actionPlan.firstStep;

  return (
    <div className="action-plan-section">
      <div className="action-plan-header">
        <h1>Your Personal Action Plan</h1>
        <p className="action-subtitle">
          What will you commit to as a result of this workbook?
        </p>
      </div>

      <div className="action-plan-form">
        <section className="plan-section">
          <h2>1. Your Commitment</h2>
          <p className="section-prompt">{content.commitment}</p>
          <textarea
            className="input-field"
            placeholder="Example: 'I will screen every patient using the HARK tool and have DV resources available in private areas of my clinic.'"
            value={actionPlan.commitment}
            onChange={(e) => handleInputChange('commitment', e.target.value)}
            rows="4"
          />
        </section>

        <section className="plan-section">
          <h2>2. Barriers & Solutions</h2>

          <div className="barrier-group">
            <h3>First Barrier</h3>
            <p className="section-prompt">{content.barriers}</p>
            <textarea
              className="input-field"
              placeholder="What is one barrier you anticipate? (e.g., 'Time constraints in my practice')"
              value={actionPlan.barrier1}
              onChange={(e) => handleInputChange('barrier1', e.target.value)}
              rows="3"
            />
            <h3>How You'll Overcome It</h3>
            <textarea
              className="input-field"
              placeholder="What is your plan? (e.g., 'I will develop a 1-minute screening script I can use with every patient')"
              value={actionPlan.solution1}
              onChange={(e) => handleInputChange('solution1', e.target.value)}
              rows="3"
            />
          </div>

          <div className="barrier-group">
            <h3>Second Barrier (optional)</h3>
            <textarea
              className="input-field"
              placeholder="Another barrier you anticipate"
              value={actionPlan.barrier2}
              onChange={(e) => handleInputChange('barrier2', e.target.value)}
              rows="3"
            />
            <h3>How You'll Overcome It</h3>
            <textarea
              className="input-field"
              placeholder="Your plan"
              value={actionPlan.solution2}
              onChange={(e) => handleInputChange('solution2', e.target.value)}
              rows="3"
            />
          </div>
        </section>

        <section className="plan-section">
          <h2>3. Your First Step</h2>
          <p className="section-prompt">
            What is the ONE specific action you will take in the next 2 weeks?
          </p>
          <textarea
            className="input-field"
            placeholder="Be specific: 'I will print the HARK screening tool and post it in all private patient areas by [date]'"
            value={actionPlan.firstStep}
            onChange={(e) => handleInputChange('firstStep', e.target.value)}
            rows="3"
          />
        </section>

        <section className="plan-section">
          <h2>4. Support You Need</h2>
          <p className="section-prompt">
            What support, training, or resources do you need to make this happen?
          </p>
          <textarea
            className="input-field"
            placeholder="e.g., 'I need my manager\'s buy-in,' 'I need DV-specific training,' 'I need local resource information'"
            value={actionPlan.support}
            onChange={(e) => handleInputChange('support', e.target.value)}
            rows="3"
          />
        </section>

        <section className="plan-section">
          <h2>5. Timeline</h2>
          <p className="section-prompt">
            When will you begin? What is your realistic timeline?
          </p>
          <textarea
            className="input-field"
            placeholder="e.g., 'Start screening next Monday. Establish full implementation within 30 days.'"
            value={actionPlan.timeline}
            onChange={(e) => handleInputChange('timeline', e.target.value)}
            rows="3"
          />
        </section>

        <section className="closing-message">
          <h3>You have the power to make a difference</h3>
          <p>
            Survivors of domestic violence need professionals who understand trauma, who believe them,
            and who provide compassionate, evidence-based care. Your commitment matters. Every interaction,
            every resource provided, every time you believe someone—it changes their trajectory.
          </p>
          <p>
            You are not responsible for fixing the abuse. But you are responsible for recognizing it,
            documenting it, and connecting survivors to help. Thank you for the work you do.
          </p>
        </section>
      </div>

      <div className="action-plan-navigation">
        <button
          className="action-plan-btn complete"
          onClick={handleSaveAndContinue}
          disabled={!isComplete}
        >
          Complete & Download Workbook →
        </button>
        {!isComplete && (
          <p className="requirement-message">
            Please complete your commitment and first step to continue.
          </p>
        )}
      </div>
    </div>
  );
};

export default ActionPlanSection;
