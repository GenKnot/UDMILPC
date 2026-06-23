import type { Locale } from "@/content/site-content";

export const programSlugs = ["language-preparation", "university-pathway", "academic-foundation"] as const;
export type ProgramSlug = (typeof programSlugs)[number];

export function isProgramSlug(value: string): value is ProgramSlug {
  return programSlugs.includes(value as ProgramSlug);
}

type ProgramFact = { value: string; label: string };
type ProgramSection = { title: string; description: string };

export type ProgramDetail = {
  slug: ProgramSlug;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  summary: string;
  facts: ProgramFact[];
  audience: string[];
  outcomes: ProgramSection[];
  curriculum: ProgramSection[];
  pathway: string[];
  requirements: string[];
  faq: Array<{ question: string; answer: string }>;
};

type ProgramContent = {
  overview: {
    metadataTitle: string;
    eyebrow: string;
    title: string;
    description: string;
    introLabel: string;
    introTitle: string;
    introDescription: string;
    compareLabel: string;
    compareTitle: string;
    compareItems: ProgramSection[];
    cardAction: string;
  };
  labels: {
    home: string;
    programs: string;
    overview: string;
    overviewTitle: string;
    audience: string;
    audienceTitle: string;
    audienceDescription: string;
    outcomes: string;
    outcomesTitle: string;
    outcomesDescription: string;
    curriculum: string;
    curriculumTitle: string;
    curriculumDescription: string;
    pathway: string;
    pathwayTitle: string;
    pathwayDescription: string;
    requirements: string;
    requirementsTitle: string;
    requirementsDescription: string;
    faq: string;
    faqTitle: string;
    applyLabel: string;
    applyTitle: string;
    applyDescription: string;
    applyAction: string;
    imagePlaceholder: string;
  };
  programs: Record<ProgramSlug, ProgramDetail>;
};

