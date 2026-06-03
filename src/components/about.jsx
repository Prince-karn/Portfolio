import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Server, Users, Award, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Counter = ({ value, duration = 1.5 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    const numericString = value.replace(/[^0-9.]/g, "");
    const suffix = value.replace(/[0-9.]/g, "");
    const targetNumber = parseFloat(numericString) || 0;
    const isFloat = value.includes(".");

    let start = 0;
    const end = targetNumber;
    if (start === end) {
      setCount(end);
      return;
    }

    const totalMiliseconds = duration * 1000;
    const intervalTime = 25; // ms
    const totalSteps = totalMiliseconds / intervalTime;
    const stepIncrement = (end - start) / totalSteps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= totalSteps) {
        setCount(end);
        clearInterval(timer);
      } else {
        start += stepIncrement;
        setCount(isFloat ? parseFloat(start.toFixed(1)) : Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const suffix = value.replace(/[0-9.]/g, "");
  return <span ref={ref}>{count}{suffix}</span>;
};

const About = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Server, value: "50+", label: t.about.stats.deployed },
    { icon: Users, value: "15+", label: t.about.stats.clients },
    { icon: Award, value: "100%", label: t.about.stats.sla },
    { icon: ShieldCheck, value: "4.9★", label: t.about.stats.satisfaction },
  ];

  return (
    <section id="about" className="relative py-20 sm:py-28 px-4 sm:px-6 text-white scroll-mt-20 border-t border-white/5 overflow-hidden" style={{ background: "linear-gradient(155deg, #07091a 0%, #0e1530 40%, #0a1226 70%, #060a16 100%)" }}>
      {/* Animated Floating Orbs */}
      <div className="absolute top-[-5%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#FF6B00]/9 blur-[130px] pointer-events-none animate-float-light z-0" />
      <div className="absolute bottom-[-5%] left-[-10%] w-[450px] h-[450px] rounded-full bg-indigo-500/8 blur-[110px] pointer-events-none animate-float-light-delayed z-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
          
          {/* Left Column: Heading and Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-7 space-y-6"
          >
            <div className="inline-block">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] bg-[#FF6B00]/10 px-4 py-1.5 rounded-full">
                {t.about.badge}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight">
              {t.about.title} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B00] to-orange-500">
                {t.about.titleAccent}
              </span>
            </h2>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-light">
              {t.about.p1}
            </p>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
              {t.about.p2}
            </p>

            <div className="h-[1px] w-full bg-white/10 my-4" />

            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-500 animate-ping" />
              <span className="text-xs text-gray-300 font-mono">
                {t.about.availability}
              </span>
            </div>
          </motion.div>

          {/* Right Column: Statistics Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:col-span-5 grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-[#FF6B00]/30 hover:shadow-[0_0_20px_rgba(255,107,0,0.1)] transition-colors duration-300 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-[#FF6B00]/10 flex items-center justify-center text-gray-400 group-hover:text-[#FF6B00] transition-colors duration-300 mb-6">
                    <Icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold text-white group-hover:text-[#FF6B00] transition-colors duration-300 tracking-tight font-mono">
                      <Counter value={stat.value} />
                    </div>
                    <div className="text-xs text-gray-400 font-medium mt-1">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;