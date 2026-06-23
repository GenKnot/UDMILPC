import type { Locale } from "@/content/site-content";

type Item = { title: string; description: string };

export type UniversityPathwayContent = {
  hero: { eyebrow: string; title: string; description: string; slogans: string[]; actions: string[] };
  definition: { label: string; title: string; description: string; lead: string; skills: string[] };
  reasons: { label: string; title: string; description: string; items: Item[] };
  outcomes: { label: string; title: string; description: string; items: Item[] };
  structure: { label: string; title: string; description: string; items: Item[] };
  environment: { label: string; title: string; description: string; benefits: string[]; slogans: string[] };
  audience: { label: string; title: string; description: string; items: Item[] };
  model: { label: string; title: string; description: string; steps: string[] };
  montreal: { label: string; title: string; description: string; advantages: Item[] };
  cta: { label: string; title: string; description: string; actions: string[] };
};

export const universityPathwayContent: Record<Locale, UniversityPathwayContent> = {
  en: {
    hero: {
      eyebrow: "University Pathway Program · UdeM Brossard Campus",
      title: "Your Pathway to Higher Education",
      description: "University success begins long before the first lecture. Our structured pathway combines language development, academic preparation, and university-readiness training so international students can enter Canadian higher education with confidence, practical skills, and a clear plan.",
      slogans: ["Build the Foundation", "Develop the Skills", "Achieve Your Goals"],
      actions: ["Apply Now", "Request Information"],
    },
    definition: {
      label: "What is a University Pathway Program?",
      title: "More than language preparation.",
      lead: "A language score may open the application door. It does not, by itself, teach a student how to succeed once classes begin.",
      description: "The University Pathway Program bridges the gap between language learning and degree-level study. Students practise the real work of university in a supportive environment, receiving clear instruction, feedback, and increasingly independent assignments.",
      skills: ["Analyze complex ideas", "Conduct academic research", "Write university-level assignments", "Participate in seminars", "Manage independent learning", "Collaborate across cultures"],
    },
    reasons: {
      label: "Why students choose a pathway program",
      title: "A stronger transition into Canadian higher education.",
      description: "Moving into a new academic system means learning new expectations as well as new content. The pathway year makes that transition visible, practical, and manageable.",
      items: [
        { title: "Adapt to Canadian higher education", description: "Understand course outlines, assessment criteria, office hours, seminar expectations, academic policies, and the responsibilities of an independent university student." },
        { title: "Strengthen academic communication", description: "Read demanding texts, take useful notes, build evidence-based arguments, contribute to discussions, and present ideas with clarity." },
        { title: "Improve learning strategies", description: "Use weekly planning, time management, active reading, revision systems, exam preparation, and reflective learning to work more effectively." },
        { title: "Build confidence", description: "Complete authentic academic tasks, learn from feedback, and enter future studies already familiar with the rhythm and expectations of university life." },
      ],
    },
    outcomes: {
      label: "Core learning outcomes",
      title: "The capabilities students carry into future study.",
      description: "By the end of the program, students can approach university work with stronger judgment, communication, organization, and academic responsibility.",
      items: [
        { title: "Academic writing", description: "Plan, draft, revise, and present structured arguments supported by credible evidence and appropriate academic style." },
        { title: "Research skills", description: "Form research questions, search scholarly databases, evaluate sources, synthesize findings, and document research decisions." },
        { title: "Critical thinking", description: "Distinguish claims from evidence, compare perspectives, identify assumptions, and formulate independent conclusions." },
        { title: "Presentation skills", description: "Organize and deliver confident presentations, respond to questions, and communicate complex ideas to different audiences." },
        { title: "Intercultural communication", description: "Collaborate respectfully across languages and cultures while adapting to different communication and teamwork styles." },
        { title: "Academic integrity", description: "Use quotation, paraphrase, citation, and responsible research practices to produce original and ethical academic work." },
      ],
    },
    structure: {
      label: "Program structure",
      title: "A comprehensive, applied learning experience.",
      description: "Six integrated areas connect language, academic performance, collaboration, and practical preparation for the first year of university.",
      items: [
        { title: "Language development", description: "French and English communication with targeted vocabulary, accuracy, fluency, and comprehension for academic contexts." },
        { title: "Academic communication", description: "Critical reading, note-taking, essay writing, seminar discussion, and formal presentation." },
        { title: "University learning strategies", description: "Time management, goal setting, exam preparation, independent learning, and productive use of feedback." },
        { title: "Research & analysis", description: "Information literacy, scholarly sources, research design, data interpretation, argument, and citation." },
        { title: "Collaborative projects", description: "Interdisciplinary team assignments that develop leadership, accountability, negotiation, and project communication." },
        { title: "University success workshops", description: "Practical sessions on campus systems, academic advising, wellbeing, career planning, and the transition to future study." },
      ],
    },
    environment: {
      label: "Learning within a university environment",
      title: "Experience university before university.",
      description: "Students study at the Université de Montréal Brossard Campus, where university-level expectations are part of everyday learning. Modern classrooms, collaborative spaces, academic events, and direct interaction with advisors make the next stage feel familiar rather than distant.",
      benefits: ["Become familiar with university culture", "Build confidence in academic settings", "Develop independence and responsibility", "Prepare for future academic success"],
      slogans: ["Learn Like a University Student", "Think Like a University Student", "Succeed Like a University Student"],
    },
    audience: {
      label: "Who should apply?",
      title: "Designed for future university students.",
      description: "The program is suited to motivated learners who want a stronger academic transition, whether they are arriving directly from secondary school or adapting to a new country and education system.",
      items: [
        { title: "International students", description: "Students preparing to enter a Canadian college or university and seeking a confident transition into local academic culture." },
        { title: "Secondary school graduates", description: "Graduates who want additional academic preparation, stronger study habits, and time to clarify their future direction." },
        { title: "Students changing education systems", description: "Learners adapting to new teaching methods, assessment practices, expectations, languages, or classroom cultures." },
        { title: "Future leaders and professionals", description: "Ambitious students committed to developing the communication, judgment, collaboration, and independence required for long-term success." },
      ],
    },
    model: {
      label: "Student success model",
      title: "Every stage prepares the student for what follows.",
      description: "The program is built around a continuous progression: communication becomes academic capability, academic capability becomes university readiness, and readiness becomes long-term achievement.",
      steps: ["Language Development", "Academic Preparation", "University Readiness", "Higher Education Success", "Professional Achievement"],
    },
    montreal: {
      label: "The advantage of studying in Montréal",
      title: "A global city built for learning, culture, and possibility.",
      description: "Montréal gives international students the rare opportunity to study in two global languages while building a network in one of Canada's most creative and research-intensive cities.",
      advantages: [
        { title: "Bilingual environment", description: "Use French in Québec life and English across international study, research, business, and technology." },
        { title: "International diversity", description: "Live and learn among communities, languages, traditions, and perspectives from around the world." },
        { title: "World-class universities", description: "Join a city shaped by major universities, research institutes, libraries, and an active student population." },
        { title: "Innovation and research", description: "Discover ecosystems in artificial intelligence, aerospace, life sciences, engineering, design, and creative industries." },
        { title: "Welcoming student community", description: "Build friendships and independence in a city known for culture, public transportation, festivals, and student life." },
      ],
    },
    cta: {
      label: "Your future starts here",
      title: "Take the next step toward university success.",
      description: "The University Pathway Program is more than preparation. It is a guided investment in the way you will learn, communicate, and succeed throughout higher education and beyond.",
      actions: ["Apply Now", "Speak with an Advisor", "Request Information"],
    },
  },
  fr: {
    hero: { eyebrow: "Programme de parcours universitaire · Campus UdeM de Brossard", title: "Votre parcours vers les études supérieures", description: "La réussite commence bien avant le premier cours. Notre parcours structuré combine développement linguistique, préparation académique et formation aux exigences universitaires afin que les étudiants internationaux abordent les études canadiennes avec confiance et méthode.", slogans: ["Construire les fondements", "Développer les compétences", "Atteindre ses objectifs"], actions: ["Faire une demande", "Demander de l'information"] },
    definition: { label: "Qu'est-ce qu'un programme de parcours universitaire?", title: "Bien plus qu'une préparation linguistique.", lead: "Un résultat linguistique peut ouvrir la porte d'une demande d'admission. Il n'enseigne pas, à lui seul, comment réussir une fois les cours commencés.", description: "Le programme comble l'écart entre l'apprentissage d'une langue et les études universitaires. Dans un milieu accompagné, les étudiants réalisent de véritables tâches académiques et gagnent progressivement en autonomie.", skills: ["Analyser des idées complexes", "Mener une recherche académique", "Rédiger des travaux universitaires", "Participer aux séminaires", "Gérer l'apprentissage autonome", "Collaborer entre cultures"] },
    reasons: { label: "Pourquoi choisir un parcours", title: "Une transition plus solide vers l'enseignement supérieur canadien.", description: "Entrer dans un nouveau système signifie apprendre de nouvelles attentes autant que de nouveaux contenus.", items: [{ title: "S'adapter aux études canadiennes", description: "Comprendre les plans de cours, critères d'évaluation, séminaires, politiques et responsabilités de l'étudiant autonome." }, { title: "Renforcer la communication académique", description: "Lire des textes exigeants, prendre des notes, construire un argument et présenter ses idées clairement." }, { title: "Améliorer les stratégies d'apprentissage", description: "Utiliser planification, gestion du temps, lecture active, révision, préparation aux examens et réflexion." }, { title: "Bâtir la confiance", description: "Réaliser des tâches authentiques, apprendre de la rétroaction et connaître le rythme de la vie universitaire." }] },
    outcomes: { label: "Résultats d'apprentissage", title: "Des compétences à conserver tout au long des études.", description: "Les étudiants abordent le travail universitaire avec plus de jugement, de clarté, d'organisation et de responsabilité.", items: [{ title: "Rédaction académique", description: "Planifier, rédiger et réviser des arguments structurés, fondés sur des sources crédibles." }, { title: "Compétences de recherche", description: "Formuler des questions, trouver et évaluer des sources, synthétiser et documenter la recherche." }, { title: "Pensée critique", description: "Distinguer affirmations et preuves, comparer les perspectives et formuler une conclusion indépendante." }, { title: "Présentation", description: "Présenter avec assurance, répondre aux questions et expliquer des idées complexes." }, { title: "Communication interculturelle", description: "Collaborer avec respect entre langues, cultures et styles de travail." }, { title: "Intégrité académique", description: "Citer, paraphraser et produire un travail original selon des pratiques responsables." }] },
    structure: { label: "Structure du programme", title: "Une expérience complète fondée sur la pratique.", description: "Six domaines relient langues, performance académique, collaboration et préparation à la première année universitaire.", items: [{ title: "Développement linguistique", description: "Français et anglais, vocabulaire, précision, fluidité et compréhension en contexte académique." }, { title: "Communication académique", description: "Lecture critique, prise de notes, rédaction, discussion et présentation." }, { title: "Stratégies universitaires", description: "Gestion du temps, objectifs, examens, autonomie et utilisation de la rétroaction." }, { title: "Recherche et analyse", description: "Littératie informationnelle, sources savantes, données, argumentation et citation." }, { title: "Projets collaboratifs", description: "Travaux d'équipe interdisciplinaires développant leadership, responsabilité et négociation." }, { title: "Ateliers de réussite", description: "Campus, orientation, bien-être, carrière et transition vers les études futures." }] },
    environment: { label: "Apprendre dans un milieu universitaire", title: "Vivez l'université avant l'université.", description: "Au campus de Brossard de l'Université de Montréal, les attentes universitaires font partie de l'apprentissage quotidien. Salles modernes, espaces collaboratifs, activités académiques et conseils rendent la prochaine étape familière.", benefits: ["Découvrir la culture universitaire", "Gagner en confiance dans un cadre académique", "Développer autonomie et responsabilité", "Préparer la réussite future"], slogans: ["Apprendre comme un étudiant universitaire", "Penser comme un étudiant universitaire", "Réussir comme un étudiant universitaire"] },
    audience: { label: "À qui s'adresse le programme?", title: "Conçu pour les futurs étudiants universitaires.", description: "Pour les apprenants motivés qui souhaitent une transition académique plus solide, après le secondaire ou lors d'un changement de pays et de système éducatif.", items: [{ title: "Étudiants internationaux", description: "Se préparer à entrer dans un collège ou une université canadienne et à comprendre la culture académique locale." }, { title: "Diplômés du secondaire", description: "Renforcer la préparation, les méthodes d'étude et la clarté du projet d'avenir." }, { title: "Étudiants changeant de système", description: "S'adapter à de nouvelles méthodes, évaluations, attentes, langues ou cultures de classe." }, { title: "Futurs leaders et professionnels", description: "Développer communication, jugement, collaboration et autonomie pour réussir à long terme." }] },
    model: { label: "Modèle de réussite étudiante", title: "Chaque étape prépare celle qui suit.", description: "La communication devient compétence académique, puis préparation universitaire et enfin réussite durable.", steps: ["Développement linguistique", "Préparation académique", "Préparation universitaire", "Réussite dans le supérieur", "Accomplissement professionnel"] },
    montreal: { label: "L'avantage d'étudier à Montréal", title: "Une ville mondiale de savoir, de culture et de possibilités.", description: "Montréal permet d'étudier dans deux langues mondiales et de bâtir un réseau dans l'une des villes les plus créatives et axées sur la recherche au Canada.", advantages: [{ title: "Milieu bilingue", description: "Utiliser le français au Québec et l'anglais dans les études, la recherche et la technologie." }, { title: "Diversité internationale", description: "Vivre parmi des communautés, langues, traditions et perspectives du monde entier." }, { title: "Universités de calibre mondial", description: "Évoluer dans une ville façonnée par de grandes universités et une importante population étudiante." }, { title: "Innovation et recherche", description: "Découvrir l'IA, l'aérospatiale, les sciences de la vie, l'ingénierie et les industries créatives." }, { title: "Communauté accueillante", description: "Créer des liens dans une ville reconnue pour la culture, le transport et la vie étudiante." }] },
    cta: { label: "Votre avenir commence ici", title: "Faites le prochain pas vers la réussite universitaire.", description: "Le programme est plus qu'une préparation : c'est un investissement guidé dans votre manière d'apprendre, de communiquer et de réussir.", actions: ["Faire une demande", "Parler à un conseiller", "Demander de l'information"] },
  },
  zh: {
    hero: { eyebrow: "大学衔接项目 · 蒙大 Brossard 校区", title: "为进入加拿大高等教育，打下真正扎实的基础。", description: "大学成功并不只取决于语言成绩。项目将语言提升、学术训练与大学适应能力融为一体，帮助国际学生更自信、更有方法地进入下一阶段学习。", slogans: ["夯实基础", "建立方法", "迈向目标"], actions: ["立即申请", "索取课程资料"] },
    definition: { label: "什么是大学衔接项目？", title: "它不是普通语言班，而是进入大学前的系统准备。", lead: "语言成绩可以打开申请的大门，但真正进入课堂后，学生还需要阅读、研究、写作、讨论和独立管理学习的能力。", description: "大学衔接项目正是为了补上这一段关键过渡。学生将在有支持的环境中完成真实大学学习任务，通过清晰教学、持续反馈和逐步提高的学术要求，建立进入高等教育所需的成熟能力。", skills: ["分析复杂观点", "开展学术研究", "撰写大学级论文", "参与课堂讨论", "管理自主学习", "开展跨文化协作"] },
    reasons: { label: "为什么选择大学衔接项目", title: "让进入加拿大大学这一步，更稳、更清晰。", description: "面对新的教育体系，学生需要适应的不只是知识内容，还有课堂文化、学术规范、评价方式和独立学习责任。", items: [{ title: "适应加拿大高等教育", description: "理解课程大纲、评分标准、教授沟通、研讨课要求、学术政策及大学生应承担的责任。" }, { title: "强化学术沟通", description: "阅读高难度材料、有效记笔记、形成循证论证，并在讨论和展示中清晰表达。" }, { title: "优化学习策略", description: "通过周计划、时间管理、主动阅读、复习系统、考试准备和反思学习提升效率。" }, { title: "建立学习信心", description: "在真实学术任务中不断获得反馈和进步，提前熟悉大学学习节奏。" }] },
    outcomes: { label: "核心学习成果", title: "把这些能力，真正带进未来的大学课堂。", description: "完成项目后，学生将以更成熟的判断力、表达力、组织力和学术责任感面对大学任务。", items: [{ title: "学术写作", description: "规划、起草、修改并完成结构严谨、证据充分、符合规范的论文。" }, { title: "研究技能", description: "提出研究问题、检索学术资料、评估来源、整合发现并记录研究过程。" }, { title: "批判性思维", description: "区分观点与证据，比较不同立场，识别假设并形成独立判断。" }, { title: "演讲表达", description: "组织内容、自信展示、回应问题，并向不同受众解释复杂观点。" }, { title: "跨文化沟通", description: "理解不同语言、文化和协作方式，在多元团队中有效合作。" }, { title: "学术诚信", description: "正确引用、转述和记录资料，以负责任的方式完成原创学术工作。" }] },
    structure: { label: "项目结构", title: "围绕大学真实要求设计的学习体验。", description: "六个相互连接的学习领域，把语言能力、学术表现、协作能力和大学第一年适应能力结合起来。", items: [{ title: "语言发展", description: "面向学术场景的英法沟通、专业词汇、准确表达、流利度与理解能力。" }, { title: "学术沟通", description: "批判阅读、课堂笔记、论文写作、研讨讨论与正式演讲。" }, { title: "大学学习策略", description: "时间管理、目标制定、考试准备、独立学习及有效运用反馈。" }, { title: "研究与分析", description: "信息素养、学术资料、研究设计、数据解释、论证与引用。" }, { title: "协作项目", description: "通过跨学科团队任务培养领导力、责任意识、协商能力和项目沟通能力。" }, { title: "大学成功工作坊", description: "围绕校园系统、学术指导、身心健康、职业规划和未来升学开展实用训练。" }] },
    environment: { label: "在大学环境中学习", title: "在进入大学之前，先习惯大学的学习方式。", description: "学生在蒙特利尔大学 Brossard 校区学习，大学级要求自然融入日常课程。现代教室、协作空间、学术活动和顾问互动，让未来大学生活不再陌生。", benefits: ["提前熟悉大学文化", "在学术环境中建立信心", "培养独立性与责任感", "为未来大学学习做好准备"], slogans: ["像大学生一样学习", "像大学生一样思考", "像大学生一样成长"] },
    audience: { label: "谁适合申请？", title: "为准备进入大学的学生而设计。", description: "适合希望获得更稳健学术过渡的学习者，无论是刚高中毕业，还是正在适应新的国家、语言和教育体系。", items: [{ title: "国际学生", description: "准备进入加拿大高校，希望更自信适应本地大学文化的学生。" }, { title: "高中毕业生", description: "希望加强学术准备、改善学习习惯，并进一步明确未来方向的毕业生。" }, { title: "转换教育体系的学生", description: "正在适应新的教学方法、评价方式、学术要求、语言环境或课堂文化的学习者。" }, { title: "未来领袖与专业人士", description: "希望培养长期发展所需沟通力、判断力、协作力和独立能力的进取学生。" }] },
    model: { label: "学生成功模型", title: "每一步都在为下一阶段铺路。", description: "语言能力逐步转化为学术能力，学术能力进一步形成大学准备，并最终支持长期学习与职业发展。", steps: ["语言发展", "学术准备", "大学准备", "顺利升学", "职业发展"] },
    montreal: { label: "在蒙特利尔学习的优势", title: "一座适合学习、生活与探索未来的国际城市。", description: "国际学生可以在英法双语环境中学习，并在加拿大最具创造力和研究活力的城市之一建立人脉、视野和职业想象。", advantages: [{ title: "英法双语环境", description: "以法语融入魁北克，以英语连接国际学习、研究、商业和科技。" }, { title: "国际文化多元", description: "与来自世界各地的社区、语言、传统和观点共同生活学习。" }, { title: "世界级大学氛围", description: "置身由多所重要大学、研究机构、图书馆和庞大学生群体塑造的城市。" }, { title: "创新研究机会", description: "接触人工智能、航空航天、生命科学、工程、设计及创意产业生态。" }, { title: "友好学生社区", description: "在以文化、交通、节庆与学生生活闻名的城市建立友谊和独立能力。" }] },
    cta: { label: "你的未来从这里开始", title: "迈出通往大学成功的关键一步。", description: "大学衔接项目不只是预备课程，更是一段有指导、有方法、有方向的大学前训练。", actions: ["立即申请", "咨询课程顾问", "索取课程资料"] },
  },
};
