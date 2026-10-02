import { useState } from "react";

const PHONE = "7596942690";
const NAV = ["Courses", "Why LearnVion", "Classes", "Flyers", "Contact"];

const COURSES = [
  { tag: "Class 1 to 12", title: "Basic Computer Education", points: ["English typing practice", "Simple, hands-on practical classes", "Step-by-step learning for beginners"] },
  { tag: "Class 11 to 12", title: "Computer Application & Computer Science", points: ["Theory + practical + exam preparation", "Programming and practical guidance", "Doubt clearing and personal guidance"] },
  { tag: "BCA / B.Sc", title: "C, C++, Java & Python", points: ["Complete course in English", "All semester syllabus covered", "Notes (PDF) and regular tests"] },
];

const WHY = [
  ["Easy explanations", "Concepts taught in clear, simple language."],
  ["Regular practice", "Live coding and real examples every week."],
  ["Doubt clearing", "Ask questions and get answers in class."],
  ["Small batches", "Fewer students, more attention for each."],
  ["Exam-focused prep", "Regular tests that match your syllabus."],
  ["Career guidance", "Advice on higher studies and getting job ready."],
];

const FLYERS = [
  ["/flyer-1.png", "Class 11-12 Computer Application and Computer Science flyer"],
  ["/flyer-2.png", "BCA and B.Sc programming course flyer"],
  ["/flyer-3.png", "Basic computer education flyer"],
];

const btn = "inline-block cursor-pointer rounded-full border-2 border-brand bg-brand px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c4125a]";
const btnGhost = "inline-block rounded-full border-2 border-navy px-6 py-3 font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-navy hover:text-white";
const wrap = "mx-auto w-[92%] max-w-6xl";
const sec = "py-14 md:py-20";
const h2 = "text-2xl font-extrabold text-navy sm:text-3xl";
const card = "rounded-2xl border border-line bg-white p-6";
const field = "w-full rounded-xl border-[1.5px] border-line bg-white px-3.5 py-3 font-normal focus:border-brand focus:outline-none";

