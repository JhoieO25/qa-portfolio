export default function About() {
  return (
    <section id="about" className="py-20 bg-neutral-900 text-gray-100 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto">
            I am a Quality Assurance Engineer with a good foundation in manual and API testing, developed through personal and 
            academic projects involving real-world web applications.
          </p>

            <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto"> As a postgraduate student with a background in structured testing and documentation, 
              I focus on validating functionality, uncovering edge cases, and ensuring systems behave reliably under different conditions, including negative inputs and unstable network environments. 
            I am consciously gaining knowledge and sharpening my skills on breaking down complex workflows, thinking from a user’s perspective, and translating findings into clear, actionable test artefacts. 
            </p>

            <p className="text-gray-400 leading-relaxed max-w-3xl mx-auto"> I am ISTQB® Foundation Certified and experienced in producing industry-aligned QA documentation. While my experience has been gained outside a professional workplace setting, I am comfortable with standard QA practices and eager to contribute, learn, and grow within a collaborative engineering team.
            </p>
        </div>

          <div className="flex justify-center md:justify-end">
          <img
            src="/portfolio.jpg"
            alt="Joy Oghogho Omorogiuwa"
            className="w-80 h-80 object-cover rounded-2xl border-4 border-pink-500 shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
