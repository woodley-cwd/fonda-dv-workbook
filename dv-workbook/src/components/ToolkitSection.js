import React, { useState } from 'react';
import '../styles/ToolkitSection.css';

const ToolkitSection = ({ role, workbookData, onUpdateData, onNext }) => {
  const [activeTab, setActiveTab] = useState('scripts');
  const [notesTab, setNotesTab] = useState('');

  const toolkitContent = {
    'Healthcare Provider': {
      scripts: [
        {
          title: 'Opening Screening Question',
          content: '"I ask all my patients about safety at home because it\'s such an important part of health. In the last year, has your partner or ex-partner ever pushed you, hit you, or threatened to hurt you?"'
        },
        {
          title: 'If Patient Discloses',
          content: '"I\'m so glad you told me. This is not your fault. I\'m concerned about your safety, and my job is to help. Let me explain what happens next and what resources are available to you."'
        },
        {
          title: 'When Abuser is Present',
          content: '"I need to ask you some private health questions, so I\'ll need to see you alone for a moment. [To partner] I see patients individually to ensure privacy. This will just take a few minutes."'
        }
      ],
      templates: [
        {
          title: 'Screening Tool: HARK',
          content: `H: Has a partner ever Humiliated you, made you feel bad about yourself, or put you down?
A: Has a partner ever Afraid you or intimidated you?
R: Have you ever been in a Relationship where a partner pushed, hit, slapped, or kicked you?
K: Have you ever been in a relationship where a partner forced you into sexual activity?

Score: Each "yes" = 1 point. Score of 1+ indicates positive screen for abuse.
Next step: Provide resources, document findings, assess safety.`
        },
        {
          title: 'Documentation Template',
          content: `Patient presents with [specific injuries]: [exact location and description].
Injury pattern: [does/does not match reported mechanism].
Patient stated: "[exact quote from patient about cause]"
Bruising stages: [fresh, healing, etc.]
Patient reports: [summary of disclosed abuse in quotes if possible]
Safety assessment: [immediate danger assessment]
Resources provided: [what was given/discussed]
Follow-up: [next steps/referrals made]`
        }
      ],
      tools: [
        {
          title: 'Trauma-Informed Care Checklist',
          items: [
            'Screen in private, away from partner',
            'Use validated screening tool',
            'Believe what she says',
            'Do not judge her choices',
            'Document in detail',
            'Provide written resources',
            'Ask about safety for children',
            'Document your concerns even if she declines help',
            'Know your state\'s mandatory reporting laws',
            'Have DV hotline and local resources memorized/posted'
          ]
        }
      ]
    },
    'Law Enforcement': {
      scripts: [
        {
          title: 'Arriving at Scene - Safety First',
          content: '"I\'m here to help keep everyone safe. Let me separate you both so I can speak with each of you privately and understand what happened."'
        },
        {
          title: 'Interviewing the Victim Alone',
          content: '"What happened? Take your time and tell me in your own words. I want to understand the full picture. Can you show me where you were injured? Has this happened before?"'
        },
        {
          title: 'When Victim Won\'t Cooperate',
          content: '"I understand you\'re frightened, and that\'s normal. I want you to know that based on what I\'m seeing, I\'m concerned for your safety. Here are resources that can help keep you safe, whether or not you\'re ready to press charges right now."'
        }
      ],
      templates: [
        {
          title: 'Scene Documentation',
          content: `Date/Time: [exact]
Parties: [names, relationship, ages]
Injuries observed: [exact description, location, photos taken Y/N]
Statements: [exact quotes from each party]
Timeline: [when did the incident occur vs. when police arrived]
Witness information: [child present? others?]
Evidence collected: [weapons, broken items, etc.]
Victim\'s willingness to press charges: Y/N and reason stated
Primary aggressor determination: [evidence-based]
Arrest decision: [based on evidence, not victim cooperation]
Resources provided: [hotline, shelter, DV advocate info]`
        },
        {
          title: 'Evidence Collection Priority',
          content: `HIGH PRIORITY:
• Photographs of all injuries (close-up + context)
• Weapon/hazardous items present
• Property damage
• Injuries inconsistent with victim\'s explanation

MEDIUM PRIORITY:
• Names/phone of witnesses
• Abuser\'s past DV history
• Children present
• Victim\'s statement

DOCUMENT:
• Victim\'s demeanor and speech pattern
• Whether victim was minimizing/defending abuser
• Any threats made
• Whether victim was isolated from leaving`
        }
      ],
      tools: [
        {
          title: 'Evidence-Based Decision Making',
          items: [
            'Assess visible injury patterns (objective)',
            'Interview both parties separately',
            'Do NOT base arrest decision on victim cooperation',
            'Document injury-to-explanation consistency',
            'Note behavior patterns (calmness ≠ innocence)',
            'Consider history of repeated calls',
            'Photograph ALL injuries',
            'Preserve scene evidence',
            'Know your jurisdiction\'s DV arrest policy',
            'Provide victim with DV hotline and resources'
          ]
        }
      ]
    },
    'Social Worker': {
      scripts: [
        {
          title: 'Initial Disclosure Interview',
          content: '"Thank you for trusting me with this. I believe you, and I want you to know this is not your fault. My role is to help you understand your options and access resources. You\'re in control of the decisions. There\'s no timeline."'
        },
        {
          title: 'Safety Planning Conversation',
          content: '"Let\'s create a safety plan together. This is not about forcing you to leave, but about preparing for your safety. What would you need if you decided to leave? Where would you go? What documents do you need? Let\'s problem-solve together."'
        },
        {
          title: 'About Benefits and Resources',
          content: '"You may be eligible for benefits like housing assistance, childcare subsidies, healthcare, and legal aid. These are resources available to help you while you figure out your next steps. Let\'s look at what\'s available to you."'
        }
      ],
      templates: [
        {
          title: 'Safety Plan Template',
          content: `IMMEDIATE SAFETY (What I\'ll do if danger is imminent):
• Safe place to go: [address/phone]
• Emergency contact: [name/phone]
• Code word to signal children to leave: [word]
• Money/documents hidden at: [location]
• Domestic violence hotline: [number]

BELONGINGS TO KEEP TOGETHER:
☐ Birth certificates
☐ Social Security cards
☐ Driver\'s license/ID
☐ Insurance documents
☐ Bank statements
☐ Lease/deed
☐ Child medical records
☐ Photos of abuse
☐ Journal of incidents
☐ Prescription information

HELP I CAN ACCESS:
• Local shelter: [contact info]
• DV hotline: [contact info]
• Legal aid: [contact info]
• Counseling: [contact info]
• Support groups: [when/where]

PEOPLE I TRUST WHO KNOW MY SITUATION:
• [Name/phone] - knows about DV
• [Name/phone] - can provide shelter
• [Name/phone] - can watch children`
        },
        {
          title: 'Risk Assessment Factors',
          content: `HIGH RISK INDICATORS (assess immediately):
• Threats to kill or hurt children/pets
• Access to weapons
• Abuser has injured victim before
• Abuser uses substances heavily
• Victim is trying to leave/separate
• Strangulation incidents (700% risk increase)
• Sexual violence
• Abuser has DV history with other partners

SAFETY PLANNING SHOULD PRIORITIZE:
→ Emergency shelter information
→ Legal protection options (restraining order)
→ Safety with children
→ Employment security
→ Financial resources`
        }
      ],
      tools: [
        {
          title: 'Long-Term Support Checklist',
          items: [
            'Assess safety every contact',
            'Work at survivor\'s pace - do not push',
            'Know all local resources (housing, benefits, legal aid, childcare)',
            'Connect to DV advocates for ongoing support',
            'Help access benefits she may qualify for',
            'Provide referrals to counseling (trauma-informed)',
            'Understand child trauma from witnessing abuse',
            'Do NOT recommend couples therapy',
            'Document all interactions/disclosures',
            'Follow up regularly - relationship changes over time'
          ]
        }
      ]
    },
    'Faith Leader': {
      scripts: [
        {
          title: 'Creating Safe Space to Disclose',
          content: '"I\'m concerned about what you\'ve shared with me. I want you to know that this faith community is a place where you are safe and valued. God does not want you harmed. Let me connect you with people who can help."'
        },
        {
          title: 'Reframing Theology',
          content: '"I understand your concern about divorce, but the Bible also teaches that God values your safety and dignity. Submission is mutual and loving, not a call to tolerate harm. God does not demand suffering. Let me show you..."'
        },
        {
          title: 'When Abuser Is in Your Community',
          content: '"I care about your safety and the safety of our community. Abusive behavior is a sin that needs to be addressed. I\'m going to provide resources and support to you, and I will also address his behavior directly and clearly."'
        }
      ],
      templates: [
        {
          title: 'Pastoral Care Conversation Guide',
          content: `LISTEN (without interrupting):
• Let her tell her story
• Validate her experience ("That sounds terrifying")
• Don\'t minimize ("At least he...")

BELIEVE:
• "I believe you"
• "This is not your fault"
• "You did nothing to deserve this"

PROVIDE INFORMATION:
• "Abuse is never God\'s will for your life"
• "God values your safety and wholeness"
• "I want to connect you with professionals who can help"

NEXT STEPS:
• Provide DV hotline and local resources
• Offer continued pastoral support
• Connect with professional DV advocates
• Do NOT recommend couples therapy yet
• DO create an ongoing care plan with her`
        },
        {
          title: 'Scriptural Resources for Survivors',
          content: `AFFIRM WORTH AND DIGNITY:
• Psalm 139:14 - "I praise you because I am fearfully and wonderfully made"
• 1 John 3:1 - "See what great love the Father has lavished on us"

AFFIRM RIGHT TO SAFETY:
• Proverbs 22:3 - "The prudent see danger and take refuge"
• Psalm 27:10 - "Though my father and mother forsake me, the Lord will receive me"

AFFIRM LIMITS TO FORGIVENESS:
• Matthew 18:21-35 - Forgiveness has limits; reconciliation requires change
• Romans 12:19 - Judgment belongs to God, not the victim

FOR WHEN SHE'S STRUGGLING:
• Psalm 46:5 - "God is in the midst of her; she will not be moved"
• Matthew 11:28 - "Come to me, all you who are weary...and I will give you rest"`
        }
      ],
      tools: [
        {
          title: 'Faith Community DV Response',
          items: [
            'Develop a written DV policy for your community',
            'Train leaders and volunteers on recognizing abuse signs',
            'Create a safe space where abuse can be disclosed',
            'Provide DV resources in your facility (brochures, hotline)',
            'Do NOT hide abuse "for the family\'s sake"',
            'Hold abusers accountable regardless of status',
            'Support survivors without judgment',
            'Understand that leaving takes time and planning',
            'Know when to refer to professional DV advocates',
            'Reframe theology in abuse contexts'
          ]
        }
      ]
    }
  };

  const content = toolkitContent[role] || toolkitContent['Healthcare Provider'];
  const [personalNotes, setPersonalNotes] = useState(workbookData?.toolkitNotes?.[role] || '');

  const handleSaveNotes = () => {
    onUpdateData({
      toolkitNotes: {
        ...workbookData.toolkitNotes,
        [role]: personalNotes
      }
    });
  };

  return (
    <div className="toolkit-section">
      <div className="toolkit-header">
        <h1>Your Role-Specific Toolkit</h1>
        <p className="toolkit-subtitle">
          Ready-to-use scripts, templates, and tools for your professional role
        </p>
      </div>

      <div className="toolkit-tabs">
        <button
          className={`tab-btn ${activeTab === 'scripts' ? 'active' : ''}`}
          onClick={() => setActiveTab('scripts')}
        >
          Scripts & Phrases
        </button>
        <button
          className={`tab-btn ${activeTab === 'templates' ? 'active' : ''}`}
          onClick={() => setActiveTab('templates')}
        >
          Templates & Tools
        </button>
        <button
          className={`tab-btn ${activeTab === 'notes' ? 'active' : ''}`}
          onClick={() => setActiveTab('notes')}
        >
          My Notes
        </button>
      </div>

      <div className="toolkit-content">
        {activeTab === 'scripts' && (
          <div className="scripts-section">
            {content.scripts.map((script, idx) => (
              <div key={idx} className="script-card">
                <h3>{script.title}</h3>
                <div className="script-text">
                  <p>{script.content}</p>
                </div>
                <button className="copy-btn" onClick={() => navigator.clipboard.writeText(script.content)}>
                  📋 Copy
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'templates' && (
          <div className="templates-section">
            {content.templates.map((template, idx) => (
              <div key={idx} className="template-card">
                <h3>{template.title}</h3>
                <div className="template-content">
                  {template.content.split('\n').map((line, i) => (
                    <div key={i} className={line.startsWith('•') || line.startsWith('☐') ? 'bullet' : 'line'}>
                      {line}
                    </div>
                  ))}
                </div>
                <button className="copy-btn" onClick={() => navigator.clipboard.writeText(template.content)}>
                  📋 Copy
                </button>
              </div>
            ))}

            {content.tools.map((tool, idx) => (
              <div key={idx} className="tool-card">
                <h3>{tool.title}</h3>
                <div className="tool-checklist">
                  {tool.items.map((item, i) => (
                    <label key={i} className="checklist-item">
                      <input type="checkbox" />
                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'notes' && (
          <div className="notes-section">
            <h3>Personal Notes & Reminders</h3>
            <p className="notes-instruction">
              Write your own reminders, questions, or important information from this workbook
            </p>
            <textarea
              className="notes-input"
              placeholder="What do you want to remember from this workbook? What questions do you have? What will you commit to changing in your practice?"
              value={personalNotes}
              onChange={(e) => setPersonalNotes(e.target.value)}
              rows="10"
            />
            <button className="save-notes-btn" onClick={handleSaveNotes}>
              ✓ Save Notes
            </button>
          </div>
        )}
      </div>

      <div className="toolkit-navigation">
        <button className="toolkit-nav-btn next" onClick={onNext}>
          Continue to Action Plan →
        </button>
      </div>
    </div>
  );
};

export default ToolkitSection;
