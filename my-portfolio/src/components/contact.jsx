const Contact = () => {
  return (
    <section id = "contact" className="scroll-mt-24 bg-black text-white py-20 px-6 text-center">
      
      <h2 className="text-3xl md:text-4xl font-bold">
        Contact Me
      </h2>

      <p className="mt-4 text-gray-300">
        Feel free to reach out for collaborations or opportunities!
      </p>

      <div className="mt-8 flex flex-col items-center gap-4">
        
        <a
          href="mailto:your@email.com"
          className="text-blue-400 hover:underline"
        >
          your@email.com
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          LinkedIn Profile
        </a>

        <a
          href="https://github.com"
          target="_blank"
          className="text-blue-400 hover:underline"
        >
          GitHub Profile
        </a>

      </div>

    </section>
  );
};

export default Contact;