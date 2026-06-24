export const locales = ["en", "fr"] as const;
export const contentLocales = ["en", "fr", "zh"] as const;
export type Locale = (typeof contentLocales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as (typeof locales)[number]);
}

type LinkItem = { label: string; href: string };
type CardItem = { number: string; title: string; description: string };
type FeatureItem = { title: string; description: string };

export type SiteContent = {
  htmlLang: string;
  metadata: { title: string; description: string };
  header: {
    location: string;
    brandName: string;
    brandMeta: string;
    homeLabel: string;
    navigationLabel: string;
    menuLabel: string;
    closeLabel: string;
    navigation: Array<LinkItem & { children?: LinkItem[] }>;
    apply: string;
    contact: string;
  };
  inPageNav: { title: string; items: LinkItem[] };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    location: string;
  };
  stats: Array<{ value: string; label: string }>;
  intro: { label: string; title: string; description: string; link: string };
  mission: { label: string; title: string; description: string; items: FeatureItem[] };
  programs: { label: string; title: string; description: string; allPrograms: string; learnMore: string; items: CardItem[] };
  pathway: { label: string; title: string; description: string; steps: CardItem[] };
  montreal: { label: string; title: string; description: string; features: string[]; imagePlaceholder: string };
  campus: { label: string; title: string; description: string; facts: FeatureItem[]; imagePlaceholder: string };
  competencies: { label: string; title: string; description: string; items: CardItem[] };
  support: { label: string; title: string; description: string; items: FeatureItem[] };
  story: { label: string; quote: string; name: string; meta: string; imagePlaceholder: string };
  faq: { label: string; title: string; items: Array<{ question: string; answer: string }> };
  admissions: { label: string; title: string; description: string; action: string };
  footer: {
    descriptor: string;
    note: string;
    explore: string;
    information: string;
    links: LinkItem[];
    legal: string;
  };
};

