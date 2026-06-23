import type { Locale } from "@/content/site-content";

type Feature = { title: string; description: string };
type Step = Feature & { number: string };

export type HomepageContent = {
  hero: { eyebrow: string; title: string; description: string; highlights: string[]; actions: string[] };
  authority: { since: string; title: string; description: string; facts: Array<{ value: string; label: string }> };
  about: { label: string; title: string; description: string; mission: string; vision: string; values: string[] };
  tradition: { label: string; title: string; description: string; points: Feature[]; statement: string };
  whyChoose: { label: string; title: string; description: string; items: Feature[] };
  preparation: { label: string; title: string; description: string; items: Feature[] };
  pathway: { label: string; title: string; description: string; steps: Step[] };
  programs: { label: string; title: string; description: string; learnMore: string; items: Array<Feature & { number: string; href: string; meta: string }> };
  campus: { label: string; title: string; description: string; location: string; features: Feature[] };
  support: { label: string; title: string; description: string; groups: Array<Feature & { services: string[] }> };
  impact: { label: string; title: string; description: string; outcomes: string[]; stats: Array<{ value: string; label: string }> };
  cta: { label: string; title: string; description: string; primary: string; secondary: string };
};

export const homepageContent: Record<Locale, HomepageContent> = {
  en: {
    hero: {
      eyebrow: "Université de Montréal International Language & Pathway Center",
      title: "Opening the door to academic excellence.",
      description: "Begin your future in a university environment. Through bilingual language development, academic preparation, and structured pathway education, students build the knowledge, confidence, and independence required to thrive in Canadian higher education.",
      highlights: ["From language development to academic excellence", "From international student to global citizen"],
      actions: ["Apply now", "Book a campus visit", "Speak with an advisor"],
    },
    authority: {
      since: "Established in 1992",
      title: "More than three decades of academic preparation and student success.",
      description: "A center for language development, academic preparation, and university pathways, located at the Université de Montréal Brossard Campus.",
      facts: [
        { value: "1992", label: "Established in Montréal" },
        { value: "EN · FR", label: "Bilingual academic environment" },
        { value: "6", label: "Stages from language to career" },
        { value: "Global", label: "International student community" },
      ],
    },
    about: {
      label: "About the Center",
      title: "A gateway to higher education.",
      description: "The Center bridges students' academic ambitions and future university success. In an immersive university setting, learners develop linguistic proficiency, academic competencies, intercultural awareness, and the habits of mind expected in higher education.",
      mission: "To empower students through rigorous, student-centered learning that develops academic excellence, linguistic proficiency, global perspective, intercultural competence, and leadership potential.",
      vision: "To be a leading international pathway and academic preparation center recognized for cultivating globally minded students who excel in higher education and contribute meaningfully to society.",
      values: ["Academic excellence", "Linguistic proficiency", "Global perspectives", "Intercultural competence", "Leadership potential"],
    },
    tradition: {
      label: "Rooted in the academic tradition of UdeM",
      title: "One university environment. One academic community. One shared vision.",
      description: "Rooted in Université de Montréal's tradition of teaching excellence, research, and international engagement, the Center gives students an early and authentic introduction to university culture. Every program is designed around the standards, curiosity, and independence that define higher education.",
      points: [
        { title: "Learn within a university environment", description: "Experience academic expectations, campus culture, and collaborative learning before beginning a degree." },
        { title: "Develop university-level skills", description: "Practise research, evidence-based writing, seminar discussion, presentation, and independent study." },
        { title: "Build a pathway to future success", description: "Connect language growth and academic preparation to a clear, supported plan for higher education." },
      ],
      statement: "Preparing students not simply to enter university, but to participate, contribute, and succeed from the first day.",
    },
    whyChoose: {
      label: "Why choose us",
      title: "A complete preparation experience for international students.",
      description: "Students receive more than classroom instruction. They join a bilingual academic community built around readiness, belonging, and long-term achievement.",
      items: [
        { title: "World-class academic environment", description: "Learn within the dynamic educational ecosystem of Université de Montréal and become familiar with university expectations." },
        { title: "International learning community", description: "Exchange ideas with students from diverse cultural and educational backgrounds in an inclusive environment." },
        { title: "Bilingual excellence", description: "Strengthen French for life in Québec and English for global study, research, and professional opportunity." },
        { title: "University-oriented education", description: "Develop analytical thinking, academic communication, research skills, and intellectual independence." },
        { title: "Comprehensive student support", description: "Receive personal guidance from application and arrival through academic progression and future planning." },
      ],
    },
    preparation: {
      label: "Why university preparation matters",
      title: "Language proficiency is only the beginning.",
      description: "University success requires students to understand ideas, evaluate evidence, communicate clearly, and manage complex independent work. Our curriculum turns language ability into academic capability.",
      items: [
        { title: "Academic writing", description: "Produce clear, structured, well-referenced, and evidence-based university assignments." },
        { title: "Critical thinking", description: "Question assumptions, compare perspectives, evaluate arguments, and form reasoned conclusions." },
        { title: "Research skills", description: "Find reliable sources, practise information literacy, and complete responsible academic inquiry." },
        { title: "Presentation skills", description: "Participate confidently in seminars, group projects, and formal academic presentations." },
        { title: "Team collaboration", description: "Work productively across cultures, disciplines, and different approaches to problem solving." },
      ],
    },
    pathway: {
      label: "The pathway to success",
      title: "A structured journey from language learning to global achievement.",
      description: "Each stage adds the confidence, knowledge, and learning independence needed for the next.",
      steps: [
        { number: "01", title: "Language development", description: "Build a strong foundation in French and English communication." },
        { number: "02", title: "Academic language", description: "Master the reading, writing, vocabulary, and discussion used in higher education." },
        { number: "03", title: "University pathway", description: "Develop research, critical thinking, study strategy, and academic integrity." },
        { number: "04", title: "Undergraduate studies", description: "Begin degree-level learning with confidence, organization, and academic readiness." },
        { number: "05", title: "Graduate studies", description: "Advance toward specialization, professional programs, and research excellence." },
        { number: "06", title: "Career development", description: "Apply academic knowledge, communication, and leadership in a global workplace." },
      ],
    },
    programs: {
      label: "Academic programs",
      title: "Choose the preparation that meets you where you are.",
      description: "Flexible entry points help students move from foundational communication to advanced academic study and subject preparation.",
      learnMore: "Explore the program",
      items: [
        { number: "01", title: "Language Preparation", meta: "French · English · A1–C1", description: "Build practical fluency in listening, speaking, reading, writing, and cross-cultural communication.", href: "/programs/language-preparation" },
        { number: "02", title: "Academic Language", meta: "Reading · Writing · Research", description: "Use French or English confidently for lectures, academic texts, research communication, and presentations.", href: "/programs/language-preparation" },
        { number: "03", title: "University Pathway", meta: "Skills · Strategy · Readiness", description: "Prepare for Canadian higher education through academic literacy, critical thinking, and independent learning.", href: "/programs/university-pathway" },
        { number: "04", title: "Academic Foundation", meta: "Business · STEM · Social Sciences", description: "Strengthen subject knowledge and analytical skills for future study in high-demand disciplines.", href: "/programs/academic-foundation" },
      ],
    },
    campus: {
      label: "Study at UdeM Brossard Campus",
      title: "Experience university life before university begins.",
      description: "The Université de Montréal Brossard Campus offers a modern, technology-enabled setting for active and collaborative learning on Montréal's South Shore. Students study in an environment that makes academic life tangible from the first day.",
      location: "2000 Rue de l'Éclipse · Brossard, Québec, Canada",
      features: [
        { title: "Modern classrooms", description: "Flexible, purpose-built spaces support discussion, project work, and engaged learning." },
        { title: "Technology-enhanced learning", description: "Digital tools, multimedia resources, and interactive teaching connect classroom and independent study." },
        { title: "Academic events", description: "Guest lectures, workshops, information sessions, and enrichment activities expand learning beyond courses." },
        { title: "Collaborative study areas", description: "Students can prepare, exchange ideas, and work together in a focused academic atmosphere." },
        { title: "Connected location", description: "Direct REM access links Brossard with downtown Montréal, services, culture, and opportunity." },
      ],
    },
    support: {
      label: "Student Success Center",
      title: "One team supporting every stage of the student journey.",
      description: "Students can ask questions early, make informed decisions, and access practical support throughout their transition to study and life in Canada.",
      groups: [
        { title: "Academic support", description: "Build effective habits and respond to academic challenges with confidence.", services: ["Academic advising", "Learning strategies", "Writing assistance", "Academic coaching"] },
        { title: "Student services", description: "Prepare for arrival and settle into daily life in Greater Montréal.", services: ["Housing guidance", "Arrival assistance", "Health insurance support", "Cultural integration"] },
        { title: "University advising", description: "Connect present learning with a realistic and ambitious future study plan.", services: ["Academic planning", "Program selection", "Pathway mapping", "Future study opportunities"] },
        { title: "Career development", description: "Turn academic growth into professional confidence and direction.", services: ["Career exploration", "Professional skills", "Internship preparation", "Employability training"] },
      ],
    },
    impact: {
      label: "Student success & global impact",
      title: "Every success story begins with opportunity.",
      description: "Our students join a diverse learning community united by academic ambition, personal growth, and the desire to contribute across cultures. The result is not only stronger university readiness, but a more confident and globally engaged learner.",
      outcomes: ["Academic excellence", "Personal growth", "Global engagement", "University success"],
      stats: [
        { value: "30+", label: "Years preparing students" },
        { value: "2", label: "Languages for academic opportunity" },
        { value: "4", label: "Integrated areas of student support" },
        { value: "1", label: "Connected pathway to the future" },
      ],
    },
    cta: {
      label: "Your future starts here",
      title: "Ready to begin your university journey?",
      description: "Join a vibrant academic community committed to excellence, innovation, inclusion, and global engagement. Speak with our team to identify the program and starting point that fit your goals.",
      primary: "Apply now",
      secondary: "Schedule a consultation",
    },
  },
  fr: {
    hero: { eyebrow: "Centre international de langues et de parcours universitaires de l'Université de Montréal", title: "Ouvrez la porte à l'excellence académique.", description: "Commencez votre avenir dans un véritable milieu universitaire. Grâce au développement bilingue, à la préparation académique et à un parcours structuré, les étudiants acquièrent les connaissances, la confiance et l'autonomie nécessaires pour réussir dans l'enseignement supérieur canadien.", highlights: ["Des langues à l'excellence académique", "D'étudiant international à citoyen du monde"], actions: ["Faire une demande", "Visiter le campus", "Parler à un conseiller"] },
    authority: { since: "Établi en 1992", title: "Plus de trois décennies de préparation académique et de réussite étudiante.", description: "Un centre de langues, de préparation académique et de parcours universitaires situé au campus de Brossard de l'Université de Montréal.", facts: [{ value: "1992", label: "Établi à Montréal" }, { value: "FR · EN", label: "Milieu académique bilingue" }, { value: "6", label: "Étapes des langues à la carrière" }, { value: "Monde", label: "Communauté internationale" }] },
    about: { label: "À propos du Centre", title: "Une porte d'entrée vers les études supérieures.", description: "Le Centre relie les ambitions des étudiants à leur future réussite universitaire. Dans un milieu immersif, ils développent leurs compétences linguistiques et académiques, leur conscience interculturelle et les habitudes attendues aux études supérieures.", mission: "Donner aux étudiants les moyens de réussir grâce à un apprentissage rigoureux et centré sur l'étudiant, favorisant l'excellence, la maîtrise linguistique, l'ouverture mondiale et le leadership.", vision: "Devenir un centre international de référence reconnu pour former des étudiants ouverts sur le monde, prêts à exceller à l'université et à contribuer à la société.", values: ["Excellence académique", "Maîtrise linguistique", "Perspective mondiale", "Compétence interculturelle", "Leadership"] },
    tradition: { label: "Enraciné dans la tradition académique de l'UdeM", title: "Un milieu universitaire. Une communauté académique. Une vision commune.", description: "Enraciné dans la tradition d'excellence en enseignement, en recherche et en engagement international de l'Université de Montréal, le Centre offre une première immersion authentique dans la culture universitaire.", points: [{ title: "Apprendre dans un milieu universitaire", description: "Découvrir les attentes, la culture du campus et l'apprentissage collaboratif avant le début d'un diplôme." }, { title: "Développer des compétences universitaires", description: "Pratiquer la recherche, la rédaction fondée sur des sources, les séminaires et l'étude autonome." }, { title: "Construire un parcours vers la réussite", description: "Relier les progrès linguistiques à un plan d'études supérieures clair et accompagné." }], statement: "Préparer les étudiants non seulement à entrer à l'université, mais à y participer et à y réussir dès le premier jour." },
    whyChoose: { label: "Pourquoi nous choisir", title: "Une expérience de préparation complète pour les étudiants internationaux.", description: "Au-delà des cours, les étudiants rejoignent une communauté bilingue axée sur la préparation, l'appartenance et la réussite durable.", items: [{ title: "Milieu académique de premier plan", description: "Se familiariser avec la culture et les attentes universitaires au sein de l'écosystème de l'Université de Montréal." }, { title: "Communauté internationale", description: "Échanger avec des étudiants issus de cultures et de systèmes éducatifs variés." }, { title: "Excellence bilingue", description: "Renforcer le français pour le Québec et l'anglais pour les études et possibilités mondiales." }, { title: "Formation orientée vers l'université", description: "Développer l'analyse, la communication académique, la recherche et l'autonomie intellectuelle." }, { title: "Soutien étudiant complet", description: "Recevoir des conseils personnalisés de la demande d'admission jusqu'au projet d'avenir." }] },
    preparation: { label: "Pourquoi la préparation universitaire compte", title: "La maîtrise d'une langue n'est que le début.", description: "Réussir à l'université exige de comprendre les idées, d'évaluer les preuves, de communiquer clairement et de gérer un travail autonome complexe.", items: [{ title: "Rédaction académique", description: "Produire des travaux structurés, référencés et fondés sur des preuves." }, { title: "Pensée critique", description: "Comparer les perspectives, évaluer les arguments et formuler des conclusions raisonnées." }, { title: "Recherche", description: "Trouver des sources fiables et mener une recherche académique responsable." }, { title: "Présentation", description: "Participer avec assurance aux séminaires, projets et présentations." }, { title: "Collaboration", description: "Travailler efficacement entre cultures, disciplines et méthodes." }] },
    pathway: { label: "Le parcours vers la réussite", title: "Un chemin structuré des langues à la réussite mondiale.", description: "Chaque étape ajoute la confiance, les connaissances et l'autonomie nécessaires pour la suivante.", steps: [{ number: "01", title: "Développement linguistique", description: "Bâtir de solides bases en communication française et anglaise." }, { number: "02", title: "Langue académique", description: "Maîtriser la lecture, la rédaction et les échanges universitaires." }, { number: "03", title: "Parcours universitaire", description: "Développer la recherche, la pensée critique et les stratégies d'étude." }, { number: "04", title: "Premier cycle", description: "Commencer des études universitaires avec confiance et méthode." }, { number: "05", title: "Cycles supérieurs", description: "Avancer vers la spécialisation, les programmes professionnels et la recherche." }, { number: "06", title: "Développement de carrière", description: "Appliquer ses connaissances et son leadership dans un milieu mondial." }] },
    programs: { label: "Programmes académiques", title: "Choisissez la préparation qui correspond à votre point de départ.", description: "Des points d'entrée flexibles mènent de la communication fondamentale aux études académiques avancées.", learnMore: "Découvrir le programme", items: [{ number: "01", title: "Préparation linguistique", meta: "Français · Anglais · A1–C1", description: "Développer l'écoute, l'expression, la lecture, la rédaction et la communication interculturelle.", href: "/programs/language-preparation" }, { number: "02", title: "Langue académique", meta: "Lecture · Rédaction · Recherche", description: "Utiliser le français ou l'anglais pour les cours, les textes, la recherche et les présentations.", href: "/programs/language-preparation" }, { number: "03", title: "Parcours universitaire", meta: "Compétences · Stratégie · Préparation", description: "Se préparer aux études canadiennes par la littératie académique et l'apprentissage autonome.", href: "/programs/university-pathway" }, { number: "04", title: "Fondements académiques", meta: "Gestion · STIM · Sciences sociales", description: "Renforcer ses connaissances pour poursuivre des études dans des domaines recherchés.", href: "/programs/academic-foundation" }] },
    campus: { label: "Étudier au campus UdeM de Brossard", title: "Vivez l'université avant même qu'elle commence.", description: "Le campus de Brossard de l'Université de Montréal offre un environnement moderne et technologique consacré à l'apprentissage actif et collaboratif sur la Rive-Sud.", location: "2000, rue de l'Éclipse · Brossard, Québec, Canada", features: [{ title: "Salles modernes", description: "Des espaces flexibles conçus pour la discussion, les projets et l'apprentissage actif." }, { title: "Apprentissage technologique", description: "Des outils numériques et multimédias relient les cours au travail autonome." }, { title: "Activités académiques", description: "Conférences, ateliers et activités d'enrichissement prolongent l'apprentissage." }, { title: "Espaces collaboratifs", description: "Étudier, préparer des projets et échanger dans une atmosphère universitaire." }, { title: "Emplacement connecté", description: "Le REM relie directement Brossard au centre-ville de Montréal." }] },
    support: { label: "Centre de réussite étudiante", title: "Une équipe présente à chaque étape du parcours.", description: "Les étudiants peuvent poser leurs questions, prendre de bonnes décisions et recevoir un soutien pratique tout au long de leur transition au Canada.", groups: [{ title: "Soutien académique", description: "Développer de bonnes méthodes et relever les défis avec confiance.", services: ["Conseils académiques", "Stratégies d'apprentissage", "Aide à la rédaction", "Coaching"] }, { title: "Services aux étudiants", description: "Préparer l'arrivée et s'adapter à la vie montréalaise.", services: ["Aide au logement", "Soutien à l'arrivée", "Assurance santé", "Intégration culturelle"] }, { title: "Orientation universitaire", description: "Relier l'apprentissage actuel à un projet d'études ambitieux.", services: ["Planification", "Choix de programme", "Parcours d'études", "Possibilités futures"] }, { title: "Développement de carrière", description: "Transformer la progression académique en confiance professionnelle.", services: ["Exploration de carrière", "Compétences professionnelles", "Préparation aux stages", "Employabilité"] }] },
    impact: { label: "Réussite étudiante et impact mondial", title: "Chaque réussite commence par une possibilité.", description: "Nos étudiants forment une communauté diverse unie par l'ambition académique, la croissance personnelle et l'engagement interculturel.", outcomes: ["Excellence académique", "Croissance personnelle", "Engagement mondial", "Réussite universitaire"], stats: [{ value: "30+", label: "Années de préparation" }, { value: "2", label: "Langues d'opportunité" }, { value: "4", label: "Domaines de soutien" }, { value: "1", label: "Parcours connecté vers l'avenir" }] },
    cta: { label: "Votre avenir commence ici", title: "Prêt à commencer votre parcours universitaire?", description: "Rejoignez une communauté académique dynamique fondée sur l'excellence, l'innovation, l'inclusion et l'engagement mondial.", primary: "Faire une demande", secondary: "Planifier une consultation" },
  },
  zh: {
    hero: { eyebrow: "蒙特利尔大学国际语言与大学衔接中心", title: "从这里，走向更高远的学术未来。", description: "在真实的大学环境中，提前建立面向加拿大高等教育的语言能力、学术方法与独立学习习惯。中心以英法双语培养、大学预备课程和清晰的衔接路径，帮助学生从容迈入下一阶段学习。", highlights: ["以语言为起点，抵达更广阔的学术世界", "从国际学生，成长为具备全球视野的学习者"], actions: ["立即申请", "预约校园参观", "咨询课程顾问"] },
    authority: { since: "创立于 1992 年", title: "三十余年，专注国际学生的学术准备与成长。", description: "中心位于蒙特利尔大学 Brossard 校区，围绕语言提升、学术基础与大学衔接，为学生搭建通往高等教育的坚实路径。", facts: [{ value: "1992", label: "始于蒙特利尔" }, { value: "英 · 法", label: "双语学术环境" }, { value: "6", label: "从语言到职业的成长阶段" }, { value: "全球", label: "面向世界的学生社区" }] },
    about: { label: "中心介绍", title: "为进入大学，也为真正适应大学。", description: "中心连接学生的学术理想与未来大学生活。在沉浸式大学环境中，学生不仅提升语言能力，更逐步形成学术表达、跨文化沟通、独立思考和自我管理能力。", mission: "以严谨而有温度的教学，帮助学生建立语言实力、学术底气、全球视野和面向未来的领导潜能。", vision: "成为值得信赖的国际学术衔接中心，让更多学生以充分准备进入高等教育，并在更广阔的世界中持续成长。", values: ["学术卓越", "语言实力", "全球视野", "跨文化素养", "领导潜能"] },
    tradition: { label: "植根于蒙大学术传统", title: "在大学的氛围中，提前理解大学的标准。", description: "依托蒙特利尔大学重视教学、研究与国际交流的学术传统，中心让学生更早接触大学文化与学习方式。每一项课程都围绕高等教育真正看重的能力展开：求知、表达、研究、判断与独立。", points: [{ title: "在大学环境中学习", description: "提前熟悉课堂节奏、学术要求、校园文化与协作学习方式。" }, { title: "培养大学级能力", description: "练习研究、循证写作、课堂讨论、公开表达与自主学习。" }, { title: "形成清晰升学路径", description: "把语言提升、学术准备和未来方向连接成可执行的学习计划。" }], statement: "我们帮助学生不只是进入大学，而是从第一天起就能听得懂、跟得上、敢表达、会成长。" },
    whyChoose: { label: "为什么选择我们", title: "面向国际学生的完整大学预备体验。", description: "在这里，学生获得的不只是课程，而是一个兼具学术要求、双语环境、学生支持和国际视野的成长系统。", items: [{ title: "大学级学习环境", description: "在蒙特利尔大学相关学术环境中学习，提前理解大学课堂的节奏与期待。" }, { title: "国际化学生社区", description: "与来自不同文化和教育体系的同学共同学习，在交流与合作中拓展视野。" }, { title: "英法双语优势", description: "以法语融入魁北克，以英语连接国际学习、研究与职业机会。" }, { title: "面向大学的教学", description: "系统训练分析思维、学术沟通、研究能力和独立学习方法。" }, { title: "从申请到升学的支持", description: "从申请、抵达、课程学习到未来规划，每一步都有清晰指导。" }] },
    preparation: { label: "为什么需要大学预备", title: "语言成绩，只是大学成功的第一步。", description: "真正的大学学习要求学生能够理解复杂观点、判断证据、清晰表达，并独立管理高强度任务。我们的课程把语言能力进一步转化为可持续的学术竞争力。", items: [{ title: "学术写作", description: "完成结构清楚、引用规范、观点有力的大学级作业。" }, { title: "批判性思维", description: "学会提出问题、比较观点、评估论证，并形成有依据的判断。" }, { title: "研究能力", description: "检索可靠资料，理解学术规范，并开展负责任的研究。" }, { title: "表达与展示", description: "更自信地参与研讨、小组项目和正式学术演讲。" }, { title: "团队协作", description: "在多元文化和不同学科背景中合作解决问题。" }] },
    pathway: { label: "通往成功的路径", title: "从语言基础，到大学能力，再到更广阔的未来。", description: "每一个阶段都不是孤立训练，而是在为下一步积累信心、方法和选择空间。", steps: [{ number: "01", title: "语言基础", description: "建立扎实的英法沟通能力。" }, { number: "02", title: "学术语言", description: "掌握大学学习所需的阅读、写作、词汇与讨论方式。" }, { number: "03", title: "大学衔接", description: "训练研究、批判思维、学习策略与学术诚信。" }, { number: "04", title: "本科学习", description: "以更充分的准备进入学位课程。" }, { number: "05", title: "深造发展", description: "迈向研究生学习、专业课程与研究方向。" }, { number: "06", title: "职业未来", description: "把知识、沟通力和领导力带入全球职场。" }] },
    programs: { label: "学术课程", title: "根据你的起点，选择最合适的准备路径。", description: "无论是语言提升、大学衔接，还是专业方向基础，课程都帮助学生一步步接近理想的高等教育目标。", learnMore: "了解课程", items: [{ number: "01", title: "语言准备课程", meta: "法语 · 英语 · A1–C1", description: "系统提升听、说、读、写和跨文化沟通能力，为学术学习打下基础。", href: "/programs/language-preparation" }, { number: "02", title: "学术语言课程", meta: "阅读 · 写作 · 研究", description: "训练课堂听讲、学术阅读、研究表达和演讲所需的英法语言能力。", href: "/programs/language-preparation" }, { number: "03", title: "大学衔接课程", meta: "能力 · 方法 · 适应", description: "通过学术写作、批判思维和独立学习训练，提前适应加拿大高等教育。", href: "/programs/university-pathway" }, { number: "04", title: "学术基础课程", meta: "商科 · STEM · 社会科学", description: "强化未来专业学习所需的学科基础、分析能力和学习方法。", href: "/programs/academic-foundation" }] },
    campus: { label: "就读蒙大 Brossard 校区", title: "在正式进入大学之前，先感受大学的节奏。", description: "蒙特利尔大学 Brossard 校区位于南岸，拥有现代化教学空间、数字化学习资源与协作式学习环境，让学生从第一天起就置身真实的大学氛围。", location: "2000 Rue de l'Éclipse · Brossard, Québec, Canada", features: [{ title: "现代化教室", description: "灵活的学习空间支持讨论、项目实践、演讲与主动参与。" }, { title: "数字化学习资源", description: "多媒体教学、在线资源与协作工具连接课堂与自主学习。" }, { title: "学术活动", description: "讲座、工作坊和说明会不断拓展学生的大学视野。" }, { title: "协作学习空间", description: "学生可以在专注的学术氛围中准备课程、交流观点、完成项目。" }, { title: "便捷区位", description: "REM 连接 Brossard 与蒙特利尔市中心、生活服务与文化资源。" }] },
    support: { label: "学生成功中心", title: "从抵达到升学，每一步都有支持。", description: "学生可以及早提问、清晰规划，并在学习、生活和未来方向上获得持续帮助。", groups: [{ title: "学术支持", description: "建立高效学习习惯，更从容地面对学术挑战。", services: ["学术顾问", "学习策略", "写作辅导", "学业教练"] }, { title: "学生服务", description: "协助学生完成抵达准备并融入蒙特利尔生活。", services: ["住宿指导", "抵达协助", "医疗保险支持", "文化融入"] }, { title: "升学指导", description: "把当前课程与未来大学申请和专业方向衔接起来。", services: ["学术规划", "课程选择", "升学路径", "未来学习机会"] }, { title: "职业发展", description: "把学术成长进一步转化为职业信心和方向感。", services: ["职业探索", "专业能力", "实习准备", "就业力训练"] }] },
    impact: { label: "学生成长与全球影响", title: "每一次改变，都从一次机会开始。", description: "学生来自不同国家与教育背景，却因共同的学术理想在这里相遇。中心希望他们带走的不只是大学准备，更是一种更自信、更独立、更具全球视野的学习方式。", outcomes: ["学术实力", "个人成长", "全球视野", "大学成功"], stats: [{ value: "30+", label: "年学生培养经验" }, { value: "2", label: "种通向机会的语言" }, { value: "4", label: "学生支持领域" }, { value: "1", label: "条清晰的未来路径" }] },
    cta: { label: "你的未来，从这里展开", title: "准备好开启新的大学旅程了吗？", description: "加入一个重视卓越、创新、包容与国际视野的学术社区。与我们的顾问交流，找到最适合你的课程和起点。", primary: "立即申请", secondary: "预约咨询" },
  },
};
