const Hero = () => {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-black via-gray-900 to-black text-white">
      
      <h1 className="text-5xl md:text-7xl font-bold leading-tight">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Prince
        </span>
      </h1>

      <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl">
        I build modern, scalable and user-friendly web applications using React and MERN stack.
      </p>

      <div className="mt-8 flex gap-4">
        <a href="#projects">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl font-semibold hover:opacity-90 transition">
            View Projects
          </button>
        </a>

        <a href="#contact">
          <button className="px-6 py-3 border border-gray-500 rounded-xl hover:border-white transition">
            Contact Me
          </button>
        </a>
      </div>

    </section>
  );
};

export default Hero;