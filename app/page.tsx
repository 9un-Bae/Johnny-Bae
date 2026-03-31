"use client";

import { useMemo, useState } from "react";

type Project = {
  title: string;
  subtitle: string;
  stack: string;
  desc: string;
  image: string;
  link: string;
  demoLink?: string;
};

type SelectedProject = {
  title: string;
  image: string;
};

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showResume, setShowResume] = useState(false);
  const [selectedProject, setSelectedProject] = useState<SelectedProject | null>(null);

  const projects: Project[] = [
    {
      title: "YOLO-BOLO",
      subtitle: "License plate detection and OCR pipeline",
      stack: "Python · YOLO · OpenCV · EasyOCR",
      desc: "Real-time computer vision system for detecting vehicles, locating plates, and extracting text for watchlist-style security workflows.",
      image: "/license.png",
      link: "https://github.com/9un-Bae/CS495-license-detector",
      demoLink: "/projects/license/index.html",
    },
    {
      title: "Gun Violence in Hawaiʻi",
      subtitle: "Data analysis and research project",
      stack: "Python · Pandas · Data Visualization",
      desc: "Explores gun violence trends with a Hawaiʻi focus using cleaned datasets, analysis workflows, and visual storytelling.",
      image: "/gunviolence.png",
      link: "https://github.com/9un-Bae/Gun-Violence-Hawaii",
    },
    {
      title: "Marine Debris ML",
      subtitle: "Machine learning for environmental impact",
      stack: "Python · Machine Learning · Data Analysis",
      desc: "Applies machine learning methods to study marine debris patterns and support environmental problem solving.",
      image: "/marinedebris.png",
      link: "https://github.com/9un-Bae/marine-debris-ML",
    },
    {
      title: "Hunger Helpers",
      subtitle: "Community-focused applied web development",
      stack: "HTML/CSS · JavaScript · Computer Science",
      desc: "Course project focused on applying technical and analytical thinking to a real healthcare-related problem space.",
      image: "/hungerhelper.png",
      link: "https://github.com/9un-Bae/CS401-Project",
    },
    {
      title: "Pokemon Battle",
      subtitle: "Interactive programming project",
      stack: "Java · Object-Oriented Programming",
      desc: "A game-style programming project centered on battle logic, class design, and interactive gameplay mechanics.",
      image: "/pokemon.png",
      link: "https://github.com/9un-Bae/PokemonBattle",
    },
    {
      title: "Harry Potter Analysis",
      subtitle: "Sentimental Analysis and Data Visualization",
      stack: "Python · Data Analysis · Visualization",
      desc: "A themed analysis project exploring patterns, trends, and creative insights from Harry Potter-related data.",
      image: "/harrypotter.png",
      link: "https://github.com/9un-Bae/HarryPotter",
    },
  ];

  const highlights = [
    "Navy veteran turned CS + Data Science student",
    "Focused on AI, automation, and practical systems",
    "Interested in public safety, assistive tech, and community impact",
  ];

  const nav = useMemo(
    () => [
      { label: "Home", key: "home" },
      { label: "About Me", key: "about" },
      { label: "Projects", key: "projects" },
      { label: "Resume", key: "resume" },
      { label: "Contact", key: "contact" },
    ],
    []
  );

  const renderPage = () => {
    switch (currentPage) {
      case "about":
        return (
          <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="mb-10 max-w-3xl">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-400">About Me</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:col-span-2">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-400">What I’m doing</p>
                <h2 className="mb-4 text-2xl font-semibold">Building toward work that matters</h2>
                <p className="leading-8 text-neutral-300">
                  My interests live at the intersection of software, AI, automation, and community impact. I am especially drawn to projects involving assistive technology, public safety, animal welfare, and practical tools that improve everyday life.
                </p>
                <p className="mt-4 leading-8 text-neutral-300">
                  I care about making technology useful, approachable, and grounded in real needs. Whether it is a portfolio project, a research effort, or a community-driven build, I want the work to be thoughtful and genuinely helpful.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-400">Current focus</p>
                <div className="space-y-3 text-neutral-300">
                  <p>Python, Java, C#, JavaScript</p>
                  <p>AI, automation, and applied software projects</p>
                  <p>Growing through hands-on builds and research</p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-5 h-44 w-full overflow-hidden rounded-2xl bg-neutral-800">
                  <img src="/navy.jpg" alt="Navy" className="h-full w-full object-cover" />
                </div>
                <h2 className="mb-4 text-2xl font-semibold">Navy Veteran</h2>
                <p className="leading-8 text-neutral-300">
                  I served 8 years in the U.S. Navy aboard the USS Enterprise (CVN-65) and USS America (LHA-6). Through 14 countries and countless missions, I learned that teamwork and diversity aren’t just values but how we move forward. That experience shapes how I code, collaborate, and design today.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-5 h-44 w-full overflow-hidden rounded-2xl bg-neutral-800">
                  <img src="/skipper.jpg" alt="Skipper" className="h-full w-full object-cover" />
                </div>
                <h2 className="mb-4 text-2xl font-semibold">Skipper</h2>
                <p className="leading-8 text-neutral-300">
                  Skipper is my mini blonde long-haired dachshund with a huge personality. He follows me everywhere, makes every day fun, and brings the kind of joy only a stubborn little sausage dog can. Whether he’s zooming around, begging for snacks, or knocking out a nap like it’s his job, he’s the best companion I could ask for.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
                <div className="mb-5 h-44 w-full overflow-hidden rounded-2xl bg-neutral-800">
                  <img src="/scout.jpg" alt="Hobbies" className="h-full w-full object-cover" />
                </div>
                <h2 className="mb-4 text-2xl font-semibold">Hobbies & Interests</h2>
                <p className="leading-8 text-neutral-300">
                  I love riding my Indian Scout, fishing, grilling, gaming, woodcraft, pottery, weightlifting, yoga, shooting, concerts, and Dodgers baseball! ⚾️
                </p>
              </div>
            </div>
          </section>
        );

      case "projects":
        return (
          <section className="mx-auto max-w-6xl px-6 py-16 md:py-24">
            <div className="mb-10 flex items-end justify-between gap-4">
              <div>
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-400">Projects</p>
                <h1 className="text-4xl font-semibold md:text-6xl">Featured work</h1>
              </div>
              <p className="hidden max-w-xl text-right text-sm leading-7 text-neutral-400 md:block">
                A mix of AI, software, and data projects that reflect both technical execution and problem-solving across different domains.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group flex h-full flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <button
                    type="button"
                    onClick={() => setSelectedProject({ title: project.title, image: project.image })}
                    className="mb-6 block overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 text-left"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                  </button>
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">{project.stack}</p>
                  <h2 className="mt-3 text-2xl font-semibold">{project.title}</h2>
                  <p className="mt-2 text-sm text-neutral-400">{project.subtitle}</p>
                  <p className="mt-5 flex-1 leading-7 text-neutral-300">{project.desc}</p>
                  <a
                    href={project.demoLink || project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex w-fit items-center rounded-2xl border border-white/15 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/5"
                  >
                    View Project
                  </a>
                </article>
              ))}
            </div>
          </section>
        );

      case "resume":
        return (
          <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
            <div className="mb-10">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-400">Resume</p>
              <h1 className="text-4xl font-semibold md:text-6xl">A clear snapshot of my experience and work</h1>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 md:p-10">
              <h2 className="text-2xl font-semibold">My Resume</h2>
              <p className="mt-4 max-w-2xl leading-8 text-neutral-300">
                A concise overview of my experience, technical skills, and leadership background. It reflects both my time in the Navy and my transition into building and leading technology-driven work.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  onClick={() => setShowResume(true)}
                  className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-950"
                >
                  View Resume
                </button>
              </div>
            </div>
          </section>
        );

      case "home":
      default:
        return (
          <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.35fr_0.65fr] md:py-28">
            <div className="space-y-8">
              <div className="space-y-5">
                <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
                  <span className="inline-flex items-center gap-3 align-middle mb-2 md:mb-3">
                    <span>Aloha</span>
                    <img
                      src="https://media.giphy.com/media/v0dGnTDFgEr68myH0C/giphy.gif"
                      className="h-12 w-12 rounded-full object-cover md:h-14 md:w-14"
                    />
                  </span>
                  <span className="mt-1 block text-xl md:text-4xl text-neutral-400">Welcome to my space</span>
                </h1>
                <span className="inline-flex items-center gap-3 align-middle mb-6 md:mb-8"></span>
                <p className="max-w-2xl text-lg leading-8 text-neutral-300">
                  I’m a Navy veteran turned Computer Science + Data Science student at Chaminade University of Honolulu, working toward building a career in technology and leadership. I build practical systems at the intersection of AI, automation, and real-world impact, with a focus on creating tools that help people, from assistive tech to public safety. I bring a mindset shaped by discipline, curiosity, and a drive to keep learning, building, and leading projects that matter.
                </p>
              </div>
            </div>

            <div className="md:ml-auto md:w-full">
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
                <img src="/profile.jpg" className="h-[400px] w-full object-cover md:h-[500px]" />
              </div>

              <div className="mt-6 max-w-sm">
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-400">Highlights</p>
                <div className="space-y-2">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-white/10 bg-neutral-900/70 p-2 text-sm text-neutral-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      
      case "contact":
        return (
          <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
            <div className="mb-10">
              <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-400">
                Contact
              </p>
              <h1 className="text-4xl font-semibold md:text-6xl">
                Let’s connect
              </h1>
            </div>

            <p className="max-w-2xl leading-8 text-neutral-300">
              I’m always open to opportunities, collaborations, and conversations.
              Whether it’s a project, internship, or just connecting, feel free to reach out.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <a
                href="mailto:johnny.bae00@outlook.com"
              >
                <img
                  src="/email.gif"
                  className="h-20 w-28 hover:scale-110 transition"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/johnny-bae/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/linkedin.gif"
                  className="h-20 w-28 hover:scale-110 transition"
                />
              </a>

              <a
                href="https://github.com/9un-Bae"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/github.gif"
                  className="h-20 w-28 hover:scale-110 transition"
                />
              </a>
            </div>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4">
          <button onClick={() => setCurrentPage("home")} className="text-left">
            <p className="text-sm uppercase tracking-[0.25em] text-neutral-400">Johnny Bae</p>
          </button>

          <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm md:gap-x-6">
            {nav.map((item) => (
              <button
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`transition ${
                  currentPage === item.key
                    ? "text-white"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main>{renderPage()}</main>

      {showResume && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4"
          onClick={() => setShowResume(false)}
        >
          <div
            className="relative flex h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <p className="text-sm font-medium text-white">Resume</p>
              <button
                onClick={() => setShowResume(false)}
                className="rounded-full bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/15"
              >
                Close
              </button>
            </div>

            <iframe src="/Resume.pdf" className="h-full w-full bg-white" title="Resume" />
          </div>
        </div>
      )}

      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-black/60 px-3 py-1 text-sm text-white"
            >
              Close
            </button>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-950 shadow-2xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="max-h-[85vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
