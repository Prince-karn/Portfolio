import { motion } from "framer-motion";
import { Monitor, Server, Cpu } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();

  const skillsData = [
    {
      category: t.skills.categories.frontend,
      icon: Monitor,
      color: "orange",
      list: ["HTML5 / CSS3", "JavaScript (ES6+)", "TypeScript", "React & Next.js", "Tailwind CSS"],
    },
    {
      category: t.skills.categories.backend,
      icon: Server,
      color: "green",
      list: ["Node.js", "Express.js", "RESTful & GraphQL APIs", "MongoDB & Mongoose", "PostgreSQL & Prisma"],
    },
    {
      category: t.skills.categories.mobile,
      icon: Cpu,
      color: "orange",
      list: ["React Native", "Expo Ecosystem", "Git & GitHub Sprints", "Docker & CI/CD", "AWS & Vercel Deployments"],
    },
  ];

  return (
    <section id="skills" className="relative py-20 sm:py-28 px-4 sm:px-6 text-white scroll-mt-20 overflow-hidden border-t border-white/5" style={{ background: "linear-gradient(140deg, #06080f 0%, #0c1020 40%, #101828 70%, #080c18 100%)" }}>
      {/* Animated Floating Orbs */}
      <div className="absolute top-[-5%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF6B00]/8 blur-[130px] pointer-events-none animate-float-light z-0" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[450px] h-[450px] rounded-full bg-emerald-500/8 blur-[110px] pointer-events-none animate-float-light-delayed z-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] bg-[#FF6B00]/10 px-4 py-1.5 rounded-full">
            {t.skills.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mt-4">
            {t.skills.title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#FF6B00] to-green-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          {skillsData.map((categoryBlock, index) => {
            const Icon = categoryBlock.icon;
            const isOrange = categoryBlock.color === "orange";

            const containerVariants = {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: index * 0.15,
                }
              }
            };

            const itemVariants = {
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } }
            };
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className={`glass-panel p-6 md:p-8 rounded-3xl border border-white/5 flex flex-col items-center hover:border-white/10 hover:shadow-[0_10px_35px_rgba(0,0,0,0.5)] transition-all duration-300 relative group`}
              >
                {/* Accent line on top of card */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 rounded-b-full transition-colors duration-300 ${
                  isOrange ? "bg-[#FF6B00]/60 group-hover:bg-[#FF6B00]" : "bg-green-500/60 group-hover:bg-green-500"
                }`} />

                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${
                  isOrange 
                    ? "bg-[#FF6B00]/5 border-[#FF6B00]/10 text-[#FF6B00] group-hover:bg-[#FF6B00]/10 group-hover:border-[#FF6B00]/30" 
                    : "bg-green-500/5 border-green-500/10 text-green-500 group-hover:bg-green-500/10 group-hover:border-green-500/30"
                }`}>
                  <Icon className="w-5 h-5" />
                </div>

                {/* Category Header */}
                <h3 className={`text-xl font-bold mb-6 font-mono ${
                  isOrange ? "text-[#FF6B00]" : "text-green-500"
                }`}>
                  {categoryBlock.category}
                </h3>

                {/* List items */}
                <motion.div 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex flex-col gap-3 w-full text-center"
                >
                  {categoryBlock.list.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.04, y: -2 }}
                      className={`bg-white/5 border border-white/5 rounded-xl py-2 px-4 text-sm font-mono text-gray-300 hover:text-white transition-all duration-200 cursor-default ${
                        isOrange 
                          ? "hover:border-[#FF6B00]/30 hover:bg-[#FF6B00]/5 hover:shadow-[0_0_15px_rgba(255,107,0,0.1)]"
                          : "hover:border-green-500/30 hover:bg-green-500/5 hover:shadow-[0_0_15px_rgba(34,197,94,0.1)]"
                      }`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;