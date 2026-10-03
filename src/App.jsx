
import { useState } from "react";

const PHONE = "7596942690";
const NAV = ["Home", "Courses", "Why LearnVion", "Classes", "Flyers", "Contact"];

const COURSES = [
  {
    name: "Class 1-12 Computer Practical",
    sub: "Class 1 – 12", title: "Computer Practical", icon: "🖥️",
    points: ["Basic Computer Knowledge", "Typing & Internet", "MS Office (Word, Excel, PowerPoint)", "Live Practical Classes"],
    card: "border-blue-200 bg-gradient-to-br from-white to-blue-100",
    iconBg: "bg-blue-600", head: "text-blue-800", check: "text-blue-600", cta: "border-blue-600 text-blue-700",
  },
  {
    name: "Word, Excel & PowerPoint",
    sub: "", title: "Word, Excel & PowerPoint", icon: "📊",
    points: ["Document Creation & Formatting", "Data Management in Excel", "Presentation Skills in PowerPoint", "Project Based Learning"],
    card: "border-green-200 bg-gradient-to-br from-white to-green-100",
    iconBg: "bg-green-600", head: "text-green-700", check: "text-green-600", cta: "border-green-600 text-green-700",
  },
  {
    name: "Class 11-12 Computer Application & Science",
    sub: "Class 11 – 12", title: "Computer Application & Science", icon: "📖",
    points: ["Computer Application (Theory + Practical)", "Science (Physics, Chemistry, Biology)", "Exam Preparation Support", "Regular Tests & Revision"],
    card: "border-purple-200 bg-gradient-to-br from-white to-purple-100",
    iconBg: "bg-purple-700", head: "text-purple-800", check: "text-purple-700", cta: "border-purple-700 text-purple-700",
  },
  {
    name: "BCA / BSc Subjects",
    sub: "", title: "BCA / BSc Subjects", icon: "🎓",
    points: ["Programming (C / C++ / Java / Python)", "Data Structures & Algorithms", "Web Technologies", "Database Management", "And More..."],
    card: "border-orange-200 bg-gradient-to-br from-white to-orange-100",
    iconBg: "bg-orange-500", head: "text-orange-600", check: "text-orange-500", cta: "border-orange-500 text-orange-600",
  },
];

const FEATURES = [
  ["👨‍🏫", "Experienced", "Faculty"],
  ["📘", "Practical", "Hands-on Training"],
  ["📜", "Certificate", "Provided"],
];

const WHY = [
  {
    icon: "👨‍🏫", title: "Experienced Faculty",
    desc: "Learn from industry experts and academic professionals with years of real-world experience.",
    card: "border-blue-100 bg-gradient-to-br from-blue-50 to-white", iconBg: "bg-blue-600", arrow: "bg-blue-600", spark: "text-blue-400",
  },
  {
    icon: "🖥️", title: "Live Interactive Classes",
    desc: "Get real-time doubt solving, personal attention and engaging sessions.",
    card: "border-pink-100 bg-gradient-to-br from-pink-50 to-white", iconBg: "bg-pink-600", arrow: "bg-pink-600", spark: "text-pink-400",
  },
  {
    icon: "📋", title: "Structured Curriculum",
    desc: "From basics to industry level, our well-designed curriculum builds strong foundations.",
    card: "border-green-100 bg-gradient-to-br from-green-50 to-white", iconBg: "bg-green-600", arrow: "bg-green-600", spark: "text-green-400",
  },
  {
    icon: "👥", title: "Small Batches",
    desc: "More attention, better interaction and personalized learning for every student.",
    card: "border-purple-100 bg-gradient-to-br from-purple-50 to-white", iconBg: "bg-purple-700", arrow: "bg-purple-700", spark: "text-purple-400",
  },
  {
    icon: "🗓️", title: "Flexible Batches",
    desc: "Choose what fits your schedule. Study at your convenience without stress.",
    card: "border-orange-100 bg-gradient-to-br from-orange-50 to-white", iconBg: "bg-orange-500", arrow: "bg-orange-500", spark: "text-orange-400",
  },
  {
    icon: "💙", title: "Career Guidance",
    desc: "Get support for higher studies, job opportunities and a clear path to your dream career.",
    card: "border-indigo-100 bg-gradient-to-br from-indigo-50 to-white", iconBg: "bg-indigo-800", arrow: "bg-indigo-800", spark: "text-indigo-400",
  },
];

