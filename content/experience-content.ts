import type { Locale } from "@/content/site-content";

export const experienceSlugs = ["about", "why-udem", "why-montreal", "student-life", "learning-approach", "leadership", "admissions", "tuition", "contact"] as const;
export type ExperienceSlug = (typeof experienceSlugs)[number];

export function isExperienceSlug(value: string): value is ExperienceSlug {
  return experienceSlugs.includes(value as ExperienceSlug);
}

type Item = { title: string; description: string };
type Stat = { value: string; label: string };

export type ExperiencePage = {
  metadataTitle: string;
  metadataDescription: string;
  theme: ExperienceSlug;
  hero: { eyebrow: string; title: string; description: string; visualLabel: string; visualCode: string };
  stats: Stat[];
  nav: { title: string; items: Array<{ label: string; href: string }> };
  intro: { label: string; title: string; description: string };
  pillars: { label: string; title: string; description: string; items: Item[] };
  feature: { label: string; title: string; description: string; visualLabel: string; points: string[] };
  journey: { label: string; title: string; description: string; items: Item[] };
  faq: { label: string; title: string; items: Array<{ question: string; answer: string }> };
  cta: { label: string; title: string; description: string; action: string; href: string };
};

type ExperienceLocaleContent = {
  labels: { home: string; about: string; explore: string };
  pages: Record<ExperienceSlug, ExperiencePage>;
};

const nav = {
  en: (a: string, b: string, c: string) => ({ title: "On this page", items: [{ label: a, href: "#overview" }, { label: b, href: "#highlights" }, { label: c, href: "#experience" }, { label: "Questions", href: "#questions" }] }),
  fr: (a: string, b: string, c: string) => ({ title: "Sur cette page", items: [{ label: a, href: "#overview" }, { label: b, href: "#highlights" }, { label: c, href: "#experience" }, { label: "Questions", href: "#questions" }] }),
  zh: (a: string, b: string, c: string) => ({ title: "本页内容", items: [{ label: a, href: "#overview" }, { label: b, href: "#highlights" }, { label: c, href: "#experience" }, { label: "常见问题", href: "#questions" }] }),
};

type ConversionSlug = "admissions" | "tuition" | "contact";

