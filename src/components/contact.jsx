import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, MapPin } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { GithubIcon, LinkedinIcon } from "./Icons";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", whatsapp: "", type: "web", message: "", otherText: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { t } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", whatsapp: "", type: "web", message: "", otherText: "" });
      } else {
        setError(data.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      setError("Server connection failed. Please check if backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 px-6 text-white scroll-mt-20 border-t border-white/5 overflow-hidden" style={{ background: "linear-gradient(155deg, #070b18 0%, #0d1430 45%, #0a1020 80%, #050810 100%)" }}>
      {/* Animated Floating Orbs */}
      <div className="absolute top-[-5%] left-[-10%] w-[550px] h-[550px] rounded-full bg-[#FF6B00]/9 blur-[130px] pointer-events-none animate-float-light z-0" />
      <div className="absolute bottom-[-5%] right-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-500/9 blur-[120px] pointer-events-none animate-float-light-delayed z-0" />
      <div className="absolute top-[50%] left-[45%] w-[350px] h-[350px] rounded-full bg-indigo-600/7 blur-[100px] pointer-events-none animate-float-light-slow z-0" />
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF6B00] bg-[#FF6B00]/10 px-4 py-1.5 rounded-full">
            {t.contact.badge}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight mt-4">
            {t.contact.title}
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#FF6B00] to-green-500 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          
          {/* Left Column: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-5 flex flex-col justify-between gap-8 md:gap-0"
          >
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                {t.contact.subtitle}
              </h3>
              
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed">
                {t.contact.description}
              </p>

              <div className="space-y-4 pt-4">
                <a
                  href="mailto:hello@404currynotfound.com"
                  className="flex items-center gap-3.5 bg-white/5 border border-white/5 p-4 rounded-2xl hover:border-[#FF6B00]/30 hover:bg-[#FF6B00]/5 transition-all duration-350 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FF6B00]/10 text-[#FF6B00] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">{t.contact.mailUs}</div>
                    <div className="text-sm font-semibold text-white group-hover:text-[#FF6B00] transition-colors">
                      hello@404currynotfound.com
                    </div>
                  </div>
                </a>

                {/* Locations Card */}
                <div className="flex items-center gap-3.5 bg-white/5 border border-white/5 p-4 rounded-2xl">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400">{t.contact.hubs}</div>
                    <div className="text-sm font-semibold text-white">
                      {t.contact.hubsDesc}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons Links */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-[#FF6B00]/10 border border-white/5 hover:border-[#FF6B00]/30 text-gray-400 hover:text-[#FF6B00] flex items-center justify-center transition-all duration-300"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-xl bg-white/5 hover:bg-[#FF6B00]/10 border border-white/5 hover:border-[#FF6B00]/30 text-gray-400 hover:text-[#FF6B00] flex items-center justify-center transition-all duration-300"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Project Request Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-7"
          >
            <div className="glass-panel p-5 sm:p-8 rounded-3xl border border-white/5 relative overflow-hidden">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-500 mb-2">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t.contact.successTitle}</h3>
                  <p className="text-gray-400 max-w-sm text-sm">
                    {t.contact.successDesc}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-full border border-white/10 hover:border-[#FF6B00]/40 text-xs font-semibold"
                  >
                    {t.contact.successBtn}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name field */}
                  <div className="flex flex-col">
                    <label className="text-xs font-mono text-gray-400 mb-2 uppercase tracking-wide">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Jean Dupont"
                      className="bg-black/45 border border-white/10 focus:border-[#FF6B00] rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#FF6B00] focus:shadow-[0_0_15px_rgba(255,107,0,0.15)] hover:border-white/20 transition-all duration-200"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col">
                    <label className="text-xs font-mono text-gray-400 mb-2 uppercase tracking-wide">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="e.g. jean@veloquest.be"
                      className="bg-black/45 border border-white/10 focus:border-[#FF6B00] rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#FF6B00] focus:shadow-[0_0_15px_rgba(255,107,0,0.15)] hover:border-white/20 transition-all duration-200"
                    />
                  </div>

                  {/* WhatsApp field */}
                  <div className="flex flex-col">
                    <label className="text-xs font-mono text-gray-400 mb-2 uppercase tracking-wide">
                      {t.contact.form.whatsapp}
                    </label>
                    <input
                      type="tel"
                      value={form.whatsapp}
                      onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="bg-black/45 border border-white/10 focus:border-[#FF6B00] rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#FF6B00] focus:shadow-[0_0_15px_rgba(255,107,0,0.15)] hover:border-white/20 transition-all duration-200"
                    />
                  </div>

                  {/* Project Type Select */}
                  <div className="flex flex-col">
                    <label className="text-xs font-mono text-gray-400 mb-2 uppercase tracking-wide">
                      {t.contact.form.building}
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {["web", "mobile", "others"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setForm({ ...form, type, otherText: type !== "others" ? "" : form.otherText })}
                          className={`py-3.5 rounded-xl border text-sm font-semibold capitalize transition-all duration-300 ${
                            form.type === type
                              ? "bg-[#FF6B00]/10 border-[#FF6B00] text-[#FF6B00]"
                              : "bg-black/45 border-white/10 hover:border-white/20 text-gray-400"
                          }`}
                        >
                          {type === "web" ? t.contact.form.web : type === "mobile" ? t.contact.form.mobile : t.contact.form.others}
                        </button>
                      ))}
                    </div>

                    {/* Others — expandable text field */}
                    <div
                      className="overflow-hidden transition-all duration-500"
                      style={{ maxHeight: form.type === "others" ? "100px" : "0px", opacity: form.type === "others" ? 1 : 0, marginTop: form.type === "others" ? "12px" : "0px" }}
                    >
                      <input
                        type="text"
                        required={form.type === "others"}
                        value={form.otherText}
                        onChange={(e) => setForm({ ...form, otherText: e.target.value })}
                        placeholder={t.contact.form.othersPlaceholder}
                        className="w-full bg-black/45 border border-[#FF6B00]/40 focus:border-[#FF6B00] rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#FF6B00] focus:shadow-[0_0_15px_rgba(255,107,0,0.15)] transition-all duration-200"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col">
                    <label className="text-xs font-mono text-gray-400 mb-2 uppercase tracking-wide">
                      {t.contact.form.details}
                    </label>
                    <textarea
                      required
                      rows="4"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder={t.contact.form.placeholder}
                      className="bg-black/45 border border-white/10 focus:border-[#FF6B00] rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#FF6B00] focus:shadow-[0_0_15px_rgba(255,107,0,0.15)] hover:border-white/20 transition-all duration-200 resize-none"
                    />
                  </div>

                  {error && (
                    <div className="text-red-500 text-xs font-mono bg-red-500/10 border border-red-500/20 px-4 py-2 rounded-xl">
                      {error}
                    </div>
                  )}

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#FF6B00] to-orange-600 hover:shadow-[0_0_20px_rgba(255,107,0,0.3)] text-white font-bold transition-all duration-300 flex items-center justify-center gap-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{t.contact.form.submit}</span>
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;