const MODES = [
  {
    title: "Online Classes", icon: "💻", label: "Explore Online Classes",
    desc: "Learn from the comfort of your home, anytime, anywhere, with live coding and shared notes.",
    points: ["Live Interactive Sessions", "Doubt Support", "Recorded Classes", "Study Materials"],
    card: "border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100",
    iconBg: "bg-blue-500", check: "text-blue-500", cta: "border-blue-600 text-blue-700", spark: "text-blue-400",
  },
  {
    title: "Offline Classes", icon: "👥", label: "Explore Offline Classes",
    desc: "Attend classes at our centre near Begampur High School with experienced faculty.",
    points: ["Face-to-Face Learning", "Hands-on Practice", "Individual Attention", "Better Doubt Resolution"],
    card: "border-pink-100 bg-gradient-to-br from-pink-50 via-white to-purple-100",
    iconBg: "bg-pink-600", check: "text-pink-600", cta: "border-pink-600 text-pink-600", spark: "text-pink-400",
  },
];

const INSTRUCTOR = {
  name: ["Isha", "Dutta"],
  role: "Founder & Senior Instructor",
  photo: "/instructor.jpg",
  places: [["📍", "Techno Main Salt Lake"], ["🎓", "Burdwan Raj College"]],
  bio: "Software Engineer passionate about scalable systems and elegant algorithms. Dedicated mentor committed to teaching, learning, and inspiring future developers.",
  stats: [
    ["🗓️", "bg-pink-600", "2+ Years", "Teaching Experience"],
    ["</>", "bg-indigo-600", "Real Projects", "Hands-on Learning"],
    ["👥", "bg-emerald-500", "Personal Guidance", "Every Step of the Way"],
  ],
  gets: [
    "Concepts explained in simple language",
    "Practical, real-world examples",
    "Personalized doubt support",
    "Regular tests & progress tracking",
    "Career guidance & interview preparation",
  ],
  quote: "Learning is not just about getting a job, it's about building a better version of yourself.",
};

const FLYERS = [
  ["/flyer-1.png", "Class 11-12 Computer Application and Computer Science flyer"],
  ["/flyer-2.png", "BCA and B.Sc programming course flyer"],
  ["/flyer-3.png", "Basic computer education flyer"],
];

const btn = "inline-block cursor-pointer rounded-full border-2 border-brand bg-brand px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#c4125a]";
const btnGhost = "inline-block rounded-full border-2 border-navy px-6 py-3 font-semibold text-navy transition hover:-translate-y-0.5 hover:bg-navy hover:text-white";
const wrap = "mx-auto w-[92%] max-w-6xl";
const wrapWide = "mx-auto w-[92%] max-w-7xl";
const sec = "py-8 md:py-8";
const h2 = "text-2xl font-extrabold text-navy sm:text-3xl";
const card = "rounded-2xl border border-line bg-white p-6";
const field = "w-full rounded-xl border-[1.5px] border-line bg-white px-3.5 py-3 font-normal focus:border-brand focus:outline-none";