const conversionPages: Record<Locale, Record<ConversionSlug, ExperiencePage>> = {
  en: {
    admissions: {
      metadataTitle: "Admissions | Collège International Montréal", metadataDescription: "Review admission steps, documents, language placement, and application guidance.", theme: "admissions",
      hero: { eyebrow: "Admissions", title: "A clear application process, from first question to next step.", description: "Understand the documents, academic background, language information, and planning conversations used to identify the right program and entry point.", visualLabel: "Your application pathway", visualCode: "APPLY" },
      stats: [{ value: "3", label: "Planned annual intakes" }, { value: "5", label: "Application steps" }, { value: "EN · FR", label: "Language pathways" }, { value: "1:1", label: "Admissions guidance" }],
      nav: nav.en("How to apply", "What you need", "Application review"),
      intro: { label: "How to apply", title: "Begin with your background and your goals.", description: "Admissions is not only a document check. We review previous study, language background, intended field, and readiness for the selected program so students can begin at an appropriate level." },
      pillars: { label: "Application checklist", title: "Prepare the information needed for review.", description: "Exact requirements may vary by program and applicant profile.", items: [
        { title: "Personal information", description: "Legal name, contact information, citizenship, and current place of residence." },
        { title: "Academic records", description: "Recent transcripts, certificates, diplomas, and certified translations where required." },
        { title: "Language background", description: "Previous study, available test results, and placement assessment where applicable." },
        { title: "Study plan", description: "Preferred program, intended intake, academic interests, and future education goals." },
      ] },
      feature: { label: "Admissions review", title: "Each application is considered in context.", description: "The review looks at whether the requested program matches the applicant’s preparation. An advisor may request clarification, an additional document, or a placement conversation before a recommendation is made.", visualLabel: "A complete, individual review", points: ["Document completeness check", "Academic background review", "Language placement where required", "Program and intake recommendation"] },
      journey: { label: "Application process", title: "Five steps from preparation to enrolment.", description: "The online application saves no information to a server in this prototype, but follows the intended full process.", items: [
        { title: "Choose a program", description: "Compare pathways and identify the study option that fits your goals." },
        { title: "Prepare documents", description: "Gather identification, academic records, and available language information." },
        { title: "Submit an application", description: "Complete all sections and review the information for accuracy." },
        { title: "Review and next steps", description: "Respond to document requests, placement, and enrolment instructions." },
      ] },
      faq: { label: "Admissions questions", title: "Before you apply.", items: [
        { question: "Can I apply before completing my current studies?", answer: "Yes. Submit the most recent available records. Updated or final documents may be requested later." },
        { question: "Do documents need to be translated?", answer: "Documents not issued in English or French may require a certified translation together with the original." },
        { question: "Does an application guarantee admission?", answer: "No. Applications are reviewed against program requirements, available levels, and intake capacity." },
      ] },
      cta: { label: "Apply online", title: "Ready to prepare your application?", description: "Complete the guided application and review every section before the final confirmation.", action: "Start application", href: "/apply" },
    },
    tuition: {
      metadataTitle: "Tuition & Fees | Collège International Montréal", metadataDescription: "Understand tuition planning, fee categories, payment timing, and study-related costs.", theme: "tuition",
      hero: { eyebrow: "Tuition & fees", title: "Plan the full cost of study with clear information.", description: "Tuition depends on the selected program, study load, level, and intake. Students receive an itemized fee summary before accepting an offer.", visualLabel: "Transparent study planning", visualCode: "CAD" },
      stats: [{ value: "CAD", label: "Fees quoted in Canadian dollars" }, { value: "Itemized", label: "Offer and fee summary" }, { value: "Before", label: "Payment terms before enrolment" }, { value: "Clear", label: "Refund policy information" }],
      nav: nav.en("Tuition planning", "Fee categories", "Payment process"),
      intro: { label: "Tuition planning", title: "Know what is included before you commit.", description: "A complete financial plan includes tuition, required academic materials, health coverage, transportation, housing, food, and personal expenses. Program-specific amounts will be published after the academic and fee schedule is approved." },
      pillars: { label: "Cost categories", title: "Build a realistic study budget.", description: "Your official fee summary identifies institutional charges; personal living costs are planned separately.", items: [
        { title: "Program tuition", description: "Calculated according to the program, level, study load, and approved intake schedule." },
        { title: "Academic costs", description: "Required books, digital resources, assessment materials, or program supplies." },
        { title: "Health coverage", description: "Applicable insurance requirements depend on the student’s status and period of study." },
        { title: "Living expenses", description: "Housing, food, local transportation, communications, clothing, and personal costs." },
      ] },
      feature: { label: "Your fee summary", title: "Important amounts and deadlines in one place.", description: "Before enrolment, students should receive an itemized document showing tuition, required fees, deposit or payment deadlines, accepted methods, and the applicable refund terms.", visualLabel: "Review before payment", points: ["Program and intake identified", "Tuition and required charges itemized", "Payment deadlines and methods", "Withdrawal and refund conditions"] },
      journey: { label: "Payment process", title: "Review first. Pay through approved channels only.", description: "Clear payment instructions help students and families avoid uncertainty and fraud.", items: [
        { title: "Receive the fee summary", description: "Confirm the program, intake, currency, and charges shown." },
        { title: "Read the conditions", description: "Review deadlines, refund terms, and any conditions attached to enrolment." },
        { title: "Use an approved method", description: "Follow only the payment instructions issued in official College communication." },
        { title: "Keep confirmation", description: "Retain receipts and verify that the payment has been applied correctly." },
      ] },
      faq: { label: "Fee questions", title: "Plan before making a payment.", items: [
        { question: "Where are the exact tuition amounts?", answer: "Program-specific tuition will be published after approval and shown in the official offer and fee summary." },
        { question: "Are living costs included in tuition?", answer: "No. Housing, food, transportation, communications, and personal costs are normally planned separately." },
        { question: "What is the refund policy?", answer: "The applicable withdrawal and refund terms will accompany the official fee information and must be reviewed before payment." },
      ] },
      cta: { label: "Financial planning", title: "Request program-specific fee guidance.", description: "An advisor can explain the cost categories and information available for your intended intake.", action: "Contact admissions", href: "/contact" },
    },
    contact: {
      metadataTitle: "Contact | Collège International Montréal", metadataDescription: "Contact admissions for program, application, tuition, and student experience questions.", theme: "contact",
      hero: { eyebrow: "Contact us", title: "Start with a conversation about your next academic step.", description: "Contact the College for program guidance, admissions questions, tuition planning, or information about studying in Montréal.", visualLabel: "Admissions and information", visualCode: "HELLO" },
      stats: [{ value: "EN · FR", label: "Service languages" }, { value: "MTL", label: "Montréal time zone" }, { value: "Email", label: "Primary contact channel" }, { value: "Advisor", label: "Program guidance" }],
      nav: nav.en("Contact options", "Before you write", "What happens next"),
      intro: { label: "Contact options", title: "Reach the team that can answer your question.", description: "Admissions is the starting point for future students and families. Include enough context—your preferred program, intended intake, current education, and language background—to receive a useful response." },
      pillars: { label: "How we can help", title: "Choose the subject closest to your question.", description: "Clear subject information helps direct your request efficiently.", items: [
        { title: "Programs", description: "Compare language, university pathway, and academic foundation options." },
        { title: "Admissions", description: "Ask about documents, eligibility, placement, application status, and next steps." },
        { title: "Tuition", description: "Request available fee information, payment guidance, and financial planning details." },
        { title: "Student experience", description: "Learn about arrival, academic support, campus routines, and life in Montréal." },
      ] },
      feature: { label: "Write to admissions", title: "Include the details needed for a helpful reply.", description: "Do not send passwords, banking details, or unnecessary sensitive documents by ordinary email. Application documents should only be provided through an approved secure process.", visualLabel: "admissions@cimontreal.ca", points: ["Full name and country of residence", "Program and intended intake", "Current or most recent education", "A clear question or requested next step"] },
      journey: { label: "What happens next", title: "From your question to a clear next action.", description: "The team reviews the request and identifies whether information, advising, or an application step is needed.", items: [
        { title: "Send your question", description: "Provide concise context and the best way to reply." },
        { title: "Request is reviewed", description: "The message is directed to the appropriate program or admissions contact." },
        { title: "Receive guidance", description: "Get relevant information and any documents or links needed." },
        { title: "Take the next step", description: "Explore a program, prepare documents, or begin an application." },
      ] },
      faq: { label: "Contact questions", title: "Getting the right support.", items: [
        { question: "What email address should future students use?", answer: "Use admissions@cimontreal.ca for general program and admissions enquiries." },
        { question: "Can I email application documents?", answer: "Wait for approved document instructions. Sensitive documents should only be shared through a secure process." },
        { question: "Can a family member contact the College?", answer: "Yes for general information. Personal application details require the applicant’s authorization and appropriate identity checks." },
      ] },
      cta: { label: "Admissions enquiry", title: "Tell us how we can help.", description: "Send a concise message with your preferred program and intended intake.", action: "Email admissions", href: "mailto:admissions@cimontreal.ca" },
    },
  },
  fr: {
    admissions: {
      metadataTitle: "Admissions | Collège International Montréal", metadataDescription: "Découvrez les étapes, documents, évaluations linguistiques et conseils liés à l’admission.", theme: "admissions",
      hero: { eyebrow: "Admissions", title: "Un processus clair, de la première question à la prochaine étape.", description: "Comprenez les documents, le parcours scolaire et les renseignements linguistiques utilisés pour identifier le programme et le niveau appropriés.", visualLabel: "Votre parcours de demande", visualCode: "DOSSIER" },
      stats: [{ value: "3", label: "Rentrées annuelles prévues" }, { value: "5", label: "Étapes de demande" }, { value: "EN · FR", label: "Parcours linguistiques" }, { value: "1:1", label: "Conseil d’admission" }],
      nav: nav.fr("Faire une demande", "Documents requis", "Étude du dossier"),
      intro: { label: "Faire une demande", title: "Commencez par votre parcours et vos objectifs.", description: "L’admission ne se limite pas aux documents. Nous examinons les études antérieures, le profil linguistique, le domaine visé et la préparation afin de recommander un point de départ approprié." },
      pillars: { label: "Liste de préparation", title: "Préparez les renseignements nécessaires.", description: "Les exigences précises varient selon le programme et le profil.", items: [
        { title: "Renseignements personnels", description: "Nom légal, coordonnées, citoyenneté et lieu de résidence." },
        { title: "Dossiers scolaires", description: "Relevés, certificats, diplômes et traductions certifiées au besoin." },
        { title: "Profil linguistique", description: "Études antérieures, résultats disponibles et évaluation de classement." },
        { title: "Projet d’études", description: "Programme, rentrée, intérêts académiques et objectifs futurs." },
      ] },
      feature: { label: "Étude du dossier", title: "Chaque demande est étudiée dans son contexte.", description: "Un conseiller peut demander une précision, un document ou une rencontre de classement avant de formuler une recommandation.", visualLabel: "Une étude complète et individuelle", points: ["Vérification du dossier", "Examen du parcours scolaire", "Classement linguistique", "Recommandation de programme"] },
      journey: { label: "Processus", title: "Cinq étapes vers l’inscription.", description: "Le formulaire prototype ne transmet aucune donnée, mais reproduit le processus prévu.", items: [
        { title: "Choisir un programme", description: "Comparer les parcours selon vos objectifs." },
        { title: "Préparer les documents", description: "Rassembler identité, dossiers et renseignements linguistiques." },
        { title: "Remplir la demande", description: "Compléter chaque section et vérifier l’exactitude." },
        { title: "Suivre les prochaines étapes", description: "Répondre aux demandes, au classement et aux instructions." },
      ] },
      faq: { label: "Questions d’admission", title: "Avant de présenter une demande.", items: [
        { question: "Puis-je postuler avant la fin de mes études?", answer: "Oui. Fournissez les relevés les plus récents; des documents finaux pourront être demandés." },
        { question: "Faut-il traduire les documents?", answer: "Les documents qui ne sont ni en français ni en anglais peuvent nécessiter une traduction certifiée avec l’original." },
        { question: "La demande garantit-elle l’admission?", answer: "Non. Le dossier est évalué selon les exigences, les niveaux offerts et la capacité de la rentrée." },
      ] },
      cta: { label: "Demande en ligne", title: "Prêt à préparer votre dossier?", description: "Remplissez la demande guidée et vérifiez chaque section avant la confirmation.", action: "Commencer la demande", href: "/apply" },
    },
    tuition: {
      metadataTitle: "Droits de scolarité et frais | Collège International Montréal", metadataDescription: "Comprenez les catégories de frais, les échéances et le budget lié aux études.", theme: "tuition",
      hero: { eyebrow: "Droits et frais", title: "Planifiez le coût complet des études avec clarté.", description: "Les droits dépendent du programme, de la charge d’études, du niveau et de la rentrée. Un relevé détaillé est remis avant l’acceptation d’une offre.", visualLabel: "Une planification transparente", visualCode: "CAD" },
      stats: [{ value: "CAD", label: "Montants en dollars canadiens" }, { value: "Détaillé", label: "Relevé des frais" }, { value: "Avant", label: "Conditions avant inscription" }, { value: "Clair", label: "Règles de remboursement" }],
      nav: nav.fr("Planifier", "Catégories de coûts", "Paiement"),
      intro: { label: "Planification", title: "Sachez ce qui est inclus avant de vous engager.", description: "Un budget complet tient compte des droits, du matériel, de l’assurance santé, du transport, du logement, de l’alimentation et des dépenses personnelles. Les montants seront publiés après approbation du barème." },
      pillars: { label: "Catégories de coûts", title: "Construisez un budget réaliste.", description: "Le relevé officiel précise les frais institutionnels; les dépenses de vie sont planifiées séparément.", items: [
        { title: "Droits du programme", description: "Calculés selon le programme, le niveau, la charge et la rentrée." },
        { title: "Coûts académiques", description: "Livres, ressources numériques, évaluations ou fournitures requises." },
        { title: "Assurance santé", description: "Les exigences varient selon le statut et la durée des études." },
        { title: "Coût de la vie", description: "Logement, alimentation, transport, communications et dépenses personnelles." },
      ] },
      feature: { label: "Relevé des frais", title: "Montants et échéances réunis au même endroit.", description: "Avant l’inscription, le relevé devrait indiquer les droits, frais obligatoires, échéances, méthodes acceptées et conditions de remboursement.", visualLabel: "Vérifier avant de payer", points: ["Programme et rentrée", "Frais détaillés", "Échéances et méthodes", "Conditions de retrait"] },
      journey: { label: "Paiement", title: "Vérifiez d’abord. Utilisez uniquement les canaux approuvés.", description: "Des instructions claires protègent les étudiants et les familles.", items: [
        { title: "Recevoir le relevé", description: "Confirmer programme, rentrée, devise et montants." },
        { title: "Lire les conditions", description: "Examiner délais et règles de remboursement." },
        { title: "Utiliser une méthode approuvée", description: "Suivre uniquement les instructions officielles." },
        { title: "Conserver la confirmation", description: "Garder les reçus et vérifier l’application du paiement." },
      ] },
      faq: { label: "Questions financières", title: "Planifier avant de payer.", items: [
        { question: "Où sont les montants exacts?", answer: "Ils seront publiés après approbation et figureront dans l’offre et le relevé officiels." },
        { question: "Le coût de la vie est-il inclus?", answer: "Non. Logement, alimentation, transport et dépenses personnelles sont normalement séparés." },
        { question: "Quelle est la politique de remboursement?", answer: "Les conditions applicables accompagneront l’information officielle et doivent être lues avant paiement." },
      ] },
      cta: { label: "Planification financière", title: "Demandez des renseignements adaptés à votre programme.", description: "Un conseiller peut expliquer les catégories de coûts disponibles pour votre rentrée.", action: "Contacter les admissions", href: "/contact" },
    },
    contact: {
      metadataTitle: "Nous joindre | Collège International Montréal", metadataDescription: "Contactez les admissions pour les programmes, demandes, frais et expérience étudiante.", theme: "contact",
      hero: { eyebrow: "Nous joindre", title: "Commencez par une conversation sur votre prochaine étape.", description: "Communiquez avec le Collège pour les programmes, l’admission, la planification financière ou les études à Montréal.", visualLabel: "Admissions et renseignements", visualCode: "BONJOUR" },
      stats: [{ value: "EN · FR", label: "Langues de service" }, { value: "MTL", label: "Fuseau de Montréal" }, { value: "Courriel", label: "Canal principal" }, { value: "Conseil", label: "Orientation de programme" }],
      nav: nav.fr("Nous joindre", "Préparer le message", "La suite"),
      intro: { label: "Nous joindre", title: "Adressez-vous à l’équipe qui peut vous aider.", description: "Les admissions sont le premier point de contact. Indiquez le programme, la rentrée, vos études actuelles et votre profil linguistique pour obtenir une réponse utile." },
      pillars: { label: "Comment nous pouvons aider", title: "Choisissez le sujet le plus proche de votre question.", description: "Un sujet clair permet de diriger efficacement la demande.", items: [
        { title: "Programmes", description: "Comparer les options linguistiques, universitaires et préparatoires." },
        { title: "Admissions", description: "Documents, admissibilité, classement, état du dossier et prochaines étapes." },
        { title: "Droits et frais", description: "Information disponible, paiements et planification financière." },
        { title: "Expérience étudiante", description: "Arrivée, soutien académique, campus et vie à Montréal." },
      ] },
      feature: { label: "Écrire aux admissions", title: "Incluez les détails nécessaires à une réponse utile.", description: "N’envoyez pas de mots de passe, renseignements bancaires ou documents sensibles inutiles par courriel ordinaire.", visualLabel: "admissions@cimontreal.ca", points: ["Nom complet et pays de résidence", "Programme et rentrée", "Études actuelles ou récentes", "Question ou prochaine étape souhaitée"] },
      journey: { label: "La suite", title: "De votre question à une action claire.", description: "L’équipe détermine si vous avez besoin d’information, de conseil ou d’une étape de demande.", items: [
        { title: "Envoyer la question", description: "Donner un contexte concis et un moyen de réponse." },
        { title: "Étude de la demande", description: "Le message est dirigé vers la bonne personne." },
        { title: "Recevoir des conseils", description: "Obtenir l’information et les liens pertinents." },
        { title: "Passer à l’action", description: "Explorer, préparer les documents ou commencer la demande." },
      ] },
      faq: { label: "Questions de contact", title: "Obtenir le bon soutien.", items: [
        { question: "Quelle adresse utiliser?", answer: "Utilisez admissions@cimontreal.ca pour les programmes et l’admission." },
        { question: "Puis-je envoyer mes documents par courriel?", answer: "Attendez les instructions approuvées; les documents sensibles doivent passer par un processus sécurisé." },
        { question: "Un membre de ma famille peut-il communiquer avec le Collège?", answer: "Oui pour l’information générale. Les détails personnels exigent l’autorisation du candidat." },
      ] },
      cta: { label: "Demande de renseignements", title: "Dites-nous comment vous aider.", description: "Envoyez un message concis avec le programme et la rentrée souhaités.", action: "Écrire aux admissions", href: "mailto:admissions@cimontreal.ca" },
    },
  },
  zh: {
    admissions: {
      metadataTitle: "申请入学 | 蒙特利尔国际学院", metadataDescription: "了解申请步骤、材料、语言分级与课程指导。", theme: "admissions",
      hero: { eyebrow: "申请入学", title: "从第一次咨询到下一步安排，流程清晰明确。", description: "了解学院如何根据申请材料、学术背景、语言信息与个人规划确定适合的课程和入学起点。", visualLabel: "你的申请路径", visualCode: "申请" },
      stats: [{ value: "3", label: "计划年度入学批次" }, { value: "5", label: "五步申请流程" }, { value: "英 · 法", label: "语言课程路径" }, { value: "1:1", label: "申请指导" }],
      nav: nav.zh("如何申请", "申请材料", "材料审核"),
      intro: { label: "如何申请", title: "从个人背景和未来目标开始。", description: "申请不只是核对材料。学院会综合了解过往学习、语言背景、意向专业及课程准备程度，从而建议合适的起点。" },
      pillars: { label: "申请清单", title: "准备审核所需的信息。", description: "具体要求会根据课程和申请人背景有所不同。", items: [
        { title: "个人信息", description: "法定姓名、联系方式、公民身份及当前居住地。" },
        { title: "学术记录", description: "近期成绩单、证书、毕业文件及必要的认证翻译。" },
        { title: "语言背景", description: "过往学习、已有考试成绩及必要的语言分级评估。" },
        { title: "学习计划", description: "意向课程、入学时间、学术兴趣和未来教育目标。" },
      ] },
      feature: { label: "申请审核", title: "结合个人背景审核每份申请。", description: "课程顾问可能在提出建议前要求补充说明、其他材料或进行语言分级沟通。", visualLabel: "完整、个性化的审核", points: ["材料完整性核对", "学术背景审核", "必要时语言分级", "课程与入学批次建议"] },
      journey: { label: "申请流程", title: "从准备到入学的五个步骤。", description: "当前在线申请不会向服务器传输资料，但完整呈现计划中的正式流程。", items: [
        { title: "选择课程", description: "比较课程路径并确定符合目标的选项。" },
        { title: "准备材料", description: "整理身份证明、学术记录和语言信息。" },
        { title: "填写申请", description: "完成所有部分并核对信息准确性。" },
        { title: "完成后续步骤", description: "回应补件、分级和入学安排。" },
      ] },
      faq: { label: "申请问题", title: "提交申请之前。", items: [
        { question: "尚未完成当前学业可以申请吗？", answer: "可以。先提交最新记录，学院可能在之后要求更新或最终文件。" },
        { question: "材料需要翻译吗？", answer: "非英文或法文文件可能需要同时提交原件和认证翻译。" },
        { question: "提交申请是否保证录取？", answer: "不保证。申请会根据课程要求、开放级别和入学容量进行审核。" },
      ] },
      cta: { label: "在线申请", title: "准备开始整理申请了吗？", description: "按照引导完成申请，并在最终确认前检查每个部分。", action: "开始申请", href: "/apply" },
    },
    tuition: {
      metadataTitle: "学费与费用 | 蒙特利尔国际学院", metadataDescription: "了解学费规划、费用类别、付款时间与学习相关成本。", theme: "tuition",
      hero: { eyebrow: "学费与费用", title: "通过清晰信息，规划完整学习成本。", description: "学费取决于课程、学习量、级别和入学批次。学生将在接受录取前收到逐项列明的费用说明。", visualLabel: "透明的学习财务规划", visualCode: "CAD" },
      stats: [{ value: "CAD", label: "以加元列示费用" }, { value: "逐项", label: "录取与费用说明" }, { value: "提前", label: "注册前说明付款条件" }, { value: "清晰", label: "退款政策信息" }],
      nav: nav.zh("费用规划", "费用类别", "付款流程"),
      intro: { label: "费用规划", title: "确认包含内容之后再作决定。", description: "完整预算包括课程学费、必要材料、健康保险、交通、住宿、餐饮和个人支出。具体金额将在学术与收费方案批准后公布。" },
      pillars: { label: "费用类别", title: "建立现实可行的学习预算。", description: "正式费用说明列出学院收费，个人生活费用需单独规划。", items: [
        { title: "课程学费", description: "根据课程、级别、学习量和批准的入学安排计算。" },
        { title: "学术费用", description: "必要书籍、数字资源、评估材料或课程用品。" },
        { title: "健康保险", description: "相关要求取决于学生身份与学习时间。" },
        { title: "生活费用", description: "住宿、餐饮、交通、通信、衣物和个人开支。" },
      ] },
      feature: { label: "费用说明", title: "在同一份文件中查看金额与日期。", description: "注册前的费用文件应列明学费、必要费用、付款期限、接受方式和适用退款条款。", visualLabel: "付款前认真核对", points: ["明确课程与批次", "逐项列明收费", "付款日期和方式", "退课与退款条件"] },
      journey: { label: "付款流程", title: "先核对，只使用学院批准的渠道。", description: "清晰付款说明有助于学生和家庭避免误解与风险。", items: [
        { title: "接收费用说明", description: "核对课程、批次、币种和收费。" },
        { title: "阅读相关条件", description: "查看期限、退款条款和注册条件。" },
        { title: "使用批准方式", description: "只遵循学院正式通信中的付款指引。" },
        { title: "保留付款确认", description: "保存凭证并核实款项已正确入账。" },
      ] },
      faq: { label: "费用问题", title: "付款之前做好规划。", items: [
        { question: "具体学费金额在哪里？", answer: "金额将在批准后公布，并显示于正式录取和费用说明中。" },
        { question: "生活费用包含在学费中吗？", answer: "不包含。住宿、餐饮、交通、通信和个人支出通常需要单独规划。" },
        { question: "退款政策是什么？", answer: "适用的退课和退款条款将随正式费用信息提供，付款前必须阅读。" },
      ] },
      cta: { label: "财务规划", title: "获取针对意向课程的费用指导。", description: "课程顾问可以说明当前入学批次可提供的费用信息。", action: "联系招生", href: "/contact" },
    },
    contact: {
      metadataTitle: "联系我们 | 蒙特利尔国际学院", metadataDescription: "就课程、申请、费用和学生体验联系招生团队。", theme: "contact",
      hero: { eyebrow: "联系我们", title: "从一次关于未来学习的沟通开始。", description: "如需了解课程、申请、费用规划或在蒙特利尔学习的信息，请与学院联系。", visualLabel: "招生与课程信息", visualCode: "你好" },
      stats: [{ value: "英 · 法", label: "服务语言" }, { value: "MTL", label: "蒙特利尔时区" }, { value: "邮件", label: "主要联系渠道" }, { value: "顾问", label: "课程指导" }],
      nav: nav.zh("联系方式", "发送前准备", "后续流程"),
      intro: { label: "联系方式", title: "联系能够回答问题的团队。", description: "招生团队是未来学生和家庭的第一联系点。请说明意向课程、入学时间、当前教育和语言背景，以便获得有针对性的回复。" },
      pillars: { label: "我们可以提供帮助", title: "选择最接近问题的主题。", description: "明确主题有助于高效转交和回复。", items: [
        { title: "课程设置", description: "比较语言、大学衔接和学术基础课程。" },
        { title: "申请入学", description: "了解材料、资格、分级、申请状态和后续步骤。" },
        { title: "学费与费用", description: "获取现有费用信息、付款指导和财务规划说明。" },
        { title: "学生体验", description: "了解抵达、学术支持、校园日常和蒙特利尔生活。" },
      ] },
      feature: { label: "联系招生", title: "提供有助于获得有效回复的信息。", description: "请勿通过普通邮件发送密码、银行信息或不必要的敏感文件。申请文件应通过批准的安全流程提供。", visualLabel: "admissions@cimontreal.ca", points: ["姓名及居住国家", "意向课程和入学时间", "当前或近期教育背景", "清晰的问题或下一步需求"] },
      journey: { label: "后续流程", title: "从问题到明确的下一步。", description: "团队将审核请求，并判断需要提供信息、课程指导还是申请安排。", items: [
        { title: "发送问题", description: "提供简洁背景和有效联系方式。" },
        { title: "审核与分配", description: "信息将转给对应课程或招生联系人。" },
        { title: "获得指导", description: "接收相关信息以及必要文件或链接。" },
        { title: "采取下一步", description: "探索课程、准备材料或开始申请。" },
      ] },
      faq: { label: "联系问题", title: "获得正确支持。", items: [
        { question: "未来学生应使用哪个邮箱？", answer: "课程和申请咨询请使用 admissions@cimontreal.ca。" },
        { question: "可以通过邮件发送申请文件吗？", answer: "请等待学院提供批准的文件指引；敏感材料应通过安全流程分享。" },
        { question: "家长可以联系学院吗？", answer: "可以咨询一般信息。涉及个人申请资料时，需要申请人授权及适当身份核实。" },
      ] },
      cta: { label: "招生咨询", title: "告诉我们需要怎样的帮助。", description: "请在邮件中简要说明意向课程和入学时间。", action: "发送招生邮件", href: "mailto:admissions@cimontreal.ca" },
    },
  },
};

