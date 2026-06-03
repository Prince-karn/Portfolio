const Skills = () => {
  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "React"],
    backend: ["Node.js", "Express.js"],
    tools: ["Git", "GitHub", "VS Code"],
  };

  return (
    <section id="skills" className="scroll-mt-24 bg-black text-white py-20 px-6 text-center">
      
      <h2 className="text-3xl md:text-4xl font-bold">
        Skills
      </h2>

      <div className="mt-10 grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        
        {/* Frontend */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Frontend
          </h3>
          <div className="flex flex-wrap justify-center">
            {skills.frontend.map((skill, index) => (
              <span
                key={index}
                className="bg-white/10 px-4 py-2 rounded-full m-2 text-sm border border-white/10 hover:bg-white/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Backend
          </h3>
          <div className="flex flex-wrap justify-center">
            {skills.backend.map((skill, index) => (
              <span
                key={index}
                className="bg-white/10 px-4 py-2 rounded-full m-2 text-sm border border-white/10 hover:bg-white/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-blue-400">
            Tools
          </h3>
          <div className="flex flex-wrap justify-center">
            {skills.tools.map((skill, index) => (
              <span
                key={index}
                className="bg-white/10 px-4 py-2 rounded-full m-2 text-sm border border-white/10 hover:bg-white/20 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default Skills;