import type { Locale } from "@/content/site-content";

export type ApplicationCopy = {
  metadataTitle: string;
  metadataDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  privacyNote: string;
  steps: string[];
  fields: Record<string, string>;
  placeholders: Record<string, string>;
  options: {
    programs: Array<{ value: string; label: string }>;
    intakes: Array<{ value: string; label: string }>;
    languages: Array<{ value: string; label: string }>;
    education: Array<{ value: string; label: string }>;
  };
  sectionTitles: string[];
  sectionDescriptions: string[];
  buttons: { back: string; continue: string; review: string; submit: string; startOver: string; chooseFile: string };
  validation: { required: string; email: string; consent: string; fileSize: string };
  review: { title: string; description: string; notProvided: string; documents: string };
  consent: string;
  success: { label: string; title: string; description: string; reference: string; next: string[]; returnHome: string };
};

export const applicationContent: Record<Locale, ApplicationCopy> = {
  en: {
    metadataTitle: "Apply Now | Collège International Montréal", metadataDescription: "Complete a guided application for language, pathway, or academic foundation study.",
    eyebrow: "Online application", title: "Take the next step toward your studies in Montréal.", description: "Complete each section, add the available documents, and review your information before confirmation.",
    privacyNote: "Your information is reviewed only for admissions, placement, and applicant support purposes.",
    steps: ["Personal details", "Study plan", "Education", "Documents", "Review"],
    fields: { firstName: "First name", lastName: "Last name", email: "Email address", phone: "Telephone", country: "Country of residence", citizenship: "Citizenship", program: "Program of interest", intake: "Preferred intake", language: "Preferred language of study", educationLevel: "Highest level completed", school: "Most recent school or institution", educationCountry: "Country of education", graduationYear: "Completion year", statement: "Academic goals", transcript: "Academic record", identity: "Passport or identification", consent: "Applicant confirmation" },
    placeholders: { country: "Start typing a country", citizenship: "Citizenship", phone: "+1 000 000 0000", school: "Institution name", year: "YYYY", statement: "Tell us what you hope to study and what you want to prepare for." },
    options: {
      programs: [{ value: "language-preparation", label: "Language Preparation" }, { value: "university-pathway", label: "University Pathway" }, { value: "academic-foundation", label: "Academic Foundation & Pathway" }],
      intakes: [{ value: "fall", label: "Fall intake" }, { value: "winter", label: "Winter intake" }, { value: "summer", label: "Summer intake" }, { value: "advice", label: "I would like advice" }],
      languages: [{ value: "french", label: "French" }, { value: "english", label: "English" }, { value: "bilingual", label: "Not sure / bilingual pathway" }],
      education: [{ value: "secondary", label: "Secondary school" }, { value: "college", label: "College or CEGEP" }, { value: "undergraduate", label: "Undergraduate degree" }, { value: "graduate", label: "Graduate degree" }, { value: "other", label: "Other" }],
    },
    sectionTitles: ["Tell us about yourself.", "Choose your intended study path.", "Share your academic background.", "Add the documents currently available.", "Review before confirming."],
    sectionDescriptions: ["Use your legal name as it appears on your identification.", "Your selection helps an advisor understand your goals; it does not create an admission decision.", "Provide your most recent completed or current education.", "Upload PDF, JPG, or PNG files up to 10 MB each.", "Check each section carefully. You can return to make changes."],
    buttons: { back: "Back", continue: "Continue", review: "Review application", submit: "Confirm application", startOver: "Start another application", chooseFile: "Choose file" },
    validation: { required: "Complete the required fields before continuing.", email: "Enter a valid email address.", consent: "Confirm the applicant declaration before continuing.", fileSize: "Each selected file must be 10 MB or smaller." },
    review: { title: "Application summary", description: "Review all details carefully before confirming your application.", notProvided: "Not provided", documents: "Selected documents" },
    consent: "I confirm that the information entered is accurate to the best of my knowledge and understand that official documents and identity verification may be required.",
    success: { label: "Application received", title: "Thank you for taking the next step.", description: "Your application has been prepared for admissions review. A member of the team will contact you regarding documents, placement, and next steps.", reference: "Application reference", next: ["Keep your application reference", "Prepare any outstanding official documents", "Watch your email for admissions instructions"], returnHome: "Return to homepage" },
  },
  fr: {
    metadataTitle: "Faire une demande | Collège International Montréal", metadataDescription: "Remplissez une demande guidée pour un programme linguistique, universitaire ou préparatoire.",
    eyebrow: "Demande en ligne", title: "Passez à la prochaine étape de vos études à Montréal.", description: "Remplissez chaque section, ajoutez les documents disponibles et vérifiez vos renseignements avant la confirmation.",
    privacyNote: "Vos renseignements sont utilisés uniquement pour l'admission, le classement et le soutien aux candidats.",
    steps: ["Identité", "Projet d’études", "Scolarité", "Documents", "Vérification"],
    fields: { firstName: "Prénom", lastName: "Nom", email: "Adresse courriel", phone: "Téléphone", country: "Pays de résidence", citizenship: "Citoyenneté", program: "Programme souhaité", intake: "Rentrée souhaitée", language: "Langue d’études", educationLevel: "Plus haut niveau terminé", school: "Établissement le plus récent", educationCountry: "Pays d’études", graduationYear: "Année de fin", statement: "Objectifs académiques", transcript: "Dossier scolaire", identity: "Passeport ou pièce d’identité", consent: "Confirmation du candidat" },
    placeholders: { country: "Pays de résidence", citizenship: "Citoyenneté", phone: "+1 000 000 0000", school: "Nom de l’établissement", year: "AAAA", statement: "Décrivez ce que vous souhaitez étudier et la préparation recherchée." },
    options: {
      programs: [{ value: "language-preparation", label: "Préparation linguistique" }, { value: "university-pathway", label: "Parcours universitaire" }, { value: "academic-foundation", label: "Formation préparatoire et parcours" }],
      intakes: [{ value: "fall", label: "Rentrée d’automne" }, { value: "winter", label: "Rentrée d’hiver" }, { value: "summer", label: "Rentrée d’été" }, { value: "advice", label: "Je souhaite être conseillé" }],
      languages: [{ value: "french", label: "Français" }, { value: "english", label: "Anglais" }, { value: "bilingual", label: "À déterminer / parcours bilingue" }],
      education: [{ value: "secondary", label: "Études secondaires" }, { value: "college", label: "Collège ou cégep" }, { value: "undergraduate", label: "Diplôme de premier cycle" }, { value: "graduate", label: "Diplôme d’études supérieures" }, { value: "other", label: "Autre" }],
    },
    sectionTitles: ["Parlez-nous de vous.", "Choisissez votre parcours d’études.", "Présentez votre parcours scolaire.", "Ajoutez les documents disponibles.", "Vérifiez avant de confirmer."],
    sectionDescriptions: ["Utilisez le nom légal figurant sur votre pièce d’identité.", "Votre choix aide le conseiller à comprendre votre projet; il ne constitue pas une décision d’admission.", "Indiquez vos études actuelles ou les plus récentes.", "Téléversez des fichiers PDF, JPG ou PNG de 10 Mo maximum.", "Vérifiez chaque section; vous pouvez revenir en arrière."],
    buttons: { back: "Retour", continue: "Continuer", review: "Vérifier la demande", submit: "Confirmer la demande", startOver: "Nouvelle demande", chooseFile: "Choisir un fichier" },
    validation: { required: "Remplissez les champs obligatoires avant de continuer.", email: "Entrez une adresse courriel valide.", consent: "Confirmez la déclaration du candidat.", fileSize: "Chaque fichier doit avoir une taille maximale de 10 Mo." },
    review: { title: "Résumé de la demande", description: "Vérifiez attentivement tous les renseignements avant de confirmer.", notProvided: "Non fourni", documents: "Documents sélectionnés" },
    consent: "Je confirme que les renseignements saisis sont exacts à ma connaissance et comprends que des documents officiels et une vérification d’identité pourront être exigés.",
    success: { label: "Demande reçue", title: "Merci d'avoir franchi cette étape.", description: "Votre demande est prête pour l'analyse de l'admission. Un membre de l'équipe communiquera avec vous pour la suite.", reference: "Référence de demande", next: ["Conservez votre référence", "Préparez les documents officiels manquants", "Surveillez votre courriel"], returnHome: "Retour à l’accueil" },
  },
  zh: {
    metadataTitle: "立即申请 | 蒙特利尔国际学院", metadataDescription: "完成语言、大学衔接或学术基础课程的引导式申请。",
    eyebrow: "在线申请", title: "迈出前往蒙特利尔学习的下一步。", description: "依次填写各部分，上传你已准备好的材料，并在提交前仔细核对全部信息。",
    privacyNote: "你的信息仅用于招生审核、课程分级和申请人支持。",
    steps: ["基本信息", "课程计划", "教育背景", "申请文件", "信息确认"],
    fields: { firstName: "名字", lastName: "姓氏", email: "电子邮箱", phone: "联系电话", country: "当前居住国家", citizenship: "国籍", program: "意向课程", intake: "意向入学时间", language: "意向学习语言", educationLevel: "最高完成学历", school: "最近就读学校或机构", educationCountry: "教育所在国家", graduationYear: "完成年份", statement: "学术目标", transcript: "学术记录", identity: "护照或身份证明", consent: "申请人确认" },
    placeholders: { country: "当前居住国家", citizenship: "国籍", phone: "+1 000 000 0000", school: "学校或机构名称", year: "YYYY", statement: "请说明希望学习的内容，以及希望为哪个未来方向做好准备。" },
    options: {
      programs: [{ value: "language-preparation", label: "语言准备课程" }, { value: "university-pathway", label: "大学衔接课程" }, { value: "academic-foundation", label: "学术基础与升学课程" }],
      intakes: [{ value: "fall", label: "秋季入学" }, { value: "winter", label: "冬季入学" }, { value: "summer", label: "夏季入学" }, { value: "advice", label: "希望获得入学建议" }],
      languages: [{ value: "french", label: "法语" }, { value: "english", label: "英语" }, { value: "bilingual", label: "尚未确定 / 双语路径" }],
      education: [{ value: "secondary", label: "高中或同等教育" }, { value: "college", label: "学院或 CEGEP" }, { value: "undergraduate", label: "本科学位" }, { value: "graduate", label: "研究生学位" }, { value: "other", label: "其他" }],
    },
    sectionTitles: ["请介绍你的基本信息。", "选择计划中的学习路径。", "填写教育背景。", "上传已准备好的申请文件。", "提交前请仔细核对。"],
    sectionDescriptions: ["请使用身份证明文件上的法定姓名。", "课程选择用于帮助顾问了解目标，并不构成录取决定。", "请填写当前或最近完成的教育经历。", "支持上传 10 MB 以内的 PDF、JPG 或 PNG 文件。", "请检查各部分信息；如需修改可以返回上一步。"],
    buttons: { back: "上一步", continue: "继续", review: "核对申请", submit: "确认申请", startOver: "重新填写", chooseFile: "选择文件" },
    validation: { required: "请完成必填项目后继续。", email: "请输入有效的电子邮箱。", consent: "请确认申请人声明后继续。", fileSize: "每个文件不得超过 10 MB。" },
    review: { title: "申请摘要", description: "确认申请前，请仔细核对所有信息。", notProvided: "未填写", documents: "已选择文件" },
    consent: "本人确认所填信息据本人所知真实准确，并理解正式申请可能要求提供官方文件及完成身份核实。",
    success: { label: "申请已收到", title: "感谢你迈出下一步。", description: "你的申请已经准备进入招生审核。团队成员将就材料、分级和后续步骤与你联系。", reference: "申请编号", next: ["保存申请编号", "准备尚缺的官方材料", "留意招生邮件通知"], returnHome: "返回首页" },
  },
};
