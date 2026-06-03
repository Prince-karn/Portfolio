const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker",
      description: "Track daily expenses easily.",
      tech: "React, Node, MongoDB",
    },
    {
      title: "Chat App",
      description: "Real-time chat interface.",
      tech: "JavaScript, HTML, CSS",
    },
    {
      title: "Portfolio",
      description: "Modern React portfolio.",
      tech: "React, Tailwind",
    },
  ];

  return (
    <section
  id="projects"
  className=" bg-gray-900 text-white py-24 px-6 text-center"
>
      
      <h2 className="text-4xl font-bold">Projects</h2>

      <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 p-6 rounded-2xl border border-white/20 hover:scale-105 transition duration-300"
          >
            <h3 className="text-xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-3 text-gray-300">
              {project.description}
            </p>

            <p className="mt-2 text-blue-400 text-sm">
              {project.tech}
            </p>

            <div className="mt-4 flex justify-center gap-4">
              <button className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">
                Live
              </button>

              <button className="px-4 py-2 border border-gray-400 rounded-lg hover:border-white">
                GitHub
              </button>
            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Projects;