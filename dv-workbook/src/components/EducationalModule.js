import React, { useState } from 'react';
import '../styles/EducationalModule.css';

const EducationalModule = ({ role, moduleType, onNext }) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});

  // Define getRoleContext FIRST, before using it
  const getRoleContext = (roleInput) => {
    const contexts = {
      'Healthcare Provider': {
        context: `Healthcare providers are often the FIRST professional to see a DV survivor. Many victims access healthcare more regularly than police or courts. Your role:

1. SCREENING: Brief, confidential screening for all patients in private
2. DOCUMENTATION: Detailed injury documentation becomes legal evidence
3. SAFETY: Assessing immediate danger and access to emergency resources
4. CONNECTION: Linking survivors to DV advocates and services
5. TRAUMA-INFORMED CARE: Understanding why survivors present the way they do

Your screening may be the only time a survivor gets asked if they're safe. Your documentation may be the only evidence that supports prosecution. Your belief in them validates their experience.`,
        barriers: `• Time pressure: DV screening takes time you may feel you don't have
• Uncertainty: Not knowing what to do or say if someone discloses
• Institutional pressure: Being told to "stay out of social issues"
• Fear of retaliation: Worry that intervention will anger the abuser
• Lack of training: Many healthcare providers receive little DV training
• Language barriers: Working with interpreters during sensitive disclosures`,
        power: `You have documented access to injury patterns. You can screen every patient. You can provide resources before discharge. You can document that injuries don't match the story. You can be the first person to name what's happening as abuse.`,
        quizQ1: {
          question: 'What is the primary role of documentation in DV cases?',
          options: [
            'A) To diagnose the abuser',
            'B) To document injuries in detail so evidence exists for legal proceedings',
            'C) To determine if the victim is telling the truth',
            'D) To determine custody outcomes'
          ],
          correct: 'B',
          explanation: 'Detailed documentation of injuries, exact quotes from the victim, and mechanism of injury becomes critical evidence in legal cases.'
        }
      },
      'Law Enforcement': {
        context: `Law enforcement response sets the tone for the entire intervention. Your response in the first minutes can determine whether a survivor reports again, whether evidence is preserved, and whether the case can be prosecuted. Your role:

1. SAFETY FIRST: Immediate danger assessment; securing weapons if present
2. SEPARATION: Interviewing each party separately to get truthful statements
3. INVESTIGATION: Understanding the pattern, not just the incident
4. EVIDENCE: Photos of injuries, scene, preserving statements
5. ARREST DECISIONS: Making decisions based on evidence, not victim reluctance
6. FOLLOW-UP: Ensuring connection to resources and victim protection`,
        barriers: `• Victim reluctance to press charges
• Abuser credibility: Abusers often present as calm, reasonable, intelligent
• Victim presentation: Survivors may appear calm, contradicted, or minimizing
• Jurisdiction issues: Victims may fear immigration consequences
• Limited training: Many officers lack specialized DV training
• Cultural misunderstandings: Different communities have different approaches to family conflict`,
        power: `You can separate parties and interview safely. You can document injuries and scenes. You can preserve evidence even if the victim doesn't want to press charges. You can recognize DV patterns that the victim can't yet see. Your belief in the victim, even when they're defending the abuser, provides validation that the situation is serious.`,
        quizQ1: {
          question: 'Why might a DV victim refuse to press charges against their abuser?',
          options: [
            'A) Because they are not really being abused',
            'B) Due to fear, economic dependence, love/loyalty, or trauma bonding',
            'C) Because they deserve the abuse',
            'D) Because police should handle everything'
          ],
          correct: 'B',
          explanation: 'Victims refuse charges for complex survival reasons, not because abuse didn\'t happen. Your role is to document evidence that can be used even without victim cooperation.'
        }
      },
      'Social Worker': {
        context: `Social workers conduct deep-dive assessments and provide long-term support. You understand systems, resources, and survival. Your role:

1. ASSESSMENT: Safety planning, risk assessment, trauma screening
2. CASE PLANNING: Creating realistic plans AT THE SURVIVOR'S PACE
3. RESOURCE CONNECTION: Benefits, housing, employment, childcare, legal aid
4. LONG-TERM SUPPORT: Walking alongside survivors through complex decisions
5. CHILD PROTECTION: Understanding how exposure affects children
6. COORDINATION: Connecting with healthcare, legal, and law enforcement systems`,
        barriers: `• Victim reluctance to engage: She may not be ready for services
• System barriers: Benefits eligibility, housing waitlists, childcare costs
• Custody concerns: Abuser threats about taking children
• Cultural factors: Distrust of government systems, family loyalty
• Competing priorities: Food/housing may matter more than DV advocacy
• Vicarious trauma: Absorbing the pain of survivors you work with`,
        power: `You understand the systems that can help. You can help survivors navigate benefits, housing, legal aid. You can work at her pace without judgment. You can be consistent when her life is chaotic. You can help her see options she can't see.`,
        quizQ1: {
          question: 'What is the most important thing to do when a survivor is not ready to leave?',
          options: [
            'A) Tell her she must leave immediately',
            'B) Provide resources, safety planning, and support at her pace',
            'C) Close the case until she is ready',
            'D) Contact her abuser to understand the situation better'
          ],
          correct: 'B',
          explanation: 'Meeting survivors where they are, respecting their timeline, and providing ongoing support increases safety better than pressure to leave.'
        }
      },
      'Faith Leader': {
        context: `Faith leaders hold unique power in communities. Survivors often turn to clergy first. Your role:

1. SANCTUARY: Offering spiritual permission to prioritize safety over "biblical submission"
2. EDUCATION: Teaching your community healthy relationships vs. abuse
3. SAFE ENVIRONMENT: Creating a community where DV is named and addressed
4. REFERRAL: Connecting survivors to professional advocates
5. SUPPORT: Offering spiritual care alongside professional help
6. ACCOUNTABILITY: Addressing abusers within faith community; not enabling`,
        barriers: `• Theology: Misuse of scriptures about submission and forgiveness
• Privacy: Desire to handle within faith community
• Shame: Both victim and faith leader may feel shame about discussing abuse
• Limits of role: Clergy are not counselors or DV advocates
• Abuser in community: Risk of protecting abuser to "preserve family"
• Victim reluctance: May not disclose to clergy due to shame or past bad responses`,
        power: `You can reframe theology to support safety. You can say "God does not want you harmed." You can provide spiritual permission to leave. You can create a faith community that addresses DV instead of hiding it.`,
        quizQ1: {
          question: 'What should a faith leader do if someone discloses abuse?',
          options: [
            'A) Recommend marriage counseling immediately',
            'B) Assess safety first, provide spiritual support, and refer to professional DV advocates',
            'C) Tell them to pray harder',
            'D) Speak to the spouse to get "his side"'
          ],
          correct: 'B',
          explanation: 'Marriage counseling in abuse situations can be dangerous. Professional DV advocates are needed first, with spiritual support alongside.'
        }
      }
    };
    return contexts[roleInput] || contexts['Healthcare Provider'];
  };

  // Educational content by module type
  const educationalContent = {
    'what-is-dv': {
      title: 'What is Domestic Violence?',
      subtitle: 'Understanding the full picture',
      sections: [
        {
          title: 'Definition & Scope',
          content: `Domestic violence is a pattern of abusive behavior in any relationship that is used by one partner to gain or maintain control over another intimate partner. It is NOT just physical assault—it includes emotional, psychological, sexual, financial, and social abuse.

Key statistics:
• 1 in 4 women experience severe intimate partner violence in their lifetime
• 1 in 7 men experience severe intimate partner violence
• Nearly 20 people per minute are physically abused by an intimate partner
• 1 in 4 women experience severe intimate partner violence, leading to injury, psychological impact, or contraction of sexually transmitted infections
• Most intimate partner violence is never reported to police`,
          expanded: true
        },
        {
          title: 'Types of Abuse',
          content: `PHYSICAL ABUSE: Hitting, pushing, choking, weapon use, sleep deprivation, substance forcing

EMOTIONAL/PSYCHOLOGICAL: Name-calling, humiliation, isolation, intimidation, threats, controlling behavior, gaslighting, trauma-focused control

SEXUAL ABUSE: Forced sex, coercion, withholding intimacy as punishment, sexual degradation, reproductive control

FINANCIAL ABUSE: Controlling income, preventing employment, running up debt in victim's name, denying access to family resources, sabotaging education

SOCIAL ABUSE: Isolation from family/friends, limiting communication, controlling social interactions, monitoring movements, public humiliation`,
          expanded: false
        },
        {
          title: 'Myths vs. Reality',
          content: `MYTH: "She could just leave."
REALITY: Leaving is statistically the most dangerous time. Abusers often escalate violence when losing control. Survivors face financial barriers, custody concerns, immigration status issues, housing insecurity, and trauma bonding.

MYTH: "It's just a bad relationship argument."
REALITY: DV is about power and control, not conflict. In healthy disagreements, both partners are heard. In abuse, one person systematically dominates the other.

MYTH: "Only certain types of people experience abuse."
REALITY: DV crosses all socioeconomic, educational, racial, religious, and professional lines. It affects doctors, lawyers, teachers, and clergy just as much as anyone else.

MYTH: "If abuse was really happening, they would tell someone."
REALITY: Victims often hide abuse due to shame, fear of judgment, isolation, fear of custody loss, or not recognizing the pattern as abuse.`,
          expanded: false
        }
      ],
      quiz: {
        q1: {
          question: 'Which of the following is a form of domestic violence?',
          options: [
            'A) Only physical hitting',
            'B) Physical, emotional, sexual, financial, and social abuse',
            'C) Only emotional abuse',
            'D) Arguments about finances'
          ],
          correct: 'B',
          explanation: 'Domestic violence encompasses multiple forms of control and abuse beyond physical contact.'
        },
        q2: {
          question: 'What is the most dangerous time in an abusive relationship?',
          options: [
            'A) During an argument',
            'B) When the abuser is intoxicated',
            'C) When the survivor is trying to leave',
            'D) At random times'
          ],
          correct: 'C',
          explanation: 'Research consistently shows that survivors are at highest risk of being killed or severely injured when leaving or during separation. This is when abusers lose control and may escalate.'
        }
      }
    },

    'trauma-response': {
      title: 'Understanding Trauma Response',
      subtitle: 'How abuse affects survivors\' behavior',
      sections: [
        {
          title: 'The Neurobiology of Trauma',
          content: `When a person experiences repeated abuse, their brain changes in predictable ways:

AMYGDALA (Fear Center): Becomes hyperactive, making survivors quick to perceive threat even in safe situations.

PREFRONTAL CORTEX (Rational Center): Function decreases, making it harder to think logically or plan during stress.

HIPPOCAMPUS (Memory Center): May show reduced function, causing fragmented or incomplete trauma memories.

This means survivors may:
- Startle easily at loud noises
- Have difficulty with decision-making
- Experience intrusive memories (flashbacks)
- Struggle to distinguish past threats from current safety`,
          expanded: true
        },
        {
          title: 'Trauma Responses Professionals Misinterpret',
          content: `FREEZE/DISSOCIATION: Many survivors "freeze" during abuse rather than fight or flee. This is a biological survival response, NOT consent. Professionals often misread this as "not fighting back" or "not being scared."

INCONSISTENT STORIES: Trauma memories are fragmented and may change each time they're told. This doesn't mean the person is lying—it's how trauma memory works. Don't use this against them.

APPEARING CALM: Survivors may seem unnaturally calm when discussing abuse because they've had to suppress emotions to survive. This doesn't mean abuse didn't happen.

MINIMIZING/DEFENDING THE ABUSER: Survivors often minimize abuse or defend their abuser due to trauma bonding, intermittent reinforcement (the cycle), or fear of retaliation. This is survival, not honest assessment.

STAYING: Survivors remain in abusive relationships for complex reasons involving survival calculus, not lack of intelligence or agency.`,
          expanded: false
        },
        {
          title: 'Complex PTSD in Domestic Violence Survivors',
          content: `Unlike single-incident PTSD, survivors of prolonged abuse often develop Complex PTSD (C-PTSD), which includes:

EMOTIONAL DYSREGULATION: Difficulty managing emotions; may escalate quickly or seem "out of proportion"

NEGATIVE SELF-PERCEPTION: Deep shame, self-blame ("I deserved this"), loss of identity

RELATIONSHIP DIFFICULTIES: Struggle to trust, hypervigilance with new partners, difficulty recognizing healthy relationships

ALTERED WORLDVIEW: Belief that the world is unsafe, that they are undeserving of help, or that nothing can change

SOMATIC COMPLAINTS: Chronic pain, illness, fatigue without clear medical cause—the body holds trauma

What this means for professionals: Patience, consistency, and validation are more important than "fixing" the person quickly.`,
          expanded: false
        }
      ],
      quiz: {
        q1: {
          question: 'Why might a trauma survivor\'s story change slightly each time they tell it?',
          options: [
            'A) They are making it up',
            'B) Trauma memories are fragmented and may be reorganized differently each telling',
            'C) They are deliberately lying',
            'D) They don\'t actually remember what happened'
          ],
          correct: 'B',
          explanation: 'Traumatic memories are stored differently than normal memories and may not integrate into a cohesive narrative right away. This is neurobiology, not dishonesty.'
        },
        q2: {
          question: 'What does "freeze" response mean in trauma?',
          options: [
            'A) The person is not scared',
            'B) The person consents to what is happening',
            'C) A biological survival response where the body becomes immobilized',
            'D) The person can easily escape if they want'
          ],
          correct: 'C',
          explanation: 'Freeze is a survival mechanism as valid as fight or flight. It does not indicate consent or lack of fear.'
        }
      }
    },

    'role-context': {
      title: `Your Role in Domestic Violence Response`,
      subtitle: `How ${role} professionals make a difference`,
      sections: [
        {
          title: `Why ${role} Matters in DV Response`,
          content: getRoleContext(role).context,
          expanded: true
        },
        {
          title: 'Common Barriers You\'ll Face',
          content: getRoleContext(role).barriers,
          expanded: false
        },
        {
          title: 'Your Power to Help',
          content: getRoleContext(role).power,
          expanded: false
        }
      ],
      quiz: {
        q1: {
          question: getRoleContext(role).quizQ1.question,
          options: getRoleContext(role).quizQ1.options,
          correct: getRoleContext(role).quizQ1.correct,
          explanation: getRoleContext(role).quizQ1.explanation
        }
      }
    }
  };

  const content = educationalContent[moduleType];
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const handleQuizAnswer = (questionKey, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionKey]: answer
    }));
  };

  const allQuestionsAnswered = Object.keys(content.quiz || {}).every(q => selectedAnswers[q]);

  return (
    <div className="educational-module">
      <div className="module-header">
        <div className="header-accent"></div>
        <h1>{content.title}</h1>
        <p className="module-subtitle">{content.subtitle}</p>
      </div>

      <div className="module-content">
        {/* Educational sections */}
        <section className="educational-sections">
          {content.sections.map((section, index) => (
            <div key={index} className={`expandable-section ${expandedSection === index ? 'expanded' : ''}`}>
              <button
                className="section-toggle"
                onClick={() => toggleSection(index)}
              >
                <span className="toggle-icon">{expandedSection === index ? '▼' : '▶'}</span>
                <h3>{section.title}</h3>
              </button>
              {expandedSection === index && (
                <div className="section-content">
                  {section.content.split('\n').map((paragraph, i) => (
                    paragraph.trim() && (
                      <p key={i} className={paragraph.startsWith('•') ? 'bullet' : ''}>
                        {paragraph}
                      </p>
                    )
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Knowledge check quiz */}
        {content.quiz && (
          <section className="knowledge-check">
            <h2>✓ Knowledge Check</h2>
            <p className="quiz-intro">Test your understanding of what you've learned:</p>

            {Object.entries(content.quiz).map(([qKey, question]) => (
              <div key={qKey} className="quiz-question">
                <h4>{question.question}</h4>
                <div className="quiz-options">
                  {question.options.map((option, i) => (
                    <label key={i} className="quiz-option">
                      <input
                        type="radio"
                        name={qKey}
                        value={option[0]}
                        checked={selectedAnswers[qKey] === option[0]}
                        onChange={(e) => handleQuizAnswer(qKey, e.target.value)}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {selectedAnswers[qKey] && (
                  <div className={`quiz-feedback ${selectedAnswers[qKey] === question.correct ? 'correct' : 'incorrect'}`}>
                    {selectedAnswers[qKey] === question.correct ? '✓ Correct! ' : '✗ Not quite. '}
                    {question.explanation}
                  </div>
                )}
              </div>
            ))}
          </section>
        )}
      </div>

      {/* Navigation */}
      <div className="module-navigation">
        <button
          className="module-btn next"
          onClick={onNext}
          disabled={!allQuestionsAnswered}
        >
          Continue to Next Section →
        </button>
        {!allQuestionsAnswered && (
          <p className="required-message">Please answer all knowledge check questions to continue.</p>
        )}
      </div>
    </div>
  );
};

export default EducationalModule;
