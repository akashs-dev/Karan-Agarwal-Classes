import { motion } from "framer-motion";
import { CheckCircle, Award } from "lucide-react";
import LazyImage from "@/components/LazyImage";
import facultyImg from "@/assets/karan-desk.jpg";
import arpitaImg from "@/assets/aparna-standing.jpg";
import sonuImg from "@/assets/faculty-sonu.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const usps = [
  "Experienced & Dedicated Faculty",
  "Personal Attention to Every Student",
  "Regular Tests & Performance Analysis by Monthly Report Card",
  "One Day Before Exam Revision Sessions Till Last Paper",
  "Printed Notes & Study Material",
  "Doubt Solving Sessions",
  "Proven Track Record of Results",
  "A Two Wheeler Gifted to the Topper Every Year! 🏍️",
  "YouTube Revision Lectures",
  "WhatsApp Doubt Support",
  "AC Classrooms with E-Learning on TV Screen",
  "Attendance App for Parents",
  "Uniform and Bags Provided",
  "Personality Development & Life Motivation Along with Academics",
  "Special Timetable & Guidance by Karan Sir Himself",
  "Different Workbooks for Basics of Maths & Languages",
];

const faculty = [
  {
    name: "Karan Agarwal",
    role: "Founder & Science Faculty",
    subject: "Physics & Chemistry (Science)",
    qualification: "M.Tech (Biotechnology)",
    experience: "10+ Years",
    img: facultyImg,
    description: "Merit Holder in State Board Exam — 21st in Pune Division. Completed Masters in Biotechnology with expertise in Physics and Chemistry. Can teach all 3 languages — English, Hindi and Marathi. Being an early morning person, he is a fitness freak who follows a strict and healthy lifestyle.",
    color: "from-blue-500/10 to-blue-500/5",
    badge: "bg-blue-50 text-blue-700",
  },
  {
    name: "Aparna Agarwal",
    role: "Co-Teacher & Maths Faculty",
    subject: "Algebra & Geometry (Maths)",
    qualification: "M.Sc (Computer Science)",
    experience: "10+ Years",
    img: arpitaImg,
    description: "Completed Masters in Computer Science with First Rank in Degree College. She is the ONE STOP SOLUTION for ALL MATHS PROBLEMS. Her book 'MATHS MADE EASY' has helped many students conquer the fear of maths. Known for her warm and friendly behaviour with students.",
    color: "from-purple-500/10 to-purple-500/5",
    badge: "bg-purple-50 text-purple-700",
  },
  {
    name: "Sonu Bhure",
    role: "Language Faculty",
    subject: "Hindi & Marathi",
    qualification: "Master of Social Work",
    experience: "6+ Years",
    img: sonuImg,
    description: "Dedicated language teacher bringing clarity and confidence to students in Hindi and Marathi with engaging teaching methods and interactive sessions.",
    color: "from-green-500/10 to-green-500/5",
    badge: "bg-green-50 text-green-700",
  },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="bg-gradient-hero py-24 px-4">
      <div className="container-custom text-center">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/15 border border-yellow-400/25 text-yellow-300 text-xs font-body font-semibold uppercase tracking-widest mb-4">
            🏫 About Us
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
        >
          About <span className="text-gradient-gold">Karan Agarwal Classes</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-white/60 font-body text-lg max-w-2xl mx-auto"
        >
          No.1 Coaching Institute for Std 8th, 9th & 10th (SSC & CBSE) — Est. 2018
        </motion.p>
      </div>
    </section>

    {/* About Us */}
    <section className="section-padding">
      <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/8 to-transparent rounded-3xl -z-10" />
          <LazyImage src={facultyImg} alt="Karan Agarwal" aspectClass="aspect-square max-w-md mx-auto" className="rounded-2xl shadow-[var(--shadow-elevated)]" />
          <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-navy rounded-2xl px-4 py-3 shadow-lg hidden md:block">
            <div className="font-display font-bold text-lg leading-none">Est. 2018</div>
            <div className="text-xs font-body font-semibold mt-0.5">Since 6+ Years</div>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <span className="section-label">🧑‍🏫 Our Story</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-1 mb-5 leading-tight">
            Building Strong Concepts.<br />Delivering Top Results.
          </h2>
          <div className="space-y-4 text-gray-600 font-body leading-relaxed">
            <p>
              Karan Agarwal Classes is a trusted name in school education, dedicated to shaping the academic success of students from Std 8th, 9th, and 10th (SSC & CBSE).
            </p>
            <p>
              With expert guidance from experienced faculty, we focus on concept clarity, regular practice, and exam-oriented preparation. Our goal is not just to help students score high marks, but to build a strong academic foundation for their future.
            </p>
            <p>
              With 3 branches across Pune — Tingrenagar, Yerwada, and Dhanori — we make quality education accessible to students across the city.
            </p>
            <div className="flex items-start gap-3 bg-yellow-50 rounded-xl p-4 border border-yellow-100">
              <Award className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
              <p className="text-sm text-gray-700">
                <strong>Directors:</strong> Shri Ravi Agarwal, Smt Anita Agarwal, Shri Karan Agarwal & Aparna Agarwal
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Faculty */}
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-label">🧑‍🏫 Our Team</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-1">Expert Faculty</h2>
          <p className="text-gray-500 font-body mt-3 max-w-lg mx-auto">Experienced educators who are passionate about student success.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((f, i) => (
            <motion.div
              key={f.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`bg-gradient-to-br ${f.color} bg-white rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-gray-100 card-hover`}
            >
              <LazyImage src={f.img} alt={f.name} aspectClass="aspect-[4/3]" className="object-top" />
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">{f.name}</h3>
                    <p className="text-yellow-600 font-body font-semibold text-sm">{f.role}</p>
                  </div>
                </div>
                <div className="space-y-1 mb-3">
                  <span className={`inline-block text-xs px-2.5 py-1 rounded-full font-body font-medium ${f.badge}`}>
                    📖 {f.subject}
                  </span>
                </div>
                <div className="flex gap-3 mb-3 text-xs text-gray-500 font-body">
                  <span>🎓 {f.qualification}</span>
                  <span>⏱️ {f.experience}</span>
                </div>
                <p className="text-gray-600 font-body text-sm leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="section-label">⭐ Why Choose Us</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-1">What Makes Us Special</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {usps.map((usp, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-[var(--shadow-soft)] border border-gray-100 card-hover"
            >
              <CheckCircle className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
              <span className="text-gray-700 font-body text-sm leading-relaxed">{usp}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-gradient-navy">
      <div className="container-custom max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white/6 rounded-2xl p-8 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-yellow-400/15 flex items-center justify-center mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-white/70 font-body leading-relaxed">
              To provide high-quality, result-oriented education that empowers students of Std 8th, 9th & 10th (SSC & CBSE) to achieve academic excellence with confidence — ensuring every student understands, not just memorizes.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white/6 rounded-2xl p-8 border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-yellow-400/15 flex items-center justify-center mb-4">
              <span className="text-2xl">🔭</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-white/70 font-body leading-relaxed mb-4">
              "From Basics to Board Toppers" — To become the most trusted and result-driven coaching institute for Std 8th, 9th & 10th, known for consistently producing excellent academic results.
            </p>
            <p className="text-yellow-400 font-display font-bold text-lg">
              "Education Brings Freedom"
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  </div>
);

export default About;
