import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Monitor, Smartphone, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      title: t.projects.list[0].title,
      description: t.projects.list[0].description,
      category: "web",
      client: "Maison De Crayer (Belgium 🇧🇪)",
      tech: ["React", "Vite", "Cloudinary", "Node.js", "CSS3"],
      liveLink: "https://hotel-eight-vert.vercel.app",
      images: [
        "/projects/hotel-preview.png",
        "/projects/hotel-preview-2.png",
        "/projects/hotel-preview-3.png"
      ],
    },
    {
      title: t.projects.list[1].title,
      description: t.projects.list[1].description,
      category: "web",
      client: "Tradafy (Europe 🇪🇺)",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "REST APIs"],
      liveLink: "https://tradafy.eu",
      images: [
        "/projects/tradafy-preview.png",
        "/projects/tradafy-preview-2.png",
        "/projects/tradafy-preview-3.png"
      ],
    },
    {
      title: t.projects.list[2].title,
      description: t.projects.list[2].description,
      category: "web",
      client: "Bright Citrine Global (Global 🌐)",
      tech: ["React", "Vite", "Tailwind CSS", "Playwright", "SEO"],
      liveLink: "https://bright-citrine-global.vercel.app",
      images: [
        "/projects/bright-citrine-preview.png",
        "/projects/bright-citrine-preview-2.png",
        "/projects/bright-citrine-preview-3.png"
      ],
    },
    {
      title: t.projects.list[3].title,
      description: t.projects.list[3].description,
      category: "web",
      client: "Zaptro Electronics (USA 🇺🇸)",
      tech: ["React", "Tailwind CSS", "Redux", "Node.js", "Express.js"],
      liveLink: "https://ecommerce-project-hazel-omega.vercel.app",
      images: [
        "/projects/ecommerce-preview.png",
        "/projects/ecommerce-preview-2.png",
        "/projects/ecommerce-preview-3.png"
      ],
    },
    {
      title: t.projects.list[4].title,
      description: t.projects.list[4].description,
      category: "web",
      client: "JNE Smart Technologies (Global 🌐)",
      tech: ["IoT Infrastructure", "React", "Next.js", "Energy Analytics"],
      liveLink: "https://jne-smart-techonology.vercel.app",
      images: [
        "/projects/jne-preview.png",
        "/projects/jne-preview-2.png",
        "/projects/jne-preview-3.png"
      ],
    },
    {
      title: t.projects.list[5].title,
      description: t.projects.list[5].description,
      category: "web",
      client: "TaxiWave (Belgium 🇧🇪)",
      tech: ["React", "Leaflet Maps", "Vite", "Tailwind CSS", "Geolocation"],
      liveLink: "https://taxi-wave-wine.vercel.app",
      images: [
        "/projects/taxi-preview.png",
        "/projects/taxi-preview-2.png",
        "/projects/taxi-preview-3.png"
      ],
    },
  ];

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

        {/* Projects Grid — featured projects with image previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence mode="popLayout">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} t={t} />
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

/* ─── Image Carousel for each Project Card ─── */
const ImageCarousel = ({ images, title }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000); // Auto slide every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const next = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev + 1) % images.length);
  };
  const prev = (e) => {
    e.stopPropagation();
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-full overflow-hidden group/carousel">
      {/* Images */}
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${title} preview ${current + 1}`}
          className="w-full h-full object-cover object-top"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.35 }}
        />
      </AnimatePresence>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover/carousel:opacity-100 duration-300"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/80 transition-all opacity-0 group-hover/carousel:opacity-100 duration-300"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => { e.stopPropagation(); setCurrent(idx); }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === current
                  ? "bg-[#FF6B00] w-5"
                  : "bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      )}

      {/* Gradient overlay at bottom for readability */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </div>
  );
};

/* ─── Individual Project Card ─── */
const ProjectCard = ({ project, index, t }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 30 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.1 }}
      className="glass-panel rounded-3xl border border-white/5 overflow-hidden flex flex-col hover:border-[#FF6B00]/30 hover:shadow-[0_12px_40px_rgba(255,107,0,0.12)] transition-all duration-300 group"
    >
      {/* Image Preview Header */}
      <div className="relative h-52 sm:h-60 md:h-64 bg-gradient-to-br from-[#0c0c0c] via-black to-[#0c0c0c] border-b border-white/5 overflow-hidden">
        {/* Client badge */}
        <div className="absolute top-4 right-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] text-gray-300 flex items-center gap-1.5">
          <Globe className="w-3 h-3 text-[#FF6B00]" />
          <span>{project.client}</span>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4 z-20 bg-[#FF6B00]/15 backdrop-blur-md px-3 py-1 rounded-full border border-[#FF6B00]/25 text-[11px] text-[#FF6B00] font-mono uppercase tracking-wider flex items-center gap-1.5">
          {project.category === "web" ? <Monitor className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
          <span>{project.category === "web" ? "Web" : "Mobile"}</span>
        </div>

        {/* Image Carousel */}
        <ImageCarousel images={project.images} title={project.title} />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#FF6B00] transition-colors duration-300 mb-3">
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
          <div className="flex justify-end items-center border-t border-white/5 pt-4">
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm font-semibold text-[#FF6B00] hover:text-[#ff9500] transition-colors group/link"
            >
              <span>{t.projects.live}</span>
              <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;