export default function App() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", course: COURSES[0].title });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };
  const id = (s) => s.toLowerCase().replace(/[^a-z]+/g, "-");

  return (
    <div className="font-sans leading-relaxed text-ink">
      <header className="sticky top-0 z-10 border-b border-line bg-white">
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-[4%] py-2.5">
          <a href="#top" className="flex items-center gap-2.5 text-xl font-extrabold leading-tight text-navy sm:text-2xl">
           
            <img
              src="/learnvion_logo.png"
              alt="LearnVion logo"
              className="h-10 w-auto object-contain sm:h-12"
            />
            <span>
              Learn<b className="font-extrabold text-brand">Vion</b>
              <small className="block text-[.62rem] font-semibold uppercase tracking-widest text-brand">Computer Education</small>
            </span>
          </a>

          <button className="p-2 md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className="my-1.5 block h-0.5 w-6 rounded bg-navy" />
            <span className="my-1.5 block h-0.5 w-6 rounded bg-navy" />
            <span className="my-1.5 block h-0.5 w-6 rounded bg-navy" />
          </button>

          <nav className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col items-start gap-4 border-b border-line bg-white px-[4%] py-5 text-sm font-medium md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0`}>
            {NAV.map((n) => (
              <a key={n} href={`#${id(n)}`} onClick={() => setOpen(false)} className="hover:text-brand">{n}</a>
            ))}
            <a href={`tel:${PHONE}`} className={`${btn} !px-4 !py-2 !text-sm`}>Call {PHONE}</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="bg-soft bg-[radial-gradient(circle_at_90%_0,#ffe0ee_0,transparent_40%)] py-12 md:py-20">
          <div className={`${wrap} grid items-center gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-12`}>
            <div>
              <p className="inline-block rounded-full bg-sun px-4 py-1.5 text-sm font-semibold text-navy">Admissions open for the new batch</p>
              <h1 className="my-4 text-4xl font-extrabold leading-tight text-navy sm:text-5xl lg:text-[3.4rem]">
                Learn computers the right way.
                <span className="block text-brand">Build your future.</span>
              </h1>
              <p className="max-w-[52ch] text-base text-slate-600 sm:text-lg">
                From basic computer skills to board exam preparation and BCA / B.Sc programming, LearnVion teaches theory and practical together, online and offline.
              </p>
              <div className="mt-7 flex flex-wrap gap-3.5">
                <a className={btn} href="#contact">Enroll today</a>
                <a className={btnGhost} href="#courses">View courses</a>
              </div>
            </div>
            <div aria-hidden="true" className="rounded-[20px] bg-navy p-5 text-[#cfe0ff] shadow-[8px_8px_0_var(--color-brand)] sm:p-6 sm:shadow-[14px_14px_0_var(--color-brand)]">
              <div className="mb-3.5 flex gap-2">
                <i className="h-3 w-3 rounded-full bg-sun" /><i className="h-3 w-3 rounded-full bg-brand" /><i className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <pre className="overflow-x-auto font-mono text-sm leading-7 sm:text-base">{`#include <stdio.h>

int main() {
  printf("Hello, LearnVion!");
  return 0;
}`}</pre>
              <div className="mt-4 flex flex-wrap gap-2">
                {["C", "C++", "Java", "Python"].map((l) => (
                  <b key={l} className="rounded-lg bg-white/10 px-3 py-0.5 text-xs text-sun">{l}</b>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-navy text-white">
          <div className={`${wrap} flex flex-wrap justify-between gap-x-6 gap-y-2 py-3.5 text-sm font-medium`}>
            <span>Online and offline classes</span>
            <span>Beginner friendly</span>
            <span>Small batch size</span>
            <span>Near Begampur High School</span>
          </div>
        </section>

        <section id="courses" className={sec}>
          <div className={wrap}>
            <h2 className={h2}>Our courses</h2>
            <p className="mb-8 mt-1.5 text-slate-500">Pick the track that matches your class or degree.</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {COURSES.map((c) => (
                <article key={c.title} className={`${card} flex flex-col`}>
                  <span className="self-start rounded-full bg-brand px-3 py-0.5 text-xs font-semibold text-white">{c.tag}</span>
                  <h3 className="mb-2.5 mt-3 text-lg font-semibold leading-snug text-navy">{c.title}</h3>
                  <ul className="mb-4 list-disc pl-5 text-slate-600 marker:text-brand">
                    {c.points.map((p) => <li key={p}>{p}</li>)}
                  </ul>
                  <a href="#contact" className="mt-auto font-semibold text-brand hover:underline">Ask about this course</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-learnvion" className={`${sec} bg-navy text-white`}>
          <div className={wrap}>
            <h2 className={`${h2} !text-white`}>Why LearnVion?</h2>
            <p className="mb-8 mt-1.5 text-blue-200">Simple teaching, steady practice, and personal attention.</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map(([t, d]) => (
                <div key={t} className="rounded-2xl bg-white/10 p-5">
                  <h3 className="mb-1.5 font-semibold text-sun">{t}</h3>
                  <p className="text-sm text-blue-100">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="classes" className={sec}>
          <div className={wrap}>
            <h2 className={h2}>Online and offline classes</h2>
            <p className="mb-8 mt-1.5 text-slate-500">Choose how you want to learn.</p>
            <div className="grid gap-5 md:grid-cols-2">
              <article className={`${card} border-l-[6px] border-l-sun`}>
                <h3 className="mb-2 text-lg font-semibold text-navy">Online classes</h3>
                <p>Learn from home, anytime, anywhere, with live coding and shared notes.</p>
              </article>
              <article className={`${card} border-l-[6px] border-l-sun`}>
                <h3 className="mb-2 text-lg font-semibold text-navy">Offline classes</h3>
                <p>Attend at our centre near Begampur High School with experienced faculty.</p>
              </article>
            </div>
          </div>
        </section>

        <section id="flyers" className={`${sec} bg-soft`}>
          <div className={wrap}>
            <h2 className={h2}>Current batches</h2>
            <p className="mb-8 mt-1.5 text-slate-500">Our latest admission flyers.</p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {FLYERS.map(([src, alt]) => (
                <a key={src} href={src} target="_blank" rel="noreferrer" className="group">
                  <img src={src} alt={alt} loading="lazy" className="block h-auto w-full rounded-2xl border border-line transition group-hover:-translate-y-1" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={sec}>
          <div className={`${wrap} grid items-start gap-10 md:grid-cols-2 md:gap-12`}>
            <div>
              <h2 className={h2}>Join today, build your future</h2>
              <p className="mb-6 mt-1.5 text-slate-500">Send your details and we will call you back about admission.</p>
              <p className="mt-2.5"><b>Call:</b> <a href={`tel:${PHONE}`} className="text-xl font-bold text-brand">{PHONE}</a></p>
              <p className="mt-2.5"><b>Visit:</b> Near Begampur High School</p>
            </div>
            {sent ? (
              <div className={`${card} bg-soft`}>
                <h3 className="mb-2 text-lg font-semibold text-navy">Thank you, {form.name || "student"}!</h3>
                <p>We have noted your interest in {form.course}. We will call you on {form.phone}.</p>
              </div>
            ) : (
              <form onSubmit={submit} className={`${card} grid gap-4 shadow-[6px_6px_0_var(--color-sun)] sm:shadow-[10px_10px_0_var(--color-sun)]`}>
                <label className="grid gap-1.5 text-sm font-semibold text-navy">Full name
                  <input required className={field} value={form.name} onChange={set("name")} placeholder="Your name" />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold text-navy">Phone number
                  <input required type="tel" pattern="[0-9]{10}" title="10-digit phone number" className={field} value={form.phone} onChange={set("phone")} placeholder="10-digit number" />
                </label>
                <label className="grid gap-1.5 text-sm font-semibold text-navy">Course
                  <select className={field} value={form.course} onChange={set("course")}>
                    {COURSES.map((c) => <option key={c.title}>{c.title}</option>)}
                  </select>
                </label>
                <button className={btn} type="submit">Send enquiry</button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-navy text-sm text-blue-100">
        <div className={`${wrap} flex flex-wrap justify-between gap-2 py-5`}>
          <span>© {new Date().getFullYear()} LearnVion Computer Education</span>
          <span>Learn today, build tomorrow.</span>
        </div>
      </footer>
    </div>
  );
}
