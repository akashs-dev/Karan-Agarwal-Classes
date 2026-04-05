import { motion } from "framer-motion";
import { Trophy, TrendingUp, Star, Gift } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import toppersImg from "@/assets/toppers-results.png";
import adPostImg from "@/assets/ad-post.jpg";

const toppers = [
  { name: "Mansi Adhal",     score: "96%",   subject: "SSC Board", rank: 1 },
  { name: "Mithila",         score: "95%",   subject: "SSC Board", rank: 2 },
  { name: "Mithila Ubre",    score: "95%",   subject: "SSC Board", rank: 2 },
  { name: "Pratiksha Karpe", score: "94.2%", subject: "SSC Board", rank: 4 },
  { name: "Kushal",          score: "93.4%", subject: "SSC Board", rank: 5 },
  { name: "Gloria",          score: "92.4%", subject: "SSC Board", rank: 6 },
  { name: "Akshita Randive", score: "91.8%", subject: "SSC Board", rank: 7 },
  { name: "Akshata",         score: "91.8%", subject: "SSC Board", rank: 7 },
  { name: "Ritisha",         score: "91.8%", subject: "SSC Board", rank: 7 },
  { name: "Shubham",         score: "91.4%", subject: "SSC Board", rank: 10 },
  { name: "Rajat",           score: "90.6%", subject: "SSC Board", rank: 11 },
  { name: "Lokesh",          score: "90.6%", subject: "SSC Board", rank: 11 },
  { name: "Aman",            score: "90.2%", subject: "SSC Board", rank: 13 },
  { name: "Dhruv C.",        score: "90%",   subject: "SSC Board", rank: 14 },
  { name: "Astha G.",        score: "90%",   subject: "SSC Board", rank: 14 },
];

const highlights = [
  { icon: Trophy,     value: "90%+",    label: "Multiple Scorers Every Year" },
  { icon: TrendingUp, value: "Subject", label: "Toppers Every Year" },
  { icon: Star,       value: "Average", label: "Students Shine Too" },
  { icon: Gift,       value: "🏍️",      label: "Two Wheeler to Topper!" },
];

const rankStyle = (rank: number) => {
  if (rank === 1) return {
    card: "border-yellow-400 bg-gradient-to-br from-yellow-50 to-white shadow-[0_4px_24px_rgba(201,162,39,0.2)]",
    badge: "bg-gradient-to-br from-yellow-400 to-yellow-500 text-navy shadow-[0_2px_8px_rgba(201,162,39,0.5)]",
    icon: "🏆", iconBg: "bg-yellow-100 text-yellow-600",
  }
  if (rank === 2) return {
    card: "border-gray-300 bg-gradient-to-br from-gray-50 to-white shadow-[0_4px_16px_rgba(0,0,0,0.07)]",
    badge: "bg-gradient-to-br from-gray-400 to-gray-500 text-white shadow-md",
    icon: "🥈", iconBg: "bg-gray-100 text-gray-500",
  }
  if (rank <= 4) return {
    card: "border-amber-400 bg-gradient-to-br from-amber-50 to-white shadow-[0_4px_16px_rgba(180,83,9,0.12)]",
    badge: "bg-gradient-to-br from-amber-500 to-amber-600 text-white shadow-md",
    icon: "🥉", iconBg: "bg-amber-100 text-amber-600",
  }
  return {
    card: "border-gray-100 bg-white",
    badge: "bg-gradient-to-br from-[hsl(224,52%,18%)] to-[hsl(224,52%,26%)] text-white",
    icon: "⭐", iconBg: "bg-blue-50 text-blue-500",
  }
}

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.45 } }),
};

const Results = () => (
  <div>
    {/* Hero */}
    <section className="bg-gradient-hero py-24 px-4">
      <div className="container-custom text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/15 border border-yellow-400/25 text-yellow-300 text-xs font-body font-semibold uppercase tracking-widest mb-4">
            🏆 Results
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Our <span className="text-gradient-gold">Results</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
          className="text-white/60 font-body text-lg max-w-2xl mx-auto"
        >
          Consistently delivering top board exam results every year. Subject toppers, 90%+ scorers, and proud scooty winners!
        </motion.p>
      </div>
    </section>

    {/* Highlights */}
    <section className="relative -mt-10 z-20 px-4">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label} custom={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="bg-white rounded-2xl p-6 text-center shadow-[var(--shadow-card)] border border-gray-100"
            >
              <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center mx-auto mb-3">
                <h.icon className="w-5 h-5 text-yellow-500" />
              </div>
              <div className="font-display text-2xl font-bold text-[hsl(224,52%,14%)]">{h.value}</div>
              <div className="text-gray-500 font-body text-xs mt-1">{h.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Scooty Winners — fixed aspect-square stops the gap */}
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-8">
          <span className="section-label">🏍️ Scooty Winners</span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-1">
            A Two Wheeler for the Topper — Every Year!
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)]"
        >
          <LazyImage
            src={adPostImg}
            alt="Scooty winners – KAC toppers"
            aspectClass="aspect-square"
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>

    {/* Top Performers */}
    <section className="section-padding pt-0">
      <div className="container-custom">
        <div className="text-center mb-10">
          <span className="section-label">🎓 Top Performers</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-1">Our Top Performers</h2>
          <p className="text-gray-500 font-body mt-2 max-w-lg mx-auto text-sm">
            Real students. Real results. Every name here worked hard to earn it.
          </p>
        </div>

        {/* Toppers photo collage — fixed aspect-square */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)] mb-12 border border-gray-100"
        >
          <LazyImage
            src={toppersImg}
            alt="KAC top performers"
            aspectClass="aspect-square"
            className="object-contain bg-white"
          />
        </motion.div>

        {/* Topper cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {toppers.map((t, i) => {
            const style = rankStyle(t.rank)
            return (
              <motion.div
                key={t.name} custom={i}
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className={`rounded-2xl p-4 border card-hover flex items-center gap-4 ${style.card}`}
              >
                {/* Score badge */}
                <div className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center shrink-0 ${style.badge}`}>
                  <span className="text-base leading-none">{style.icon}</span>
                  <span className="font-display font-bold text-sm leading-tight mt-0.5">{t.score}</span>
                </div>
                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-bold text-foreground text-base truncate">{t.name}</h3>
                  <p className="text-xs text-gray-400 font-body mt-0.5">{t.subject}</p>
                </div>
                {/* Rank */}
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-xs font-bold font-display ${style.iconBg}`}>
                  #{t.rank}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  </div>
);

export default Results;