export default function App() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", course: COURSES[0].name });

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => { e.preventDefault(); setSent(true); };
  const id = (s) => (s === "Home" ? "top" : s.toLowerCase().replace(/[^a-z]+/g, "-"));

  return (
    <div className="font-sans leading-relaxed text-ink">
      <header className="sticky top-0 z-20 border-b border-line bg-white">
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-[4%] py-2">
          <a href="#top" className="flex items-center gap-2.5 text-xl font-extrabold leading-tight text-navy sm:text-2xl">
            <img
              src="/learnvion_logo.png"
              alt="LearnVion logo"
              className="h-12 w-auto object-contain sm:h-14"
            />
            <span className="sm:text-[1.7rem]">
              Learn<b className="font-extrabold text-brand">Vion</b>
              <small className="block text-[.62rem] font-semibold uppercase tracking-widest text-brand sm:text-[.68rem]">Computer Education</small>
            </span>
          </a>

          <button className="p-2 md:hidden" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className="my-1.5 block h-0.5 w-6 rounded bg-navy" />
            <span className="my-1.5 block h-0.5 w-6 rounded bg-navy" />
            <span className="my-1.5 block h-0.5 w-6 rounded bg-navy" />
          </button>

          <nav className={`${open ? "flex" : "hidden"} absolute left-0 right-0 top-full flex-col items-start gap-4 border-b border-line bg-white px-[4%] py-5 text-sm font-medium md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:text-base`}>
            {NAV.map((n) => (
              <a
                key={n}
                href={`#${id(n)}`}
                onClick={() => setOpen(false)}
                className={`hover:text-brand ${n === "Home" ? " border-brand pb-1 text-navy" : ""}`}
              >
                {n}
              </a>
            ))}
            <a href={`tel:${PHONE}`} className={`${btn} px-5! py-2.5! text-sm!`}>📞 Call {PHONE}</a>
          </nav>
        </div>
      </header>

      <main id="top"  >
        {/* HERO */}
        <section className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-purple-100">
          <div className={`${wrapWide} relative z-1 pt-11`}>
            <div className="lg:w-[52%] pt-1">
              <p className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-sm font-semibold text-navy ">
                <span>🎓</span> Your Learning Journey <span className="text-brand ">Starts Here</span>
              </p>
              <h1 className="my-4 text-4xl font-extrabold leading-[1.1] text-navy sm:text-5xl lg:text-[3.4rem]">
                Learn Today,
                <span className="block whitespace-nowrap text-brand">Build Your Tomorrow</span>
              </h1>
              <p className="max-w-xl text-base text-slate-700 sm:text-lg">
                Expert computer education for school, college and career growth. From basic computer skills to advanced programs —
                <b className="block text-navy">LearnVion is your trusted learning partner!</b>
              </p>

              <div className="mt-3 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-white/70 sm:grid-cols-3">
                {FEATURES.map(([ic, a, b]) => (
                  <div key={a} className="flex items-center gap-1.5 border-line px-2.5 py-2.5 sm:border-l sm:first:border-l-0">
                    <span className="text-2xl">{ic}</span>
                    <p className="whitespace-nowrap text-[11px] font-semibold leading-tight text-navy sm:text-xs">
                      {a}
                      <span className="block font-medium text-slate-600">{b}</span>
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3.5">
                <a className={`${btn} px-8!`} href="#contact">Enroll Now →</a>
                <a className={`${btnGhost} px-8!`} href="#courses">View Courses</a>
              </div>
            </div>
          </div>

          {/* Full hero artwork: stacked on mobile, right half + fade on desktop */}
       
          <img
            src="/hero-student-logo.png"
            alt="Smiling student holding books with laptop"
            className=" relative z-10 block w-full h-auto lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[57%] lg:object-cover 
            lg:object-right lg:mask-[linear-gradient(to_right,transparent,black_22%)]"
          />
        </section>

        {/* COURSES */}
        <section id="courses" className={`${sec} pb-10!`}>
          <div className={wrapWide}>
            <div className="text-center">
              <h2 className="flex items-center justify-center gap-4 text-3xl font-extrabold text-navy sm:text-4xl">
                <span className="hidden h-0.5 w-14 bg-brand sm:block" />
                Our <span className="text-brand">Courses</span>
                <span className="hidden h-0.5 w-14 bg-brand sm:block" />
              </h2>
              <p className="mb-8 mt-1.5 text-slate-600">Choose the right course for your future</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {COURSES.map((c) => (
                <article key={c.name} className={`flex flex-col rounded-2xl border p-4 ${c.card}`}>
                  <div className="flex items-center gap-3">
                    <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-2xl text-white ${c.iconBg}`}>{c.icon}</span>
                    <h3 className={`font-bold leading-snug ${c.head}`}>
                      {c.sub && <span className="block text-base">{c.sub}</span>}
                      <span className={c.sub ? "block text-sm" : "block text-base"}>{c.title}</span>
                    </h3>
                  </div>
                  <ul className="my-4 grid gap-1.5 text-[13px] text-slate-700">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <span className={`font-bold ${c.check}`}>✔</span>{p}
                      </li>
                    ))}
                  </ul>
                  <a href="#contact" className={`mt-auto rounded-full border-2 bg-white py-1.5 text-center text-sm font-semibold transition hover:-translate-y-0.5 ${c.cta}`}>
                    Learn More →
                  </a>
                </article>
              ))}

              {/* Promo card */}
              <article className="flex flex-col justify-center rounded-2xl border border-pink-200 bg-linear-to-br from-pink-50 to-purple-100 p-5 text-center sm:col-span-2 lg:col-span-1">
                <p className="text-sm font-semibold italic text-navy">Not Just Classes...</p>
                <p className="my-1 -rotate-3 text-3xl font-extrabold italic leading-tight text-brand">Real Skills<span className="block">for Life!</span></p>
                <p className="mt-3 -rotate-3 rounded-md bg-navy px-3 py-4 text-sm font-semibold italic text-white">
                  Join LearnVion and give your future a strong start!
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* WHY LEARNVION */}
        <section id="why-learnvion" className="bg-linear-to-b from-slate-50 to-white">
          {/* Banner */}
          <div className="relative overflow-hidden">
            <div className={`${wrapWide} relative z-1 py-10 lg:py-14`}>
              <div className="lg:w-[52%]">
                <p className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-sm font-semibold text-brand">
                  <span>⭐</span> Your Success, Our Priority
                </p>
                <h2 className="my-3 text-4xl font-extrabold leading-[1.1] text-navy sm:text-5xl lg:text-[3.4rem]">
                  Why <span className="text-brand">LearnVion?</span>
                </h2>
                <p className="max-w-xl text-base font-medium text-navy sm:text-lg">
                  We go beyond just teaching. LearnVion is your learning partner, helping you build skills, confidence and a brighter future.
                </p>
              </div>
            </div>
            <img
              src="/student-logo.png"
              alt="Smiling student with laptop and books"
              className="relative z-10 block h-auto w-full lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[52%] lg:object-cover lg:object-right lg:mask-[linear-gradient(to_right,transparent,black_22%)]"
            />
          </div>

          {/* Cards */}
          <div className={`${wrapWide} pb-14 pt-8 md:pb-20`}>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {WHY.map((w) => (
                <article key={w.title} className={`relative flex gap-4 rounded-2xl border p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${w.card}`}>
                  <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-full text-3xl text-white ${w.iconBg}`}>{w.icon}</span>
                  <div className="pr-6">
                    <h3 className="text-lg font-extrabold leading-snug text-navy">{w.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-700">{w.desc}</p>
                  </div>
                  <span className={`absolute right-4 top-3 text-lg ${w.spark}`} aria-hidden="true">✦</span>
                  <span className={`absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full text-white ${w.arrow}`} aria-hidden="true">→</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="classes" className={`${sec} bg-linear-to-b from-blue-50/60 to-white`}>
          <div className={wrapWide}>
            <p className="inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-sm font-semibold text-brand">
              <span>🎓</span> Learn Your Way
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl lg:text-5xl">
              Online and <span className="text-brand">Offline Classes</span>
            </h2>
            <p className="mb-8 mt-2 max-w-2xl text-base text-navy sm:text-lg">
              Choose how you want to learn. Flexible options, personalized support, and a better way to achieve your goals.
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              {MODES.map((m) => (
                <article key={m.title} className={`relative rounded-2xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${m.card}`}>
                  <span className={`absolute right-5 top-4 text-lg ${m.spark}`} aria-hidden="true">✦</span>
                  <div className="flex items-start gap-4">
                    <span className={`grid h-16 w-16 shrink-0 place-items-center rounded-full text-3xl text-white ${m.iconBg}`}>{m.icon}</span>
                    <div>
                      <h3 className="text-2xl font-extrabold text-navy">{m.title}</h3>
                      <p className="mt-1.5 max-w-md text-sm text-slate-700 sm:text-base">{m.desc}</p>
                    </div>
                  </div>

                  <ul className="mt-5 grid gap-x-6 gap-y-2.5 text-sm text-slate-700 sm:grid-cols-2">
                    {m.points.map((p) => (
                      <li key={p} className="flex items-center gap-2">
                        <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full bg-white text-xs font-bold shadow-sm ${m.check}`}>✔</span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className={`mt-6 inline-block rounded-full border-2 bg-white px-6 py-2.5 text-sm font-semibold transition hover:-translate-y-0.5 ${m.cta}`}>
                    {m.label} →
                  </a>
                </article>
              ))}
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

        {/* MEET YOUR INSTRUCTOR */}
        <section id="instructor" className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-purple-100 py-12 md:py-16">
          <div className={`${wrapWide} grid items-center gap-10 lg:grid-cols-[auto_1fr_1fr] lg:gap-8`}>
            {/* Photo */}
            <div className="relative mx-auto">
              <span className="absolute -left-4 -top-6 -rotate-12 text-lg font-bold italic leading-tight text-navy sm:-left-10" aria-hidden="true">
                Learn<br />Grow<br /><span className="text-brand">Succeed</span>
              </span>
              <img
                src={INSTRUCTOR.photo}
                alt={`${INSTRUCTOR.name.join(" ")}, instructor at LearnVion`}
                className="h-60 w-60 rounded-full border-10 border-white object-cover shadow-xl ring-4 ring-purple-500 sm:h-72 sm:w-72 lg:h-80 lg:w-80"
              />
              <span className="mt-4 block -rotate-6 text-center text-xl font-bold italic text-navy lg:absolute lg:-bottom-8 lg:-left-6 lg:mt-0" aria-hidden="true">
                Your <span className="text-brand">Mentor ♥</span>
              </span>
            </div>

            {/* Details */}
            <div className="text-center lg:text-left">
              <p className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-4 py-1.5 text-sm font-semibold text-navy">
                <span>👤</span> Meet Your Instructor
              </p>
              <h2 className="my-3 text-4xl font-extrabold leading-tight text-navy sm:text-5xl lg:text-6xl">
                {INSTRUCTOR.name[0]} <span className="text-brand">{INSTRUCTOR.name[1]}</span>
              </h2>
              <span className="inline-block rounded-full bg-indigo-700 px-5 py-2 text-sm font-semibold text-white sm:text-base">
                👤 {INSTRUCTOR.role}
              </span>

              <div className="mt-4 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                {INSTRUCTOR.places.map(([ic, t]) => (
                  <span key={t} className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-navy">
                    <span>{ic}</span>{t}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-base text-navy sm:text-lg">{INSTRUCTOR.bio}</p>

              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {INSTRUCTOR.stats.map(([ic, bg, a, b]) => (
                  <div key={a} className="rounded-2xl bg-white p-3.5 text-left shadow-sm">
                    <span className={`grid h-11 w-11 place-items-center rounded-full text-lg font-bold text-white ${bg}`}>{ic}</span>
                    <p className="mt-2 text-sm font-extrabold text-navy sm:text-base">{a}</p>
                    <p className="text-xs text-slate-600">{b}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* What you'll get */}
            <div className="rounded-3xl border border-pink-100 bg-linear-to-br from-pink-50 to-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <h3 className="flex items-center gap-2 text-2xl font-extrabold text-navy">
                  <span className="text-brand">★</span> What You'll Get
                </h3>
                <span className="hidden -rotate-6 text-right text-sm font-bold italic leading-tight text-navy sm:block" aria-hidden="true">
                  Better<br />Skills<br /><span className="text-brand">Brighter Future ♥</span>
                </span>
              </div>
              <ul className="mt-4 grid gap-3 text-sm text-navy sm:text-base">
                {INSTRUCTOR.gets.map((g) => (
                  <li key={g} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-xs font-bold text-white">✔</span>
                    {g}
                  </li>
                ))}
              </ul>

              <blockquote className="mt-6 rounded-2xl bg-purple-100/70 p-5">
                <p className="text-3xl font-extrabold leading-none text-brand">“</p>
                <p className="-mt-1 text-base font-medium italic text-navy">{INSTRUCTOR.quote}</p>
                <footer className="mt-2 text-right text-sm text-navy">— {INSTRUCTOR.name.join(" ")}</footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-linear-to-br from-blue-50 via-white to-purple-100 py-10 md:py-14">
          <div className={wrapWide}>
            <div className="relative rounded-3xl border border-line bg-white p-6 shadow-lg sm:p-8">
              <span className="absolute right-6 top-5 hidden text-2xl text-brand sm:block" aria-hidden="true">✈</span>

              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-pink-100 text-2xl">👤</span>
                <div>
                  <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
                    Contact <span className="text-brand">Us</span>
                  </h2>
                  <p className="text-sm font-semibold text-navy">Have questions? We're here to help!</p>
                </div>
              </div>

              <div className="mt-7 grid items-start gap-8 md:grid-cols-[1fr_auto_1.4fr] md:gap-8">
                {/* Contact details */}
                <div className="grid gap-5">
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-indigo-700 text-xl text-white">📞</span>
                    <div>
                      <p className="text-sm font-bold text-navy">Call Us</p>
                      <a href={`tel:${PHONE}`} className="text-lg font-bold text-brand">{PHONE}</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-indigo-700 text-xl text-white">📍</span>
                    <div>
                      <p className="text-sm font-bold text-navy">Visit Us</p>
                      <p className="text-sm text-slate-700">Near Begampur High School<br />Kolkata, West Bengal</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-pink-600 text-xl text-white">✉️</span>
                    <div>
                      <p className="text-sm font-bold text-navy">Email Us</p>
                      <a href="mailto:learnvion@gmail.com" className="text-sm font-bold text-navy">learnvion@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="hidden w-px self-stretch bg-blue-200 md:block" />

                {/* Form */}
                {sent ? (
                  <div className="rounded-2xl bg-soft p-6">
                    <h3 className="mb-2 text-lg font-semibold text-navy">Thank you, {form.name || "student"}!</h3>
                    <p>We have noted your interest in {form.course}. We will call you on {form.phone}.</p>
                  </div>
                ) : (
                  <form onSubmit={submit} className="grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-1.5 text-xs font-bold text-navy">Full Name *
                        <input required className={field} value={form.name} onChange={set("name")} placeholder="Enter your name" />
                      </label>
                      <label className="grid gap-1.5 text-xs font-bold text-navy">Phone Number *
                        <input required type="tel" pattern="[0-9]{10}" title="10-digit phone number" className={field} value={form.phone} onChange={set("phone")} placeholder="10-digit number" />
                      </label>
                    </div>
                    <label className="grid gap-1.5 text-xs font-bold text-navy sm:max-w-[calc(50%-0.5rem)]">Course Interested In
                      <select className={field} value={form.course} onChange={set("course")}>
                        {COURSES.map((c) => <option key={c.name}>{c.name}</option>)}
                      </select>
                    </label>
                    <button className={`${btn} w-full`} type="submit">Send Enquiry →</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      
       <footer className="relative overflow-hidden bg-navy text-sm text-blue-100">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-pink-500/10 blur-3xl" />
 
        <div className={`${wrapWide} relative grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.3fr_1.3fr]`}>
          {/* Brand */}
          <div>
            <a href="#top" className="flex items-center gap-2.5 text-2xl font-extrabold leading-tight text-white">
              <img src="/learnvion_logo.png" alt="LearnVion logo" className="h-12 w-auto object-contain" />
              <span>
                Learn<b className="font-extrabold text-pink-500">Vion</b>
                <small className="block text-[.62rem] font-semibold uppercase tracking-widest text-pink-400">Computer Education</small>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-blue-200">
              Expert computer education for school, college and career growth. Learn today, build your tomorrow.
            </p>
            <div className="mt-5 flex gap-3">
              {[["Facebook", "f"], ["Instagram", "◎"], ["YouTube", "▶"]].map(([name, ic]) => (
                <a
                  key={name}
                  href="#"
                  aria-label={name}
                  className="grid h-10 w-10 place-items-center rounded-full bg-white/10 font-bold text-white transition hover:-translate-y-0.5 hover:bg-brand"
                >
                  {ic}
                </a>
              ))}
            </div>
          </div>
 
          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-base font-bold text-white">Quick Links</h3>
            <ul className="grid gap-2.5">
              {NAV.map((n) => (
                <li key={n}>
                  <a href={`#${id(n)}`} className="transition hover:text-pink-400">› {n}</a>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Courses */}
          <div>
            <h3 className="mb-4 text-base font-bold text-white">Our Courses</h3>
            <ul className="grid gap-2.5">
              {COURSES.map((c) => (
                <li key={c.name}>
                  <a href="#courses" className="transition hover:text-pink-400">› {c.name}</a>
                </li>
              ))}
            </ul>
          </div>
 
          {/* Contact */}
          <div>
            <h3 className="mb-4 text-base font-bold text-white">Get in Touch</h3>
            <ul className="grid gap-3">
              <li className="flex items-start gap-3"><span>📍</span><span>Near Begampur High School,<br />Kolkata, West Bengal</span></li>
              <li className="flex items-center gap-3"><span>✉️</span><a href="mailto:learnvion@gmail.com" className="transition hover:text-pink-400">learnvion@gmail.com</a></li>
            </ul>
            <a href={`tel:${PHONE}`} className={`${btn} mt-5 px-5! py-2.5! text-sm!`}>📞 Call {PHONE}</a>
          </div>
        </div>
 
        <div className="relative border-t border-white/10">
          <div className={`${wrapWide} flex flex-wrap items-center justify-between gap-2 py-4 text-xs text-blue-300`}>
            <span>© {new Date().getFullYear()} LearnVion Computer Education. All rights reserved.</span>
            <span>Learn today, build tomorrow. ♥</span>
          </div>
        </div>
      </footer>
    </div>
  );
}