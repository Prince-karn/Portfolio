import { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Code2, Smartphone, Megaphone, Palette, Cloud, Wrench, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Individual Card Component that supports 3D tilting
const ServiceCard = ({ icon: Icon, title, description, features, color = "orange" }) => {
  const cardRef = useRef(null);
  const { t } = useLanguage();
  
  // Motion values for tracking cursor positions
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Map mouse positions to degrees of rotation
  const rotateX = useTransform(y, [-150, 150], [10, -10]);
  const rotateY = useTransform(x, [-150, 150], [-10, 10]);

  const handleMouseMove = (event) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const isOrange = color === "orange";
  const glowClass = isOrange 
    ? "hover:border-[#FF6B00]/40 hover:shadow-[0_0_25px_rgba(255,107,0,0.12)]"
    : "hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.12)]";
  const iconBg = isOrange 
    ? "bg-[#FF6B00]/10 text-[#FF6B00] border-[#FF6B00]/10 group-hover:border-[#FF6B00]/30 group-hover:shadow-[0_0_15px_rgba(255,107,0,0.25)]" 
    : "bg-emerald-500/10 text-emerald-500 border-emerald-500/10 group-hover:border-emerald-500/30 group-hover:shadow-[0_0_15px_rgba(16,185,129,0.25)]";
  const listDotColor = isOrange ? "bg-[#FF6B00]" : "bg-emerald-500";

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className={`glass-panel p-5 md:p-8 rounded-3xl border border-white/5 transition-all duration-300 relative flex flex-col justify-between group overflow-hidden ${glowClass}`}
    >
      {/* Glow highlight background element */}
      <div 
        className={`absolute -top-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-all duration-500 pointer-events-none ${
          isOrange ? "bg-[#FF6B00]" : "bg-emerald-400"
        }`}
      />

      <div style={{ transform: "translateZ(20px)" }}>
        {/* Icon */}
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 border transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 ${iconBg}`}>
          <Icon className="w-6 h-6" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-3 tracking-tight group-hover:text-white transition-colors duration-300 text-gray-100 font-mono">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 mb-5 text-xs md:text-sm leading-relaxed">
          {description}
        </p>

        {/* Features list */}
        <ul className="space-y-2 mb-6">
          {features.map((feature, i) => (
            <motion.li 
              key={i} 
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex items-center text-xs md:text-sm text-gray-300 hover:text-white transition-colors duration-200 cursor-default"
            >
              <span className={`w-1.5 h-1.5 rounded-full mr-2.5 ${listDotColor}`} />
              {feature}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Explore trigger link */}
      <div 
        className="flex items-center gap-2 text-xs md:text-sm font-semibold mt-auto cursor-pointer"
        style={{ transform: "translateZ(10px)" }}
      >
        <span className={isOrange ? "text-[#FF6B00]" : "text-emerald-500"}>{t.services.explore}</span>
        <ArrowRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5 ${isOrange ? "text-[#FF6B00]" : "text-emerald-500"}`} />
      </div>
    </motion.div>
  );
};

const Services = () => {
  const { t } = useLanguage();

  const servicesData = [
    {
      icon: Code2,
      title: t.services.list[0].title,
      description: t.services.list[0].description,
      features: t.services.list[0].features,
      color: "orange",
    },
    {
      icon: Smartphone,
      title: t.services.list[1].title,
      description: t.services.list[1].description,
      features: t.services.list[1].features,
      color: "green",
    },
    {
      icon: Megaphone,
      title: t.services.list[2].title,
      description: t.services.list[2].description,
      features: t.services.list[2].features,
      color: "orange",
    },
    {
      icon: Palette,
      title: t.services.list[3].title,
      description: t.services.list[3].description,
      features: t.services.list[3].features,
      color: "green",
    },
    {
      icon: Cloud,
      title: t.services.list[4].title,
      description: t.services.list[4].description,
      features: t.services.list[4].features,
      color: "orange",
    },
    {
      icon: Wrench,
      title: t.services.list[5].title,
      description: t.services.list[5].description,
      features: t.services.list[5].features,
      color: "green",
    },
  ];

  return (
    <section id="services" className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden bg-grid-pattern scroll-mt-20 border-t border-white/5" style={{ background: "linear-gradient(145deg, #08091c 0%, #111830 35%, #0c1426 65%, #070b18 100%)" }}>
      {/* Animated Floating Orbs */}
      <div className="absolute top-[-10%] right-[-12%] w-[700px] h-[700px] rounded-full bg-[#FF6B00]/10 blur-[150px] pointer-events-none animate-float-light z-0" />
      <div className="absolute bottom-[5%] left-[-18%] w-[600px] h-[600px] rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none animate-float-light-delayed z-0" />
      <div className="absolute top-[45%] left-[32%] w-[400px] h-[400px] rounded-full bg-indigo-500/8 blur-[110px] pointer-events-none animate-float-light-slow z-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Title block */}
        <div className="text-center mb-12 md:mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] bg-[#FF6B00]/10 px-4 py-1.5 rounded-full"
          >
            {t.services.badge}
          </motion.span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mt-4 text-white">
            {t.services.title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#FF6B00] to-emerald-500 mx-auto mt-6 origin-center rounded-full" />
        </div>

        {/* Cards Grid: 1 col mobile, 2 col tablet, 3 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 perspective-1000">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