export const programContent: Record<Locale, ProgramContent> = {
  en: {
    overview: {
      metadataTitle: "Programs | Collège International Montréal",
      eyebrow: "Academic programs",
      title: "Preparation designed around where you want to go.",
      description: "Build language confidence, university-level academic skills, and subject foundations through a pathway matched to your goals.",
      introLabel: "Choose your pathway",
      introTitle: "Three starting points. One commitment to future success.",
      introDescription: "Students arrive with different strengths and ambitions. Our program structure makes it possible to begin with language, academic readiness, or subject preparation and progress with purpose.",
      compareLabel: "How to choose",
      compareTitle: "Start with the preparation you need most.",
      compareItems: [
        { title: "Strengthen communication", description: "Choose Language Preparation when French or English confidence is your immediate priority." },
        { title: "Master university learning", description: "Choose University Pathway for research, writing, presentation, and independent study skills." },
        { title: "Build subject foundations", description: "Choose Academic Foundation to prepare for business, STEM, or social sciences." },
      ],
      cardAction: "Explore program",
    },
    labels: {
      home: "Home", programs: "Programs", overview: "Program overview", overviewTitle: "Build the foundation for what comes next.",
      audience: "Who this program is for", audienceTitle: "A focused starting point for your next transition.", audienceDescription: "Designed for students preparing for their next academic transition.",
      outcomes: "Learning outcomes", outcomesTitle: "Capabilities you can carry into future study.", outcomesDescription: "Practical, university-oriented outcomes that can be applied across future studies.",
      curriculum: "Inside the program", curriculumTitle: "How the learning experience is structured.", curriculumDescription: "A balanced combination of instruction, applied practice, and guided academic development.",
      pathway: "Your progression", pathwayTitle: "From assessment to future study.", pathwayDescription: "A clear sequence connecting preparation with future study.",
      requirements: "Admission requirements", requirementsTitle: "What you will need to apply.", requirementsDescription: "Requirements depend on the program and entry level. An advisor reviews your academic and language background before recommending a starting point.",
      faq: "Program questions", faqTitle: "Answers before you take the next step.", applyLabel: "Begin your pathway", applyTitle: "Find the right starting point.",
      applyDescription: "Speak with an advisor about your goals, current level, and recommended program.", applyAction: "Request program guidance",
      imagePlaceholder: "Learning in action",
    },
    programs: {
      "language-preparation": {
        slug: "language-preparation", shortTitle: "Language Preparation", title: "Language Preparation Programs",
        eyebrow: "French · English · Academic language",
        description: "Build confident communication and the language skills required for academic study, daily life, and future professional opportunities.",
        summary: "Language is more than vocabulary and grammar. It is the foundation for classroom participation, academic reading, clear writing, intercultural communication, and confident engagement in Montréal.",
        facts: [{ value: "A1–C1", label: "French levels" }, { value: "EN · FR", label: "Language options" }, { value: "3", label: "Annual intakes" }, { value: "Placement", label: "Entry level" }],
        audience: ["Students developing French or English from a foundational level", "University-bound learners who need academic language", "International students preparing for life and study in Montréal", "Learners seeking an intensive language option"],
        outcomes: [
          { title: "Communicate with confidence", description: "Participate effectively in conversations, discussions, and collaborative learning." },
          { title: "Read strategically", description: "Understand academic and real-world texts using active reading techniques." },
          { title: "Write with clarity", description: "Organize ideas and produce increasingly accurate written communication." },
          { title: "Present ideas", description: "Develop pronunciation, fluency, and confidence in prepared presentations." },
        ],
        curriculum: [
          { title: "French language", description: "Listening, speaking, reading, writing, and communication for Québec life." },
          { title: "Academic French", description: "University vocabulary, research communication, academic reading, and presentations." },
          { title: "English language", description: "Integrated communication skills for academic and professional contexts." },
          { title: "English for academic purposes", description: "Critical discussion, academic writing, research skills, and oral presentations." },
          { title: "Intensive language", description: "Increased instructional hours and active practice for accelerated development." },
        ],
        pathway: ["Placement assessment", "General language development", "Academic language", "University preparation", "Future study"],
        requirements: ["Completed application form", "Passport or government identification", "Previous academic records", "Language placement assessment", "Academic consultation where appropriate"],
        faq: [
          { question: "Can I begin as a complete beginner?", answer: "Yes. French study begins at A1, while English placement is based on a language assessment. Available levels are confirmed for each intake." },
          { question: "Can I study academic French or English?", answer: "Yes. Academic language streams focus on the communication skills used in higher education." },
          { question: "How is my starting level determined?", answer: "Students complete a placement process and may meet with an advisor before receiving a recommended level." },
        ],
      },
      "university-pathway": {
        slug: "university-pathway", shortTitle: "University Pathway", title: "University Pathway Program",
        eyebrow: "Academic skills · Research · University readiness",
        description: "Move beyond a language score and develop the academic habits, communication skills, and independence expected in higher education.",
        summary: "University success depends on knowing how to analyze complex ideas, conduct responsible research, write evidence-based assignments, contribute to discussion, and manage independent learning. This program brings those skills together in an applied academic environment.",
        facts: [{ value: "6", label: "Core competencies" }, { value: "Applied", label: "Learning model" }, { value: "Project", label: "Assessment style" }, { value: "Advisor", label: "Planning support" }],
        audience: ["International students preparing for Canadian higher education", "Secondary school graduates seeking additional academic preparation", "Students transitioning into a new educational system", "Future university students who want stronger study habits and confidence"],
        outcomes: [
          { title: "Academic writing", description: "Develop structured arguments supported by reliable evidence and correct citation." },
          { title: "Research literacy", description: "Locate, evaluate, synthesize, and responsibly use scholarly information." },
          { title: "Critical thinking", description: "Analyze arguments, question assumptions, and form independent conclusions." },
          { title: "Academic communication", description: "Present, discuss, and collaborate with clarity in diverse learning settings." },
        ],
        curriculum: [
          { title: "Academic literacy", description: "Reading strategies, structured writing, note-taking, and academic vocabulary." },
          { title: "Research and analysis", description: "Information literacy, source evaluation, research questions, and evidence." },
          { title: "University learning strategies", description: "Time management, exam preparation, independent learning, and reflection." },
          { title: "Presentation and collaboration", description: "Seminars, group projects, oral presentations, and constructive feedback." },
          { title: "Academic integrity", description: "Citation, ethical scholarship, original work, and responsible use of sources." },
        ],
        pathway: ["Academic consultation", "Skills assessment", "University pathway study", "Future program planning", "Higher education"],
        requirements: ["Secondary school completion or equivalent", "Academic transcripts", "Passport or government identification", "Language assessment where applicable", "Academic goals consultation"],
        faq: [
          { question: "Is this only a language program?", answer: "No. Language supports the work, but the program focuses on research, writing, analysis, presentation, academic integrity, and learning strategy." },
          { question: "Does completion guarantee university admission?", answer: "Completion strengthens academic preparation but does not by itself guarantee admission. Students must meet the academic, language, and application requirements of their chosen institution and program." },
          { question: "Will I complete practical projects?", answer: "Yes. Learning is assessed through presentations, collaborative work, research tasks, and evidence-based assignments." },
        ],
      },
      "academic-foundation": {
        slug: "academic-foundation", shortTitle: "Academic Foundation", title: "Academic Foundation & Pathway Programs",
        eyebrow: "Business · STEM · Social sciences",
        description: "Strengthen subject knowledge, quantitative reasoning, research skills, and academic confidence before beginning university-level study.",
        summary: "Foundation programs help students prepare for the intellectual demands of a future discipline. Core academic skills are combined with an introduction to business, STEM, or social sciences so students can make informed choices and enter future studies with stronger preparation.",
        facts: [{ value: "3", label: "Subject streams" }, { value: "6", label: "Shared academic skills" }, { value: "Project", label: "Applied learning" }, { value: "Future", label: "Study planning" }],
        audience: ["Students who need subject preparation before university", "Learners exploring business, STEM, or social sciences", "International students adapting to Canadian academic expectations", "Students strengthening quantitative, analytical, and research skills"],
        outcomes: [
          { title: "Subject foundations", description: "Build introductory knowledge and vocabulary in a chosen academic stream." },
          { title: "Quantitative reasoning", description: "Use numbers, data, and structured methods to solve academic problems." },
          { title: "Research and inquiry", description: "Investigate questions and communicate findings through reliable evidence." },
          { title: "Academic confidence", description: "Approach university-level learning with stronger habits and expectations." },
        ],
        curriculum: [
          { title: "Business foundation", description: "Business environments, economics, accounting, marketing, mathematics, and communication." },
          { title: "STEM foundation", description: "Mathematics, calculus preparation, statistics, computing, programming, and scientific inquiry." },
          { title: "Social sciences foundation", description: "Psychology, sociology, political science, global studies, and research methods." },
          { title: "Shared academic skills", description: "Writing, critical thinking, research, presentation, collaboration, and problem solving." },
        ],
        pathway: ["Academic goals review", "Foundation stream", "University pathway skills", "Future discipline selection", "Undergraduate study"],
        requirements: ["Secondary school records or equivalent", "Passport or government identification", "Mathematics background for selected STEM study", "Language assessment where applicable", "Academic consultation"],
        faq: [
          { question: "Do I choose a subject stream?", answer: "Yes. Students select Business, STEM, or Social Sciences and complete shared academic-skills instruction alongside their chosen stream." },
          { question: "Can the program help me choose a future major?", answer: "The program introduces discipline areas and includes planning support, helping students make a more informed decision." },
          { question: "Are the courses for university credit?", answer: "These courses are designed as academic preparation. Any credit or advanced-standing arrangement must be confirmed by the receiving institution and will be stated in official program information." },
        ],
      },
    },
  },
  fr: {
    overview: {
      metadataTitle: "Programmes | Collège International Montréal", eyebrow: "Programmes académiques",
      title: "Une préparation conçue autour de votre destination.",
      description: "Développez votre aisance linguistique, vos méthodes universitaires et vos connaissances de base grâce à un parcours adapté à vos objectifs.",
      introLabel: "Choisir son parcours", introTitle: "Trois points de départ. Un même engagement envers votre réussite.",
      introDescription: "Chaque étudiant arrive avec des forces et des ambitions différentes. Notre structure permet de commencer par la langue, les méthodes académiques ou la préparation disciplinaire.",
      compareLabel: "Comment choisir", compareTitle: "Commencez par la préparation dont vous avez le plus besoin.",
      compareItems: [
        { title: "Renforcer la communication", description: "Choisissez la préparation linguistique si le français ou l’anglais est votre priorité." },
        { title: "Maîtriser les études universitaires", description: "Choisissez le parcours universitaire pour la recherche, l’écriture, la présentation et l’autonomie." },
        { title: "Construire les bases disciplinaires", description: "Choisissez la formation préparatoire pour la gestion, les STIM ou les sciences sociales." },
      ], cardAction: "Découvrir le programme",
    },
    labels: {
      home: "Accueil", programs: "Programmes", overview: "Aperçu du programme", overviewTitle: "Construisez les bases de votre prochaine étape.",
      audience: "À qui s’adresse ce programme", audienceTitle: "Un point de départ ciblé pour votre prochaine transition.", audienceDescription: "Pour les étudiants qui préparent leur prochaine transition académique.",
      outcomes: "Résultats d’apprentissage", outcomesTitle: "Des compétences utiles tout au long de vos études.", outcomesDescription: "Des résultats pratiques et orientés vers l’université, utiles tout au long de vos études.",
      curriculum: "Au cœur du programme", curriculumTitle: "Une expérience d’apprentissage structurée et appliquée.", curriculumDescription: "Un équilibre entre enseignement, pratique appliquée et développement académique guidé.",
      pathway: "Votre progression", pathwayTitle: "De l’évaluation aux études futures.", pathwayDescription: "Une séquence claire reliant la préparation aux études futures.",
      requirements: "Conditions d’admission", requirementsTitle: "Les éléments à préparer pour votre demande.", requirementsDescription: "Les exigences dépendent du programme et du niveau d’entrée. Un conseiller examine le parcours scolaire et linguistique avant de recommander un point de départ.",
      faq: "Questions sur le programme", faqTitle: "Des réponses avant de passer à l’étape suivante.", applyLabel: "Commencer votre parcours", applyTitle: "Trouvez le bon point de départ.",
      applyDescription: "Parlez à un conseiller de vos objectifs, de votre niveau actuel et du programme recommandé.", applyAction: "Demander des conseils", imagePlaceholder: "L’apprentissage en action",
    },
    programs: {
      "language-preparation": {
        slug: "language-preparation", shortTitle: "Préparation linguistique", title: "Programmes de préparation linguistique", eyebrow: "Français · Anglais · Langue académique",
        description: "Développez une communication assurée et les compétences linguistiques nécessaires aux études, à la vie quotidienne et aux possibilités professionnelles.",
        summary: "La langue est bien plus que le vocabulaire et la grammaire. Elle permet de participer en classe, de lire des textes académiques, d’écrire clairement et de s’intégrer avec confiance à Montréal.",
        facts: [{ value: "A1–C1", label: "Niveaux de français" }, { value: "EN · FR", label: "Langues offertes" }, { value: "3", label: "Rentrées annuelles" }, { value: "Classement", label: "Niveau d’entrée" }],
        audience: ["Étudiants qui développent leur français ou leur anglais", "Futurs universitaires ayant besoin de langue académique", "Étudiants internationaux qui préparent leur vie à Montréal", "Apprenants recherchant une formule intensive"],
        outcomes: [
          { title: "Communiquer avec assurance", description: "Participer efficacement aux conversations, discussions et travaux collaboratifs." },
          { title: "Lire de façon stratégique", description: "Comprendre les textes académiques et courants grâce à des techniques actives." },
          { title: "Écrire avec clarté", description: "Organiser ses idées et produire des textes de plus en plus précis." },
          { title: "Présenter ses idées", description: "Développer la prononciation, l’aisance et la confiance à l’oral." },
        ],
        curriculum: [
          { title: "Français général", description: "Écoute, expression orale, lecture, écriture et communication au Québec." },
          { title: "Français académique", description: "Vocabulaire universitaire, recherche, lecture académique et présentations." },
          { title: "Anglais général", description: "Compétences intégrées pour les contextes académiques et professionnels." },
          { title: "Anglais académique", description: "Discussion critique, écriture, recherche et présentation orale." },
          { title: "Langue intensive", description: "Davantage d’heures d’enseignement et de pratique active pour progresser rapidement." },
        ],
        pathway: ["Évaluation de niveau", "Développement linguistique", "Langue académique", "Préparation universitaire", "Études futures"],
        requirements: ["Formulaire de demande", "Passeport ou pièce d’identité", "Dossiers scolaires antérieurs", "Évaluation linguistique", "Consultation académique au besoin"],
        faq: [
          { question: "Puis-je commencer au niveau débutant?", answer: "Oui. Le français commence au niveau A1, tandis que le niveau d’anglais est déterminé par une évaluation. Les niveaux offerts sont confirmés pour chaque rentrée." },
          { question: "Puis-je étudier le français ou l’anglais académique?", answer: "Oui. Les parcours académiques développent les compétences de communication utilisées dans l’enseignement supérieur." },
          { question: "Comment mon niveau est-il déterminé?", answer: "Un processus de classement et, au besoin, une rencontre avec un conseiller permettent de recommander un niveau." },
        ],
      },
      "university-pathway": {
        slug: "university-pathway", shortTitle: "Parcours universitaire", title: "Programme de parcours universitaire", eyebrow: "Méthodes académiques · Recherche · Préparation universitaire",
        description: "Allez au-delà d’un résultat linguistique et développez les méthodes, la communication et l’autonomie attendues dans l’enseignement supérieur.",
        summary: "Réussir à l’université exige d’analyser des idées complexes, de mener des recherches responsables, de rédiger des travaux fondés sur des preuves et de gérer son apprentissage de façon autonome.",
        facts: [{ value: "6", label: "Compétences clés" }, { value: "Pratique", label: "Modèle d’apprentissage" }, { value: "Projet", label: "Mode d’évaluation" }, { value: "Conseil", label: "Soutien à la planification" }],
        audience: ["Étudiants internationaux préparant des études au Canada", "Diplômés du secondaire recherchant une préparation supplémentaire", "Étudiants qui changent de système éducatif", "Futurs universitaires souhaitant renforcer leurs méthodes"],
        outcomes: [
          { title: "Écriture académique", description: "Construire une argumentation structurée, appuyée par des preuves et des citations." },
          { title: "Culture de la recherche", description: "Trouver, évaluer, synthétiser et utiliser l’information savante." },
          { title: "Pensée critique", description: "Analyser les arguments, questionner les présupposés et conclure de façon autonome." },
          { title: "Communication académique", description: "Présenter, discuter et collaborer clairement dans des contextes diversifiés." },
        ],
        curriculum: [
          { title: "Littératie académique", description: "Lecture, écriture structurée, prise de notes et vocabulaire universitaire." },
          { title: "Recherche et analyse", description: "Sources, questions de recherche, évaluation de l’information et preuves." },
          { title: "Stratégies universitaires", description: "Gestion du temps, examens, autonomie et réflexion sur l’apprentissage." },
          { title: "Présentation et collaboration", description: "Séminaires, projets d’équipe, présentations et rétroaction." },
          { title: "Intégrité académique", description: "Citation, travail original et utilisation responsable des sources." },
        ],
        pathway: ["Consultation académique", "Évaluation des compétences", "Études de parcours", "Planification future", "Enseignement supérieur"],
        requirements: ["Diplôme secondaire ou équivalent", "Relevés de notes", "Passeport ou pièce d’identité", "Évaluation linguistique au besoin", "Consultation sur les objectifs"],
        faq: [
          { question: "Est-ce uniquement un programme de langue?", answer: "Non. Il porte sur la recherche, l’écriture, l’analyse, la présentation, l’intégrité académique et les stratégies d’apprentissage." },
          { question: "La réussite garantit-elle une admission universitaire?", answer: "La réussite renforce la préparation, mais ne garantit pas à elle seule l’admission. Chaque étudiant doit satisfaire aux exigences académiques, linguistiques et administratives du programme visé." },
          { question: "Réaliserai-je des projets pratiques?", answer: "Oui. L’évaluation comprend des présentations, des travaux collaboratifs, des recherches et des travaux fondés sur des preuves." },
        ],
      },
      "academic-foundation": {
        slug: "academic-foundation", shortTitle: "Formation préparatoire", title: "Programmes préparatoires et de parcours", eyebrow: "Gestion · STIM · Sciences sociales",
        description: "Renforcez vos connaissances disciplinaires, votre raisonnement quantitatif, vos méthodes de recherche et votre confiance avant l’université.",
        summary: "Les programmes préparatoires associent les compétences académiques essentielles à une introduction à la gestion, aux STIM ou aux sciences sociales afin de permettre un choix éclairé et une meilleure transition.",
        facts: [{ value: "3", label: "Volets disciplinaires" }, { value: "6", label: "Compétences communes" }, { value: "Projet", label: "Apprentissage appliqué" }, { value: "Avenir", label: "Planification des études" }],
        audience: ["Étudiants ayant besoin d’une préparation disciplinaire", "Apprenants qui explorent la gestion, les STIM ou les sciences sociales", "Étudiants internationaux qui s’adaptent aux attentes canadiennes", "Étudiants renforçant leur raisonnement et leur recherche"],
        outcomes: [
          { title: "Bases disciplinaires", description: "Acquérir les notions et le vocabulaire d’un domaine choisi." },
          { title: "Raisonnement quantitatif", description: "Utiliser les nombres, les données et des méthodes structurées." },
          { title: "Recherche et enquête", description: "Étudier des questions et communiquer des résultats fondés sur des preuves." },
          { title: "Confiance académique", description: "Aborder l’université avec de meilleures méthodes et attentes." },
        ],
        curriculum: [
          { title: "Préparation en gestion", description: "Économie, comptabilité, marketing, mathématiques et communication." },
          { title: "Préparation en STIM", description: "Mathématiques, calcul, statistiques, informatique, programmation et sciences." },
          { title: "Préparation en sciences sociales", description: "Psychologie, sociologie, politique, études mondiales et recherche." },
          { title: "Compétences communes", description: "Écriture, pensée critique, recherche, présentation, collaboration et résolution de problèmes." },
        ],
        pathway: ["Analyse des objectifs", "Volet préparatoire", "Compétences de parcours", "Choix disciplinaire", "Études de premier cycle"],
        requirements: ["Dossiers du secondaire", "Passeport ou pièce d’identité", "Formation mathématique pour certains parcours STIM", "Évaluation linguistique au besoin", "Consultation académique"],
        faq: [
          { question: "Dois-je choisir un volet?", answer: "Oui. Les étudiants choisissent Gestion, STIM ou Sciences sociales et suivent en parallèle un tronc commun de compétences académiques." },
          { question: "Le programme peut-il m’aider à choisir une spécialisation?", answer: "Il présente plusieurs disciplines et inclut un soutien à la planification pour éclairer le choix." },
          { question: "Les cours donnent-ils des crédits universitaires?", answer: "Ces cours sont conçus comme une préparation académique. Toute reconnaissance de crédits ou d’acquis doit être confirmée par l’établissement d’accueil et indiquée dans l’information officielle du programme." },
        ],
      },
    },
  },
  zh: {
    overview: {
      metadataTitle: "课程设置 | 蒙特利尔国际学院", eyebrow: "学术课程",
      title: "从未来方向出发，做好真正有用的准备。",
      description: "根据个人目标，通过语言训练、大学学习能力和学科基础课程，找到适合自己的升学路径。",
      introLabel: "选择学习路径", introTitle: "三种起点，共同通往更成熟的未来。",
      introDescription: "每位学生的能力基础和未来理想都不相同。课程体系允许学生从语言、学术准备或专业基础开始，循序渐进地建立长期能力。",
      compareLabel: "如何选择", compareTitle: "从你目前最需要的准备开始。",
      compareItems: [
        { title: "提升沟通能力", description: "如果当前重点是提高法语或英语能力，可从语言准备课程开始。" },
        { title: "掌握大学学习方式", description: "如果需要研究、写作、演讲和独立学习能力，可选择大学衔接课程。" },
        { title: "建立专业基础", description: "如果准备进入商科、STEM 或社会科学，可选择学术基础课程。" },
      ], cardAction: "查看课程",
    },
    labels: {
      home: "首页", programs: "课程设置", overview: "课程概览", overviewTitle: "为下一阶段建立扎实基础。",
      audience: "适合人群", audienceTitle: "为下一次学术转变找到清晰起点。", audienceDescription: "为准备进入下一阶段学术学习的学生而设计。",
      outcomes: "学习成果", outcomesTitle: "能够持续应用于未来学习的核心能力。", outcomesDescription: "面向大学、能够持续应用于未来学习的实用能力。",
      curriculum: "课程内容", curriculumTitle: "结构清晰、强调实践的学习体验。", curriculumDescription: "结合课堂教学、实践任务与有指导的学术能力发展。",
      pathway: "学习进程", pathwayTitle: "从能力评估到未来升学。", pathwayDescription: "连接当前准备与未来高等教育的清晰路径。",
      requirements: "入学要求", requirementsTitle: "申请前需要准备的材料。", requirementsDescription: "具体要求取决于所选课程和入学级别。课程顾问将审核申请人的学术与语言背景，并建议合适的起点。",
      faq: "课程常见问题", faqTitle: "开始下一步前，你可能想了解这些问题。", applyLabel: "开始你的学习路径", applyTitle: "找到正确的起点。",
      applyDescription: "与课程顾问沟通个人目标、当前水平及适合的课程方案。", applyAction: "获取课程建议", imagePlaceholder: "真实课堂与实践学习",
    },
    programs: {
      "language-preparation": {
        slug: "language-preparation", shortTitle: "语言准备", title: "语言准备课程", eyebrow: "法语 · 英语 · 学术语言",
        description: "建立自信的沟通能力，掌握学术学习、日常生活与未来职业发展所需的语言技能。",
        summary: "语言学习不只是词汇和语法，更是课堂参与、学术阅读、清晰写作、跨文化交流以及融入蒙特利尔生活的基础。",
        facts: [{ value: "A1–C1", label: "法语级别" }, { value: "英 · 法", label: "语言方向" }, { value: "3", label: "每年入学批次" }, { value: "分级", label: "起始级别" }],
        audience: ["从基础阶段提高法语或英语的学生", "需要学术语言能力的未来大学生", "准备在蒙特利尔生活和学习的国际学生", "希望通过密集课程加快进步的学习者"],
        outcomes: [
          { title: "自信沟通", description: "在日常对话、课堂讨论和协作学习中有效表达。" },
          { title: "策略性阅读", description: "运用主动阅读方法理解学术和现实文本。" },
          { title: "清晰写作", description: "组织观点并完成更加准确、连贯的书面表达。" },
          { title: "演讲表达", description: "提升发音、流利度及正式演讲中的自信。" },
        ],
        curriculum: [
          { title: "综合法语", description: "听说读写以及适应魁北克生活的实际沟通。" },
          { title: "学术法语", description: "大学词汇、研究沟通、学术阅读和正式演讲。" },
          { title: "综合英语", description: "面向学术和职业环境的综合沟通能力。" },
          { title: "学术英语", description: "批判讨论、学术写作、研究能力和口头展示。" },
          { title: "密集语言课程", description: "通过增加课时和主动实践加快语言发展。" },
        ],
        pathway: ["语言分级评估", "综合语言发展", "学术语言训练", "大学学习准备", "未来升学"],
        requirements: ["完整申请表", "护照或政府身份证件", "过往学术记录", "语言分级评估", "必要时参加学术咨询"],
        faq: [
          { question: "零基础可以申请吗？", answer: "可以。法语课程从 A1 开始，英语课程则根据语言评估确定级别。每期实际开放级别将按入学批次确认。" },
          { question: "可以学习学术法语或学术英语吗？", answer: "可以。学术语言方向重点培养高等教育中需要的沟通、阅读、写作与表达能力。" },
          { question: "如何确定起始级别？", answer: "学生将参加分级流程，并可在确定推荐级别前与课程顾问沟通。" },
        ],
      },
      "university-pathway": {
        slug: "university-pathway", shortTitle: "大学衔接", title: "大学衔接课程", eyebrow: "学术能力 · 研究方法 · 大学准备",
        description: "超越单一语言成绩，培养高等教育真正需要的学术习惯、沟通能力与独立学习能力。",
        summary: "大学成功需要学生分析复杂观点、开展负责任的研究、完成基于证据的作业、参与课堂讨论并管理独立学习。这项课程将这些能力整合到真实的学术实践中。",
        facts: [{ value: "6", label: "核心能力" }, { value: "实践", label: "学习模式" }, { value: "项目", label: "评估方式" }, { value: "顾问", label: "升学规划支持" }],
        audience: ["准备进入加拿大高等教育的国际学生", "希望补充学术准备的高中毕业生", "正在适应新教育体系的学生", "希望改善学习方法并增强信心的未来大学生"],
        outcomes: [
          { title: "学术写作", description: "使用可靠证据和正确引用方式建立结构清晰的论证。" },
          { title: "研究素养", description: "查找、评估、整合并负责任地使用学术资料。" },
          { title: "批判性思维", description: "分析论点、质疑假设并形成独立结论。" },
          { title: "学术沟通", description: "在多元学习环境中清晰地演讲、讨论与协作。" },
        ],
        curriculum: [
          { title: "学术读写", description: "阅读策略、结构化写作、课堂笔记与大学词汇。" },
          { title: "研究与分析", description: "信息素养、资料评估、研究问题与证据运用。" },
          { title: "大学学习策略", description: "时间管理、考试准备、独立学习与反思。" },
          { title: "演讲与协作", description: "研讨课、团队项目、口头展示与建设性反馈。" },
          { title: "学术诚信", description: "引用规范、原创工作及负责任地使用资料。" },
        ],
        pathway: ["学术咨询", "能力评估", "大学衔接学习", "未来课程规划", "高等教育"],
        requirements: ["完成高中或同等教育", "学术成绩单", "护照或政府身份证件", "必要时参加语言评估", "个人学术目标咨询"],
        faq: [
          { question: "这只是语言课程吗？", answer: "不是。语言是学习工具，课程核心包括研究、写作、分析、演讲、学术诚信与学习策略。" },
          { question: "完成课程能够保证大学录取吗？", answer: "完成课程能够加强学术准备，但不代表自动获得大学录取。学生仍需达到目标院校及专业规定的学术、语言与申请要求。" },
          { question: "课程包含实践项目吗？", answer: "包含。课程通过演讲、团队协作、研究任务和基于证据的学术作业进行综合评估。" },
        ],
      },
      "academic-foundation": {
        slug: "academic-foundation", shortTitle: "学术基础", title: "学术基础与升学课程", eyebrow: "商科 · STEM · 社会科学",
        description: "进入大学学习前，加强专业基础、定量推理、研究能力与学术信心。",
        summary: "学术基础课程帮助学生为未来专业领域的知识要求做好准备。通用学术能力将与商科、STEM 或社会科学入门内容结合，使学生能够作出更成熟的专业选择。",
        facts: [{ value: "3", label: "专业方向" }, { value: "6", label: "通用学术能力" }, { value: "项目", label: "实践学习" }, { value: "未来", label: "专业规划" }],
        audience: ["进入大学前需要专业基础准备的学生", "正在探索商科、STEM 或社会科学的学习者", "适应加拿大教育要求的国际学生", "需要提高定量、分析与研究能力的学生"],
        outcomes: [
          { title: "专业基础", description: "建立所选学术方向的入门知识和专业词汇。" },
          { title: "定量推理", description: "运用数字、数据和结构化方法解决学术问题。" },
          { title: "研究探究", description: "提出问题并使用可靠证据沟通研究结果。" },
          { title: "学术信心", description: "以更成熟的习惯和预期进入大学阶段学习。" },
        ],
        curriculum: [
          { title: "商科基础", description: "商业环境、经济学、会计、市场营销、数学与沟通。" },
          { title: "STEM 基础", description: "数学、微积分准备、统计、计算机、编程与科学探究。" },
          { title: "社会科学基础", description: "心理学、社会学、政治学、全球研究与研究方法。" },
          { title: "通用学术能力", description: "写作、批判思维、研究、演讲、协作与问题解决。" },
        ],
        pathway: ["学术目标评估", "专业基础方向", "大学衔接能力", "未来专业选择", "本科阶段学习"],
        requirements: ["高中或同等教育记录", "护照或政府身份证件", "部分 STEM 方向所需数学背景", "必要时参加语言评估", "学术咨询"],
        faq: [
          { question: "需要选择专业方向吗？", answer: "需要。学生可选择商科、STEM 或社会科学方向，并同步完成通用学术能力课程。" },
          { question: "课程能帮助我选择大学专业吗？", answer: "课程会介绍不同学科领域并提供规划支持，帮助学生作出更有依据的选择。" },
          { question: "这些课程提供大学学分吗？", answer: "课程定位为大学前学术准备。任何学分或先修认可均由接收院校确认，并以正式课程资料为准。" },
        ],
      },
    },
  },
};
