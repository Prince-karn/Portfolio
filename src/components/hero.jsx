import { useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Terminal, Send, ArrowDown } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import Logo from "./Logo";

const Hero = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  // 3D Tilt motion tracking for Logo card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  const handleMouseMove = (event) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
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

  // Canvas particle network background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let particles = [];
    const maxParticles = window.innerWidth < 768 ? 40 : 80;
    const connectionDistance = 110;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
        // Orange or green tinted particles
        this.color = Math.random() > 0.35 ? "rgba(255, 107, 0, 0.4)" : "rgba(34, 197, 94, 0.4)";
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Initialize
    for (let i = 0; i < maxParticles; i++) {
      particles.push(new Particle());
    }

    // Connect dots
    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Gradient connection line
            const alpha = (1 - dist / connectionDistance) * 0.15;
            ctx.strokeStyle = `rgba(255, 107, 0, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Canvas background slight glow center
      const grad = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        10,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width * 0.7
      );
      grad.addColorStop(0, "#151c2c");
      grad.addColorStop(1, "#0b0f19");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 overflow-hidden bg-[#0b0f19]"
    >
      {/* Background Interactive Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none" />

      {/* Decorative Orbs */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-[#FF6B00]/10 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full mt-16 sm:mt-20 md:mt-24">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-5 text-gray-300 text-xs font-mono shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
          <span>{t.hero.badge}</span>
        </motion.div>

        {/* 3D Interactive Tilt Logo */}
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
            perspective: 1000,
          }}
          className="cursor-grab active:cursor-grabbing mb-4 select-none"
        >
          <Logo size="medium" animated={true} className="pointer-events-none" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-gray-400 text-xs md:text-base font-mono tracking-wide max-w-xl leading-relaxed mt-1"
        >
          {t.hero.headline}
        </motion.h1>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full px-4 sm:px-0"
        >
          <a href="#projects" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-[#FF6B00] to-orange-600 font-bold hover:shadow-[0_0_25px_rgba(255,107,0,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm text-white">
              <Terminal className="w-4 h-4" />
              <span>{t.hero.ctaProjects}</span>
            </button>
          </a>

          <a href="#contact" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-7 py-3 rounded-full border border-white/10 hover:border-[#FF6B00]/40 bg-white/5 hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm text-gray-200">
              <Send className="w-4 h-4 text-[#FF6B00]" />
              <span>{t.hero.ctaQuote}</span>
            </button>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, delay: 1 }}
          className="mt-8 text-gray-500 flex flex-col items-center gap-1 cursor-pointer"
        >
          <a href="#about" className="flex flex-col items-center">
            <span className="text-[9px] uppercase font-mono tracking-widest">{t.hero.scroll}</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce mt-1 text-[#FF6B00]" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;