export const experienceContent: Record<Locale, ExperienceLocaleContent> = {
  en: {
    labels: { home: "Home", about: "About", explore: "Explore" },
    pages: {
      about: {
        metadataTitle: "About Us | Collège International Montréal", metadataDescription: "Learn about our purpose, academic model, and commitment to international student success in Montréal.", theme: "about",
        hero: { eyebrow: "About the College", title: "A focused academic community for the transition to university.", description: "We bring language development, academic preparation, and student guidance together so international learners can enter higher education with stronger skills and a clearer plan.", visualLabel: "An international learning community", visualCode: "CIM" },
        stats: [{ value: "3", label: "Program pathways" }, { value: "EN · FR", label: "Language options" }, { value: "6", label: "Core academic skills" }, { value: "MTL", label: "Montréal learning environment" }],
        nav: nav.en("Who we are", "Our commitments", "The student experience"),
        intro: { label: "Who we are", title: "Preparation with a university purpose.", description: "Collège International Montréal is designed for learners navigating a major academic transition. Our role is to make university expectations visible, teach the skills behind successful study, and provide an environment where students can practise those skills before their next step." },
        pillars: { label: "What guides us", title: "Standards that shape every program.", description: "Our educational choices are grounded in four commitments to students and their future study.", items: [
          { title: "Academic rigour", description: "Learning outcomes, structured feedback, and evidence-based work establish clear expectations." },
          { title: "Individual progress", description: "Placement, advising, and regular feedback help students understand what to work on next." },
          { title: "International perspective", description: "Different languages, educational traditions, and points of view strengthen the classroom." },
          { title: "Responsible pathways", description: "We give clear guidance without making admission promises that belong to receiving institutions." },
        ] },
        feature: { label: "A connected experience", title: "Language, academics, and guidance work together.", description: "Students do not develop university readiness in separate boxes. Communication, research, subject knowledge, study habits, and personal planning reinforce one another throughout the learning experience.", visualLabel: "Learning with direction", points: ["Small-group academic practice", "Regular feedback and reflection", "Applied projects and presentations", "Advising for the next academic step"] },
        journey: { label: "The student journey", title: "A clear sequence from first conversation to future study.", description: "Every learner begins with a different background. The process is structured to identify the right starting point and make progress visible.", items: [
          { title: "Understand your goals", description: "Discuss your academic background, language profile, and intended field of study." },
          { title: "Choose a starting point", description: "Use placement and academic advising to identify the appropriate program." },
          { title: "Build and apply skills", description: "Practise through seminars, writing, research, presentations, and collaborative work." },
          { title: "Plan the transition", description: "Review progress and prepare for the requirements of future study." },
        ] },
        faq: { label: "About the College", title: "What students and families often ask.", items: [
          { question: "Who are the programs designed for?", answer: "They are designed for international and multilingual learners preparing for language-intensive or university-level study." },
          { question: "Is advising part of the learning experience?", answer: "Yes. Advising helps students select a program, understand progress, and prepare for future academic requirements." },
          { question: "Does the College guarantee admission to a university?", answer: "No. Admission decisions remain with the receiving institution. Our role is to strengthen preparation and help students understand the requirements ahead." },
        ] },
        cta: { label: "Start a conversation", title: "Tell us where you want to go.", description: "An advisor can help identify the program that best matches your current skills and future plans.", action: "Explore programs", href: "/programs" },
      },
      "why-udem": {
        metadataTitle: "Why Université de Montréal | Collège International Montréal", metadataDescription: "Explore the academic scale, research culture, and international learning environment of Université de Montréal.", theme: "why-udem",
        hero: { eyebrow: "University context", title: "Discover a leading French-language university environment.", description: "Université de Montréal combines a major research culture, a global academic community, and campuses connected to the life of Greater Montréal.", visualLabel: "Université de Montréal at a glance", visualCode: "UdeM" },
        stats: [{ value: "71K+", label: "Students with affiliated schools" }, { value: "9,800+", label: "International students annually" }, { value: "600", label: "Programs of study" }, { value: "65", label: "Partner countries" }],
        nav: nav.en("The university", "Academic environment", "Brossard campus"),
        intro: { label: "Why UdeM", title: "Research, French-language learning, and international reach.", description: "Université de Montréal and its affiliated schools form Québec’s leading hub of higher education. For future students, its scale means exposure to a broad academic community, extensive fields of study, and a culture where research and teaching are closely connected." },
        pillars: { label: "Academic environment", title: "A university shaped by inquiry and global exchange.", description: "These university characteristics provide useful context for students preparing for higher education in Montréal.", items: [
          { title: "Research intensity", description: "UdeM is one of Canada’s leading universities by research volume, with inquiry spanning health, science, society, and culture." },
          { title: "Breadth of study", description: "Hundreds of programs offer routes across undergraduate, graduate, and professional education." },
          { title: "International community", description: "Thousands of international students contribute languages, experiences, and perspectives from around the world." },
          { title: "French in action", description: "Students learn and participate in the largest French-language university community in the Americas." },
        ] },
        feature: { label: "Brossard campus", title: "A modern learning setting on Montréal’s South Shore.", description: "Université de Montréal’s Brossard campus is directly connected to the REM. Its 3,500-square-metre facilities include 12 classrooms and laboratories, a 125-seat auditorium, and spaces designed for active, multimodal, and collaborative learning.", visualLabel: "Brossard · Connected by REM", points: ["12 classrooms and laboratories", "125-seat auditorium", "Active and collaborative learning spaces", "Virtual-reality and media-production facilities"] },
        journey: { label: "Preparing for the environment", title: "What university readiness looks like in practice.", description: "A strong transition means learning how to participate—not simply learning facts about a university.", items: [
          { title: "Work in academic French", description: "Build the reading, listening, discussion, and writing skills required for French-language study." },
          { title: "Learn through evidence", description: "Develop research literacy, critical thinking, citation, and academic integrity." },
          { title: "Participate actively", description: "Practise seminars, presentations, group projects, and independent study." },
          { title: "Meet program requirements", description: "Review the official admission and language requirements of the intended university program." },
        ] },
        faq: { label: "Important distinctions", title: "Clear information before you plan.", items: [
          { question: "Does this page confirm a formal affiliation with Université de Montréal?", answer: "No. It introduces the university environment as context for future study. Any formal institutional relationship must be confirmed in official documentation." },
          { question: "Does completing a College program guarantee UdeM admission?", answer: "No. Université de Montréal makes its own admission decisions. Applicants must meet the published requirements of their chosen program." },
          { question: "Where should I verify university facts and requirements?", answer: "Use Université de Montréal’s official website and admission service for current programs, deadlines, language requirements, and campus information." },
        ] },
        cta: { label: "University preparation", title: "Build the skills behind a strong application and transition.", description: "Explore language, academic, and foundation programs designed around university readiness.", action: "View pathway programs", href: "/programs" },
      },
      "why-montreal": {
        metadataTitle: "Why Montréal | Collège International Montréal", metadataDescription: "Discover Montréal as a bilingual, international, creative, and student-focused place to learn.", theme: "why-montreal",
        hero: { eyebrow: "Study in Montréal", title: "A student city shaped by languages, culture, and ideas.", description: "Montréal offers the energy of a major international city with distinct neighbourhoods, a bilingual daily environment, and a deep university culture.", visualLabel: "Montréal · Québec · Canada", visualCode: "MTL" },
        stats: [{ value: "EN · FR", label: "Languages in daily life" }, { value: "4", label: "Distinct seasons" }, { value: "REM", label: "Regional transit connection" }, { value: "Global", label: "Student community" }],
        nav: nav.en("The city", "Why students choose it", "Living here"),
        intro: { label: "A city for learning", title: "University life extends beyond the classroom.", description: "Montréal is large enough to offer major cultural, academic, and professional opportunities, yet personal enough for students to build routines and community. French gives the city its character, while English and many other languages are part of everyday life." },
        pillars: { label: "The Montréal advantage", title: "A city that rewards curiosity.", description: "Daily life becomes part of the international learning experience.", items: [
          { title: "A bilingual environment", description: "Use French in authentic situations while navigating a city where English is also widely present." },
          { title: "A university city", description: "Libraries, lectures, research communities, and students from many institutions shape the city’s rhythm." },
          { title: "Creative industries", description: "Design, games, film, music, artificial intelligence, and culture contribute to an inventive economy." },
          { title: "Neighbourhood life", description: "Markets, parks, cafés, festivals, and distinct communities make the city approachable and memorable." },
        ] },
        feature: { label: "Everyday Montréal", title: "Learn how to live well in all four seasons.", description: "Successful settlement starts with practical knowledge. Students learn to plan transportation, housing, budgeting, health coverage, winter clothing, and the routines that make a new city feel manageable.", visualLabel: "City life, made practical", points: ["Public transit and neighbourhood orientation", "Housing and budgeting guidance", "Winter readiness", "Cultural and community participation"] },
        journey: { label: "Your first months", title: "From arrival to belonging.", description: "A few deliberate steps help students become comfortable, independent, and connected.", items: [
          { title: "Prepare before arrival", description: "Review documents, housing, health coverage, weather, and essential services." },
          { title: "Learn your routes", description: "Understand public transit and the places needed for study and daily life." },
          { title: "Use the languages", description: "Turn shops, events, volunteering, and conversation into real communication practice." },
          { title: "Build your community", description: "Join activities, meet peers, and create a healthy balance between study and city life." },
        ] },
        faq: { label: "Living in Montréal", title: "Practical questions for future students.", items: [
          { question: "Do I need French to live in Montréal?", answer: "French is Québec’s official language and an important part of daily life. Students can build confidence through study and regular use in the community." },
          { question: "What should I plan before arriving?", answer: "Plan housing, transportation, health coverage, finances, communications, and clothing appropriate for the season." },
          { question: "How can I become part of the community?", answer: "Student activities, cultural events, volunteering, language exchange, and neighbourhood life all create opportunities to connect." },
        ] },
        cta: { label: "Your Montréal chapter", title: "Prepare to study—and to live—confidently.", description: "Learn how academic preparation and student support work together.", action: "Explore student life", href: "/student-life" },
      },
      "student-life": {
        metadataTitle: "Student Life & Campus Experience | Collège International Montréal", metadataDescription: "Explore academic support, arrival guidance, community life, and the day-to-day student experience.", theme: "student-life",
        hero: { eyebrow: "Student life", title: "A supported experience, inside and beyond the classroom.", description: "Student success grows through good teaching, reliable guidance, healthy routines, and a community where learners feel able to participate.", visualLabel: "Study · Connect · Belong", visualCode: "LIFE" },
        stats: [{ value: "4", label: "Areas of student support" }, { value: "1", label: "Connected learning community" }, { value: "EN · FR", label: "Language practice" }, { value: "MTL", label: "City experience" }],
        nav: nav.en("Student experience", "Support services", "Your first term"),
        intro: { label: "More than classes", title: "The conditions students need to do their best work.", description: "Academic progress is easier when students know where to ask questions, how to organize daily life, and how to connect with others. Our student experience is designed around those practical conditions." },
        pillars: { label: "Support around the student", title: "Guidance for study, transition, and wellbeing.", description: "Support is organized around the moments when international students most often need clear information.", items: [
          { title: "Academic support", description: "Study strategies, writing feedback, time planning, and conversations about academic progress." },
          { title: "Arrival guidance", description: "Practical orientation for transportation, housing, health coverage, and essential services." },
          { title: "Community connection", description: "Opportunities to meet peers, practise languages, and take part in the life of Montréal." },
          { title: "Future planning", description: "Guidance for program research, application preparation, and the transition to future study." },
        ] },
        feature: { label: "Campus experience", title: "Spaces that support active, collaborative learning.", description: "The student environment is designed for focused study, discussion, project work, presentations, and informal exchange. The goal is a daily rhythm that feels purposeful, welcoming, and connected.", visualLabel: "A day in the learning community", points: ["Interactive classes and seminars", "Independent and group study", "Advisor conversations", "Student activities and city exploration"] },
        journey: { label: "Your first term", title: "A strong start, one week at a time.", description: "Orientation continues beyond the first day. Students build confidence through repeated practice and regular check-ins.", items: [
          { title: "Orientation", description: "Meet the community, understand expectations, and learn how to access support." },
          { title: "Establish routines", description: "Create a realistic weekly plan for classes, study, health, and daily responsibilities." },
          { title: "Review progress", description: "Use feedback and advising to identify strengths and priorities for improvement." },
          { title: "Look ahead", description: "Connect current learning to the requirements and choices of the next academic stage." },
        ] },
        faq: { label: "Student support", title: "Know where to begin.", items: [
          { question: "What support is available when I arrive?", answer: "Orientation covers academic expectations, campus routines, transportation, essential services, and how to request help." },
          { question: "Can I receive help with academic writing and study skills?", answer: "Yes. Academic support is integrated through feedback, learning strategies, and guided practice." },
          { question: "Are student activities part of the experience?", answer: "Community activities and opportunities to use language beyond class support connection, confidence, and cultural learning." },
        ] },
        cta: { label: "Join the community", title: "Begin with support around you.", description: "Talk with an advisor about programs and the student experience in Montréal.", action: "Contact an advisor", href: "mailto:admissions@cimontreal.ca" },
      },
      "learning-approach": {
        metadataTitle: "Learning Approach | Collège International Montréal", metadataDescription: "See how active learning, feedback, research, and reflection build university readiness.", theme: "learning-approach",
        hero: { eyebrow: "How learning works", title: "Practise the work of university before the next step begins.", description: "Students learn through clear instruction, purposeful practice, feedback, collaboration, and reflection—not through passive content alone.", visualLabel: "Learn · Apply · Reflect", visualCode: "01—04" },
        stats: [{ value: "4", label: "Learning stages" }, { value: "Applied", label: "Assessment model" }, { value: "Ongoing", label: "Feedback cycle" }, { value: "6", label: "Academic competencies" }],
        nav: nav.en("Our method", "Learning principles", "The feedback cycle"),
        intro: { label: "Our method", title: "Active learning with visible purpose.", description: "Each learning activity connects to a skill students will use later: understanding a lecture, evaluating a source, writing an argument, presenting an idea, managing a project, or contributing to a seminar." },
        pillars: { label: "Learning principles", title: "How capability is built.", description: "The approach balances academic expectations with enough support to help students become increasingly independent.", items: [
          { title: "Clear outcomes", description: "Students know what they are learning, why it matters, and how successful work is evaluated." },
          { title: "Applied practice", description: "Workshops, cases, research tasks, presentations, and projects turn concepts into performance." },
          { title: "Useful feedback", description: "Specific feedback identifies what is working and what the student should try next." },
          { title: "Growing independence", description: "Support gradually shifts responsibility to students as their confidence and judgement develop." },
        ] },
        feature: { label: "The academic classroom", title: "Learning is social, analytical, and evidence-based.", description: "Students read before discussion, test ideas with peers, explain their reasoning, revise their work, and learn to use sources responsibly. Language development is integrated into meaningful academic activity.", visualLabel: "From participation to independence", points: ["Seminars and guided discussion", "Research and source evaluation", "Drafting, feedback, and revision", "Projects, presentations, and reflection"] },
        journey: { label: "The learning cycle", title: "A repeatable process for stronger work.", description: "The same cycle can be applied across language learning, academic skills, and subject foundations.", items: [
          { title: "Understand", description: "Explore a concept, model, text, or academic problem with clear guidance." },
          { title: "Practise", description: "Apply the skill in a focused task with examples and support." },
          { title: "Receive feedback", description: "Compare the work with expectations and identify a specific next improvement." },
          { title: "Transfer", description: "Use the skill independently in a new assignment, project, or context." },
        ] },
        faq: { label: "Learning experience", title: "How students are supported and assessed.", items: [
          { question: "How are students assessed?", answer: "Assessment may include writing, research tasks, presentations, projects, quizzes, participation, and reflective work, depending on the program." },
          { question: "How often do students receive feedback?", answer: "Feedback is built into practice, assignments, projects, and progress conversations throughout the program." },
          { question: "Is collaboration part of the curriculum?", answer: "Yes. Students learn to discuss ideas, share responsibility, give constructive feedback, and present work as a team." },
        ] },
        cta: { label: "Experience the approach", title: "Choose the preparation that fits your next step.", description: "Compare language, pathway, and academic foundation programs.", action: "Explore programs", href: "/programs" },
      },
      leadership: {
        metadataTitle: "Leadership & Governance | Collège International Montréal", metadataDescription: "Learn how academic quality, student experience, and responsible governance guide the College.", theme: "leadership",
        hero: { eyebrow: "Leadership & governance", title: "Academic responsibility begins with clear leadership.", description: "Our governance model is designed to protect academic quality, student wellbeing, transparent decision-making, and continuous improvement.", visualLabel: "Responsibility · Quality · Trust", visualCode: "GOV" },
        stats: [{ value: "4", label: "Leadership portfolios" }, { value: "1", label: "Academic mission" }, { value: "Annual", label: "Program review cycle" }, { value: "Clear", label: "Student accountability" }],
        nav: nav.en("Governance", "Leadership portfolios", "Quality cycle"),
        intro: { label: "Responsible governance", title: "Decisions organized around the student and the academic mission.", description: "A credible academic institution needs more than good intentions. Roles, review processes, student policies, and lines of accountability must be clear enough to guide daily decisions and long-term development." },
        pillars: { label: "Leadership portfolios", title: "Four areas of institutional responsibility.", description: "Named appointments will be published after formal confirmation. The governance structure is organized around these core portfolios.", items: [
          { title: "Academic Director", description: "Oversees curriculum, teaching standards, assessment, faculty support, and academic review." },
          { title: "Director of Student Experience", description: "Leads advising, orientation, student support, community experience, and wellbeing referrals." },
          { title: "Head of Language Programs", description: "Guides placement, language curriculum, learning outcomes, and instructional consistency." },
          { title: "Registrar & Operations", description: "Maintains admissions processes, student records, scheduling, policies, and operational standards." },
        ] },
        feature: { label: "Academic quality", title: "Quality is a cycle, not a single approval.", description: "Programs should be reviewed through learning evidence, student feedback, instructor reflection, and changes in university expectations. Clear records make improvement accountable rather than informal.", visualLabel: "Plan · Teach · Review · Improve", points: ["Published learning outcomes", "Consistent assessment standards", "Student and faculty feedback", "Documented program review"] },
        journey: { label: "Quality cycle", title: "How academic improvement is organized.", description: "The cycle connects classroom evidence with institutional decision-making.", items: [
          { title: "Set standards", description: "Define learning outcomes, assessment expectations, and student support responsibilities." },
          { title: "Collect evidence", description: "Review student work, progression, feedback, and teaching observations." },
          { title: "Evaluate", description: "Identify strengths, gaps, emerging needs, and changes in the external academic environment." },
          { title: "Improve", description: "Update curriculum, support, policies, and professional development with documented follow-through." },
        ] },
        faq: { label: "Governance questions", title: "Transparency as the institution develops.", items: [
          { question: "Where are leadership names and biographies?", answer: "Verified appointments and biographies will be published after formal approval. The current page presents the governance roles and responsibilities." },
          { question: "How are academic concerns handled?", answer: "Academic concerns should follow a documented process with clear points of contact, review, response, and appeal." },
          { question: "How will policies be published?", answer: "Admissions, academic integrity, accessibility, complaints, privacy, records, and refund policies will be available through the website before launch." },
        ] },
        cta: { label: "Institutional information", title: "Have a question about the College?", description: "Contact us for institutional, academic, or program information.", action: "Contact the College", href: "mailto:admissions@cimontreal.ca" },
      },
      ...conversionPages.en,
    },
  },
  fr: {
    labels: { home: "Accueil", about: "À propos", explore: "Découvrir" },
    pages: {
      about: {
        metadataTitle: "À propos | Collège International Montréal", metadataDescription: "Découvrez notre mission, notre modèle académique et notre engagement envers la réussite des étudiants internationaux.", theme: "about",
        hero: { eyebrow: "À propos du Collège", title: "Une communauté académique centrée sur la transition universitaire.", description: "Nous réunissons développement linguistique, préparation académique et accompagnement afin que les étudiants internationaux abordent les études supérieures avec de meilleures compétences et un projet clair.", visualLabel: "Une communauté d’apprentissage internationale", visualCode: "CIM" },
        stats: [{ value: "3", label: "Parcours de formation" }, { value: "EN · FR", label: "Options linguistiques" }, { value: "6", label: "Compétences académiques" }, { value: "MTL", label: "Milieu d’apprentissage" }],
        nav: nav.fr("Qui nous sommes", "Nos engagements", "L’expérience étudiante"),
        intro: { label: "Qui nous sommes", title: "Une préparation guidée par un objectif universitaire.", description: "Le Collège International Montréal accompagne les étudiants qui franchissent une étape académique importante. Nous rendons les attentes universitaires explicites, enseignons les méthodes de travail essentielles et créons un espace où les étudiants peuvent les mettre en pratique." },
        pillars: { label: "Ce qui nous guide", title: "Des engagements présents dans chaque programme.", description: "Nos choix pédagogiques reposent sur quatre engagements envers les étudiants.", items: [
          { title: "Rigueur académique", description: "Des résultats d’apprentissage, une rétroaction structurée et des travaux fondés sur des preuves." },
          { title: "Progression individuelle", description: "Le classement, le conseil et la rétroaction aident chacun à définir sa prochaine priorité." },
          { title: "Perspective internationale", description: "Les langues, les parcours scolaires et les points de vue enrichissent la classe." },
          { title: "Parcours responsables", description: "Nous conseillons clairement sans promettre une admission qui relève des établissements d’accueil." },
        ] },
        feature: { label: "Une expérience intégrée", title: "Langues, méthodes et accompagnement progressent ensemble.", description: "La préparation universitaire ne se construit pas en silos. Communication, recherche, connaissances, autonomie et planification se renforcent tout au long du parcours.", visualLabel: "Apprendre avec une direction claire", points: ["Pratique académique en petits groupes", "Rétroaction et réflexion régulières", "Projets et présentations appliqués", "Conseil pour la prochaine étape"] },
        journey: { label: "Le parcours étudiant", title: "De la première conversation aux études futures.", description: "Chaque étudiant commence avec un profil différent; le processus aide à trouver le bon point de départ et à rendre la progression visible.", items: [
          { title: "Comprendre vos objectifs", description: "Échanger sur votre parcours, vos langues et le domaine d’études envisagé." },
          { title: "Choisir un point de départ", description: "Utiliser le classement et le conseil pour identifier le programme approprié." },
          { title: "Développer et appliquer", description: "Pratiquer par les séminaires, l’écriture, la recherche et les présentations." },
          { title: "Planifier la transition", description: "Examiner les progrès et préparer les exigences des études futures." },
        ] },
        faq: { label: "À propos du Collège", title: "Les questions fréquentes des étudiants et des familles.", items: [
          { question: "À qui s’adressent les programmes?", answer: "Aux étudiants internationaux et multilingues qui préparent des études linguistiques intensives ou universitaires." },
          { question: "Le conseil fait-il partie de l’expérience?", answer: "Oui. Il soutient le choix du programme, la compréhension des progrès et la préparation des prochaines exigences." },
          { question: "Le Collège garantit-il une admission universitaire?", answer: "Non. Les décisions appartiennent aux établissements d’accueil. Nous renforçons la préparation et clarifions les exigences." },
        ] },
        cta: { label: "Commencer la conversation", title: "Parlez-nous de votre projet.", description: "Un conseiller peut vous aider à identifier le parcours qui correspond à votre niveau et à vos objectifs.", action: "Explorer les programmes", href: "/programs" },
      },
      "why-udem": {
        metadataTitle: "Pourquoi l’Université de Montréal | Collège International Montréal", metadataDescription: "Découvrez l’envergure académique, la culture de recherche et le milieu international de l’Université de Montréal.", theme: "why-udem",
        hero: { eyebrow: "Contexte universitaire", title: "Découvrez un grand milieu universitaire francophone.", description: "L’Université de Montréal réunit une culture de recherche majeure, une communauté internationale et des campus ancrés dans le Grand Montréal.", visualLabel: "L’Université de Montréal en bref", visualCode: "UdeM" },
        stats: [{ value: "71 k+", label: "Étudiants avec les écoles affiliées" }, { value: "9 800+", label: "Étudiants internationaux par an" }, { value: "600", label: "Programmes d’études" }, { value: "65", label: "Pays partenaires" }],
        nav: nav.fr("L’Université", "Le milieu académique", "Le campus de Brossard"),
        intro: { label: "Pourquoi l’UdeM", title: "Recherche, études en français et ouverture internationale.", description: "L’Université de Montréal et ses écoles affiliées forment le premier pôle d’enseignement supérieur du Québec. Son envergure donne accès à une vaste communauté académique, à de nombreux domaines et à une culture où recherche et enseignement sont étroitement liés." },
        pillars: { label: "Milieu académique", title: "Une université portée par la recherche et les échanges.", description: "Ces caractéristiques donnent un contexte concret aux étudiants qui préparent des études supérieures à Montréal.", items: [
          { title: "Intensité de recherche", description: "L’UdeM figure parmi les grandes universités canadiennes par le volume de ses activités de recherche." },
          { title: "Diversité des études", description: "Des centaines de programmes couvrent les études de premier cycle, supérieures et professionnelles." },
          { title: "Communauté internationale", description: "Des milliers d’étudiants internationaux enrichissent la vie universitaire chaque année." },
          { title: "Le français en action", description: "Étudier au sein de la plus grande université francophone des Amériques." },
        ] },
        feature: { label: "Campus de Brossard", title: "Un milieu moderne sur la Rive-Sud de Montréal.", description: "Directement relié au REM, le campus de 3 500 m² comprend 12 salles et laboratoires, un auditorium de 125 places et des espaces d’apprentissage actif, multimodal et collaboratif.", visualLabel: "Brossard · Relié par le REM", points: ["12 salles et laboratoires", "Auditorium de 125 places", "Espaces actifs et collaboratifs", "Réalité virtuelle et production média"] },
        journey: { label: "Se préparer au milieu", title: "La préparation universitaire en pratique.", description: "Une bonne transition consiste à apprendre à participer, et non seulement à connaître l’université.", items: [
          { title: "Étudier en français", description: "Développer la lecture, l’écoute, la discussion et l’écriture académiques." },
          { title: "Travailler avec des preuves", description: "Maîtriser la recherche, la pensée critique, la citation et l’intégrité." },
          { title: "Participer activement", description: "Pratiquer les séminaires, projets, présentations et études autonomes." },
          { title: "Respecter les exigences", description: "Vérifier les conditions officielles du programme universitaire visé." },
        ] },
        faq: { label: "Distinctions importantes", title: "Des renseignements clairs avant de planifier.", items: [
          { question: "Cette page confirme-t-elle une affiliation officielle?", answer: "Non. Elle présente le milieu universitaire comme contexte. Toute relation institutionnelle doit être confirmée par des documents officiels." },
          { question: "La réussite au Collège garantit-elle l’admission à l’UdeM?", answer: "Non. L’Université de Montréal prend ses propres décisions et chaque candidat doit satisfaire aux exigences publiées." },
          { question: "Où vérifier les renseignements?", answer: "Consultez le site officiel et le service d’admission de l’Université de Montréal pour les programmes, dates et exigences à jour." },
        ] },
        cta: { label: "Préparation universitaire", title: "Développez les compétences d’une transition solide.", description: "Découvrez les programmes linguistiques, académiques et préparatoires.", action: "Voir les programmes", href: "/programs" },
      },
      "why-montreal": {
        metadataTitle: "Pourquoi Montréal | Collège International Montréal", metadataDescription: "Découvrez Montréal, ville étudiante bilingue, internationale et créative.", theme: "why-montreal",
        hero: { eyebrow: "Étudier à Montréal", title: "Une ville étudiante façonnée par les langues, la culture et les idées.", description: "Montréal offre l’énergie d’une métropole internationale, des quartiers à taille humaine, un quotidien bilingue et une profonde culture universitaire.", visualLabel: "Montréal · Québec · Canada", visualCode: "MTL" },
        stats: [{ value: "EN · FR", label: "Langues du quotidien" }, { value: "4", label: "Saisons distinctes" }, { value: "REM", label: "Transport régional" }, { value: "Monde", label: "Communauté étudiante" }],
        nav: nav.fr("La ville", "Pourquoi la choisir", "Vivre ici"),
        intro: { label: "Une ville pour apprendre", title: "La vie universitaire dépasse la salle de classe.", description: "Montréal est assez grande pour offrir d’importantes possibilités culturelles et académiques, mais assez accessible pour créer ses habitudes et sa communauté. Le français lui donne son caractère; l’anglais et de nombreuses autres langues font aussi partie du quotidien." },
        pillars: { label: "L’avantage montréalais", title: "Une ville qui récompense la curiosité.", description: "La vie quotidienne devient une dimension de l’expérience internationale.", items: [
          { title: "Milieu bilingue", description: "Utiliser le français dans des situations réelles tout en vivant dans une ville où l’anglais est aussi présent." },
          { title: "Ville universitaire", description: "Bibliothèques, conférences, recherche et étudiants de plusieurs établissements rythment la ville." },
          { title: "Industries créatives", description: "Design, jeux, cinéma, musique et intelligence artificielle nourrissent une économie inventive." },
          { title: "Vie de quartier", description: "Marchés, parcs, cafés, festivals et communautés rendent la ville accueillante." },
        ] },
        feature: { label: "Montréal au quotidien", title: "Bien vivre au fil des quatre saisons.", description: "Une installation réussie commence par des connaissances pratiques : transport, logement, budget, assurance santé, vêtements d’hiver et services essentiels.", visualLabel: "La vie urbaine, en pratique", points: ["Transport et orientation", "Logement et budget", "Préparation à l’hiver", "Participation culturelle"] },
        journey: { label: "Vos premiers mois", title: "De l’arrivée au sentiment d’appartenance.", description: "Quelques étapes aident à devenir à l’aise, autonome et connecté.", items: [
          { title: "Préparer l’arrivée", description: "Vérifier les documents, le logement, la santé, la météo et les services." },
          { title: "Comprendre ses trajets", description: "Apprendre le transport collectif et les lieux essentiels du quotidien." },
          { title: "Utiliser les langues", description: "Transformer la ville en véritable espace de pratique linguistique." },
          { title: "Créer sa communauté", description: "Participer, rencontrer des pairs et équilibrer études et vie urbaine." },
        ] },
        faq: { label: "Vivre à Montréal", title: "Questions pratiques des futurs étudiants.", items: [
          { question: "Faut-il parler français pour vivre à Montréal?", answer: "Le français est la langue officielle du Québec et une composante importante du quotidien. Les étudiants peuvent progresser par l’étude et la pratique." },
          { question: "Que faut-il préparer avant l’arrivée?", answer: "Prévoyez le logement, le transport, la santé, le budget, les communications et les vêtements adaptés." },
          { question: "Comment s’intégrer?", answer: "Les activités étudiantes, événements, échanges linguistiques et la vie de quartier favorisent les liens." },
        ] },
        cta: { label: "Votre chapitre montréalais", title: "Préparez-vous à étudier et à vivre avec confiance.", description: "Découvrez comment la préparation académique et le soutien étudiant se complètent.", action: "Explorer la vie étudiante", href: "/student-life" },
      },
      "student-life": {
        metadataTitle: "Vie étudiante et campus | Collège International Montréal", metadataDescription: "Découvrez le soutien académique, l’accueil, la communauté et l’expérience étudiante au quotidien.", theme: "student-life",
        hero: { eyebrow: "Vie étudiante", title: "Une expérience accompagnée, en classe et au-delà.", description: "La réussite repose sur un bon enseignement, des conseils fiables, des habitudes saines et une communauté où chacun peut participer.", visualLabel: "Étudier · Échanger · Appartenir", visualCode: "VIE" },
        stats: [{ value: "4", label: "Domaines de soutien" }, { value: "1", label: "Communauté connectée" }, { value: "EN · FR", label: "Pratique linguistique" }, { value: "MTL", label: "Expérience urbaine" }],
        nav: nav.fr("L’expérience", "Les services", "Votre première session"),
        intro: { label: "Plus que des cours", title: "Les conditions nécessaires pour donner le meilleur de soi.", description: "La progression est plus facile lorsque les étudiants savent où poser leurs questions, comment organiser leur quotidien et comment créer des liens. Notre expérience étudiante est conçue autour de ces conditions concrètes." },
        pillars: { label: "Le soutien autour de l’étudiant", title: "Des conseils pour les études, la transition et le bien-être.", description: "Le soutien répond aux moments où les étudiants internationaux ont le plus besoin d’information claire.", items: [
          { title: "Soutien académique", description: "Méthodes d’étude, rédaction, planification du temps et suivi des progrès." },
          { title: "Accueil et installation", description: "Orientation sur le transport, le logement, la santé et les services essentiels." },
          { title: "Vie communautaire", description: "Rencontres, pratique des langues et participation à la vie montréalaise." },
          { title: "Planification future", description: "Recherche de programmes, préparation des demandes et transition vers les études futures." },
        ] },
        feature: { label: "Expérience sur le campus", title: "Des espaces pour apprendre activement et collaborer.", description: "Le milieu soutient l’étude concentrée, la discussion, les projets, les présentations et les échanges informels.", visualLabel: "Une journée dans la communauté", points: ["Cours interactifs", "Étude individuelle et en groupe", "Rencontres avec les conseillers", "Activités et découverte de la ville"] },
        journey: { label: "Votre première session", title: "Bien commencer, semaine après semaine.", description: "L’orientation se poursuit après le premier jour grâce à la pratique et aux suivis réguliers.", items: [
          { title: "S’orienter", description: "Rencontrer la communauté et comprendre les attentes et les services." },
          { title: "Établir ses habitudes", description: "Planifier classes, étude, santé et responsabilités quotidiennes." },
          { title: "Examiner ses progrès", description: "Utiliser la rétroaction pour définir ses forces et priorités." },
          { title: "Préparer la suite", description: "Relier l’apprentissage actuel aux choix de la prochaine étape." },
        ] },
        faq: { label: "Soutien étudiant", title: "Savoir où commencer.", items: [
          { question: "Quel soutien est offert à l’arrivée?", answer: "L’orientation couvre les attentes, les routines, le transport, les services et les façons de demander de l’aide." },
          { question: "Puis-je obtenir de l’aide en rédaction?", answer: "Oui. Le soutien académique passe par la rétroaction, les stratégies et la pratique guidée." },
          { question: "Y a-t-il des activités étudiantes?", answer: "Les activités et la pratique hors classe favorisent les liens, la confiance et l’apprentissage culturel." },
        ] },
        cta: { label: "Rejoindre la communauté", title: "Commencez avec du soutien autour de vous.", description: "Parlez à un conseiller des programmes et de l’expérience étudiante.", action: "Contacter un conseiller", href: "mailto:admissions@cimontreal.ca" },
      },
      "learning-approach": {
        metadataTitle: "Approche pédagogique | Collège International Montréal", metadataDescription: "Découvrez comment l’apprentissage actif, la rétroaction et la réflexion développent la préparation universitaire.", theme: "learning-approach",
        hero: { eyebrow: "Notre pédagogie", title: "Pratiquez le travail universitaire avant la prochaine étape.", description: "Les étudiants progressent par un enseignement clair, une pratique ciblée, la rétroaction, la collaboration et la réflexion.", visualLabel: "Apprendre · Appliquer · Réfléchir", visualCode: "01—04" },
        stats: [{ value: "4", label: "Étapes d’apprentissage" }, { value: "Pratique", label: "Modèle d’évaluation" }, { value: "Continu", label: "Cycle de rétroaction" }, { value: "6", label: "Compétences académiques" }],
        nav: nav.fr("Notre méthode", "Les principes", "Le cycle"),
        intro: { label: "Notre méthode", title: "Un apprentissage actif avec un objectif visible.", description: "Chaque activité prépare une compétence future : comprendre un cours, évaluer une source, rédiger un argument, présenter une idée, gérer un projet ou contribuer à un séminaire." },
        pillars: { label: "Principes pédagogiques", title: "Comment les compétences se construisent.", description: "L’approche équilibre les attentes académiques et le soutien nécessaire pour devenir autonome.", items: [
          { title: "Résultats clairs", description: "Les étudiants savent ce qu’ils apprennent, pourquoi et comment le travail est évalué." },
          { title: "Pratique appliquée", description: "Ateliers, cas, recherches, présentations et projets transforment les concepts en savoir-faire." },
          { title: "Rétroaction utile", description: "Une rétroaction précise indique ce qui fonctionne et la prochaine amélioration." },
          { title: "Autonomie croissante", description: "La responsabilité passe progressivement à l’étudiant avec sa confiance et son jugement." },
        ] },
        feature: { label: "La classe académique", title: "Apprendre est social, analytique et fondé sur des preuves.", description: "Les étudiants lisent, discutent, expliquent leur raisonnement, révisent leurs travaux et utilisent les sources de façon responsable.", visualLabel: "De la participation à l’autonomie", points: ["Séminaires et discussions", "Recherche et évaluation des sources", "Rédaction, rétroaction et révision", "Projets, présentations et réflexion"] },
        journey: { label: "Le cycle d’apprentissage", title: "Un processus réutilisable pour améliorer son travail.", description: "Le même cycle s’applique aux langues, aux méthodes académiques et aux disciplines.", items: [
          { title: "Comprendre", description: "Explorer un concept, un modèle, un texte ou un problème avec guidance." },
          { title: "Pratiquer", description: "Appliquer la compétence dans une tâche ciblée avec du soutien." },
          { title: "Recevoir une rétroaction", description: "Comparer le travail aux attentes et choisir une amélioration précise." },
          { title: "Transférer", description: "Réutiliser la compétence de façon autonome dans un nouveau contexte." },
        ] },
        faq: { label: "Expérience d’apprentissage", title: "Soutien et évaluation.", items: [
          { question: "Comment les étudiants sont-ils évalués?", answer: "Selon le programme : écriture, recherche, présentations, projets, tests, participation et réflexion." },
          { question: "À quelle fréquence reçoivent-ils une rétroaction?", answer: "La rétroaction accompagne les exercices, travaux, projets et rencontres de progression." },
          { question: "La collaboration fait-elle partie du programme?", answer: "Oui. Les étudiants apprennent à discuter, partager les responsabilités et présenter en équipe." },
        ] },
        cta: { label: "Découvrir l’approche", title: "Choisissez la préparation adaptée à votre prochaine étape.", description: "Comparez les programmes linguistiques, universitaires et préparatoires.", action: "Explorer les programmes", href: "/programs" },
      },
      leadership: {
        metadataTitle: "Direction et gouvernance | Collège International Montréal", metadataDescription: "Découvrez comment la qualité académique, l’expérience étudiante et la gouvernance responsable guident le Collège.", theme: "leadership",
        hero: { eyebrow: "Direction et gouvernance", title: "La responsabilité académique commence par une direction claire.", description: "Notre modèle vise la qualité académique, le bien-être étudiant, la transparence des décisions et l’amélioration continue.", visualLabel: "Responsabilité · Qualité · Confiance", visualCode: "GOV" },
        stats: [{ value: "4", label: "Portefeuilles de direction" }, { value: "1", label: "Mission académique" }, { value: "Annuel", label: "Cycle de révision" }, { value: "Clair", label: "Responsabilité étudiante" }],
        nav: nav.fr("La gouvernance", "Les responsabilités", "Le cycle qualité"),
        intro: { label: "Gouvernance responsable", title: "Des décisions organisées autour de l’étudiant et de la mission.", description: "Une institution crédible exige des rôles, des processus de révision, des politiques étudiantes et des responsabilités assez clairs pour guider le quotidien et le développement." },
        pillars: { label: "Portefeuilles de direction", title: "Quatre domaines de responsabilité institutionnelle.", description: "Les nominations seront publiées après confirmation. La structure repose sur ces fonctions.", items: [
          { title: "Direction académique", description: "Curriculum, enseignement, évaluation, soutien du corps enseignant et révision." },
          { title: "Direction de l’expérience étudiante", description: "Conseil, orientation, soutien, communauté et références de bien-être." },
          { title: "Responsable des langues", description: "Classement, curriculum linguistique, résultats et cohérence pédagogique." },
          { title: "Registraire et opérations", description: "Admissions, dossiers, horaires, politiques et normes opérationnelles." },
        ] },
        feature: { label: "Qualité académique", title: "La qualité est un cycle, pas une approbation unique.", description: "Les programmes sont examinés au moyen des travaux, de la rétroaction, de la réflexion enseignante et de l’évolution des attentes universitaires.", visualLabel: "Planifier · Enseigner · Réviser · Améliorer", points: ["Résultats publiés", "Évaluation cohérente", "Rétroaction étudiante et enseignante", "Révision documentée"] },
        journey: { label: "Cycle qualité", title: "Comment l’amélioration académique est organisée.", description: "Le cycle relie les preuves de la classe aux décisions institutionnelles.", items: [
          { title: "Définir les normes", description: "Établir les résultats, évaluations et responsabilités de soutien." },
          { title: "Recueillir les preuves", description: "Examiner les travaux, la progression, la rétroaction et l’enseignement." },
          { title: "Évaluer", description: "Identifier forces, écarts, besoins et changements externes." },
          { title: "Améliorer", description: "Mettre à jour curriculum, soutien, politiques et formation." },
        ] },
        faq: { label: "Questions de gouvernance", title: "La transparence pendant le développement.", items: [
          { question: "Où sont les biographies de la direction?", answer: "Les nominations vérifiées seront publiées après approbation. Cette page présente les rôles et responsabilités." },
          { question: "Comment traiter une préoccupation académique?", answer: "Un processus documenté doit préciser le contact, l’examen, la réponse et l’appel." },
          { question: "Comment les politiques seront-elles publiées?", answer: "Les politiques d’admission, d’intégrité, d’accessibilité, de plainte, de confidentialité et de remboursement seront accessibles avant le lancement." },
        ] },
        cta: { label: "Information institutionnelle", title: "Une question sur le Collège?", description: "Contactez-nous pour des renseignements institutionnels, académiques ou sur les programmes.", action: "Contacter le Collège", href: "mailto:admissions@cimontreal.ca" },
      },
      ...conversionPages.fr,
    },
  },
  zh: {
    labels: { home: "首页", about: "学院介绍", explore: "探索" },
    pages: {
      about: {
        metadataTitle: "学院介绍 | 蒙特利尔国际学院", metadataDescription: "了解学院使命、学术模式以及对国际学生发展的承诺。", theme: "about",
        hero: { eyebrow: "学院介绍", title: "专注于大学过渡阶段的国际学术社区。", description: "学院将语言发展、学术准备与学生指导融为一体，帮助国际学生以更成熟的能力和更清晰的方向迈向高等教育。", visualLabel: "国际化学习社区", visualCode: "CIM" },
        stats: [{ value: "3", label: "三类课程路径" }, { value: "英 · 法", label: "两种语言方向" }, { value: "6", label: "六项学术能力" }, { value: "MTL", label: "蒙特利尔学习环境" }],
        nav: nav.zh("学院定位", "学院承诺", "学生体验"),
        intro: { label: "学院定位", title: "以大学学习为目标的系统准备。", description: "蒙特利尔国际学院服务于正经历重要学术转变的学生。我们将大学要求讲清楚，教授成功学习背后的方法，并创造能够在进入下一阶段前反复实践这些能力的环境。" },
        pillars: { label: "我们的原则", title: "贯穿每项课程的四项承诺。", description: "教学与服务均围绕学生的长期学习能力展开。", items: [
          { title: "学术严谨", description: "明确学习成果，以结构化反馈和循证任务建立学术标准。" },
          { title: "个体进步", description: "分级评估、学习建议与持续反馈帮助学生明确下一步。" },
          { title: "国际视野", description: "不同语言、教育背景和观点让课堂学习更加丰富。" },
          { title: "负责任的升学指导", description: "提供清晰建议，但不代替接收院校作出录取承诺。" },
        ] },
        feature: { label: "一体化体验", title: "语言、学术与指导相互连接。", description: "大学准备并非彼此独立的模块。沟通、研究、学科知识、学习习惯与个人规划在整个过程中相互促进。", visualLabel: "目标明确的学习", points: ["小组学术实践", "定期反馈与反思", "项目和演讲任务", "下一阶段升学指导"] },
        journey: { label: "学生路径", title: "从首次沟通到未来升学的清晰过程。", description: "每位学生起点不同，学院通过结构化流程找到合适课程并让进步清晰可见。", items: [
          { title: "了解个人目标", description: "沟通学术背景、语言状况和未来专业方向。" },
          { title: "确定学习起点", description: "通过分级和学术咨询选择适合的课程。" },
          { title: "建立并应用能力", description: "通过研讨、写作、研究、演讲和协作进行实践。" },
          { title: "规划升学过渡", description: "总结学习进展并准备未来课程的具体要求。" },
        ] },
        faq: { label: "关于学院", title: "学生与家长经常提出的问题。", items: [
          { question: "课程适合哪些学生？", answer: "适合准备进入语言密集型学习或大学阶段的国际及多语言学生。" },
          { question: "课程包含学术指导吗？", answer: "包含。指导涵盖课程选择、学习进展和未来学术要求。" },
          { question: "学院保证大学录取吗？", answer: "不保证。录取决定由接收院校作出，学院负责加强准备并帮助学生理解要求。" },
        ] },
        cta: { label: "开始沟通", title: "告诉我们你想去往哪里。", description: "课程顾问可以根据当前能力和未来目标建议适合的课程。", action: "探索课程", href: "/programs" },
      },
      "why-udem": {
        metadataTitle: "为什么了解蒙特利尔大学 | 蒙特利尔国际学院", metadataDescription: "了解蒙特利尔大学的学术规模、研究文化与国际化学习环境。", theme: "why-udem",
        hero: { eyebrow: "大学环境", title: "了解领先的法语大学学习环境。", description: "蒙特利尔大学汇聚重要的研究文化、全球学术社区，以及与大蒙特利尔地区紧密连接的校园。", visualLabel: "蒙特利尔大学概览", visualCode: "UdeM" },
        stats: [{ value: "71,000+", label: "含附属院校学生" }, { value: "9,800+", label: "每年国际学生" }, { value: "600", label: "学习项目" }, { value: "65", label: "合作国家" }],
        nav: nav.zh("大学概况", "学术环境", "Brossard 校园"),
        intro: { label: "为什么了解 UdeM", title: "研究实力、法语学习与国际连接。", description: "蒙特利尔大学及其附属院校构成魁北克规模领先的高等教育集群。广泛的学科、庞大的学术社区，以及研究与教学的紧密连接，为未来学生提供了重要的大学环境参照。" },
        pillars: { label: "学术环境", title: "由研究与全球交流塑造的大学。", description: "这些大学特征帮助学生具体理解在蒙特利尔接受高等教育所需的准备。", items: [
          { title: "研究实力", description: "蒙特利尔大学按研究活动规模位居加拿大领先大学之列。" },
          { title: "广泛学科", description: "数百项本科、研究生和专业学习项目覆盖众多领域。" },
          { title: "国际社区", description: "每年有数千名国际学生带来不同语言、经验与观点。" },
          { title: "真实法语环境", description: "在美洲规模最大的法语大学社区中学习与交流。" },
        ] },
        feature: { label: "Brossard 校园", title: "位于蒙特利尔南岸的现代学习空间。", description: "校园直接连接 REM，3,500 平方米的设施包括 12 间教室与实验室、125 座礼堂，以及面向主动学习、多模式教学和协作学习的空间。", visualLabel: "Brossard · REM 直达", points: ["12 间教室与实验室", "125 座礼堂", "主动与协作学习空间", "虚拟现实及媒体制作设施"] },
        journey: { label: "适应大学环境", title: "大学准备在实践中的具体含义。", description: "真正的过渡不是了解一所大学的介绍，而是学习如何参与大学学习。", items: [
          { title: "使用学术法语", description: "培养法语阅读、听课、讨论和写作能力。" },
          { title: "以证据开展学习", description: "掌握研究素养、批判思维、引用和学术诚信。" },
          { title: "主动参与", description: "练习研讨、演讲、团队项目与独立学习。" },
          { title: "达到课程要求", description: "核对目标大学专业的正式入学与语言要求。" },
        ] },
        faq: { label: "重要说明", title: "规划之前，先把关系说明清楚。", items: [
          { question: "本页面是否代表学院与蒙特利尔大学存在正式隶属关系？", answer: "不是。本页用于介绍未来学习环境；任何正式机构关系均须以双方官方文件为准。" },
          { question: "完成学院课程是否保证获得蒙特利尔大学录取？", answer: "不保证。录取由蒙特利尔大学独立决定，申请人必须达到目标专业公布的要求。" },
          { question: "应在哪里核实大学资料？", answer: "请通过蒙特利尔大学官方网站及招生部门核实最新课程、截止日期、语言要求和校园信息。" },
        ] },
        cta: { label: "大学准备", title: "建立高质量申请与过渡所需的能力。", description: "探索语言、学术和专业基础课程。", action: "查看衔接课程", href: "/programs" },
      },
      "why-montreal": {
        metadataTitle: "为什么选择蒙特利尔 | 蒙特利尔国际学院", metadataDescription: "了解蒙特利尔这座双语、国际化、富有创意的学生城市。", theme: "why-montreal",
        hero: { eyebrow: "在蒙特利尔学习", title: "一座由语言、文化与思想共同塑造的学生城市。", description: "蒙特利尔兼具国际都市的活力、各具特色的社区、真实双语环境和深厚的大学文化。", visualLabel: "蒙特利尔 · 魁北克 · 加拿大", visualCode: "MTL" },
        stats: [{ value: "英 · 法", label: "日常语言环境" }, { value: "4", label: "四季分明" }, { value: "REM", label: "区域交通连接" }, { value: "全球", label: "国际学生社区" }],
        nav: nav.zh("城市环境", "城市优势", "在这里生活"),
        intro: { label: "适合学习的城市", title: "大学生活发生在课堂内，也发生在整座城市。", description: "蒙特利尔拥有大型国际都市的文化与学术机会，同时保留适合建立日常生活和社区关系的尺度。法语塑造了城市特色，英语与其他语言也广泛存在于日常生活。" },
        pillars: { label: "蒙特利尔优势", title: "一座鼓励好奇心的城市。", description: "城市生活本身就是国际教育体验的一部分。", items: [
          { title: "双语环境", description: "在真实场景中使用法语，同时接触英语和多种社区语言。" },
          { title: "大学之城", description: "图书馆、讲座、研究社区和多所院校学生共同构成城市节奏。" },
          { title: "创意产业", description: "设计、游戏、电影、音乐与人工智能形成充满创造力的经济环境。" },
          { title: "社区生活", description: "市场、公园、咖啡馆、节庆和不同社区让城市亲切而丰富。" },
        ] },
        feature: { label: "蒙特利尔日常", title: "学习如何从容度过四季。", description: "顺利安顿从实用信息开始：交通、住宿、预算、健康保险、冬季衣物和必要生活服务。", visualLabel: "把城市生活变得清晰", points: ["公共交通与社区认识", "住宿和预算指导", "冬季生活准备", "文化与社区参与"] },
        journey: { label: "最初几个月", title: "从抵达到真正融入。", description: "几个有意识的步骤可以帮助学生变得从容、独立并建立连接。", items: [
          { title: "抵达前准备", description: "核对文件、住宿、保险、天气与基本服务。" },
          { title: "熟悉生活路线", description: "了解公共交通以及学习和生活所需的重要地点。" },
          { title: "在生活中使用语言", description: "把商店、活动和交流变成真实语言实践。" },
          { title: "建立个人社区", description: "参加活动、认识同伴并平衡学习与城市生活。" },
        ] },
        faq: { label: "在蒙特利尔生活", title: "未来学生关心的实际问题。", items: [
          { question: "在蒙特利尔生活需要法语吗？", answer: "法语是魁北克官方语言，也是日常生活的重要部分。学生可以通过课程和社区使用逐步提升。" },
          { question: "抵达前应准备什么？", answer: "建议提前安排住宿、交通、健康保险、预算、通信和适合季节的衣物。" },
          { question: "如何融入社区？", answer: "学生活动、文化活动、志愿服务、语言交换和社区生活都能帮助建立连接。" },
        ] },
        cta: { label: "你的蒙特利尔篇章", title: "为自信学习，也为自信生活做好准备。", description: "了解学术准备与学生支持如何共同发挥作用。", action: "探索学生生活", href: "/student-life" },
      },
      "student-life": {
        metadataTitle: "学生生活与校园体验 | 蒙特利尔国际学院", metadataDescription: "了解学术支持、抵达指导、社区生活与日常学生体验。", theme: "student-life",
        hero: { eyebrow: "学生生活", title: "从课堂到日常，都有支持相伴。", description: "学生成功来自优质教学、可靠指导、健康习惯，以及每个人都能够主动参与的学习社区。", visualLabel: "学习 · 连接 · 归属", visualCode: "LIFE" },
        stats: [{ value: "4", label: "四类学生支持" }, { value: "1", label: "相互连接的社区" }, { value: "英 · 法", label: "语言实践" }, { value: "MTL", label: "城市体验" }],
        nav: nav.zh("学生体验", "支持服务", "第一学期"),
        intro: { label: "不止是课程", title: "帮助学生发挥最佳状态的必要条件。", description: "当学生知道去哪里提问、如何组织日常以及怎样与他人建立连接，学术进步会更加顺利。学院围绕这些实际条件设计学生体验。" },
        pillars: { label: "围绕学生的支持", title: "覆盖学习、过渡和身心状态的指导。", description: "支持集中在国际学生最需要清晰信息的关键时刻。", items: [
          { title: "学术支持", description: "学习策略、写作反馈、时间规划和学习进展沟通。" },
          { title: "抵达指导", description: "交通、住宿、健康保险和必要生活服务指导。" },
          { title: "社区连接", description: "认识同伴、实践语言并参与蒙特利尔生活。" },
          { title: "未来规划", description: "课程研究、申请准备及未来升学过渡指导。" },
        ] },
        feature: { label: "校园体验", title: "支持主动学习与协作的空间。", description: "学习环境服务于专注学习、课堂讨论、项目协作、演讲展示和非正式交流。", visualLabel: "学习社区中的一天", points: ["互动课堂与研讨", "独立和小组学习", "课程顾问沟通", "学生活动与城市探索"] },
        journey: { label: "第一学期", title: "一周一周建立良好开端。", description: "入学指导不会在第一天结束，学生通过反复实践和定期沟通持续建立信心。", items: [
          { title: "认识环境", description: "了解学习社区、学术要求和支持渠道。" },
          { title: "建立规律", description: "为上课、学习、健康和日常责任制定可行计划。" },
          { title: "回顾进展", description: "利用反馈识别优势和下一阶段重点。" },
          { title: "面向未来", description: "把当前学习与下一阶段选择和要求连接起来。" },
        ] },
        faq: { label: "学生支持", title: "知道从哪里开始。", items: [
          { question: "抵达后有哪些支持？", answer: "入学指导涵盖学术要求、校园日常、交通、必要服务和寻求帮助的方式。" },
          { question: "可以获得写作和学习方法帮助吗？", answer: "可以。学术支持通过反馈、学习策略和指导性实践融入课程。" },
          { question: "学生体验包含课外活动吗？", answer: "社区活动与课外语言实践有助于建立连接、信心和文化理解。" },
        ] },
        cta: { label: "加入社区", title: "在支持中开始新的学习阶段。", description: "与课程顾问沟通课程和蒙特利尔学生体验。", action: "联系课程顾问", href: "mailto:admissions@cimontreal.ca" },
      },
      "learning-approach": {
        metadataTitle: "教学方式 | 蒙特利尔国际学院", metadataDescription: "了解主动学习、反馈、研究和反思如何建立大学学习能力。", theme: "learning-approach",
        hero: { eyebrow: "学习如何发生", title: "在进入下一阶段前，先实践真正的大学学习。", description: "学生通过清晰教学、目标练习、反馈、协作和反思成长，而不是被动接收内容。", visualLabel: "学习 · 应用 · 反思", visualCode: "01—04" },
        stats: [{ value: "4", label: "四阶段学习过程" }, { value: "实践", label: "评估模式" }, { value: "持续", label: "反馈循环" }, { value: "6", label: "六项学术能力" }],
        nav: nav.zh("教学方法", "学习原则", "反馈循环"),
        intro: { label: "教学方法", title: "目标清晰的主动学习。", description: "每项学习活动都对应未来真实需要的能力：听懂课程、评估资料、撰写论证、展示观点、管理项目或参与研讨。" },
        pillars: { label: "学习原则", title: "能力是如何建立的。", description: "教学在明确学术标准的同时提供足够支持，帮助学生逐渐独立。", items: [
          { title: "明确成果", description: "学生了解正在学习什么、为什么重要以及如何评价。" },
          { title: "应用实践", description: "工作坊、案例、研究、演讲和项目把概念转化为实际能力。" },
          { title: "有效反馈", description: "具体反馈说明已经做好的部分以及下一项改进。" },
          { title: "逐步独立", description: "随着信心和判断力增长，学习责任逐渐转移给学生。" },
        ] },
        feature: { label: "学术课堂", title: "学习具有社交性、分析性并以证据为基础。", description: "学生提前阅读、参与讨论、解释推理、修改作品，并学习负责任地使用资料。语言发展融入真实学术活动。", visualLabel: "从参与到独立", points: ["研讨课与引导讨论", "研究与资料评估", "写作、反馈与修改", "项目、演讲与反思"] },
        journey: { label: "学习循环", title: "能够重复应用的高质量学习过程。", description: "同一循环适用于语言学习、学术能力和专业基础。", items: [
          { title: "理解", description: "在清晰指导下探索概念、文本或学术问题。" },
          { title: "实践", description: "通过示例和支持在具体任务中应用能力。" },
          { title: "接受反馈", description: "对照标准并确定一项明确的改进方向。" },
          { title: "迁移应用", description: "在新的作业、项目或情境中独立使用能力。" },
        ] },
        faq: { label: "学习体验", title: "学生如何获得支持与评估。", items: [
          { question: "课程如何评估学生？", answer: "根据课程不同，评估可包括写作、研究任务、演讲、项目、测验、课堂参与和反思。" },
          { question: "多久会收到反馈？", answer: "反馈贯穿练习、作业、项目和学习进展沟通。" },
          { question: "课程包含团队协作吗？", answer: "包含。学生学习讨论观点、分担责任、提供建设性反馈并进行团队展示。" },
        ] },
        cta: { label: "体验教学方式", title: "选择适合下一阶段的准备。", description: "比较语言、大学衔接与学术基础课程。", action: "探索课程", href: "/programs" },
      },
      leadership: {
        metadataTitle: "领导与治理 | 蒙特利尔国际学院", metadataDescription: "了解学术质量、学生体验与负责任治理如何指导学院发展。", theme: "leadership",
        hero: { eyebrow: "领导与治理", title: "明确领导，是学术责任的起点。", description: "学院治理模式围绕学术质量、学生福祉、透明决策和持续改进建立。", visualLabel: "责任 · 质量 · 信任", visualCode: "GOV" },
        stats: [{ value: "4", label: "四项领导职责" }, { value: "1", label: "共同学术使命" }, { value: "每年", label: "课程审查周期" }, { value: "明确", label: "学生责任机制" }],
        nav: nav.zh("治理方式", "领导职责", "质量循环"),
        intro: { label: "负责任治理", title: "围绕学生和学术使命组织决策。", description: "可信的学术机构需要的不只是良好愿望。角色、审查流程、学生政策和责任边界必须足够清晰，才能指导日常决策和长期发展。" },
        pillars: { label: "领导职责", title: "四个核心机构责任领域。", description: "正式任命确认后将公布人员资料，目前治理结构围绕以下职能建立。", items: [
          { title: "学术主任", description: "负责课程、教学标准、评估、教师支持和学术审查。" },
          { title: "学生体验主任", description: "负责咨询、迎新、学生支持、社区体验和身心支持转介。" },
          { title: "语言课程负责人", description: "负责分级、语言课程、学习成果和教学一致性。" },
          { title: "注册与运营负责人", description: "负责招生流程、学生记录、排课、政策和运营标准。" },
        ] },
        feature: { label: "学术质量", title: "质量是持续循环，而非一次审批。", description: "课程应结合学生作品、学生反馈、教师反思以及大学要求变化进行审查，并以清晰记录确保改进得到落实。", visualLabel: "规划 · 教学 · 审查 · 改进", points: ["公开学习成果", "一致评估标准", "学生与教师反馈", "有记录的课程审查"] },
        journey: { label: "质量循环", title: "如何组织学术改进。", description: "质量循环把课堂证据与机构决策连接起来。", items: [
          { title: "设定标准", description: "明确学习成果、评估要求和学生支持责任。" },
          { title: "收集证据", description: "审查学生作品、进展、反馈和教学观察。" },
          { title: "综合评估", description: "识别优势、差距、新需求和外部学术环境变化。" },
          { title: "落实改进", description: "更新课程、支持、政策和教师专业发展。" },
        ] },
        faq: { label: "治理问题", title: "学院发展过程中的透明度。", items: [
          { question: "领导团队姓名和简介在哪里？", answer: "经正式批准并核实的任命将在确认后发布。本页面目前说明治理角色与职责。" },
          { question: "学术问题如何处理？", answer: "正式流程应明确联系渠道、审查、回复和申诉步骤。" },
          { question: "学院政策将如何发布？", answer: "招生、学术诚信、无障碍、投诉、隐私、记录和退款政策将在正式上线前公开。" },
        ] },
        cta: { label: "机构信息", title: "对学院还有疑问？", description: "欢迎就机构、学术或课程信息与我们联系。", action: "联系学院", href: "mailto:admissions@cimontreal.ca" },
      },
      ...conversionPages.zh,
    },
  },
};
