import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Users, Trophy, BookOpen, ArrowRight, Star, MapPin, Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import InquiryForm from "@/components/InquiryForm";
import LazyImage from "@/components/LazyImage";
import heroImg from "@/assets/classroom-full.jpg";
import karanImg from "@/assets/karan-desk.jpg";
import heroCircleImg from "@/assets/karan-students.jpg";

const stats = [
  { icon: Users, value: "5000+", label: "Students Taught" },
  { icon: Trophy, value: "Since 2018", label: "Trusted Institute" },
  { icon: GraduationCap, value: "10+", label: "Years Experience" },
  { icon: BookOpen, value: "3", label: "Branches in Pune" },
];

const courses = [
  { title: "Std 8th (SSC/CBSE)", desc: "Strong foundation building with concept-based teaching for all subjects", icon: "📘", color: "from-blue-500/10 to-blue-500/5" },
  { title: "Std 9th (SSC/CBSE)", desc: "Advanced concept clarity with regular testing & revision", icon: "📗", color: "from-green-500/10 to-green-500/5" },
  { title: "Std 10th (SSC/CBSE)", desc: "Complete board preparation with crash courses & Maha Marathon Lectures", icon: "📕", color: "from-red-500/10 to-red-500/5" },
  { title: "Mathematics", desc: "Algebra & Geometry made easy with unique tricks by Aparna Mam", icon: "📐", color: "from-purple-500/10 to-purple-500/5" },
  { title: "Science", desc: "Physics & Chemistry concepts simplified by Karan Sir", icon: "🔬", color: "from-cyan-500/10 to-cyan-500/5" },
  { title: "Languages", desc: "English, Hindi & Marathi coaching for complete preparation", icon: "📝", color: "from-orange-500/10 to-orange-500/5" },
];

const usps = [
  "Experienced & Dedicated Faculty",
  "Personal Attention to Every Student",
  "Regular Tests & Monthly Report Card",
  "One Day Before Exam Revision Sessions",
  "Printed Notes & Study Material",
  "Doubt Solving Sessions",
  "Proven Track Record of Results",
  "A Two Wheeler Gifted to the Topper Every Year! 🏍️",
];

const features = [
  { icon: "📖", text: "Complete Guidance" },
  { icon: "📝", text: "Weekly Tests" },
  { icon: "📊", text: "Performance Tracking" },
  { icon: "🎥", text: "YouTube Revision Lectures" },
  { icon: "📱", text: "WhatsApp Doubt Support" },
  { icon: "📚", text: "Study Material Provided" },
];

