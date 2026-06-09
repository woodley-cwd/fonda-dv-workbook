import React, { useState } from 'react';
import '../../styles/sections/Section3.css';

function Section3Scenarios({ userRole, data, onComplete }) {
  const [responses, setResponses] = useState(data || {});
  const [feedbackShown, setFeedbackShown] = useState({});

  const scenarios = {
    healthcare: {
      title: 'Scenario 1: Emergency Department',
      situation:
        'A 28-year-old woman arrives at the ED alone at 11 PM on a Friday. Chief complaint: "I fell down the stairs yesterday." Upon examination: bruises on her right arm (defensive wounds), a ligature mark on her neck, bruising on her torso (hand prints), and a healing black eye from "2 weeks ago from another fall." Her partner is in the waiting room.',
      questions: [
        {
          id: 'q1',
          question: 'What\'s your first clinical instinct?',
          options: [
            {
              text: 'Call security—potential crime scene',
              correct: false,
              feedback: 'This escalates too quickly without understanding her safety needs first.'
            },
            {
              text: 'Screen for DV using a validated tool (HARK) in private, away from her partner',
              correct: true,
              feedback:
                'Correct. Isolating her from her partner and using a structured screening tool gives her permission to disclose safely. HARK (Humiliation, Afraid, Raped, Kick) is quick and normalizes asking.'
            },
            {
              text: 'Ask her partner about what happened',
              correct: false,
              feedback: 'This compromises her safety and prevents honest disclosure. Never interview them together in DV situations.'
            },
            {
              text: 'Document as "fall" and discharge',
              correct: false,
              feedback: 'You\'ve seen multiple "accidental" injuries. Your documentation matters legally and clinically.'
            }
          ]
        },
        {
          id: 'q2',
          question: 'She discloses abuse but says she\'ll be "fine" and wants to leave. What now?',
          options: [
            {
              text: 'Tell her she MUST leave for her safety',
              correct: false,
              feedback:
                'This undermines her agency. She knows her risk best. Coercion can backfire and put her at higher risk.'
            },
            {
              text: 'Provide written resources, validate, ask about safety, and document her choice',
              correct: true,
              feedback:
                'Correct. Your job is to believe, resource, and document. Don\'t coerce. She may not be ready.'
            },
            {
              text: 'Refer her to therapy',
              correct: false,
              feedback: 'Therapy is important, but immediate safety planning comes first.'
            },
            {
              text: 'Keep her in the hospital overnight',
              correct: false,
              feedback: 'This can escalate risk if abuser finds out. Work with her on safety planning.'
            }
          ]
        }
      ],
      reflection:
        'What would you actually say to her in this moment—when she\'s scared, wants to leave the ED, and her partner is waiting?'
    },
    law_enforcement: {
      title: 'Scenario 2: Domestic Disturbance Call',
      situation:
        'Police dispatched to a residential address for "domestic disturbance." You arrive to find: a 35-year-old woman with a swollen, bruised face and a bleeding lip. Her 42-year-old partner is in the kitchen, calm, collected. They have a 7-year-old child in the living room who saw everything. The partner claims: "She was being hysterical. I had to restrain her to keep her from hitting me." The woman is withdrawn, doesn\'t want to press charges.',
      questions: [
        {
          id: 'q1',
          question: 'What\'s your first priority?',
          options: [
            {
              text: 'Listen to the man\'s version of events first',
              correct: false,
              feedback: 'Separate immediately. Don\'t prioritize one side before ensuring safety.'
            },
            {
              text: 'Separate them, ensure immediate safety, interview each party alone',
              correct: true,
              feedback:
                'Correct. Separate immediately. Interview each party privately. Safety first.'
            },
            {
              text: 'Tell them to "work it out"',
              correct: false,
              feedback: 'This minimizes abuse and puts the victim at greater risk.'
            },
            {
              text: 'Arrest the woman since she "started it"',
              correct: false,
              feedback:
                'Arrest the person with visible injuries and control patterns, not defensive resistance.'
            }
          ]
        },
        {
          id: 'q2',
          question: 'The woman won\'t press charges and says it\'s her fault. Why?',
          options: [
            {
              text: 'She\'s exaggerating the situation',
              correct: false,
              feedback: 'Her unwillingness is actually a safety indicator, not a sign of exaggeration.'
            },
            {
              text: 'She\'s being "dramatic"',
              correct: false,
              feedback: 'This dismisses her very real fear and the danger of retaliation.'
            },
            {
              text: 'She\'s in immediate danger and terrified of retaliation',
              correct: true,
              feedback:
                'Yes. She knows her risk. Trauma responses often look like she\'s defending him. She may face escalated violence for reporting.'
            },
            {
              text: 'She doesn\'t understand the legal process',
              correct: false,
              feedback:
                'While education helps, her reluctance is primarily about fear and survival instinct.'
            }
          ]
        }
      ],
      reflection: 'You\'re writing the report. What gets documented to ensure this case can be prosecuted later?'
    },
    social_worker: {
      title: 'Scenario 3: Child Welfare Investigation',
      situation:
        'A teacher reports a 6-year-old student who drew a picture of "Mommy and Daddy fighting" and said "Daddy hit Mommy and they yell really loud." You go to the home for an unannounced visit. You find: a 32-year-old mother, overwhelmed, looks exhausted; a 36-year-old father, charming, minimizes everything; the 6-year-old is withdrawn, clings to mom; Mom minimizes: "We argue sometimes, that\'s normal. He\'s a good dad, really." Dad contradicts her: "We barely fight. She\'s exaggerating."',
      questions: [
        {
          id: 'q1',
          question: 'What\'s your assessment?',
          options: [
            {
              text: 'Believe the father—he seems calm',
              correct: false,
              feedback: 'Abusers are often charming in formal settings. The child\'s drawings and behavior are real indicators.'
            },
            {
              text: 'The child witnessed conflict, mother has old bruises, she\'s minimizing = red flags',
              correct: true,
              feedback:
                'Correct. Children witnessing DV is emotional abuse and a safety concern. Her minimizing + bruises = indicators. This child needs protection.'
            },
            {
              text: 'This is just a parental relationship issue',
              correct: false,
              feedback: 'Child exposure to DV is a child welfare issue, not just a couple\'s problem.'
            },
            {
              text: 'Document as "no indicators"',
              correct: false,
              feedback: 'Multiple indicators are present. Documentation matters for this child\'s safety.'
            }
          ]
        },
        {
          id: 'q2',
          question: 'The father controls the conversation. What\'s your next move?',
          options: [
            {
              text: 'Interview them together',
              correct: false,
              feedback: 'She can\'t speak freely with him present. This is when abusers control narratives most.'
            },
            {
              text: 'Schedule private, individual interviews—alone—with each parent',
              correct: true,
              feedback:
                'Correct. Interview separately to maintain safety and get honest information. Never together in DV cases.'
            },
            {
              text: 'Accept his version since he\'s calm',
              correct: false,
              feedback: 'Calm demeanor is often how abusers operate. Don\'t mistake charm for honesty.'
            },
            {
              text: 'Tell them you\'ll be back when he\'s not home',
              correct: false,
              feedback:
                'Telegraphing your intent gives him time to coach her story and escalate control.'
            }
          ]
        }
      ],
      reflection:
        'She\'s terrified but won\'t name abuse. What\'s your first conversation with her, and what resources do you prioritize?'
    },
    faith_leader: {
      title: 'Scenario 4: Pastoral Counseling',
      situation:
        'A 38-year-old parishioner you\'ve known for 10 years comes to you in tears. She says: "My marriage is struggling. My husband and I argue a lot. I\'m trying to be a better wife, but I can\'t seem to do anything right. I pray about it constantly, and I\'m worried I\'m failing God." She mentions her husband "manages her" and "doesn\'t like her talking to people." She\'s isolated from church friends lately. She\'s full of shame. When you ask about "arguments," she gets vague.',
      questions: [
        {
          id: 'q1',
          question: 'What\'s your first pastoral instinct?',
          options: [
            {
              text: 'Tell her to pray harder and submit to her husband',
              correct: false,
              feedback:
                'This reinforces abuse theology. God does not call people to suffer harm.'
            },
            {
              text: 'Refer her to marriage counseling to "fix the relationship"',
              correct: false,
              feedback:
                'DV is NOT a relationship problem to solve together. Couples counseling is dangerous in abuse situations.'
            },
            {
              text: 'Ask directly about safety; if abuse is present, refer to professionals',
              correct: true,
              feedback:
                'Correct. Ask directly. If abuse exists, it\'s a safety and power issue, not a couples issue. Your role is pastoral support + professional referral.'
            },
            {
              text: 'Suggest she needs more faith',
              correct: false,
              feedback: 'Faith is important, but abuse is a social/legal issue requiring professional intervention.'
            }
          ]
        },
        {
          id: 'q2',
          question: 'She says "God hates divorce." How do you respond?',
          options: [
            {
              text: 'Affirm that biblical submission is her calling',
              correct: false,
              feedback: 'This uses scripture to justify abuse. God does not want her harmed.'
            },
            {
              text: 'Tell her that abuse is not what God intends; her safety is spiritual too',
              correct: true,
              feedback:
                'Correct. Reframe: God doesn\'t want her harmed. Her safety IS spiritual. Separation ≠ divorce.'
            },
            {
              text: 'Avoid the theology—don\'t take sides',
              correct: false,
              feedback:
                'This is a moment to affirm her faith AND her safety. Neutrality enables abuse.'
            },
            {
              text: 'Tell her to forgive and reconcile',
              correct: false,
              feedback: 'Forgiveness doesn\'t require continued exposure to harm.'
            }
          ]
        }
      ],
      reflection:
        'She\'s crying, ashamed, terrified. What do you actually say that honors her faith AND empowers her to prioritize safety?'
    }
  };

  const scenario = scenarios[userRole] || scenarios.healthcare;

  const handleOptionSelect = (questionId, option, isCorrect) => {
    const newResponses = {
      ...responses,
      [questionId]: {
        selected: option,
        correct: isCorrect,
        timestamp: new Date().toISOString()
      }
    };
    setResponses(newResponses);
    setFeedbackShown({ ...feedbackShown, [questionId]: true });
    onComplete(newResponses);
  };

  return (
    <div className="section3-container">
      <div className="section-header">
        <div className="section-header-accent"></div>
        <h1>{scenario.title}</h1>
        <p className="scenario-subtitle">Real-world situations you\'ll actually face. Non-sugar-coated.</p>
      </div>

      <div className="scenario-card">
        <div className="scenario-situation">
          <h3>The Situation</h3>
          <p>{scenario.situation}</p>
        </div>

        <div className="questions-section">
          {scenario.questions.map(question => (
            <div key={question.id} className="question-block">
              <h4 className="question-text">{question.question}</h4>

              <div className="options-grid">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    className={`option-button ${
                      responses[question.id]?.selected === option.text ? 'selected' : ''
                    } ${option.correct ? 'correct' : 'incorrect'}`}
                    onClick={() => handleOptionSelect(question.id, option.text, option.correct)}
                  >
                    <span className="option-letter">
                      {String.fromCharCode(65 + idx)}.
                    </span>
                    <span>{option.text}</span>
                  </button>
                ))}
              </div>

              {feedbackShown[question.id] && responses[question.id] && (
                <div
                  className={`feedback ${responses[question.id].correct ? 'correct' : 'incorrect'}`}
                >
                  <p>{question.options.find(o => o.text === responses[question.id].selected)?.feedback}</p>
                </div>
              )}
            </div>
          ))}

          <div className="reflection-section">
            <label htmlFor="scenario-reflection">
              <strong>Reflection:</strong> {scenario.reflection}
            </label>
            <textarea
              id="scenario-reflection"
              className="reflection-input"
              placeholder="Your response..."
              value={responses.reflection || ''}
              onChange={(e) => {
                const newResponses = { ...responses, reflection: e.target.value };
                setResponses(newResponses);
                onComplete(newResponses);
              }}
            />
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

export default Section3Scenarios;
