import { useEffect, useState } from "react";

export default function Projects() {
  const projects = [
    {
      title: "HyGo College QA",
      description: "UI and API testing of a school management system, covering authentication, attendance, grades, validation, and network resilience.",
      tools: "MS Excel • Jira • Postman • Chrome DevTools • GitHub",
      GitHub_Link:{
        repo: "https://github.com/JhoieO25/hygo-college-rbsms-qa.git",
        repo_readme: "https://github.com/JhoieO25/hygo-college-rbsms-qa/blob/main/README.md",
      },
    },
    {
      title: "UberEats Web QA",
      description: "Manual functional and network testing of live UberEats web application, focusing on core user workflows and offline/throttled network behavior.",
      tools: "Jira • Chrome DevTools • GitHub",
      GitHub_Link:{
        repo:"https://github.com/JhoieO25/ubereats-web-qa-testing.git",
        repo_readme:"https://github.com/JhoieO25/ubereats-web-qa-testing/blob/main/README.md",
      }
    },
    {
      title: "Netflix Web QA",
      description: "Created detailed test cases for profile management and subscription flows.",
      tools: "MS Excel ",
    },
  ];

  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const openModal = (project) => setSelected(project);
  const closeModal = () => setSelected(null);

  return (
    <section id="projects" className="py-20 bg-neutral-950 text-gray-100 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (

            <button
              key={i}
              onClick={() => openModal(p)}
              className="text-left bg-neutral-900 p-6 rounded-2xl shadow-md hover:-translate-y-1 transition transform focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
            <div key={i} className="bg-neutral-900 p-6 rounded-xl shadow-md hover:-translate-y-1 transition">
              <h3 className="text-xl font-semibold text-pink-400 mb-2">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{p.description}</p>
              <p className="text-gray-500 text-xs">{p.tools}</p>
              <p className="text-pink-300 text-xs mt-4">
                Click to view documentation
              </p>
            </div>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={closeModal}
          />

          {/* Modal content */}
          <div className="relative w-full max-w-2xl bg-neutral-900 rounded-2xl border border-neutral-800 shadow-xl p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold text-pink-400">
                  {selected.title}
                </h3>
                <p className="text-gray-400 mt-2">{selected.description}</p>
                <p className="text-gray-500 text-sm mt-2">{selected.tools}</p>
              </div>

              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition px-3 py-1 rounded-lg border border-neutral-700"
              >
                Close
              </button>
            </div>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              

              {selected.GitHub_Link?.repo && (
                <a
                  href={selected.GitHub_Link.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl px-4 py-3 text-center font-semibold transition"
                >
                  View Repository
                </a>
              )}
              </div>
            </div>
          </div>
       )} 
    </section>
  );
}