export const siteContent: Record<Locale, SiteContent> = {
  en: {
    htmlLang: "en",
    metadata: {
      title: "Collège International Montréal",
      description: "Language, academic foundation, and university pathway programs in Montréal.",
    },
    header: {
      location: "UdeM Brossard Campus",
      brandName: "UdeM International Center",
      brandMeta: "Language · Academics · Pathways",
      homeLabel: "Collège International Montréal home",
      navigationLabel: "Main navigation",
      menuLabel: "Open menu",
      closeLabel: "Close menu",
      navigation: [
        { label: "About", href: "/about", children: [
          { label: "About the College", href: "/about" },
          { label: "Learning Approach", href: "/learning-approach" },
          { label: "Why Université de Montréal", href: "/why-udem" },
          { label: "Leadership & Governance", href: "/leadership" },
        ] },
        { label: "Programs", href: "/programs", children: [
          { label: "All Programs", href: "/programs" },
          { label: "Language Preparation", href: "/programs/language-preparation" },
          { label: "University Pathway", href: "/programs/university-pathway" },
          { label: "Academic Foundation", href: "/programs/academic-foundation" },
          { label: "HEC Business French", href: "/programs/business-french-hec" },
          { label: "HEC Bachelor’s Programs", href: "/programs/hec-bachelors" },
        ] },
        { label: "Student Life", href: "/student-life", children: [
          { label: "Student Life & Campus", href: "/student-life" },
          { label: "Why Montréal", href: "/why-montreal" },
        ] },
        { label: "Admissions", href: "/admissions", children: [
          { label: "How to Apply", href: "/admissions" },
          { label: "Tuition & Fees", href: "/tuition" },
          { label: "Contact Admissions", href: "/contact" },
        ] },
      ],
      apply: "Apply Now",
      contact: "Talk to an advisor",
    },
    inPageNav: { title: "On this page", items: [
      { label: "About", href: "#about" }, { label: "Programs", href: "#programs" },
      { label: "Pathway", href: "#pathway" }, { label: "Montréal", href: "#student-life" },
      { label: "Support", href: "#support" },
    ] },
    hero: {
      eyebrow: "International Language & Pathway Centre",
      title: "Prepare for university.\nBuild what comes next.",
      description: "Develop the language, academic skills, and subject knowledge needed to participate confidently in higher education and student life in Montréal.",
      primaryAction: "Explore admissions",
      secondaryAction: "View our programs",
      location: "Montréal, Québec",
    },
    stats: [
      { value: "3", label: "Program pathways" },
      { value: "EN · FR", label: "Language options" },
      { value: "6", label: "University-ready skills" },
      { value: "5", label: "Steps in your pathway" },
    ],
    intro: {
      label: "A pathway with purpose",
      title: "Prepare for more than admission. Prepare to thrive.",
      description: "Our programs connect language learning, academic practice, and subject preparation. Students learn how to read critically, write with evidence, contribute to seminars, manage independent study, and plan their next academic step.",
      link: "Discover our approach",
    },
    mission: {
      label: "Our purpose",
      title: "Education that builds capability, confidence, and perspective.",
      description: "We create a supportive transition into higher education, helping students become independent learners and engaged members of a global academic community.",
      items: [
        { title: "Our mission", description: "To equip international students with the language, academic, and intercultural skills required to succeed in university and beyond." },
        { title: "Our vision", description: "To become a trusted academic gateway for globally minded students pursuing meaningful higher education." },
      ],
    },
    programs: {
      label: "Explore our programs", title: "Find your next step.",
      description: "Each program combines clear learning outcomes, university-oriented instruction, and personal guidance.",
      allPrograms: "View all programs", learnMore: "Learn more",
      items: [
        { number: "01", title: "Language Preparation", description: "Build confidence in French and English, from foundational communication to academic language." },
        { number: "02", title: "University Pathway", description: "Develop the writing, research, critical thinking, and learning habits expected in higher education." },
        { number: "03", title: "Academic Foundation", description: "Prepare for future studies in business, STEM, and the social sciences." },
      ],
    },
    pathway: {
      label: "The pathway to success", title: "A clear journey from language learning to university achievement.",
      description: "Progress through a structured sequence designed to build confidence at every stage.",
      steps: [
        { number: "01", title: "Language development", description: "Build a strong foundation in French or English communication." },
        { number: "02", title: "Academic language", description: "Master the reading, writing, and discussion skills used in university." },
        { number: "03", title: "Academic foundation", description: "Strengthen subject knowledge, research habits, and analytical thinking." },
        { number: "04", title: "University pathway", description: "Prepare for university expectations through applied academic practice." },
        { number: "05", title: "Future studies", description: "Move forward with the skills and confidence to pursue higher education." },
      ],
    },
    montreal: {
      label: "Why Montréal", title: "Learn in a city where languages, cultures, and ideas meet.",
      description: "Montréal combines a globally recognized student experience with bilingual culture, creative energy, and an expanding innovation economy.",
      features: ["A bilingual daily environment", "A diverse international community", "Research and innovation ecosystems", "Arts, culture, and urban life"],
      imagePlaceholder: "Life and learning in Montréal",
    },
    campus: {
      label: "Campus experience", title: "A university-oriented environment designed for active learning.",
      description: "Modern teaching spaces, collaborative study areas, and direct access to the wider Montréal region create a setting where students can focus, connect, and grow.",
      facts: [
        { title: "Connected location", description: "Convenient access to public transportation and the services of Greater Montréal." },
        { title: "Collaborative spaces", description: "Classrooms and study areas designed for discussion, teamwork, and applied learning." },
        { title: "International community", description: "A welcoming environment shaped by students from varied cultures and educational systems." },
      ],
      imagePlaceholder: "A place to learn and connect",
    },
    competencies: {
      label: "University readiness", title: "The skills behind lasting academic success.",
      description: "Strong university preparation extends well beyond a language score.",
      items: [
        { number: "01", title: "Academic writing", description: "Produce clear, structured, and evidence-based work." },
        { number: "02", title: "Critical thinking", description: "Analyze information and develop independent conclusions." },
        { number: "03", title: "Research skills", description: "Find, evaluate, and use reliable academic sources." },
        { number: "04", title: "Presentation", description: "Communicate ideas with clarity and confidence." },
        { number: "05", title: "Collaboration", description: "Work effectively in diverse academic teams." },
        { number: "06", title: "Academic integrity", description: "Understand responsible scholarship and citation." },
      ],
    },
    support: {
      label: "Student success", title: "Support for every stage of the journey.",
      description: "From choosing a program to preparing for future study, students can access practical guidance, academic coaching, and transition support.",
      items: [
        { title: "Academic support", description: "Advising, study strategies, writing assistance, and academic coaching." },
        { title: "Arrival and settlement", description: "Guidance for housing, health coverage, arrival, and adapting to life in Montréal." },
        { title: "University advising", description: "Program selection, pathway planning, and preparation for future study opportunities." },
        { title: "Career development", description: "Career exploration, professional skills, internship preparation, and employability guidance." },
      ],
    },
    story: {
      label: "Student perspective",
      quote: "The pathway program gave me the academic language and confidence to participate fully, ask better questions, and take ownership of my learning.",
      name: "Amira K.", meta: "University Pathway student", imagePlaceholder: "Student experience",
    },
    faq: {
      label: "Common questions", title: "Planning your next step.",
      items: [
        { question: "Do I need French or English proficiency before applying?", answer: "Programs are designed for different language backgrounds. A placement assessment may be used to recommend the most appropriate starting level." },
        { question: "Can international students apply?", answer: "Yes. Applications are considered from students educated in Canada and abroad. Academic records and language background are reviewed to identify the most appropriate starting point." },
        { question: "When can I begin?", answer: "Entry is planned for fall, winter, and summer terms. Available programs and application deadlines are confirmed for each intake." },
        { question: "Will I receive academic advising?", answer: "The student support model includes program selection, academic planning, and guidance for future university study." },
      ],
    },
    admissions: {
      label: "Admissions", title: "Ready to begin?",
      description: "Speak with an advisor about programs, requirements, and your next intake.", action: "Start your application",
    },
    footer: {
      descriptor: "Language · Academics · University Pathways",
      note: "Preparing international students for confident university study and future opportunity.",
      explore: "Explore", information: "Information",
      links: [{ label: "Programs", href: "/programs" }, { label: "Admissions", href: "/admissions" }, { label: "Tuition & Fees", href: "/tuition" }, { label: "Student life", href: "/student-life" }, { label: "Contact", href: "/contact" }],
      legal: "Privacy · Accessibility · Terms",
    },
  },
  fr: {
    htmlLang: "fr",
    metadata: { title: "Collège International Montréal", description: "Programmes de langues, de formation préparatoire et de parcours universitaire à Montréal." },
    header: {
      location: "Campus UdeM de Brossard", brandName: "Centre international UdeM", brandMeta: "Langues · Études · Parcours",
      homeLabel: "Accueil du Collège International Montréal", navigationLabel: "Navigation principale", menuLabel: "Ouvrir le menu", closeLabel: "Fermer le menu",
      navigation: [
        { label: "À propos", href: "/about", children: [
          { label: "À propos du Collège", href: "/about" },
          { label: "Approche pédagogique", href: "/learning-approach" },
          { label: "Pourquoi l’Université de Montréal", href: "/why-udem" },
          { label: "Direction et gouvernance", href: "/leadership" },
        ] },
        { label: "Programmes", href: "/programs", children: [
          { label: "Tous les programmes", href: "/programs" },
          { label: "Préparation linguistique", href: "/programs/language-preparation" }, { label: "Parcours universitaire", href: "/programs/university-pathway" }, { label: "Formation préparatoire", href: "/programs/academic-foundation" },
          { label: "Français des affaires HEC", href: "/programs/business-french-hec" },
          { label: "Baccalauréats HEC", href: "/programs/hec-bachelors" },
        ] },
        { label: "Vie étudiante", href: "/student-life", children: [
          { label: "Vie étudiante et campus", href: "/student-life" },
          { label: "Pourquoi Montréal", href: "/why-montreal" },
        ] }, { label: "Admissions", href: "/admissions", children: [
          { label: "Comment faire une demande", href: "/admissions" },
          { label: "Droits et frais", href: "/tuition" },
          { label: "Contacter les admissions", href: "/contact" },
        ] },
      ],
      apply: "Faire une demande", contact: "Parler à un conseiller",
    },
    inPageNav: { title: "Sur cette page", items: [
      { label: "À propos", href: "#about" }, { label: "Programmes", href: "#programs" }, { label: "Parcours", href: "#pathway" }, { label: "Montréal", href: "#student-life" }, { label: "Soutien", href: "#support" },
    ] },
    hero: {
      eyebrow: "Centre de langues et de parcours universitaires", title: "Préparez l’université.\nConstruisez la suite.",
      description: "Développez les compétences linguistiques, académiques et disciplinaires nécessaires pour participer avec assurance aux études supérieures et à la vie étudiante montréalaise.",
      primaryAction: "Découvrir l’admission", secondaryAction: "Voir nos programmes", location: "Montréal, Québec",
    },
    stats: [
      { value: "3", label: "Parcours de formation" }, { value: "EN · FR", label: "Options linguistiques" },
      { value: "6", label: "Compétences universitaires" }, { value: "5", label: "Étapes du parcours" },
    ],
    intro: {
      label: "Un parcours qui a du sens", title: "Préparez plus qu’une admission. Préparez votre réussite.",
      description: "Nos programmes réunissent apprentissage des langues, pratiques académiques et préparation disciplinaire. Les étudiants apprennent à lire de façon critique, rédiger avec des preuves, participer aux séminaires et organiser leur travail autonome.",
      link: "Découvrir notre approche",
    },
    mission: {
      label: "Notre raison d’être", title: "Une éducation qui développe les compétences, la confiance et l’ouverture.",
      description: "Nous facilitons la transition vers les études supérieures afin que chaque étudiant devienne autonome et pleinement engagé dans une communauté académique mondiale.",
      items: [
        { title: "Notre mission", description: "Donner aux étudiants internationaux les compétences linguistiques, académiques et interculturelles nécessaires pour réussir à l’université et au-delà." },
        { title: "Notre vision", description: "Devenir une passerelle académique de confiance pour les étudiants ouverts sur le monde qui poursuivent des études supérieures porteuses de sens." },
      ],
    },
    programs: {
      label: "Découvrir nos programmes", title: "Trouvez votre prochaine étape.",
      description: "Chaque programme associe des objectifs clairs, un enseignement orienté vers l’université et un accompagnement personnalisé.",
      allPrograms: "Voir tous les programmes", learnMore: "En savoir plus",
      items: [
        { number: "01", title: "Préparation linguistique", description: "Développez votre français ou votre anglais, de la communication de base au langage académique." },
        { number: "02", title: "Parcours universitaire", description: "Maîtrisez l’écriture, la recherche, la pensée critique et les méthodes attendues dans l’enseignement supérieur." },
        { number: "03", title: "Formation préparatoire", description: "Préparez vos futures études en gestion, en STIM ou en sciences sociales." },
      ],
    },
    pathway: {
      label: "Le parcours vers la réussite", title: "Un chemin clair, de l’apprentissage des langues à la réussite universitaire.",
      description: "Progressez dans un parcours structuré qui développe la confiance à chaque étape.",
      steps: [
        { number: "01", title: "Développement linguistique", description: "Établir de solides bases de communication en français ou en anglais." },
        { number: "02", title: "Langue académique", description: "Maîtriser la lecture, l’écriture et la discussion universitaires." },
        { number: "03", title: "Formation académique", description: "Renforcer les connaissances, la recherche et l’analyse." },
        { number: "04", title: "Parcours universitaire", description: "Se préparer aux attentes universitaires par la pratique." },
        { number: "05", title: "Études futures", description: "Poursuivre ses études supérieures avec méthode et confiance." },
      ],
    },
    montreal: {
      label: "Pourquoi Montréal", title: "Apprenez dans une ville où se rencontrent les langues, les cultures et les idées.",
      description: "Montréal offre une expérience étudiante reconnue, une culture bilingue, une énergie créative et une économie de l’innovation en plein essor.",
      features: ["Un quotidien bilingue", "Une communauté internationale", "Des écosystèmes de recherche et d’innovation", "Arts, culture et vie urbaine"],
      imagePlaceholder: "Vivre et étudier à Montréal",
    },
    campus: {
      label: "Expérience sur le campus", title: "Un environnement d’inspiration universitaire conçu pour apprendre activement.",
      description: "Des espaces modernes, des zones d’étude collaboratives et un accès direct à la grande région de Montréal favorisent la concentration, les échanges et la progression.",
      facts: [
        { title: "Emplacement accessible", description: "Accès pratique au transport collectif et aux services du Grand Montréal." },
        { title: "Espaces collaboratifs", description: "Des salles pensées pour la discussion, le travail d’équipe et l’apprentissage appliqué." },
        { title: "Communauté internationale", description: "Un environnement accueillant, enrichi par des parcours culturels et scolaires variés." },
      ],
      imagePlaceholder: "Un lieu pour apprendre et échanger",
    },
    competencies: {
      label: "Préparation universitaire", title: "Les compétences au cœur d’une réussite durable.",
      description: "Une bonne préparation universitaire va bien au-delà d’un résultat linguistique.",
      items: [
        { number: "01", title: "Écriture académique", description: "Produire un travail clair, structuré et fondé sur des preuves." },
        { number: "02", title: "Pensée critique", description: "Analyser l’information et formuler ses propres conclusions." },
        { number: "03", title: "Recherche", description: "Trouver, évaluer et utiliser des sources académiques fiables." },
        { number: "04", title: "Présentation", description: "Communiquer ses idées avec clarté et assurance." },
        { number: "05", title: "Collaboration", description: "Travailler efficacement au sein d’équipes diversifiées." },
        { number: "06", title: "Intégrité académique", description: "Comprendre la citation et les pratiques responsables." },
      ],
    },
    support: {
      label: "Réussite étudiante", title: "Un soutien à chaque étape du parcours.",
      description: "De la première demande d’information au projet d’études, les étudiants disposent d’un accompagnement pratique, académique et personnel.",
      items: [
        { title: "Soutien académique", description: "Conseils, méthodes d’étude, aide à la rédaction et coaching académique." },
        { title: "Arrivée et installation", description: "Orientation pour le logement, l’assurance santé, l’arrivée et la vie à Montréal." },
        { title: "Conseil universitaire", description: "Choix du programme, planification du parcours et préparation des études futures." },
        { title: "Développement de carrière", description: "Exploration professionnelle, compétences, préparation aux stages et employabilité." },
      ],
    },
    story: {
      label: "Point de vue étudiant", quote: "Le programme m’a donné le langage académique et la confiance nécessaires pour participer pleinement, poser de meilleures questions et devenir responsable de mon apprentissage.",
      name: "Amira K.", meta: "Étudiante du parcours universitaire", imagePlaceholder: "Expérience étudiante",
    },
    faq: {
      label: "Questions fréquentes", title: "Planifiez votre prochaine étape.",
      items: [
        { question: "Dois-je déjà maîtriser le français ou l’anglais?", answer: "Les programmes accueillent différents profils linguistiques. Une évaluation de classement peut recommander le niveau de départ approprié." },
        { question: "Les étudiants internationaux peuvent-ils postuler?", answer: "Oui. Les candidatures d’étudiants formés au Canada et à l’étranger sont étudiées. Le dossier scolaire et le profil linguistique permettent de recommander le meilleur point de départ." },
        { question: "Quand puis-je commencer?", answer: "Des rentrées sont prévues à l’automne, en hiver et en été. Les programmes offerts et les dates limites sont confirmés pour chaque rentrée." },
        { question: "Un service de conseil académique est-il offert?", answer: "Le modèle de soutien comprend le choix du programme, la planification académique et l’orientation vers de futures études universitaires." },
      ],
    },
    admissions: {
      label: "Admissions", title: "Prêt à commencer?", description: "Échangez avec un conseiller au sujet des programmes, des conditions d’admission et de la prochaine rentrée.", action: "Commencer votre demande",
    },
    footer: {
      descriptor: "Langues · Formation académique · Parcours universitaires",
      note: "Préparer les étudiants internationaux à réussir leurs études universitaires et à saisir les possibilités futures.",
      explore: "Explorer", information: "Renseignements",
      links: [{ label: "Programmes", href: "/programs" }, { label: "Admissions", href: "/admissions" }, { label: "Droits et frais", href: "/tuition" }, { label: "Vie étudiante", href: "/student-life" }, { label: "Contact", href: "/contact" }],
      legal: "Confidentialité · Accessibilité · Conditions",
    },
  },
  zh: {
    htmlLang: "zh-Hans",
    metadata: { title: "蒙特利尔国际学院", description: "面向国际学生的语言提升、学术基础与大学衔接课程。" },
    header: {
      location: "蒙大 Brossard 校区", brandName: "蒙大国际语言与衔接中心", brandMeta: "语言 · 学术 · 升学路径",
      homeLabel: "蒙特利尔国际学院首页", navigationLabel: "主导航", menuLabel: "打开菜单", closeLabel: "关闭菜单",
      navigation: [
        { label: "关于我们", href: "/about", children: [
          { label: "中心介绍", href: "/about" },
          { label: "教学方式", href: "/learning-approach" },
          { label: "为什么选择蒙特利尔大学", href: "/why-udem" },
          { label: "领导与治理", href: "/leadership" },
        ] },
        { label: "课程项目", href: "/programs", children: [
          { label: "全部课程", href: "/programs" },
          { label: "语言准备课程", href: "/programs/language-preparation" }, { label: "大学衔接课程", href: "/programs/university-pathway" }, { label: "学术基础课程", href: "/programs/academic-foundation" },
          { label: "HEC 商务法语", href: "/programs/business-french-hec" },
          { label: "HEC 本科项目", href: "/programs/hec-bachelors" },
        ] },
        { label: "学生生活", href: "/student-life", children: [
          { label: "学生生活与校园", href: "/student-life" },
          { label: "为什么选择蒙特利尔", href: "/why-montreal" },
        ] }, { label: "申请入学", href: "/admissions", children: [
          { label: "如何申请", href: "/admissions" },
          { label: "学费与费用", href: "/tuition" },
          { label: "联系招生", href: "/contact" },
        ] },
      ],
      apply: "立即申请", contact: "咨询顾问",
    },
    inPageNav: { title: "本页内容", items: [
      { label: "中心介绍", href: "#about" }, { label: "课程项目", href: "#programs" }, { label: "升学路径", href: "#pathway" }, { label: "蒙特利尔", href: "#student-life" }, { label: "学生支持", href: "#support" },
    ] },
    hero: {
      eyebrow: "国际语言与大学衔接中心", title: "为进入大学做好准备，\n也为未来打开格局。",
      description: "系统提升语言、学术与专业基础能力，让学生更自信地进入高等教育，也更从容地融入蒙特利尔的学习与生活。",
      primaryAction: "了解申请流程", secondaryAction: "查看课程设置", location: "加拿大 · 蒙特利尔",
    },
    stats: [
      { value: "3", label: "三类课程路径" }, { value: "英 · 法", label: "两种语言方向" },
      { value: "6", label: "六项大学核心能力" }, { value: "5", label: "五阶段学习路径" },
    ],
    intro: {
      label: "目标清晰的升学路径", title: "不只是为了拿到录取，更是为了进入大学后站稳脚步。",
      description: "课程融合语言训练、学术实践与专业基础，帮助学生掌握批判阅读、循证写作、课堂讨论、独立学习和升学规划方法。",
      link: "了解教学方式",
    },
    mission: {
      label: "我们的目标", title: "一段培养能力、信心与国际视野的教育。",
      description: "我们帮助学生平稳过渡到高等教育阶段，成为能够独立学习、主动表达，并积极参与国际学术社区的学习者。",
      items: [
        { title: "学院使命", description: "帮助国际学生建立大学学习及未来发展所需的语言、学术与跨文化能力。" },
        { title: "学院愿景", description: "成为连接全球学生与优质高等教育机会、值得信赖的学术桥梁。" },
      ],
    },
    programs: {
      label: "探索课程", title: "找到适合你的下一步路径。",
      description: "每项课程均结合清晰的学习成果、面向大学的教学方式和个性化指导。",
      allPrograms: "查看全部课程", learnMore: "了解更多",
      items: [
        { number: "01", title: "语言准备课程", description: "从基础沟通到学术语言，系统提升法语或英语能力。" },
        { number: "02", title: "大学衔接课程", description: "培养大学所需的写作、研究、批判思维与独立学习习惯。" },
        { number: "03", title: "学术基础课程", description: "为商科、STEM 与社会科学等未来专业方向做好准备。" },
      ],
    },
    pathway: {
      label: "通往成功的路径", title: "从语言学习到大学成就，每一步都有清晰方向。",
      description: "循序渐进的课程体系，帮助学生在每个阶段积累能力、信心和选择空间。",
      steps: [
        { number: "01", title: "语言能力发展", description: "建立扎实的法语或英语沟通基础。" },
        { number: "02", title: "学术语言训练", description: "掌握大学课堂中的阅读、写作与讨论方式。" },
        { number: "03", title: "学术基础培养", description: "加强学科知识、研究习惯和分析思维。" },
        { number: "04", title: "大学衔接学习", description: "通过真实学术实践适应大学要求。" },
        { number: "05", title: "未来高等教育", description: "以更成熟的方法和信心迈向下一阶段学习。" },
      ],
    },
    montreal: {
      label: "为什么选择蒙特利尔", title: "在语言、文化与思想交汇的城市中学习。",
      description: "蒙特利尔融合国际化学生体验、英法双语文化、创意活力与不断发展的创新经济，是适合学习、生活与成长的城市。",
      features: ["真实的英法双语环境", "多元国际学生社区", "科研与创新产业生态", "艺术、文化与城市生活"],
      imagePlaceholder: "在蒙特利尔学习与生活",
    },
    campus: {
      label: "校园体验", title: "为大学式学习而打造的现代环境。",
      description: "现代教学空间、协作学习区域与便捷交通，共同营造适合专注学习、深度交流和持续成长的校园体验。",
      facts: [
        { title: "交通便利", description: "便捷连接公共交通系统与大蒙特利尔地区的生活服务。" },
        { title: "协作空间", description: "适合课堂讨论、团队项目与实践学习的教学和自习区域。" },
        { title: "国际社区", description: "由不同文化和教育背景的学生共同构成开放、友好的学习环境。" },
      ],
      imagePlaceholder: "专注学习，连接彼此",
    },
    competencies: {
      label: "大学学习准备", title: "支撑长期学术成功的核心能力。",
      description: "大学准备不只是一项语言成绩，更是一整套学习方法和思维能力。",
      items: [
        { number: "01", title: "学术写作", description: "完成清晰、严谨并有可靠依据的学术表达。" },
        { number: "02", title: "批判性思维", description: "分析复杂信息并形成独立判断。" },
        { number: "03", title: "研究能力", description: "查找、评估并正确使用可靠学术资料。" },
        { number: "04", title: "演讲表达", description: "清晰、自信地展示观点和研究成果。" },
        { number: "05", title: "团队协作", description: "在多元学术团队中高效合作。" },
        { number: "06", title: "学术诚信", description: "理解引用规范与负责任的学术实践。" },
      ],
    },
    support: {
      label: "学生成功支持", title: "陪伴学生走过每一个关键阶段。",
      description: "从第一次咨询到未来升学规划，学生都能获得学习、生活与个人发展方面的实际指导。",
      items: [
        { title: "学术支持", description: "选课建议、学习策略、写作辅导与学术能力提升。" },
        { title: "抵达与安顿", description: "住宿、健康保险、抵达安排及适应蒙特利尔生活的指导。" },
        { title: "大学升学指导", description: "课程选择、升学路径规划与未来大学申请准备。" },
        { title: "职业发展", description: "职业探索、专业能力、实习准备与就业技能指导。" },
      ],
    },
    story: {
      label: "学生视角", quote: "衔接课程不仅提升了我的学术语言，也让我更有信心参与课堂、提出更好的问题，并真正对自己的学习负责。",
      name: "Amira K.", meta: "大学衔接课程学生", imagePlaceholder: "学生学习体验",
    },
    faq: {
      label: "常见问题", title: "规划你的下一步。",
      items: [
        { question: "申请前必须具备法语或英语基础吗？", answer: "课程面向不同语言背景的学生。学院可通过分级评估建议适合的起始级别。" },
        { question: "国际学生可以申请吗？", answer: "可以。学院接受来自加拿大及其他国家和教育体系的申请，并根据学术记录和语言背景建议适合的课程起点。" },
        { question: "每年什么时候可以入学？", answer: "课程计划设置秋季、冬季和夏季入学。每期开放课程与申请截止日期将按入学批次公布。" },
        { question: "学院提供升学指导吗？", answer: "学生支持体系包含课程选择、学术规划和未来大学学习方向指导。" },
      ],
    },
    admissions: {
      label: "申请入学", title: "准备好迈出下一步了吗？", description: "与课程顾问沟通课程选择、入学要求及下一期开课时间。", action: "开始申请",
    },
    footer: {
      descriptor: "语言学习 · 学术准备 · 升学路径",
      note: "帮助国际学生以更充分的准备迈向大学学习与未来发展。",
      explore: "快速浏览", information: "联系信息",
      links: [{ label: "课程项目", href: "/programs" }, { label: "申请入学", href: "/admissions" }, { label: "学费与费用", href: "/tuition" }, { label: "学生生活", href: "/student-life" }, { label: "联系我们", href: "/contact" }],
      legal: "隐私政策 · 无障碍声明 · 使用条款",
    },
  },
};
