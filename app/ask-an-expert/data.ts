export type QAItem = {
  slug: string;
  question: string;
  answer: string;
};

export type Subject = {
  slug: string;
  title: string;
  icon: string;
  color: string;
  desc: string;
  items: QAItem[];
};

export const subjects: Subject[] = [
  {
    slug: "accounts",
    title: "Accounts",
    icon: "📊",
    color: "#1a2a6c",
    desc: "Budgeting, profitability ratios, liquidity analysis, and efficiency metrics.",
    items: [
      {
        slug: "what-is-budget",
        question: "What is Budget?",
        answer: `<p>A budget functions as a critical policy instrument through which governments articulate their economic and social priorities while charting the economy's course. <em>"The Budget is an important policy document through which the Government establishes its economic and social priorities."</em></p>
<h3>Definition and Purpose</h3>
<p>The budget represents a formal proposal outlining anticipated government expenditures for a designated period, along with the planned funding mechanisms requiring legislative approval. Government policies regarding taxation, spending allocations, and investment impacts directly influence citizens' welfare and national income generation.</p>
<h3>Historical Etymology</h3>
<p>The term "budget" originates from the French word <em>"Bougette,"</em> meaning a small leather bag or pouch. England initially used this term to describe the white leather container holding the medieval Court of Exchequer's seal. Eventually, the budget came to denote the financial proposals within that pouch, evolving into today's understanding as a comprehensive government financial document.</p>
<h3>Development and Formulation</h3>
<p>While the executive branch typically prepares budget drafts, the process functions most effectively through collaborative consultation involving parliamentarians and civil society representatives before legislative approval.</p>`,
      },
      {
        slug: "liquidity-ratios",
        question: "Liquidity Ratios",
        answer: `<p>Liquidity ratios measure a company's capacity to fulfill immediate financial obligations, thereby indicating solvency levels. Two primary ratios are evaluated:</p>
<p><strong>Current Ratio:</strong> This metric assesses whether a corporation can pay off short-term debts. It is calculated by comparing current liabilities against current assets. <em>"Any company is established to have a healthy current ratio if the ratio is 2:1"</em> (Brigham and Houston 2009, pg 87).</p>
<p>The liquidity ratio determines the ability of a company to meet their immediate liability and serves as an important indicator of financial health, enabling stakeholders to assess short-term risk and operational efficiency.</p>`,
      },
      {
        slug: "profitability-ratios",
        question: "Profitability Ratios",
        answer: `<p>Profitability ratios serve to identify whether a company can survive competitively, particularly when compared to their competitors. These metrics reveal the process by which a company manages its current resources.</p>
<p>The <strong>gross profit margin ratio</strong> specifically evaluates organisational financial performance. It demonstrates <em>"the overall additional expenses and future savings of the company"</em> by calculating the proportion of revenue remaining after subtracting the cost of goods sold against total revenue.</p>
<p>Profitability ratios are essential tools for investors and management alike, providing a clear picture of how effectively an organisation converts revenue into profit at various stages of the business process.</p>`,
      },
      {
        slug: "efficiency-ratios",
        question: "Efficiency Ratios",
        answer: `<p>Efficiency ratios serve to assess how effectively a company utilises its assets. They <em>"help to identify the overall efficiency of a company in order to manage their assets."</em></p>
<p>These metrics are significant for:</p>
<ul>
<li>Evaluating receivables quality and collection effectiveness</li>
<li>Analysing asset management practices and turnover</li>
<li>Understanding payment patterns with suppliers</li>
<li>Assessing the company's overall trading operations</li>
</ul>
<p>By monitoring efficiency ratios over time, management can identify operational bottlenecks and benchmark performance against industry standards to drive continuous improvement.</p>`,
      },
    ],
  },
  {
    slug: "statistics",
    title: "Statistics",
    icon: "📈",
    color: "#2563b0",
    desc: "Hypothesis testing, p-values, confidence intervals, and statistical error types.",
    items: [
      {
        slug: "purpose-test-hypothesis",
        question: "What is the purpose of a test of hypothesis?",
        answer: `<p>A hypothesis test serves as a structured decision-making framework for analysing data. It is <em>"a decision-making process that examines a set or sets of data, and on the basis of expectation under null hypotheses, leads to a decision as to whether or not to reject null hypotheses."</em></p>
<h3>Primary Purposes</h3>
<p><strong>Objective Decision-Making:</strong> Rather than relying on subjective interpretations of raw data, hypothesis testing provides a standardised methodology for evaluating propositions objectively.</p>
<p><strong>Consistency Across Analysis:</strong> Different observers may form varying opinions when examining data informally, but hypothesis testing establishes a uniform decision-making protocol. This ensures that all analysts reach consistent conclusions from the same dataset, regardless of personal bias.</p>
<p><strong>Accounting for Variability:</strong> The process helps researchers distinguish between true patterns and random fluctuations caused by sampling errors or chance variation in the data.</p>
<p>In essence, hypothesis testing transforms informal data observation into a rigorous, reproducible analytical procedure that enables researchers to determine whether specific propositions are supported or refuted by empirical evidence.</p>`,
      },
      {
        slug: "hypothesis-test-ever-prove-null-hypothesis",
        question: "Does hypothesis test ever prove a null hypothesis?",
        answer: `<p>A hypothesis test is fundamentally a <em>"decision-making process that examines a set or sets of data"</em> to determine whether to reject null hypotheses based on expectations under those hypotheses.</p>
<p>Hypothesis testing provides an objective framework for evaluating competing propositions rather than relying on subjective interpretation of raw data. It emphasises that different individuals might form varying conclusions from the same dataset when influenced by chance variation or sampling errors. However, hypothesis tests establish a standardised, consistent decision-making procedure applicable across all users.</p>
<p>Importantly, hypothesis testing is a <strong>rejection-focused methodology</strong> — it determines whether sufficient evidence exists to reject the null hypothesis, rather than confirming its truth. A failure to reject the null hypothesis does not prove it is true; it simply means there is insufficient evidence against it.</p>`,
      },
      {
        slug: "p-value-p-value-mean-words",
        question: "What is a p value? What does the p-value mean in words?",
        answer: `<p>The <strong>p-value</strong> is the probability of obtaining test results at least as extreme as the observed results, assuming the null hypothesis is true. In plain language, a small p-value (typically ≤ 0.05) indicates that the observed data would be very unlikely if the null hypothesis were true, providing evidence to reject it.</p>
<p><strong>In words:</strong> The p-value tells you how surprising your data would be if the null hypothesis were correct. The smaller the p-value, the more surprising the result and the stronger the evidence against the null hypothesis.</p>
<p>Hypothesis testing provides the context for interpreting p-values: <em>"A hypothesis test is a decision-making process that examines a set or sets of data, and on the basis of expectation under null hypotheses, leads to a decision as to whether or not to reject null hypotheses."</em></p>
<p>Common significance thresholds: p &lt; 0.05 (significant), p &lt; 0.01 (highly significant), p &lt; 0.001 (very highly significant).</p>`,
      },
      {
        slug: "briefly-explain-relationship-confidence-interval-hypothesis-testing",
        question: "Briefly explain the relationship between confidence interval and hypothesis testing.",
        answer: `<p>There is a close relationship between confidence intervals and hypothesis testing. When a 95% confidence interval is constructed, all values within that interval are considered plausible estimates for the parameter. Values outside this range are treated as implausible.</p>
<p>The connection operates as follows: <em>"If the value of the parameter specified by the null hypotheses is contained in the 95% interval, then the null hypothesis cannot be rejected at the level of 0.05 levels."</em> Conversely, if the null hypothesis value falls outside the interval, it can be rejected at the 0.05 significance level.</p>
<p>This relationship scales with confidence levels — a 99% confidence interval corresponds to rejecting values at the 0.01 significance level. Essentially, confidence intervals and hypothesis tests provide complementary approaches to statistical inference: confidence intervals show which parameter values are plausible, while hypothesis tests determine whether specific values can be rejected based on the same underlying probability principles.</p>`,
      },
      {
        slug: "circumstances-might-use-one-sided-test-hypothesis-rather-two-sided-test",
        question: "Under what circumstances might you use a one-sided test of hypothesis rather than a two-sided test?",
        answer: `<p>A one-sided hypothesis test is appropriate in two key situations:</p>
<ol>
<li><strong>Directional alternative hypothesis:</strong> When the alternate hypothesis does specify a direction, then a one-sided test of hypothesis could be used.</li>
<li><strong>Asymmetric decision context:</strong> When a large difference in one specific direction would lead to the same action as no difference at all, making the other direction irrelevant.</li>
</ol>
<p>In contrast, <strong>two-sided tests</strong> are used when differences in either direction are theoretically meaningful or would lead to different decisions. Two-sided tests are generally more conservative and are the default choice when there is no strong prior reason to expect a particular direction of effect.</p>`,
      },
      {
        slug: "explain-analogy-type-1-type-ii-errors-test-hypothesis-false-positive-false-negative-results-occur-diagnostic-testing",
        question: "Explain the analogy between type I and type II errors in a test of hypothesis and false positive/false negative results in diagnostic testing.",
        answer: `<p>In hypothesis testing and diagnostic medicine, there are two fundamental types of errors:</p>
<p><strong>Type I Error (False Positive):</strong> This occurs when we reject a null hypothesis that is actually true. In diagnostic testing, a false positive means a test indicates a disease is present when the patient is actually healthy. The probability of a Type I error is denoted by α (the significance level).</p>
<p><strong>Type II Error (False Negative):</strong> This occurs when we fail to reject a null hypothesis that is actually false. In diagnostics, a false negative means a test fails to detect a disease that is actually present. The probability of a Type II error is denoted by β.</p>
<p>The <strong>analogy</strong> is direct: just as a medical screening test can incorrectly flag a healthy patient (false positive / Type I) or miss a sick patient (false negative / Type II), a statistical test can incorrectly reject a true null hypothesis or fail to detect a real effect. Both contexts require balancing the costs of each error type based on the consequences of being wrong in either direction.</p>`,
      },
    ],
  },
  {
    slug: "management",
    title: "Management",
    icon: "🏢",
    color: "#059669",
    desc: "Business model innovation, political science, and management concepts.",
    items: [
      {
        slug: "definition-of-bmi",
        question: "Definition of BMI (Business Model Innovation)",
        answer: `<p><strong>Business Model Innovation (BMI)</strong> involves transforming fundamental business elements or creating entirely new operational approaches. According to research, <em>"Content, structure, and governance are the three design elements that characterise a company's business model."</em></p>
<p>Organisations pursuing BMI typically demonstrate superior performance metrics compared to competitors, including improved operating margins and shareholder returns. BMI <em>"is considered a key driver of competitive advantage,"</em> making it a strategic focus for many enterprises seeking differentiation in their industries.</p>
<p>The three core design elements include:</p>
<ul>
<li><strong>Content:</strong> What activities are performed</li>
<li><strong>Structure:</strong> How these activities are linked and sequenced</li>
<li><strong>Governance:</strong> Who performs the activities</li>
</ul>
<p>Effective BMI requires organisations to continuously reassess these elements in response to market changes, technological disruption, and evolving customer expectations.</p>`,
      },
      {
        slug: "political-science",
        question: "Political Science: Key Concepts in International Law and Child Rights",
        answer: `<p>This section covers fundamental concepts in political science, international law, and child rights frameworks.</p>
<h3>Definition of a Child</h3>
<p>Per the UN Convention on the Rights of a Child (1989), <em>"every human being below the age of 18 years is a child"</em> unless national law establishes majority status earlier.</p>
<h3>Human Rights</h3>
<p>Human rights represent individual entitlements to conditions necessary for fully developing inherent human characteristics and potential. They are universal, inalienable, and indivisible.</p>
<h3>Child Rights vs. General Human Rights</h3>
<p>Children have distinct developmental needs differing from adults, necessitating specialised rights frameworks as outlined in international instruments such as the UNCRC.</p>
<h3>Armed Conflict</h3>
<p>An armed conflict involves contested disagreement regarding governance or territory where armed force between parties (at least one being a state government) produces minimum 25 battle-related deaths.</p>
<h3>Terrorism</h3>
<p>Terrorism represents <em>"the threatened and actual resort to ideological and political violence by non-state groups"</em> pursuing limited or extensive objectives. Cross-border terrorism involves acts pursued by groups within one state originating from outside its borders, potentially with state backing.</p>`,
      },
    ],
  },
  {
    slug: "nursing",
    title: "Nursing",
    icon: "🏥",
    color: "#dc2626",
    desc: "Clinical interviews, psychological disorders, and evidence-based practices.",
    items: [
      {
        slug: "describe-meant-clinical-interview",
        question: "Describe what is meant by a Clinical Interview",
        answer: `<p>A clinical interview is fundamentally <em>"a conversation with a purpose."</em> More formally, it represents a vocal communication between an expert and client designed to explore patterns of living that the patient finds troubling or meaningful.</p>
<h3>Topics Typically Covered</h3>
<ul>
<li>Patient history (personal background, age, occupation, residence, prior clinical contacts)</li>
<li>Personality characteristics, strengths, and weaknesses</li>
<li>Relationship patterns (current and historical)</li>
<li>Developmental trajectory from formative years to present</li>
<li>Chief complaint with intensity and duration assessment</li>
<li>Past health history review</li>
<li>Mental status examination (general appearance, behavior, mood)</li>
</ul>
<h3>Structured vs. Unstructured Interviews</h3>
<p>Interviews exist on a spectrum. The clinical interview emphasises the "progressively unfolding" nature of the interaction, suggesting flexibility in approach rather than rigid structure — tailoring the conversation to each individual patient's needs and narrative.</p>`,
      },
      {
        slug: "structured-unstructured-interview",
        question: "Structured and Unstructured Interview",
        answer: `<p>Clinical interviews exist on a spectrum between highly structured and completely unstructured formats:</p>
<h3>Structured Interviews</h3>
<p><em>"Interviewer asks series of questions, which are specific and phrased in a standardised manner"</em> in a pre-established order. Detailed rules guide the interviewer's conduct, though they may formulate clarifying questions for ambiguous responses. This approach ensures consistency across different interviewers and settings, making it ideal for research and diagnostic standardisation.</p>
<h3>Unstructured Interviews</h3>
<p>These provide clinicians greater adaptability in question phrasing, ordering, and introduction. The approach <em>"follows patient's spontaneous sequence of ideas"</em> and allows practitioners to explore relevant topics while omitting unrelated ones based on situational context. This flexibility enables responses that better reflect real-life client behaviour.</p>
<h3>Behavioural Learning Context</h3>
<p>Interview approaches relate to broader principles of operant conditioning. Positive reinforcement strengthens desirable behaviours, negative reinforcement removes aversive stimuli, while positive and negative punishment aim to reduce unwanted behaviour — all relevant frameworks when assessing patient behaviour during clinical interviews.</p>`,
      },
      {
        slug: "summarize-research-findings-role-genetics-environment-development-psychological-disorders",
        question: "Summarize research findings on the role of genetics and environment in the development of psychological disorders.",
        answer: `<p>Research in behaviour genetics demonstrates that personality traits and psychological disorders stem from both biological and environmental influences. Intelligence and personality serve as common examples studied through family genetic research, twin studies, and adoption analyses.</p>
<h3>Genetic Factors</h3>
<p>Scientists examine family relationships where <em>"children share 50% of the genes, while twins share 100% of their genes."</em> Twin studies help disentangle genetic from environmental effects by comparing identical (monozygotic) and fraternal (dizygotic) twins.</p>
<h3>Environmental Factors</h3>
<p>Environmental components split into:</p>
<ul>
<li><strong>Shared environment:</strong> Experiences common to siblings raised together</li>
<li><strong>Non-shared environment:</strong> Unique experiences specific to each individual</li>
</ul>
<h3>Key Findings</h3>
<p>Psychological characteristics result from complex gene-environment interactions rather than single genes. The evidence shows both genetics and environment function together synergistically in shaping personality and behaviour. However, shared environmental factors appear less significant than individual environmental experiences and genetic predisposition in determining psychological outcomes.</p>`,
      },
      {
        slug: "evidence-based-practices",
        question: "What is Evidence Based Practices (EBP) in clinical settings?",
        answer: `<p>Evidence Based Practices (EBP) represents a shift toward more systematic approaches in healthcare. Traditional clinical practice relied heavily on personal experience and intuition, with estimates suggesting only 19% of medical practices were actually grounded in scientific research.</p>
<h3>Definition</h3>
<p><em>"Evidence-based clinical practice is an approach to decision making in which the clinician uses the best evidence available, in consultation with the patient, to decide upon the option which suits that patient best"</em> (Gray, 1997).</p>
<p>An alternative characterisation describes it as an approach where healthcare providers understand the evidence relevant to their practice and recognise its strength.</p>
<h3>Core Principles</h3>
<p>EBP involves clinicians making informed decisions by integrating:</p>
<ul>
<li>Best available scientific evidence</li>
<li>Clinical expertise and experience</li>
<li>Patient values and preferences</li>
</ul>
<p>This framework emerged from efforts to bridge the significant gap between research findings and actual clinical implementation, with organisations like CSAT calling for stronger connections between practice and research.</p>`,
      },
      {
        slug: "controversies-evidence-based-practices",
        question: "Controversies on Evidence-based Practices",
        answer: `<p>The primary debate around Evidence-Based Practices centres on definitional ambiguity. As the literature states, <em>"There is still no consensus on what exactly constitutes evidence-based practices,"</em> despite the term's widespread use in recent years.</p>
<h3>Key Controversies</h3>
<p><strong>1. Lack of Standards:</strong> There is disagreement about which evidence levels qualify, what types of evidence are necessary, and how much evidence is required for effective practice.</p>
<p><strong>2. Research-to-Practice Gap:</strong> While randomised controlled trials and carefully conducted research demonstrate effectiveness, these findings often <em>"do not meet the practical considerations, thus leading to inapplicability in the field of practical settings."</em></p>
<p><strong>3. Definition Inconsistencies:</strong> The NCLB definition encompasses both qualitative and quantitative evidence but fails to specify which approach answers particular questions best, and lacks validation standards for evidence-based interventions.</p>
<p><strong>4. Real-World Application Challenges:</strong> Research results must be adapted to actual settings while accounting for individual variation, including patient age, environmental factors, and genetic differences — creating tension between controlled study conditions and practical implementation.</p>
<p>Ultimately, the field lacks consensus on evidence standardisation and practical applicability.</p>`,
      },
    ],
  },
  {
    slug: "economic",
    title: "Economics",
    icon: "💹",
    color: "#7c3aed",
    desc: "Economic growth, public policy, geopolitical analysis, and social welfare.",
    items: [
      {
        slug: "major-reasons-differences",
        question: "What are the major reasons for economic differences in Southeast Asia?",
        answer: `<p>Several key factors explain why some Southeast Asian nations like Singapore and Thailand prospered while others lagged:</p>
<h3>Natural Resources & Initial Conditions</h3>
<p>Countries with petroleum, tin, timber, and rubber reserves leveraged these assets to generate government revenue and fund development programmes.</p>
<h3>Government Policies</h3>
<p><em>"Investment in rural infrastructure, widespread access to basic education and health services"</em> combined with export-oriented strategies that created employment opportunities across the region.</p>
<h3>Education</h3>
<p>Expanded primary and secondary enrollment reduced socioeconomic inequality and significantly contributed to economic growth, spurring further educational investment in a virtuous cycle.</p>
<h3>Trade Policy</h3>
<p>ASEAN's formation in 1967 established <em>"free trade among the members...with virtually no traffic barriers,"</em> facilitating regional commerce and economic integration among member states.</p>
<p>These combined factors — resource advantages, strategic government investment, human capital development, and trade liberalisation — created divergent economic trajectories across Southeast Asian nations.</p>`,
      },
      {
        slug: "connections-can-drawn-east-asias-high-economic-growth-rates-confucian-heritage",
        question: "What connections can be drawn between East Asia's high economic growth rates and its Confucian heritage?",
        answer: `<p>Confucianism, derived from the teachings of the Chinese philosopher Confucius, influences China, Korea, and Taiwan through shared cultural elements including family values, community solidarity, paternalism, entrepreneurship, state coordination, and educational emphasis.</p>
<h3>Key Connections to Economic Growth</h3>
<p><strong>Educational Focus:</strong> Kahn (1979) first argued that <em>"Confucianism could be consistent with economic growth; particularly its emphasis on education."</em></p>
<p><strong>Organisational Harmony:</strong> South Korea demonstrates how traditional Confucian principles — such as respect for education and <em>"family-like harmony in Chaebol Corporation"</em> — combined with modern technology to enhance economic performance.</p>
<p><strong>Trust and Relations:</strong> <em>"High levels of trust are conducive to economic growth,"</em> citing evidence that this trust correlates with close relationships in East Asian nations, supporting their economic expansion.</p>
<p><strong>Hierarchical Structure:</strong> Confucian emphasis on harmony and hierarchy, where <em>"those below should obey those above,"</em> aligned with family-firm dominance in East Asian economies.</p>
<p><strong>Policy Flexibility:</strong> Confucianism shaped industrialisation policies in Japan and South Korea by adapting to "local circumstances and political ideology through flexible manner," enabling interventionist economic measures.</p>`,
      },
      {
        slug: "briefly-identify-two-advantages-two-disadvantages-united-states-becoming-involved-state-building-iraq",
        question: "Briefly identify two advantages and two disadvantages of the United States becoming involved in state-building in Iraq.",
        answer: `<h3>Advantages</h3>
<p><strong>1. Security and Stability:</strong> Removal of Saddam Hussein's regime and elimination of weapons of mass destruction could foster internal stability and regional peace while potentially ensuring steady oil production and reduced regional tensions.</p>
<p><strong>2. Democratic Governance:</strong> The opportunity to establish predictable governance structures in Iraq that could benefit regional relations and create a model for democratic transition in the Middle East.</p>
<h3>Disadvantages</h3>
<p><strong>1. Damaged Civil Society:</strong> Iraq's civil society infrastructure had been severely damaged under Hussein's dictatorship, compounded by deep-rooted political conflicts, crime, and lawlessness requiring extensive and costly rebuilding efforts.</p>
<p><strong>2. Knowledge Gaps and Humanitarian Crisis:</strong> The United States faced significant knowledge gaps regarding Iraq's internal political dynamics and lacked consensus on Iraq's future governmental structure. Additionally, Iraq's humanitarian crisis — including high child mortality, inadequate medical services, and poor sanitation — presented formidable challenges requiring substantial resources and long-term commitment.</p>`,
      },
      {
        slug: "united-states-spends-40-governmental-expenditures-social-welfare-health-programs-less-many-democratic-countries-us-spend-less-social-welf",
        question: "Should the United States increase spending on social welfare and health programs?",
        answer: `<p>The argument supports that the US should <strong>increase</strong> social welfare spending. Key considerations include:</p>
<h3>Current Spending Context</h3>
<p>The United States spends more than 40% including military on social and health programs, which remains lower than comparable democratic nations. Existing programmes include Old-Age, Survivors and Disability Insurance (OASDI), Medicare, Medicaid, Supplementary Security Income (SSI), and Temporary Assistance for Needy Families (TANF).</p>
<h3>Employment Argument</h3>
<p><em>"Government Expenditure on defense would create fewer job opportunities than on social welfare programs."</em> Defense jobs are mostly limited to civilian Pentagon employees, whereas social welfare spending distributes economic activity more broadly across the economy.</p>
<h3>International Comparison</h3>
<p>The Canadian government allocates significantly more resources to medical care and social programs than the US, resulting in better population health outcomes and lower administrative costs through unified coverage systems.</p>
<h3>Conclusion</h3>
<p>To generate additional employment opportunities and improve social outcomes, <em>"the government needs to spend more than the current level in social welfare and health programs."</em></p>`,
      },
    ],
  },
  {
    slug: "psychology",
    title: "Psychology",
    icon: "🧠",
    color: "#b45309",
    desc: "Stress, phobias, cognitive distortions, substance abuse, and sleep disorders.",
    items: [
      {
        slug: "explain-causes-symptoms-effects-general-adaptation-syndrome",
        question: "Explain the causes, symptoms, and effects of the general adaptation syndrome.",
        answer: `<p>General Adaptation Syndrome (GAS) is a physiological response sequence to prolonged stress, as described by endocrinologist Hans Selye. The condition progresses through three distinct stages:</p>
<h3>The Three Stages</h3>
<p><strong>1. Alarm Stage:</strong> The initial response when a stressor occurs, characterised by the "fight or flight response" — rapid heart rate, adrenaline release, and heightened alertness.</p>
<p><strong>2. Resistance Stage:</strong> Where situational stress resolves and the body attempts to return to a non-stressed state through adaptation and coping mechanisms.</p>
<p><strong>3. Exhaustion Stage:</strong> The final stage where prolonged, unrelieved stress leads to serious health consequences as the body's adaptive reserves are depleted.</p>
<h3>Symptoms</h3>
<p>Fatigue, irritability, concentration difficulties, sleep disturbances, hair loss, mouth and throat dryness, anxiety, frequent urination, migraines, depression, and feelings of hopelessness.</p>
<h3>Primary Cause and Effects</h3>
<p><em>"Stress is one of the important causes of the GAS. The unrelieved stress could result in the manifestation of several symptoms mentioned above."</em> The syndrome leads to elevated cortisol hormone levels — a hallmark of chronic stress. Treatment approaches focus on stress reduction and complementary therapies like aromatherapy, mindfulness, and cognitive-behavioural interventions.</p>`,
      },
      {
        slug: "explain-phobias-describing-common-features-also-describe-specific-phobia-social-phobia-agoraphobia",
        question: "Explain what phobias are, describing their common features. Also describe specific phobia, social phobia, and agoraphobia.",
        answer: `<h3>What is a Phobia?</h3>
<p>Phobias represent <em>"irrational fear which has been attached symbolically to a situation or an object"</em> that may pose actual danger or minimal/no danger. Individuals experiencing phobias demonstrate strong avoidance behaviours accompanied by intense anxiety, panic, or feelings of lost control.</p>
<h3>Common Features</h3>
<p>Phobias typically originate during childhood, establishing deep-seated fear responses. While multiple phobia types exist, they remain generally underreported as individuals develop coping mechanisms to avoid feared situations.</p>
<h3>Specific Phobia</h3>
<p>This category encompasses <em>"fear of a particular situation or an object such as intense fear of dogs, or flying or heights."</em> Classifications include environmental phobias (water, thunder, heights), animal-related phobias, blood/injury/needle concerns, and situational types (flying, elevators, enclosed spaces).</p>
<h3>Social Phobia (Social Anxiety Disorder)</h3>
<p>This involves fear regarding others' perceptions during social or public settings. Individuals worry about being judged, noticed, or negatively evaluated by others — such as experiencing severe discomfort when attending social gatherings or speaking in public.</p>
<h3>Agoraphobia</h3>
<p>Characterised as persistent fear of environments and situations one cannot easily escape from. Examples include fear of open spaces, crowds, public transport, or being outside the home alone — often leading to significant lifestyle restriction.</p>`,
      },
      {
        slug: "explain-culture-bound-syndromes-describe-features-koro-chat-syndromes",
        question: "Explain what culture-bound syndromes are and describe the features of Koro and Dhat syndromes.",
        answer: `<h3>What are Culture-Bound Syndromes?</h3>
<p>Culture-bound syndromes represent mental health conditions that manifest distinctly within particular cultural contexts. These are <em>"episodic and dramatic reactions specific to a particular community — locally defined as discrete patterns of behaviour."</em> They illustrate how cultural frameworks and traditional medical systems substantially influence the presentation and experience of psychological distress.</p>
<h3>Koro Syndrome</h3>
<p>Koro predominantly affects individuals in Chinese, Malaysian, and UK populations. The condition involves anxiety related to semen loss, coupled with sexual dysfunction and impotence in men. In female presentations, patients experience distressing beliefs about breast and vulva recession. This syndrome appears rooted in traditional health beliefs regarding vital fluid loss.</p>
<h3>Dhat Syndrome</h3>
<p>Dhat syndrome is documented primarily in South Asian countries including India and Pakistan, typically emerging in young men aged 20–38 years. Sufferers report anxiety stemming from perceived semen loss in urine, alongside physical symptoms including weakness, appetite loss, and sleep disturbances. The condition relates to Ayurvedic principles concerning elemental imbalances and vital energy conservation.</p>
<p>Both syndromes illustrate how cultural frameworks and traditional medical systems substantially influence the presentation and experience of psychological distress across different populations.</p>`,
      },
      {
        slug: "identify-briefly-explain-ten-cognitive-distortions-enumerated-burns",
        question: "Identify and briefly explain the ten cognitive distortions enumerated by Burns.",
        answer: `<p>Psychologist David Burns identified ten forms of "twisted thinking" that create mental difficulties and contribute to depression and anxiety:</p>
<ol>
<li><strong>All-or-Nothing Thinking:</strong> Viewing situations in absolute black-and-white categories, where a minor shortfall equals total failure.</li>
<li><strong>Overgeneralization:</strong> Treating a single negative event as part of an endless pattern of defeat based on limited evidence.</li>
<li><strong>Mental Filter:</strong> Focusing exclusively on one negative detail while ignoring everything else — like a drop of ink darkening a glass of water.</li>
<li><strong>Disqualifying the Positive:</strong> Rejecting positive experiences while maintaining negative beliefs despite contradicting evidence.</li>
<li><strong>Jumping to Conclusions:</strong> Making negative interpretations without sufficient factual support — includes mind reading and fortune telling.</li>
<li><strong>Mind Reading:</strong> Assuming someone thinks negatively of you without verification or evidence.</li>
<li><strong>Fortuneteller Error:</strong> Assuming negative outcomes are predetermined facts based on prior predictions.</li>
<li><strong>Magnification / Minimization:</strong> Exaggerating problems while shrinking positive qualities (the "binocular trick").</li>
<li><strong>Emotional Reasoning:</strong> Treating emotions as evidence: <em>"I feel it, therefore it must be true."</em></li>
<li><strong>Should Statements:</strong> Using "musts" and "shoulds" as motivation, generating guilt and resentment when expectations are unmet.</li>
</ol>
<p><strong>Bonus:</strong> Burns also described <strong>Labeling/Mislabeling</strong> (attaching negative labels rather than describing specific behaviours) and <strong>Personalization</strong> (accepting responsibility for external events beyond your control).</p>`,
      },
      {
        slug: "explain-biological-psychodynamic-learning-cognitive-socio-cultural-approaches-substance-abuse-dependence",
        question: "Explain the biological, psychodynamic, learning, cognitive, and socio-cultural approaches to substance abuse and dependence.",
        answer: `<p>Five theoretical frameworks explain substance abuse and dependence, each offering different treatment implications:</p>
<h3>Biological Approach</h3>
<p>This perspective explains physiological dependence mechanisms through biological pathways, treating substance abuse as a disease process. Treatment includes detoxification, medications like methadone and naloxone, and nicotine replacement therapy.</p>
<h3>Psychodynamic Approach</h3>
<p>Theorists view excessive drinking and smoking as <em>"signs of oral fixation,"</em> rooted in unresolved inner conflicts from childhood that require therapeutic exploration through psychoanalytic methods.</p>
<h3>Learning Approach</h3>
<p>This framework conceptualises substance abuse as <em>"learned patterns of behaviour"</em> that can be modified through behavioural intervention techniques including conditioning, reward restructuring, and relapse prevention training.</p>
<h3>Cognitive Approach</h3>
<p>This perspective examines how <em>"attitudes, expectancies, and beliefs"</em> influence substance use patterns, with treatment focusing on cognitive-behavioural techniques and identifying high-risk thought patterns.</p>
<h3>Sociocultural Approach</h3>
<p>This approach emphasises cultural values, religious prohibitions against excessive drinking, and social influences like peer pressure as factors shaping addiction rates across different demographic groups.</p>
<p>Treatment strategies vary by approach, ranging from biological interventions and support groups to behavioural modification, cognitive restructuring, and skill-building exercises addressing high-risk situations.</p>`,
      },
      {
        slug: "describe-features-major-types-dyssomnias-primary-insomnia-primary-hypersomnia-narcolepsy-breathing-related-sleep-disorder-circadian-rhythm-sleep-disorder",
        question: "Describe the features of the major types of dyssomnias.",
        answer: `<p>Dyssomnias encompass a range of sleep disorders characterised by difficulties in obtaining adequate sleep, including trouble falling asleep, maintaining sleep, or achieving restorative rest.</p>
<h3>Primary Insomnia</h3>
<p>Involves difficulty initiating or maintaining sleep unrelated to other conditions. Key features include <em>"unrealistic expectations about sleep"</em> and the perception that sleep loss creates greater disruption than is typical for the individual.</p>
<h3>Primary Hypersomnia</h3>
<p>Represents excessive daytime sleeping unconnected to other disorders. Individuals report sleeping throughout the day while also being able to <em>"sleep throughout the night,"</em> indicating a disrupted sleep-wake regulatory system.</p>
<h3>Narcolepsy</h3>
<p>Features uncontrollable daytime sleepiness often triggered by emotions. Characteristics include sleep paralysis, hypnagogic hallucinations, cataplexy (sudden muscle weakness triggered by emotion), and persistent daytime drowsiness requiring medical treatment.</p>
<h3>Breathing-Related Sleep Disorder</h3>
<p>Involves restricted airflow or breathing interruptions during sleep. Features include snoring, <em>"morning headache, occurrence of sweat during sleep, frequent awake"</em> episodes, and minimal awareness of apnea occurrences by the sufferer.</p>
<h3>Circadian Rhythm Sleep Disorder</h3>
<p>Results from the brain's inability to synchronise internal timing with day-night cycles. Manifestations include jet lag from time zone changes, sleep disruptions from shift work, and various phase disorders affecting the timing of the sleep-wake cycle.</p>`,
      },
      {
        slug: "importance-peer-review-scholarly-journals-scholar-practitioner",
        question: "Importance of peer-review of scholarly journals to a scholar-practitioner.",
        answer: `<p>Peer-review of scholarly journals holds significant value for scholar-practitioners and researchers. Scholarly knowledge is communicated primarily through academic journals and research conferences designed for scholars and academicians.</p>
<h3>Core Purpose</h3>
<p>The peer-review process involves disseminating original research and experimental findings to practitioners and researchers within the same field of interest, ensuring quality control through expert evaluation before publication.</p>
<h3>Three Essential Elements of Peer-Reviewed Journals</h3>
<ul>
<li>They relate to academic studies and scholarly inquiry</li>
<li>They demonstrate research methods and scholarly approaches</li>
<li>They reflect the researcher's professional standards and ethical conduct</li>
</ul>
<h3>Practical Value for Practitioners</h3>
<p>For practitioners, these journals provide critical information through citations that include <em>"title, date and year of publishing, authors, and the information source."</em> Additionally, journals offer abstracts that summarise full texts, giving readers quick overviews of content. Access varies — some articles are freely available while others require subscription access.</p>
<p>This structured format ensures that practitioners can quickly locate relevant information, understand research methodologies, and access authoritative sources within their discipline, making peer-reviewed journals indispensable for evidence-based practice and ongoing professional development.</p>`,
      },
      {
        slug: "revenue-models-social-networking-sites",
        question: "What are the revenue models for social networking sites?",
        answer: `<p>Social networking sites employ three primary revenue approaches:</p>
<h3>1. Advertising Models</h3>
<p>Sites display banner advertisements and utilise affiliate models where they receive referral fees or sales percentages. <em>"Advertising is one of the important areas to be focused, where it helps to create revenue generation."</em> This includes targeted display ads, sponsored content, and pay-per-click arrangements with third-party advertisers.</p>
<h3>2. Subscription Models</h3>
<p>Platforms offer tiered access where <em>"users are subscribed fee for access to all its offerings or for some, and only the basic features are free for them to use, others are charged."</em> Premium tiers typically unlock advanced features, greater storage, or enhanced privacy controls.</p>
<h3>3. Transaction Models</h3>
<p>Companies earn revenue by facilitating purchases of digital goods and services on their platform, such as virtual gifts, digital currency, in-app purchases, and marketplace transactions.</p>
<h3>Evolution of Revenue Models</h3>
<p>Early-stage networks initially operated without charging fees until reaching critical mass. Once membership grew substantially, <em>"models of subscriptions have been introduced"</em> along with paid features like premium membership tiers that unlock additional functionality — reflecting the freemium model widely adopted across the industry.</p>`,
      },
      {
        slug: "american-society-training-development",
        question: "What is the American Society for Training and Development (ASTD)?",
        answer: `<p>The <strong>American Society for Training and Development (ASTD)</strong> — now known as the Association for Talent Development (ATD) — is an organisation established in 1943 with the mission of creating <em>"the world that works better"</em> through exceptional learning and performance. It operates in 100 countries with 130 local US chapters and 30 international chapters.</p>
<h3>Key Roles</h3>
<p><strong>1. Knowledge Sharing Forum:</strong> The ASTD <em>"brings experts of a similar field together so that they can share and develop ideas through conferences, workshops, and online services,"</em> fostering professional community and collaboration.</p>
<p><strong>2. Learning Resource Platform:</strong> Provides comprehensive resources for professional development through centralised access to research, tools, and best practices in workplace learning.</p>
<p><strong>3. Public Policy Influence:</strong> Plays a significant role in formulating public policies related to workforce development and advocates for the field to media, governments, and the broader public.</p>
<p><strong>4. Professional Certification:</strong> Offers the Certified Professional in Learning and Performance (CPLP) programme — an important credential for workplace learning professionals that validates expertise in training design, delivery, and evaluation.</p>
<p>The organisation is dedicated to helping professionals advance their skills and knowledge in workplace settings, benefiting both individual career development and organisational performance outcomes.</p>`,
      },
    ],
  },
];

export function getSubject(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}

export function getQAItem(subjectSlug: string, questionSlug: string): QAItem | undefined {
  return getSubject(subjectSlug)?.items.find((i) => i.slug === questionSlug);
}
