"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { ApplicationCopy } from "@/content/application-content";
import type { Locale } from "@/content/site-content";

type FormData = {
  firstName: string; lastName: string; email: string; phone: string; country: string; citizenship: string;
  program: string; intake: string; language: string;
  educationLevel: string; school: string; educationCountry: string; graduationYear: string; statement: string;
};

const initialData: FormData = {
  firstName: "", lastName: "", email: "", phone: "", country: "", citizenship: "",
  program: "", intake: "", language: "", educationLevel: "", school: "", educationCountry: "", graduationYear: "", statement: "",
};

function optionLabel(options: Array<{ value: string; label: string }>, value: string, fallback: string) {
  return options.find((option) => option.value === value)?.label || fallback;
}

export function ApplicationForm({ copy, locale }: { copy: ApplicationCopy; locale: Locale }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [files, setFiles] = useState<{ transcript?: File; identity?: File }>({});
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [complete, setComplete] = useState(false);

  const update = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setData((current) => ({ ...current, [event.target.name]: event.target.value }));
    setError("");
  };

  const chooseFile = (key: "transcript" | "identity", event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      event.target.value = "";
      setError(copy.validation.fileSize);
      return;
    }
    setFiles((current) => ({ ...current, [key]: file }));
    setError("");
  };

  const validStep = () => {
    const required: Array<Array<keyof FormData>> = [
      ["firstName", "lastName", "email", "country", "citizenship"],
      ["program", "intake", "language"],
      ["educationLevel", "school", "educationCountry", "graduationYear", "statement"],
    ];
    if (step < 3 && required[step].some((field) => !data[field].trim())) {
      setError(copy.validation.required);
      return false;
    }
    if (step === 0 && !/^\S+@\S+\.\S+$/.test(data.email)) {
      setError(copy.validation.email);
      return false;
    }
    if (step === 3 && !consent) {
      setError(copy.validation.consent);
      return false;
    }
    return true;
  };

  const next = (event: FormEvent) => {
    event.preventDefault();
    if (!validStep()) return;
    setError("");
    setStep((current) => Math.min(current + 1, 4));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const back = () => {
    setError("");
    setStep((current) => Math.max(current - 1, 0));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    setComplete(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const reset = () => {
    setData(initialData); setFiles({}); setConsent(false); setError(""); setStep(0); setComplete(false);
  };

  if (complete) {
    return (
      <section className="applicationSuccess">
        <div className="applicationSuccessMark" aria-hidden="true">✓</div>
        <p className="sectionLabel">{copy.success.label}</p>
        <h2>{copy.success.title}</h2>
        <p>{copy.success.description}</p>
        <div className="applicationReference"><span>{copy.success.reference}</span><strong>CIM-DEMO-2026</strong></div>
        <ol>{copy.success.next.map((item) => <li key={item}>{item}</li>)}</ol>
        <div className="applicationSuccessActions">
          <button className="button" onClick={reset} type="button">{copy.buttons.startOver}</button>
          <Link className="textLink darkLink" href={`/${locale}`}>{copy.success.returnHome}<span>→</span></Link>
        </div>
      </section>
    );
  }

  const reviewRows = [
    [copy.fields.firstName, `${data.firstName} ${data.lastName}`.trim()],
    [copy.fields.email, data.email], [copy.fields.phone, data.phone], [copy.fields.country, data.country], [copy.fields.citizenship, data.citizenship],
    [copy.fields.program, optionLabel(copy.options.programs, data.program, copy.review.notProvided)],
    [copy.fields.intake, optionLabel(copy.options.intakes, data.intake, copy.review.notProvided)],
    [copy.fields.language, optionLabel(copy.options.languages, data.language, copy.review.notProvided)],
    [copy.fields.educationLevel, optionLabel(copy.options.education, data.educationLevel, copy.review.notProvided)],
    [copy.fields.school, data.school], [copy.fields.educationCountry, data.educationCountry], [copy.fields.graduationYear, data.graduationYear],
  ];

  return (
    <div className="applicationWorkspace">
      <aside className="applicationProgress" aria-label={copy.eyebrow}>
        <p>{copy.eyebrow}</p>
        <ol>{copy.steps.map((label, index) => <li className={index === step ? "active" : index < step ? "complete" : ""} key={label}><span>{index < step ? "✓" : `0${index + 1}`}</span><b>{label}</b></li>)}</ol>
        <div className="applicationPrivacy"><span aria-hidden="true">◎</span><p>{copy.privacyNote}</p></div>
      </aside>

      <form className="applicationForm" onSubmit={step === 4 ? submit : next}>
        <header><span>{String(step + 1).padStart(2, "0")} / 05</span><h2>{copy.sectionTitles[step]}</h2><p>{copy.sectionDescriptions[step]}</p></header>

        {step === 0 ? <div className="formGrid">
          <Field label={copy.fields.firstName} name="firstName" value={data.firstName} onChange={update} required />
          <Field label={copy.fields.lastName} name="lastName" value={data.lastName} onChange={update} required />
          <Field label={copy.fields.email} name="email" type="email" value={data.email} onChange={update} required />
          <Field label={copy.fields.phone} name="phone" placeholder={copy.placeholders.phone} value={data.phone} onChange={update} />
          <Field label={copy.fields.country} name="country" placeholder={copy.placeholders.country} value={data.country} onChange={update} required />
          <Field label={copy.fields.citizenship} name="citizenship" placeholder={copy.placeholders.citizenship} value={data.citizenship} onChange={update} required />
        </div> : null}

        {step === 1 ? <div className="formStack">
          <SelectField label={copy.fields.program} name="program" value={data.program} options={copy.options.programs} onChange={update} required />
          <SelectField label={copy.fields.intake} name="intake" value={data.intake} options={copy.options.intakes} onChange={update} required />
          <SelectField label={copy.fields.language} name="language" value={data.language} options={copy.options.languages} onChange={update} required />
        </div> : null}

        {step === 2 ? <div className="formGrid">
          <SelectField label={copy.fields.educationLevel} name="educationLevel" value={data.educationLevel} options={copy.options.education} onChange={update} required />
          <Field label={copy.fields.school} name="school" placeholder={copy.placeholders.school} value={data.school} onChange={update} required />
          <Field label={copy.fields.educationCountry} name="educationCountry" value={data.educationCountry} onChange={update} required />
          <Field label={copy.fields.graduationYear} name="graduationYear" inputMode="numeric" placeholder={copy.placeholders.year} value={data.graduationYear} onChange={update} required />
          <label className="formField formFieldWide"><span>{copy.fields.statement}<em>*</em></span><textarea name="statement" onChange={update} placeholder={copy.placeholders.statement} rows={6} value={data.statement} /></label>
        </div> : null}

        {step === 3 ? <div className="documentStep">
          <FileField accept=".pdf,.jpg,.jpeg,.png" file={files.transcript} label={copy.fields.transcript} name="transcript" onChange={(event) => chooseFile("transcript", event)} />
          <FileField accept=".pdf,.jpg,.jpeg,.png" file={files.identity} label={copy.fields.identity} name="identity" onChange={(event) => chooseFile("identity", event)} />
          <label className="consentField"><input checked={consent} onChange={(event) => { setConsent(event.target.checked); setError(""); }} type="checkbox" /><span>{copy.consent}</span></label>
        </div> : null}

        {step === 4 ? <div className="applicationReview">
          <div className="reviewHeading"><h3>{copy.review.title}</h3><p>{copy.review.description}</p></div>
          <dl>{reviewRows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value || copy.review.notProvided}</dd></div>)}</dl>
          <div className="reviewStatement"><span>{copy.fields.statement}</span><p>{data.statement}</p></div>
          <div className="reviewDocuments"><span>{copy.review.documents}</span><p>{files.transcript?.name || copy.review.notProvided}</p><p>{files.identity?.name || copy.review.notProvided}</p></div>
        </div> : null}

        {error ? <p className="formError" role="alert">{error}</p> : null}
        <div className="formActions">
          {step > 0 ? <button className="button buttonSecondary" onClick={back} type="button">← {copy.buttons.back}</button> : <span />}
          <button className="button" type="submit">{step === 4 ? copy.buttons.submit : step === 3 ? copy.buttons.review : copy.buttons.continue}<span>→</span></button>
        </div>
      </form>
    </div>
  );
}

type FieldProps = { label: string; name: string; value: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void; type?: string; required?: boolean; placeholder?: string; inputMode?: "numeric" };
function Field({ label, required, ...props }: FieldProps) {
  return <label className="formField"><span>{label}{required ? <em>*</em> : null}</span><input {...props} /></label>;
}

function SelectField({ label, name, value, options, onChange, required }: { label: string; name: string; value: string; options: Array<{ value: string; label: string }>; onChange: (event: ChangeEvent<HTMLSelectElement>) => void; required?: boolean }) {
  return <label className="formField"><span>{label}{required ? <em>*</em> : null}</span><select name={name} onChange={onChange} value={value}><option value="">—</option>{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>;
}

function FileField({ label, name, file, accept, onChange }: { label: string; name: string; file?: File; accept: string; onChange: (event: ChangeEvent<HTMLInputElement>) => void }) {
  return <label className="fileField"><span>{label}</span><strong>{file?.name || "PDF · JPG · PNG"}</strong><input accept={accept} name={name} onChange={onChange} type="file" /></label>;
}
