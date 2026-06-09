import React, { useState } from 'react';
import '../styles/ScenarioSection.css';

const ScenarioSection = ({ role, workbookData, onUpdateData, onNext }) => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [reflections, setReflections] = useState({});
  const [showFeedback, setShowFeedback] = useState({});

  const scenarios = {
    'Healthcare Provider': [
      {
        id: 'hp-scenario-1',
        title: 'The Fall That Doesn\'t Match the Injuries',
        situation: `A 28-year-old woman presents to the ED at 11 PM on Friday. Chief complaint: "I fell down the stairs yesterday."

Upon examination: Multiple bruises in various stages of healing. Fresh bruises on right arm (defensive pattern), a ligature mark on her neck, bruising on her torso consistent with hand prints and knuckles, and a black eye healing from approximately 2 weeks ago. All injuries are in varied stages of healing—some fresh, some 1-2 weeks old.

Patient presentation: She avoids eye contact. When you ask about the neck mark, her story changes: "Oh, that's from my necklace" (contradicts the mark pattern). She mentions her partner is in the waiting room and she needs to leave soon. Her vital signs show elevated BP (170/95—stress response).

History review shows she was seen 8 months ago with a "wrist fracture from a fall," and 4 months ago with "rib pain from a car accident."`,
        questions: [
          {
            id: 'hp1-q1',
            question: 'Based on the clinical presentation, what is your FIRST action?',
            options: [
              'A) Discharge her with pain management and follow-up',
              'B) Separate her from her partner and conduct private screening using a validated tool (HARK or HITS)',
              'C) Ask her partner what happened to get a reliable version of events',
              'D) Document injuries as "fall" and arrange orthopedic follow-up'
            ],
            correct: 'B',
            explanation: 'Separating her from her partner is essential for safety. Private screening using validated tools has the highest yield for disclosure. You should never ask the abuser for their version in front of the victim.'
          },
          {
            id: 'hp1-q2',
            question: 'She discloses that her partner "grabbed her neck during an argument" and admits the injuries match multiple incidents, not one fall. She states "but he didn\'t mean to hurt me" and "I don\'t want to press charges—he\'ll lose his job." What is your clinical responsibility?',
            options: [
              'A) Accept her choice and discharge her with resources',
              'B) Contact law enforcement and social services without her consent',
              'C) Provide safety assessment, resources, and documentation regardless of her willingness to press charges',
              'D) Tell her she must leave her partner for her own good'
            ],
            correct: 'C',
            explanation: 'Your role is to: 1) Believe her, 2) Document injuries thoroughly with exact quotes, 3) Assess immediate safety, 4) Provide resources, 5) Respect her autonomy. Documentation exists even if she doesn\'t press charges and may be used later.'
          },
          {
            id: 'hp1-q3',
            question: 'What IS appropriate documentation in this case?',
            options: [
              'A) "Patient reports fall. Multiple bruises consistent with reported mechanism."',
              'B) "Patient presented with injuries inconsistent with reported mechanism. Bruises in multiple stages of healing, ligature mark on neck, hand-print bruising on torso. Patient\'s story changed regarding neck injury. Patient disclosed partner grabbed her neck. Patient refused to press charges citing fear of financial consequences. Pattern consistent with intimate partner violence."',
              'C) "Patient disclosed abuse by partner. Possible domestic violence situation."',
              'D) "Patient appears to have marital conflict."'
            ],
            correct: 'B',
            explanation: 'Specific, objective documentation is critical. Include: exact description of injuries, their location, patient\'s exact statements (in quotes), timeline, mechanism reported vs. injuries observed, any contradictions, and patient\'s stated reason for not pressing charges.'
          }
        ],
        reflection: 'What barriers might prevent you from screening every patient for DV? How will you overcome them?'
      },
      {
        id: 'hp-scenario-2',
        title: 'The "Anxious" Patient with Vague Complaints',
        situation: `A 35-year-old woman presents with her 3rd visit in 6 months for "chronic pain," "anxiety," and "migraines." She's otherwise healthy with no medical explanation for symptoms.

Today she mentions "difficulty sleeping," "constant worry," "my body just hurts," and "I can't concentrate at work." Vitals show elevated BP and resting heart rate. She's on her third anxiety medication prescribed by your colleague.

New information: She mentions her partner criticizes her about "always complaining" and "making excuses to see doctors." She notes he "manages her schedule" and "prefers I don't work." She's become more isolated from friends over the past year—"he says they're bad influences."

You notice she apologizes frequently, even for small things, and seems anxious about leaving the appointment on time to pick up her partner's dry cleaning.`,
        questions: [
          {
            id: 'hp2-q1',
            question: 'What is the likelihood that her symptoms are purely medical vs. trauma-related?',
            options: [
              'A) Purely medical—refer back to psychiatry',
              'B) Purely anxiety disorder—increase medication',
              'C) Likely Complex PTSD or trauma response to abuse—assess for DV',
              'D) She\'s attention-seeking—provide minimal support'
            ],
            correct: 'C',
            explanation: 'Chronic pain, anxiety, hypervigilance, and somatic complaints without clear medical cause are classic trauma presentations. The isolation, partner control, and her apologetic demeanor suggest DV.'
          },
          {
            id: 'hp2-q2',
            question: 'Why is screening for DV important in her case rather than just increasing psychiatric medications?',
            options: [
              'A) Because psychiatric medications will treat the root cause',
              'B) Because you need to rule out DV as a contributing factor—treating symptoms without addressing the abuse is ineffective',
              'C) Because psychiatric medication is not covered by insurance',
              'D) Because she doesn\'t need medications'
            ],
            correct: 'B',
            explanation: 'Medicating trauma symptoms without addressing the ongoing abuse is like treating a burn wound while the person is still touching a hot stove. Trauma treatment requires safety first.'
          }
        ],
        reflection: 'How do you approach screening someone who presents with psychosomatic symptoms? What language do you use?'
      },
      {
        id: 'hp-scenario-3',
        title: 'The Pregnant Patient with Injuries',
        situation: `A 26-year-old pregnant woman (32 weeks) presents to OB triage with "spotting" and abdominal pain.

Upon examination: She has facial bruising (explained as "I walked into the door"), a healing rib fracture, and hand/wrist injuries in defensive patterns. Fetal monitoring shows fetal stress.

She becomes emotional and discloses: "He said if I have another girl, he'll leave me. Then last night he got mad and... I fell." Her partner is pacing in the waiting room. She mentions: "I can't leave right now. I have nowhere to go, no money. He controls everything. And what about this baby?"

She's terrified about hospital reporting and asks: "Are you going to call CPS? They'll take my baby."`,
        questions: [
          {
            id: 'hp3-q1',
            question: 'What is your clinical priority in this case?',
            options: [
              'A) Reassure her nothing will be reported and discharge her with the baby\'s father',
              'B) Call law enforcement and CPS immediately',
              'C) Assess immediate safety for mother and fetus; provide trauma-informed care and DV-specific resources; involve social work and case management',
              'D) Focus only on fetal health; DV is a separate issue for her to handle'
            ],
            correct: 'C',
            explanation: 'Her immediate safety AND the fetus\'s safety are your concern. Involve social work for safety planning and resources. CPS reporting depends on state law, but your role is to support, not punish.'
          },
          {
            id: 'hp3-q2',
            question: 'She\'s terrified about CPS involvement. How do you address this?',
            options: [
              'A) Guarantee that CPS won\'t be called',
              'B) Explain that reporting is mandatory without offering support',
              'C) Explain your reporting obligations clearly, but also emphasize that you\'re there to support HER and connect her to resources that can help keep the baby safe with her',
              'D) Tell her CPS only takes babies if the mother is abusing them'
            ],
            correct: 'C',
            explanation: 'Transparency + support. Explain the law, your role, AND how DV advocates and social services can help keep mother and baby together safely. Fear of CPS often keeps victims isolated.'
          }
        ],
        reflection: 'What local resources exist in your area for pregnant DV survivors? How would you connect her to them?'
      }
    ],

    'Law Enforcement': [
      {
        id: 'le-scenario-1',
        title: 'The Calm Offender & Withdrawn Victim',
        situation: `You\'re dispatched to a domestic disturbance call. Upon arrival:

The woman (32 years old) is sitting on the couch with visible injuries: swollen face, bleeding lip, bruising on arms and neck. She\'s withdrawn, barely making eye contact, and says very little.

The man (36 years old, her partner of 8 years) is composed, articulate, and cooperative. He says: "She was hysterical. I was trying to keep her from hurting herself. She came at me, I had to defend myself. I never hit her." He\'s not visibly injured.

Their 7-year-old child is in the living room, clearly frightened but quiet.

The woman, when asked if she wants to press charges, says: "No. It\'s my fault. I made him angry. I don\'t want him to get in trouble." She later whispers to you: "He said if I press charges, he\'ll take custody and I\'ll never see my daughter again."`,
        questions: [
          {
            id: 'le1-q1',
            question: 'Based on EVIDENCE, who is the primary aggressor in this situation?',
            options: [
              'A) The woman, because her partner said she came at him first',
              'B) The man, based on visible injuries on the woman but not on the man',
              'C) Neither—this is a mutual argument',
              'D) The child, because the child witnessed it'
            ],
            correct: 'B',
            explanation: 'Visible injury patterns are objective evidence. The man\'s composure and articulation do NOT indicate innocence. Abusers are often calm, intelligent, and persuasive. Document injuries, not explanations.'
          },
          {
            id: 'le1-q2',
            question: 'She refuses to press charges and is defending her partner. What should you do?',
            options: [
              'A) Respect her wishes and leave without making an arrest',
              'B) Arrest based on evidence of injury pattern even if she won\'t cooperate',
              'C) Tell her she must press charges',
              'D) Leave and tell her to call back if it happens again'
            ],
            correct: 'B',
            explanation: 'Many jurisdictions have DV arrest policies. You can arrest based on evidence of injury pattern even without victim cooperation. The victim\'s reluctance to prosecute is a trauma response, not the truth.'
          },
          {
            id: 'le1-q3',
            question: 'What needs to be documented at this scene?',
            options: [
              'A) Just the woman\'s injuries and a brief statement',
              'B) Photos of all injuries, both parties\' exact statements, child presence, scene condition, and injury-to-explanation consistency',
              'C) The man\'s version of events as reliable',
              'D) That the victim declined to prosecute, so no further action is needed'
            ],
            correct: 'B',
            explanation: 'Detailed documentation including photographs allows prosecution to proceed even if the victim later recants or is too afraid to testify. This documentation may be used months later.'
          }
        ],
        reflection: 'How do you balance respecting victim autonomy while protecting her from further harm when she\'s defending her abuser?'
      },
      {
        id: 'le-scenario-2',
        title: 'The Confused Victim with No Visible Injuries',
        situation: `Dispatch sends you to a welfare check. The caller (anonymous) reported hearing arguments and possible violence.

You arrive and speak with the woman. She seems confused, her speech is slow, and she says "I don\'t know why anyone called. Everything\'s fine." Her partner is present and reassuring: "She\'s just emotional. She gets like this."

She has no visible injuries, so there\'s no obvious evidence of physical abuse. However:
- She seems disoriented (asks you the same question twice)
- She defers all decisions to her partner
- Her partner answers most of your questions for her
- When you ask her alone (after asking him to step aside), she\'s hesitant and says: "He just... he criticizes everything I do. Last night he made me stand in the corner for two hours because I burned dinner. He said I was stupid."
- You notice empty bottles of prescription sleep medication
- Her partner says: "I manage her medications because she\'s not responsible with them"`,
        questions: [
          {
            id: 'le2-q1',
            question: 'What is concerning about this situation beyond lack of visible injuries?',
            options: [
              'A) Nothing—there are no injuries so there\'s no crime',
              'B) Behavioral control, medication control, her confusion, and his monitoring/managing her',
              'C) She seems fine, so there\'s nothing to worry about',
              'D) The anonymous caller was overreacting'
            ],
            correct: 'B',
            explanation: 'Psychological and financial abuse, medication control, and learned helplessness are serious forms of abuse. Her confusion may be from medication control or chronic trauma.'
          },
          {
            id: 'le2-q2',
            question: 'What is your appropriate response?',
            options: [
              'A) Leave since there are no visible injuries',
              'B) Assess for ongoing abuse, provide DV resources, document what you observe, and connect her to victim advocates',
              'C) Tell her partner he needs to stop criticizing her',
              'D) Arrest her partner for making her stand in the corner'
            ],
            correct: 'B',
            explanation: 'Psychological abuse is real and documented through observation and victim statement. Resources and documentation are appropriate even without visible injury or clear crime.'
          }
        ],
        reflection: 'How do you recognize abuse that doesn\'t leave visible marks? What language or behavioral signs indicate control?'
      },
      {
        id: 'le-scenario-3',
        title: 'The Repeat Caller Who Keeps Dropping Charges',
        situation: `This is your 4th response to this address in 18 months. The woman (29 years old) has called before, disclosed abuse, initially agreed to charges, but then recanted 48-72 hours later each time.

Her partner (34 years old) has a history of showing up at her workplace, monitoring her phone, and isolating her from family. Previous reports documented injuries.

This time she presents with new injuries and admits: "He hit me because I talked to my sister without asking permission. I wanted to press charges this time, but he found out I was going to and... I'm scared. He said if I press charges, he\'ll make sure I never see our kids again, and he\'ll destroy me in court. He said I\'m crazy and no judge will believe me."

She\'s visibly traumatized and keeps saying: "I don\'t know what to do. I need to stay with him. I have no money, nowhere to go."`,
        questions: [
          {
            id: 'le3-q1',
            question: 'Why is this pattern of reporting and then recanting significant?',
            options: [
              'A) It shows she\'s not really being abused',
              'B) It shows she\'s making false reports',
              'C) It\'s a classic DV pattern—she discloses when safe, then retracts when the abuser finds out, due to fear and custody threats',
              'D) It\'s a waste of police resources'
            ],
            correct: 'C',
            explanation: 'This is an extremely common pattern in intimate partner violence. The retraction indicates fear and coercion, not dishonesty. Each call documents the pattern even if charges don\'t stick.'
          },
          {
            id: 'le3-q2',
            question: 'What is your role despite her unwillingness to prosecute?',
            options: [
              'A) Stop responding—she\'s wasting police time',
              'B) Document each incident, provide resources, consider arrest options, and connect her to victim advocates who can work on safety planning',
              'C) Get frustrated with her for not pressing charges',
              'D) Tell her to just leave him'
            ],
            correct: 'B',
            explanation: 'Each documented incident adds to the pattern. Victim advocates can work on safety planning and understanding options at her own pace. Do not blame her for the abuser\'s control.'
          }
        ],
        reflection: 'How does understanding trauma bonding and coercion change your approach to repeat DV callers?'
      }
    ],

    'Social Worker': [
      {
        id: 'sw-scenario-1',
        title: 'The Mother Who Can\'t Leave',
        situation: `Child welfare is investigating after a teacher reported a 6-year-old who drew pictures of violence and said "Mommy and Daddy fight and hit."

You interview the child, who is withdrawn and becomes very anxious during questioning. She won\'t say much but mentions "I don\'t like it when they fight."

You meet with the mother (31 years old, unemployed). She minimizes everything: "We argue like any couple. He\'s a good father, really. She\'s exaggerating." When you ask directly about abuse, she becomes nervous and says: "He wouldn\'t like me talking about this. And anyway, I can\'t leave. Where would I go? I don\'t work, I don\'t have money. He manages all the finances. And he\'s threatened to take the kids if I ever try to leave."

Later, she admits: "He criticizes me constantly, tells me I\'m a bad mother, that no one else would want me. Last week he got angry and threw a dish. I jump at loud noises now."

You notice: Old bruises on her arms, her deference to him when he drops off the child, and her constant apologies.`,
        questions: [
          {
            id: 'sw1-q1',
            question: 'What is your assessment of child safety in this home?',
            options: [
              'A) The child is safe because the father hasn\'t directly abused her',
              'B) Exposure to intimate partner violence is a form of emotional child abuse and affects the child\'s safety and development',
              'C) This is just a parental relationship issue, not a child welfare concern',
              'D) The mother is responsible for protecting the child by leaving'
            ],
            correct: 'B',
            explanation: 'Children who witness DV experience trauma and emotional abuse. Research shows this affects their development, behavior, and future relationships. It IS a child welfare concern.'
          },
          {
            id: 'sw1-q2',
            question: 'The mother says she can\'t leave because of financial dependence and custody threats. What is your appropriate response?',
            options: [
              'A) Tell her she must leave to keep her child safe',
              'B) Work with her on safety planning, help her understand benefits she\'s eligible for, connect her to DV advocates, and support her timeline—not force her out',
              'C) Remove the child to force her to leave',
              'D) Close the case if she won\'t leave'
            ],
            correct: 'B',
            explanation: 'Forcing victims to leave often backfires and increases danger. Your role is to provide information, resources, and safety planning while respecting her autonomy. Leaving is a process, not a one-time event.'
          },
          {
            id: 'sw1-q3',
            question: 'What resources would be appropriate to connect her with?',
            options: [
              'A) Just parenting classes',
              'B) DV advocates, legal aid for custody/protection orders, benefits/housing assistance, mental health counseling, childcare resources',
              'C) Family preservation programs that recommend "family unity"',
              'D) Couples therapy with her abuser'
            ],
            correct: 'B',
            explanation: 'She needs DV-specific support, legal protection options, economic resources, and mental health support. Couples therapy with an abuser is contraindicated.'
          }
        ],
        reflection: 'How do you balance protecting the child while respecting the mother\'s autonomy? What does trauma-informed case work look like?'
      },
      {
        id: 'sw-scenario-2',
        title: 'The Abuser in the System',
        situation: `You\'re meeting with a father (40 years old) for a child welfare follow-up. He\'s articulate, cooperative, and concerned about his children. He says: "My ex is unstable. She\'s making false abuse allegations to keep me from seeing the kids. She\'s manipulating the system."

The mother (38 years old) reports: "He controls everything through the kids. He makes them spy on me, he tells them I\'m a bad mother, he withholds child support to force me to agree to his demands. When I confront him, he says I\'m hysterical and that no judge would believe me anyway."

You notice:
- The father has a history of intimate partner violence with previous partners
- He uses charm and manipulation in sessions with you
- He has isolated the mother from her support system through custody threats
- The children seem anxious and report conflicting messages about their mother
- He\'s filed multiple false reports against her`,
        questions: [
          {
            id: 'sw2-q1',
            question: 'What is the risk in taking the father\'s presentation at face value?',
            options: [
              'A) None—he seems reasonable and concerned',
              'B) Abusers are often charming and articulate; their presentation is different from their behavior at home',
              'C) He\'s probably telling the truth if he\'s cooperative with you',
              'D) False abuse allegations are more common than intimate partner violence'
            ],
            correct: 'B',
            explanation: 'Abusers often present as reasonable, intelligent, and cooperative with authorities. Their public persona differs from their private behavior. Do not be swayed by charm.'
          },
          {
            id: 'sw2-q2',
            question: 'How does his DV history with previous partners inform your current assessment?',
            options: [
              'A) It\'s irrelevant—this case is about his current situation',
              'B) It\'s a pattern indicator that should inform your risk assessment',
              'C) It means he\'s likely being truthful about the current ex',
              'D) It means he\'s a bad person who should never see his children'
            ],
            correct: 'B',
            explanation: 'DV is often a pattern. Multiple relationships with abuse allegations suggests a pattern of control and harm, not multiple "false accusers."'
          }
        ],
        reflection: 'How do you assess parenting capacity when one parent has a history of intimate partner violence? What role do children\'s loyalty and fear play?'
      },
      {
        id: 'sw-scenario-3',
        title: 'The Safety Plan That Needs Updating',
        situation: `You\'ve been working with a mother (29 years old) for 6 months. She disclosed DV, created a safety plan, accessed benefits, and started job training.

She seemed to be making progress: employed part-time, in her own apartment, and working toward independence. You had planned to close the case soon.

Then she tells you: "He\'s been coming to my apartment. He says he\'s changed and he\'s not happy without me. He brings the kids back late. Last week he showed up at my job. And when I say no, he gets angry and threatens to hurt himself, and then I feel guilty."

She admits: "I still love him. I miss the kids having their dad. He\'s been on his best behavior and he\'s actually been nice to me. Maybe I was exaggerating how bad it was."

The children report he\'s told them: "Your mom is selfish for breaking up the family."`,
        questions: [
          {
            id: 'sw3-q1',
            question: 'What is happening in this situation?',
            options: [
              'A) She was right to leave and should stay separated',
              'B) She was exaggerating and they should get back together',
              'C) She\'s in the reconciliation phase of the abuse cycle—his "best behavior" is a temporary tactic to regain control',
              'D) She\'s making poor decisions and needs to be more rational'
            ],
            correct: 'C',
            explanation: 'The cycle includes reconciliation/honeymoon phases where the abuser is extra nice. This is part of the cycle, not evidence that abuse didn\'t happen or has changed.'
          },
          {
            id: 'sw3-q2',
            question: 'What is your professional responsibility?',
            options: [
              'A) Support her reconciliation since she still loves him',
              'B) Update the safety plan, discuss the cycle, provide resources without judgment, and prepare for potential escalation',
              'C) Close the case—she\'s made her choice',
              'D) Tell her she\'s making a mistake'
            ],
            correct: 'B',
            explanation: 'Provide information about the cycle without judgment. Update safety plans. Prepare her and the children for potential escalation. Remain available when/if she\'s ready for support again.'
          }
        ],
        reflection: 'How do you maintain professional support for someone who may return to an abuser? What does non-judgment look like?'
      }
    ],

    'Faith Leader': [
      {
        id: 'fl-scenario-1',
        title: 'The Parishioner Seeking "Marital Counseling"',
        situation: `A woman from your congregation (38 years old) asks to meet with you privately. She\'s been with your faith community for years and is respected and involved.

She says: "I need help with my marriage. My husband is so angry lately, and I feel like I\'m walking on eggshells. I pray about it constantly, but things are getting worse. I\'m wondering if... if he\'s hurting me on purpose, but I don\'t want to say that. He loves me, I know he does. Should we get marriage counseling?"

As she talks, you notice:
- She minimizes her own concerns, keeps defending him
- She mentions he "doesn\'t like" her spending time with friends or family
- She admits to fearing his anger and trying to keep him calm
- She wears long sleeves in summer and flinches at loud noises
- She\'s mentioned being "clumsy" before with various injuries`,
        questions: [
          {
            id: 'fl1-q1',
            question: 'Is marriage counseling an appropriate recommendation at this point?',
            options: [
              'A) Yes, couples therapy can help improve communication',
              'B) No—marriage counseling can be dangerous when abuse is present because the abuser uses counseling to further manipulate',
              'C) Yes, combined with prayer and faith',
              'D) It depends on whether he\'s willing to go'
            ],
            correct: 'B',
            explanation: 'Marriage counseling in abuse situations often backfires. Abusers use the counseling setting to refine their manipulation tactics. Professional DV advocates should be involved first.'
          },
          {
            id: 'fl1-q2',
            question: 'What is an appropriate faith-based response to her situation?',
            options: [
              'A) Advise her to submit to her husband as scripture says',
              'B) Tell her to leave immediately',
              'C) Acknowledge her faith while affirming that God does not want her harmed; provide DV resources and spiritual support',
              'D) Keep it confidential within the faith community'
            ],
            correct: 'C',
            explanation: 'Reframe theology: God values her safety and dignity. Faith and safety go together. Provide professional DV resources alongside pastoral support. This is not a marital issue—it\'s a safety issue.'
          },
          {
            id: 'fl1-q3',
            question: 'What should you refer her to?',
            options: [
              'A) Just your faith counseling',
              'B) A DV advocate/hotline AND continue pastoral support',
              'C) Her abuser\'s pastor for accountability',
              'D) Family preservation services'
            ],
            correct: 'B',
            explanation: 'Professional DV advocates are trained to assess safety and provide options. You provide spiritual care in parallel, not as a substitute.'
          }
        ],
        reflection: 'How do you reframe "biblical submission" and "forgiveness" in the context of abuse? What scriptures support her right to safety?'
      },
      {
        id: 'fl-scenario-2',
        title: 'The Abuser in Your Community',
        situation: `A man from your congregation (45 years old) is well-liked, volunteers, and is respected. His wife (42 years old) has mentioned to several members that she\'s unhappy in the marriage.

Then, a community member tells you they overheard him telling his wife: "No one would ever believe you. I\'m too respected here. I can say anything and they\'ll believe me. You\'ll end up looking crazy."

At the same time, his wife has become more withdrawn and stopped attending services as frequently. She\'s made vague comments about "marital struggles" and asked one of your staff members about resources for "unhappy marriages."

When you approach him about supporting his wife, he becomes defensive: "She\'s just unhappy with herself. I\'ve done everything for her. She\'s exaggerating minor disagreements into drama."`,
        questions: [
          {
            id: 'fl2-q1',
            question: 'What is concerning about his behavior and statement?',
            options: [
              'A) Nothing—he\'s explaining a normal marital disagreement',
              'B) He\'s demonstrating control tactics: isolating her from support, gaslighting (calling her exaggerating), and using community status as leverage',
              'C) His wife is being ungrateful',
              'D) This is just a private marital matter'
            ],
            correct: 'B',
            explanation: 'His explicit threat that no one will believe her because of his status is a control tactic. Her withdrawal and his aggressive defensiveness are red flags.'
          },
          {
            id: 'fl2-q2',
            question: 'What is your responsibility as a faith leader?',
            options: [
              'A) Support his version since he\'s respected in the community',
              'B) Approach her with DV resources, listen without judgment, and address abusive behavior in your faith community regardless of his status',
              'C) Stay neutral and not get involved',
              'D) Tell him to treat his wife better and move on'
            ],
            correct: 'B',
            explanation: 'Faith communities must address abuse clearly. Protecting his reputation over protecting his wife is complicit in abuse. Status does not exempt anyone.'
          },
          {
            id: 'fl2-q3',
            question: 'How should you address his behavior in the faith community?',
            options: [
              'A) Ignore it—it\'s their private matter',
              'B) Privately tell him his behavior is wrong and he should stop',
              'C) Create a clear, written policy on DV; address his behavior specifically; support the wife; connect to resources; do NOT reconcile them without professional DV assessment',
              'D) Ask him to voluntarily step down from leadership temporarily'
            ],
            correct: 'C',
            explanation: 'Clear policies, transparent accountability, and support for the victim/survivor are essential. This protects the community and sends a message that abuse is not tolerated.'
          }
        ],
        reflection: 'How can faith communities balance grace/forgiveness with safety and accountability for abusers?'
      },
      {
        id: 'fl-scenario-3',
        title: 'The Theology-Based Defense',
        situation: `A woman (35 years old) comes to you after a sermon on marriage. She\'s upset and says: "The sermon made me feel worse. You talked about wives submitting to husbands, and my husband says that\'s what I should do. But he\'s so controlling. He tells me what to wear, who I can see, how to spend money. He says if I was a better Christian wife, I would just obey him and stop questioning him."

She admits: "I\'ve tried submitting more. It just makes him control me more. And now I\'m scared of him, but I can\'t leave because the Bible says divorce is wrong."

She\'s clearly in distress and sees your theology as reinforcing her abuse.`,
        questions: [
          {
            id: 'fl3-q1',
            question: 'What should you communicate about biblical submission in the context of abuse?',
            options: [
              'A) Wives should submit to their husbands regardless of treatment',
              'B) Biblical submission is mutual love and respect, not control; God does not demand suffering in harmful situations; safety is compatible with faith',
              'C) Divorce is always wrong, so she should stay',
              'D) She\'s not being a good enough Christian'
            ],
            correct: 'B',
            explanation: 'Healthy theology affirms that submission is mutual, that God values her safety, and that she is not required to endure harm. Abuse violates core faith principles.'
          },
          {
            id: 'fl3-q2',
            question: 'What scriptural reframing might help her?',
            options: [
              'A) "Wives, submit to your husbands" with no context',
              'B) "Love your neighbor as yourself"—she is her own neighbor; God values her wholeness and safety',
              'C) "Turn the other cheek"—accept abuse silently',
              'D) "Wives must stay married no matter what"'
            ],
            correct: 'B',
            explanation: 'Scripture also teaches self-worth, dignity, and justice. Use scripture that affirms her right to be safe and whole, not just submission passages without context.'
          }
        ],
        reflection: 'How do you preach and teach theology in a way that doesn\'t inadvertently support abusers? What messages do survivors need to hear?'
      }
    ]
  };

  const currentScenarioList = scenarios[role] || scenarios['Healthcare Provider'];
  const scenario = currentScenarioList[currentScenario];
  const totalScenarios = currentScenarioList.length;

  const allQuestionsAnswered = scenario.questions.every(q => selectedAnswers[`${scenario.id}-${q.id}`]);
  const reflectionCompleted = reflections[scenario.id];

  const handleAnswer = (questionKey, answer) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionKey]: answer
    }));
    setShowFeedback(prev => ({
      ...prev,
      [questionKey]: true
    }));
  };

  const handleReflection = (text) => {
    setReflections(prev => ({
      ...prev,
      [scenario.id]: text
    }));
  };

  const goToNextScenario = () => {
    if (currentScenario < totalScenarios - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedAnswers({});
      setShowFeedback({});
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // All scenarios complete
      onUpdateData({
        scenarioAnswers: selectedAnswers,
        reflections: reflections
      });
      onNext();
    }
  };

  const isPreviousButtonDisabled = currentScenario === 0;
  const isNextButtonDisabled = !(allQuestionsAnswered && reflectionCompleted);
  const isLastScenario = currentScenario === totalScenarios - 1;

  return (
    <div className="scenario-section">
      <div className="scenario-header">
        <h1>Real-World Scenarios</h1>
        <p className="scenario-subtitle">
          Apply your knowledge to realistic cases you will actually face
        </p>
      </div>

      <div className="scenario-container">
        <div className="scenario-progress">
          <span className="progress-label">Scenario {currentScenario + 1} of {totalScenarios}</span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${((currentScenario + 1) / totalScenarios) * 100}%` }}
            ></div>
          </div>
        </div>

        <h2 className="scenario-title">{scenario.title}</h2>

        <div className="situation-box">
          <h3>The Situation</h3>
          <p>{scenario.situation}</p>
        </div>

        <div className="questions-section">
          {scenario.questions.map((question, idx) => {
            const questionKey = `${scenario.id}-${question.id}`;
            const isAnswered = selectedAnswers[questionKey];
            const isFeedbackShown = showFeedback[questionKey];
            const isCorrect = isAnswered === question.correct;

            return (
              <div key={idx} className="question-block">
                <h4>Question {idx + 1}: {question.question}</h4>
                <div className="options">
                  {question.options.map((option, i) => (
                    <label key={i} className="option-label">
                      <input
                        type="radio"
                        name={questionKey}
                        value={option[0]}
                        checked={isAnswered === option[0]}
                        onChange={(e) => handleAnswer(questionKey, e.target.value)}
                      />
                      <span className="option-text">{option}</span>
                    </label>
                  ))}
                </div>
                {isFeedbackShown && (
                  <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
                    {isCorrect ? '✓ Correct' : '✗ Not quite right'}
                    {': '}
                    {question.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="reflection-section">
          <h3>Reflection Question</h3>
          <p>{scenario.reflection}</p>
          <textarea
            className="reflection-input"
            placeholder="Write your thoughts and reflections here..."
            value={reflections[scenario.id] || ''}
            onChange={(e) => handleReflection(e.target.value)}
            rows="4"
          />
          {reflectionCompleted && (
            <p className="reflection-saved">✓ Your reflection has been saved</p>
          )}
        </div>

        <div className="scenario-navigation">
          <button
            className="scenario-nav-btn prev"
            onClick={() => {
              setCurrentScenario(currentScenario - 1);
              setSelectedAnswers({});
              setShowFeedback({});
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            disabled={isPreviousButtonDisabled}
          >
            ← Previous Scenario
          </button>

          <button
            className="scenario-nav-btn next"
            onClick={goToNextScenario}
            disabled={isNextButtonDisabled}
          >
            {isLastScenario ? 'Complete Scenarios →' : 'Next Scenario →'}
          </button>
        </div>

        {isNextButtonDisabled && (
          <p className="requirement-message">
            Please answer all questions and complete the reflection to continue.
          </p>
        )}
      </div>
    </div>
  );
};

export default ScenarioSection;
