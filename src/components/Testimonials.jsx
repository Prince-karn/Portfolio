import { motion } from "framer-motion";
import { Star, Quote, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Testimonials = () => {
  const { t } = useLanguage();

  const row1Testimonials = [
    {
      name: "Arthur Dubois",
      role: "CTO, VeloQuest",
      location: "Brussels, Belgium",
      flag: "🇧🇪",
      review: t.testimonials.reviews[0],
      rating: 5,
    },
    {
      name: "Karan Sharma",
      role: "Founder, BharatBazaar",
      location: "New Delhi, India",
      flag: "🇮🇳",
      review: t.testimonials.reviews[1],
      rating: 5,
    },
    {
      name: "Emma Peeters",
      role: "Marketing Director, ShopFlow",
      location: "Antwerp, Belgium",
      flag: "🇧🇪",
      review: t.testimonials.reviews[2],
      rating: 5,
    },
    {
      name: "Dr. Rajesh Patel",
      role: "COO, Swastha Healthcare",
      location: "Bengaluru, India",
      flag: "🇮🇳",
      review: t.testimonials.reviews[3],
      rating: 5,
    },
  ];

  const row2Testimonials = [
    {
      name: "Lucas Mertens",
      role: "Tech Lead, ImmoHub",
      location: "Ghent, Belgium",
      flag: "🇧🇪",
      review: t.testimonials.reviews[4],
      rating: 5,
    },
    {
      name: "Priya Nair",
      role: "Product Manager, FinGrow",
      location: "Mumbai, India",
      flag: "🇮🇳",
      review: t.testimonials.reviews[5],
      rating: 5,
    },
    {
      name: "Sophie Laurent",
      role: "Director, ArtHouse",
      location: "Liège, Belgium",
      flag: "🇧🇪",
      review: t.testimonials.reviews[6],
      rating: 5,
    },
    {
      name: "Amit Verma",
      role: "CTO, AgroTech Solutions",
      location: "Pune, India",
      flag: "🇮🇳",
      review: t.testimonials.reviews[7],
      rating: 5,
    },
  ];

  // Helper to render star ratings
  const renderStars = (rating) => {
    return Array.from({ length: rating }).map((_, idx) => (
      <Star key={idx} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
    ));
  };

  const TestimonialCard = ({ item }) => (
    <div className="glass-panel-orange p-5 md:p-6 w-[280px] sm:w-[340px] md:w-[400px] rounded-3xl mx-3 md:mx-4 transition-all duration-300 hover:scale-[1.03] hover:border-[#FF6B00]/40 flex flex-col justify-between shrink-0 group">
      <div>
        <div className="flex justify-between items-start mb-4">
          <div className="flex gap-1">
            {renderStars(item.rating)}
          </div>
          <Quote className="w-8 h-8 text-[#FF6B00]/15 group-hover:text-[#FF6B00]/30 transition-colors duration-300" />
        </div>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed italic mb-6">
          "{item.review}"
        </p>
      </div>

      <div className="flex justify-between items-center border-t border-white/5 pt-4 mt-auto">
        <div>
          <h4 className="font-bold text-white group-hover:text-[#FF6B00] transition-colors duration-300 text-sm md:text-base">
            {item.name}
          </h4>
          <p className="text-xs text-gray-400">
            {item.role}
          </p>
        </div>
        <div className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 text-[11px] text-gray-300">
          <MapPin className="w-3 h-3 text-[#FF6B00]" />
          <span>{item.location}</span>
          <span className="ml-0.5">{item.flag}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 px-4 overflow-hidden border-t border-b border-white/5 scroll-mt-20" style={{ background: "linear-gradient(150deg, #060a18 0%, #0e1530 40%, #0a1226 70%, #070b1a 100%)" }}>
      {/* Animated Floating Orbs */}
      <div className="absolute top-[-8%] right-[-15%] w-[650px] h-[650px] rounded-full bg-[#FF6B00]/10 blur-[140px] pointer-events-none animate-float-light z-0" />
      <div className="absolute bottom-[-5%] left-[-15%] w-[600px] h-[600px] rounded-full bg-indigo-500/10 blur-[130px] pointer-events-none animate-float-light-delayed z-0" />
      <div className="absolute top-[50%] left-[35%] w-[400px] h-[400px] rounded-full bg-emerald-500/7 blur-[110px] pointer-events-none animate-float-light-slow z-0" />

      <div className="max-w-6xl mx-auto text-center mb-16 px-4 relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] bg-[#FF6B00]/10 px-4 py-1.5 rounded-full"
        >
          {t.testimonials.badge}
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mt-4 text-white"
        >
          {t.testimonials.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-400 max-w-xl mx-auto mt-4 text-sm md:text-base"
        >
          {t.testimonials.description}
        </motion.p>
      </div>

      {/* Testimonials Infinite Marquees container */}
      <div className="flex flex-col gap-8 w-full max-w-[1920px] mx-auto py-4 hover-pause relative z-10">
        {/* Row 1 - Scroll Left */}
        <div className="flex overflow-hidden w-full relative mask-gradient">
          <div className="animate-marquee flex">
            {/* Display list twice for seamless infinite scrolling */}
            {row1Testimonials.map((tItem, idx) => (
              <TestimonialCard key={`r1-${idx}`} item={tItem} />
            ))}
            {row1Testimonials.map((tItem, idx) => (
              <TestimonialCard key={`r1-dup-${idx}`} item={tItem} />
            ))}
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="flex overflow-hidden w-full relative mask-gradient">
          <div className="animate-marquee-reverse flex">
            {/* Display list twice for seamless infinite scrolling */}
            {row2Testimonials.map((tItem, idx) => (
              <TestimonialCard key={`r2-${idx}`} item={tItem} />
            ))}
            {row2Testimonials.map((tItem, idx) => (
              <TestimonialCard key={`r2-dup-${idx}`} item={tItem} />
            ))}
          </div>
        </div>
      </div>

      {/* Styled Gradient masks to smooth out marquee edges */}
      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
