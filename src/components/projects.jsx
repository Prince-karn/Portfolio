import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Monitor, Smartphone, Globe } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { GithubIcon } from "./Icons";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.list[0].title,
      description: t.projects.list[0].description,
      category: "mobile",
      client: "VeloQuest (Belgium 🇧🇪)",
      tech: ["React Native", "MapBox", "Node.js", "PostgreSQL"],
      githubLink: "https://github.com",
      liveLink: "https://google.com",
    },
    {
      title: t.projects.list[1].title,
      description: t.projects.list[1].description,
      category: "web",
      client: "ShopFlow (Belgium 🇧🇪)",
      tech: ["Next.js", "GraphQL", "Tailwind CSS", "Shopify API"],
      githubLink: "https://github.com",
      liveLink: "https://google.com",
    },
    {
      title: t.projects.list[2].title,
      description: t.projects.list[2].description,
      category: "web",
      client: "BharatBazaar Logistics (India 🇮🇳)",
      tech: ["React", "Socket.io", "Express.js", "MongoDB"],
      githubLink: "https://github.com",
      liveLink: "https://google.com",
    },
    {
      title: t.projects.list[3].title,
      description: t.projects.list[3].description,
      category: "mobile",
      client: "FinGrow Wealth (India 🇮🇳)",
      tech: ["React Native", "Tailwind", "REST APIs", "Node.js"],
      githubLink: "https://github.com",
      liveLink: "https://google.com",
    },
    {
      title: t.projects.list[4].title,
      description: t.projects.list[4].description,
      category: "web",
      client: "ImmoHub Ghent (Belgium 🇧🇪)",
      tech: ["Vite React", "Prisma", "PostgreSQL", "Tailwind"],
      githubLink: "https://github.com",
      liveLink: "https://google.com",
    },
  ];

  const filteredProjects = projects.filter(
    (project) => filter === "all" || project.category === filter
  );

  return (
    <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden scroll-mt-20 border-t border-white/5" style={{ background: "linear-gradient(160deg, #07091a 0%, #0f1628 35%, #141c38 60%, #080d1c 100%)" }}>
      {/* Animated Floating Orbs */}
      <div className="absolute top-[-5%] left-[-12%] w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none animate-float-light z-0" />
      <div className="absolute bottom-[5%] right-[-12%] w-[550px] h-[550px] rounded-full bg-[#FF6B00]/10 blur-[140px] pointer-events-none animate-float-light-delayed z-0" />
      <div className="absolute top-[45%] left-[40%] w-[350px] h-[350px] rounded-full bg-violet-600/8 blur-[100px] pointer-events-none animate-float-light-slow z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] bg-[#FF6B00]/10 px-4 py-1.5 rounded-full">
            {t.projects.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mt-4">
            {t.projects.title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#FF6B00] to-green-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 md:mb-12">
          {["all", "web", "mobile"].map((type) => (
            <motion.button
              key={type}
              onClick={() => setFilter(type)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full font-mono text-xs md:text-sm font-semibold capitalize border transition-all duration-300 ${
                filter === type
                  ? "bg-[#FF6B00] border-[#FF6B00] text-white shadow-[0_0_15px_rgba(255,107,0,0.3)]"
                  : "bg-white/5 border-white/5 hover:border-white/20 text-gray-300"
              }`}
            >
              {type === "all" ? t.projects.filters.all : type === "web" ? t.projects.filters.web : t.projects.filters.mobile}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                key={project.title}
                className="glass-panel rounded-3xl border border-white/5 overflow-hidden flex flex-col justify-between hover:border-[#FF6B00]/30 hover:shadow-[0_12px_30px_rgba(255,107,0,0.08)] transition-all duration-300 group"
              >
                {/* Visual Header indicating Category */}
                <div className="relative h-36 sm:h-44 md:h-48 bg-gradient-to-br from-[#0c0c0c] via-black to-[#0c0c0c] border-b border-white/5 flex items-center justify-center group-hover:from-black group-hover:to-[#140b05] transition-all duration-500">
                  <div className="absolute top-4 right-4 bg-white/5 px-3 py-1 rounded-full border border-white/5 text-[11px] text-gray-400 flex items-center gap-1">
                    <Globe className="w-3 h-3 text-[#FF6B00]" />
                    <span>{project.client}</span>
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-white/5 group-hover:bg-[#FF6B00]/10 flex items-center justify-center text-gray-400 group-hover:text-[#FF6B00] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                    {project.category === "web" ? (
                      <Monitor className="w-8 h-8" />
                    ) : (
                      <Smartphone className="w-8 h-8" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#FF6B00] transition-colors duration-300 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tItem, idx) => (
                        <span
                          key={idx}
                          className="bg-white/5 border border-white/5 text-gray-300 text-[11px] px-2.5 py-1 rounded-md font-mono group-hover:border-[#FF6B00]/25 group-hover:text-[#FF6B00]/95 transition-colors duration-300"
                        >
                          {tItem}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex justify-between items-center border-t border-white/5 pt-4">
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span>{t.projects.repo}</span>
                      </a>
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-xs text-[#FF6B00] hover:underline"
                      >
                        <span>{t.projects.live}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default Projects;