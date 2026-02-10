export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-neutral-950 text-gray-100 px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-4">
        👋🏽 Hi, I'm Joy - <span className="text-pink-400">QA Engineer</span>
      </h1>
      <p><i>ISTQB® Foundation Certified • Manual, Exploratory & API Testing • Jira-style Documentation • Postman • GitHub</i></p>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl text-center leading-relaxed">
        On the journey to applying structured testing approaches to uncover issues early and support the delivery of stable, high-quality software.
      </p>
      
      
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#projects"
          className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all"
        >
          View QA Projects
        </a>

        <a
          href="/Joy_Omorogiuwa_QA_Engineer_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all"
        >
          View CV
        </a>

        <a
          href="#contact"
          className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold transition-all"
        >
          Contact Me
          </a>
        </div>
    </section>
  );
}