const testimonials = [
  { name: "Priya Sharma", text: "Karan Sir made Physics and Chemistry so easy to understand! Scored excellent marks in boards.", rating: 5, course: "10th SSC" },
  { name: "Rahul Patil", text: "Best coaching classes in Pune. The faculty is extremely supportive and knowledgeable.", rating: 5, course: "9th CBSE" },
  { name: "Sneha Joshi", text: "Aparna Mam's maths tricks are amazing! My fear of maths is completely gone.", rating: 5, course: "10th SSC" },
  { name: "Amit Deshmukh", text: "The personal attention and doubt solving sessions make KAC stand apart from others.", rating: 5, course: "8th SSC" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Index = () => {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative min-h-[88vh] flex items-center bg-gradient-hero overflow-hidden">
        {/* Background image — more visible on right side */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="KAC classroom"
            className="w-full h-full object-cover opacity-70"
            width={1920} height={1080}
            loading="eager"
          />
          {/* light navy tint on left only — keeps text readable, students fully visible on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-[hsl(224,55%,10%)]/90 via-[hsl(224,52%,14%)]/50 to-[hsl(224,52%,14%)]/10" />
        </div>

        {/* ── Right-side circular image frame ── */}
        <div className="absolute right-[-40px] lg:right-[60px] top-1/2 -translate-y-1/2 hidden lg:block z-10">
          {/* Outer glow ring */}
          <div className="absolute inset-[-12px] rounded-full border-2 border-yellow-400/20 animate-[spin_30s_linear_infinite]" />
          {/* Inner border ring */}
          <div className="absolute inset-[-4px] rounded-full border border-yellow-400/30" />
          {/* Circular clipped image */}
          <div className="w-[340px] h-[340px] rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_60px_rgba(201,162,39,0.15)]">
            <img
              src={heroCircleImg}
              alt="Karan Sir with students"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>
          {/* Student count badge */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-yellow-500 text-navy rounded-full px-5 py-1.5 shadow-lg whitespace-nowrap">
            <span className="font-display font-bold text-sm">5000+ Students</span>
          </div>
        </div>

        <div className="container-custom relative z-10 px-4 py-24 lg:py-32">
          <div className="max-w-xl lg:max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/15 border border-yellow-400/30 text-yellow-300 text-sm font-body font-semibold mb-6 backdrop-blur-sm">
                🏆 No.1 Coaching Institute — SSC & CBSE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-5"
            >
              Building Strong{" "}
              <br className="hidden sm:block" />
              Concepts.{" "}
              <span className="text-gradient-gold">Delivering</span>
              <br />
              <span className="text-gradient-gold">Top Results.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="text-white/70 text-base md:text-lg font-body mb-2 flex items-center gap-2"
            >
              <MapPin className="w-4 h-4 text-yellow-400 shrink-0" />
              Tingrenagar · Yerwada · Dhanori, Pune
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="text-white/60 text-sm md:text-base font-body mb-8 leading-relaxed"
            >
              Expert coaching for Std 8th, 9th &amp; 10th. From Basics to Board Toppers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5 }}
              className="flex flex-wrap gap-3"
            >
              <Link to="/contact">
                <Button className="bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-600 text-navy font-display font-bold text-base px-8 py-6 rounded-xl shadow-[0_4px_24px_rgba(201,162,39,0.45)] hover:shadow-[0_6px_32px_rgba(201,162,39,0.55)] transition-all duration-200">
                  Enquire Now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a
                href="tel:+917758077686"
                className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-body font-semibold text-base px-8 py-[15px] rounded-xl backdrop-blur-sm transition-all duration-200"
              >
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                7758077686
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="relative -mt-14 z-20 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-5 text-center shadow-[var(--shadow-card)] card-hover border border-gray-100"
              >
                <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center mx-auto mb-2">
                  <stat.icon className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="font-display text-2xl md:text-3xl font-bold text-[hsl(224,52%,14%)]">{stat.value}</div>
                <div className="text-gray-500 text-sm font-body mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About preview ── */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-yellow-400/10 to-transparent rounded-3xl -z-10" />
            <LazyImage
              src={karanImg}
              alt="Karan Agarwal – Founder"
              aspectClass="aspect-square max-w-md mx-auto"
              className="rounded-2xl shadow-[var(--shadow-elevated)]"
            />
            {/* floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-yellow-500 text-navy rounded-2xl px-4 py-3 shadow-lg hidden md:block">
              <div className="font-display font-bold text-lg leading-none">10+</div>
              <div className="text-xs font-body font-semibold mt-0.5">Years Exp.</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-label">🧑‍🏫 About Us</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-1 mb-5 leading-tight">
              Who We Are
            </h2>
            <div className="space-y-4 text-gray-600 font-body leading-relaxed">
              <p>
                Karan Agarwal Classes is a trusted name in school education, dedicated to shaping the academic success of students from Std 8th, 9th, and 10th (SSC &amp; CBSE).
              </p>
              <p>
                With expert guidance from experienced faculty, we focus on concept clarity, regular practice, and exam-oriented preparation — building a strong foundation for your child's future.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {["Expert Faculty", "Personal Attention", "Proven Results", "3 Branches"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm font-body text-gray-700">
                  <CheckCircle className="w-4 h-4 text-yellow-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
            <Link to="/about" className="inline-block mt-7">
              <Button className="bg-primary text-white hover:bg-navy-light font-body font-semibold rounded-xl px-6 py-5">
                Learn More About Us <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="section-padding bg-gradient-navy">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/15 border border-yellow-400/25 text-yellow-300 text-xs font-body font-semibold uppercase tracking-widest mb-3">
              ⭐ Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white">What Makes Us Different</h2>
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
                className="flex items-start gap-3 bg-white/6 hover:bg-white/10 transition-colors rounded-xl p-5 border border-white/10"
              >
                <CheckCircle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
                <span className="text-white/85 font-body text-sm leading-relaxed">{usp}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Courses ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">📚 Our Programs</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-1">Courses Offered</h2>
            <p className="text-gray-500 font-body mt-3 max-w-xl mx-auto">Comprehensive coaching for every subject across SSC &amp; CBSE boards.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, i) => (
              <motion.div
                key={course.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className={`bg-gradient-to-br ${course.color} bg-white rounded-2xl p-6 shadow-[var(--shadow-soft)] card-hover border border-gray-100`}
              >
                <span className="text-4xl mb-4 block">{course.icon}</span>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{course.title}</h3>
                <p className="text-gray-500 font-body text-sm leading-relaxed">{course.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/courses">
              <Button variant="outline" className="font-body font-semibold border-primary text-primary hover:bg-primary hover:text-white rounded-xl px-6 py-5">
                View All Courses <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Features strip ── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">🎯 Our Features</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-1">Everything Your Child Needs</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {features.map((f, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-5 text-center shadow-[var(--shadow-soft)] border border-gray-100 card-hover"
              >
                <span className="text-3xl block mb-2">{f.icon}</span>
                <span className="text-foreground font-body text-xs font-semibold leading-tight block">{f.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Results highlight ── */}
      <section className="section-padding bg-gradient-navy">
        <div className="container-custom text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/15 border border-yellow-400/25 text-yellow-300 text-xs font-body font-semibold uppercase tracking-widest mb-3">
            🏆 Our Results
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-1 mb-10">Our Students Shine Every Year</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {[
              { emoji: "🎉", title: "90%+ Scorers", sub: "Multiple students every year" },
              { emoji: "🥇", title: "Subject Toppers", sub: "Every year consistently" },
              { emoji: "📈", title: "Avg Students Shine", sub: "Significant improvement" },
              { emoji: "🏍️", title: "Two Wheeler Gift", sub: "To the topper every year!" },
            ].map((item) => (
              <div key={item.title} className="bg-white/8 hover:bg-white/12 transition-colors rounded-2xl p-6 border border-white/10">
                <div className="text-4xl mb-3">{item.emoji}</div>
                <div className="font-display text-lg font-bold text-white">{item.title}</div>
                <p className="text-white/60 font-body text-sm mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
          <Link to="/results">
            <Button className="bg-yellow-500 hover:bg-yellow-400 text-navy font-display font-bold rounded-xl px-8 py-5 shadow-[0_4px_20px_rgba(201,162,39,0.35)]">
              View Detailed Results <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">💬 Testimonials</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-1">What Our Students Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-7 shadow-[var(--shadow-soft)] border border-gray-100 card-hover"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 font-body mb-5 italic leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center font-display font-bold text-yellow-600 text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-body font-semibold text-foreground text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400 font-body">{t.course}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Branches ── */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="section-label">📍 Locations</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-1">Visit Our 3 Branches</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Tingrenagar Branch", address: "Above Hotel RK Pure Veg, Opp Navrang Plaza, Near Bharat Sawant Petrol Pump", phone: "7758077686" },
              { name: "Yerwada Branch", address: "P.S. Plaza Building, Behind Muslim Bank, Mohanwadi, Yerawada", phone: "7758067686" },
              { name: "Dhanori Branch", address: "Triaa Vasantam City Center, 401 & 401A, Lohgaon Rd, Dhanori", phone: "7758077686" },
            ].map((branch, i) => (
              <motion.div
                key={branch.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-7 shadow-[var(--shadow-card)] border border-gray-100 card-hover"
              >
                <div className="w-10 h-10 rounded-xl bg-yellow-50 flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-yellow-500" />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">{branch.name}</h3>
                <p className="text-gray-500 font-body text-sm mb-3 leading-relaxed">{branch.address}</p>
                <a href={`tel:+91${branch.phone}`} className="flex items-center gap-2 text-sm font-body text-gray-600 hover:text-yellow-500 transition-colors mb-5">
                  <Phone className="w-4 h-4 text-yellow-500" /> {branch.phone}
                </a>
                <Link to="/branches">
                  <Button variant="outline" className="w-full border-yellow-400/50 text-yellow-600 hover:bg-yellow-50 font-body text-sm rounded-xl">
                    View Details
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA + Inquiry Form ── */}
      <section className="section-padding bg-gradient-navy">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-400/15 border border-yellow-400/25 text-yellow-300 text-xs font-body font-semibold uppercase tracking-widest mb-4">
                Get Started
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to Begin Your Journey?
              </h2>
              <p className="text-white/65 font-body leading-relaxed mb-7">
                Fill in the inquiry form and our team will get back to you within 24 hours.
              </p>
              <div className="space-y-4">
                <a href="tel:+917758077686" className="flex items-center gap-3 text-white/80 font-body hover:text-yellow-400 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-yellow-400/15 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-yellow-400" />
                  </div>
                  7758077686 / 7758067686
                </a>
                <a href="https://wa.me/917758077686" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 font-body hover:text-green-400 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-green-500/15 flex items-center justify-center">
                    <span className="text-green-400 text-sm">💬</span>
                  </div>
                  Chat on WhatsApp
                </a>
                <a href="https://instagram.com/karanagarwalclasses" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 font-body hover:text-pink-400 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-pink-500/15 flex items-center justify-center">
                    <span className="text-pink-400 text-sm">📸</span>
                  </div>
                  @karanagarwalclasses
                </a>
                <a href="https://youtube.com/@KaranAgarwalClasses" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white/80 font-body hover:text-red-400 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-red-500/15 flex items-center justify-center">
                    <span className="text-red-400 text-sm">▶️</span>
                  </div>
                  Karan Agarwal Classes on YouTube
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-[var(--shadow-elevated)]">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">Admission Inquiry</h3>
              <InquiryForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
