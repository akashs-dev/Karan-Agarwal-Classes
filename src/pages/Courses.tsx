import { motion } from "framer-motion";
import { Clock, Users, BookOpen, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Std 8th (SSC & CBSE)",
    subjects: ["Maths", "Science", "English", "Hindi", "Marathi", "SST"],
    duration: "1 Year",
    batch: "Morning & Evening",
    features: ["Strong foundation building", "All subjects covered", "Concept-based teaching", "Regular weekly tests"],
  },
  {
    title: "Std 9th (SSC & CBSE)",
    subjects: ["Maths", "Science", "English", "Hindi", "Marathi", "SST"],
    duration: "1 Year",
    batch: "Morning & Evening",
    features: ["Advanced concept clarity", "Regular testing & revision", "Board preparation starts", "Printed notes & workbooks"],
  },
  {
    title: "Std 10th (SSC & CBSE)",
    subjects: ["Maths", "Science", "English", "Hindi", "Marathi", "SST"],
    duration: "1 Year",
    batch: "Morning & Evening",
    features: ["Complete board preparation", "Important questions & papers", "Crash courses & revision lectures", "One day before exam strategy sessions", "Maha Marathon Lectures"],
  },
  {
    title: "Mathematics Coaching",
    subjects: ["Algebra", "Geometry", "Problem Solving", "Tricks & Shortcuts"],
    duration: "Flexible",
    batch: "Dedicated Batches",
    features: ["Taught by Aparna Mam", "Unique tricks make maths easy", "'Maths Made Easy' approach", "Speed techniques & formula mastery"],
  },
  {
    title: "Science Coaching",
    subjects: ["Physics", "Chemistry", "Biology", "Practicals"],
    duration: "Flexible",
    batch: "Dedicated Batches",
    features: ["Taught by Karan Sir", "Concept-based learning", "Real-life examples", "Exam-focused preparation"],
  },
  {
    title: "Language Coaching",
    subjects: ["English", "Hindi", "Marathi"],
    duration: "Flexible",
    batch: "Integrated",
    features: ["Taught by Sonu Sir", "Grammar & comprehension mastery", "Answer writing skills", "Confidence building"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
};

const Courses = () => (
  <div>
    <section className="bg-gradient-hero py-20 px-4">
      <div className="container-custom text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          Our <span className="text-gradient-gold">Courses</span>
        </motion.h1>
        <p className="text-primary-foreground/70 font-body text-lg max-w-2xl mx-auto">
          Comprehensive coaching for Std 8th, 9th & 10th — SSC & CBSE boards. Building Strong Concepts. Delivering Top Results.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-10">
          <div className="inline-flex gap-3 flex-wrap justify-center">
            <span className="px-4 py-2 rounded-full bg-secondary/20 text-secondary font-body text-sm font-semibold">📋 Boards: SSC & CBSE</span>
            <span className="px-4 py-2 rounded-full bg-secondary/20 text-secondary font-body text-sm font-semibold">🗣️ Medium: English / Semi-English</span>
            <span className="px-4 py-2 rounded-full bg-secondary/20 text-secondary font-body text-sm font-semibold">🕐 Batches: Morning & Evening</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={course.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-card rounded-xl shadow-[var(--shadow-card)] border border-border overflow-hidden card-hover"
            >
              <div className="bg-gradient-navy p-6">
                <h3 className="font-display text-2xl font-bold text-primary-foreground">{course.title}</h3>
                <div className="flex gap-4 mt-3 text-primary-foreground/70 font-body text-sm">
                  <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-secondary" /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Users className="w-4 h-4 text-secondary" /> {course.batch}</span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-body font-semibold text-foreground mb-2 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-secondary" /> Subjects Covered
                </h4>
                <div className="flex flex-wrap gap-2 mb-4">
                  {course.subjects.map((s) => (
                    <span key={s} className="text-xs font-body px-3 py-1 rounded-full bg-muted text-muted-foreground">{s}</span>
                  ))}
                </div>
                <h4 className="font-body font-semibold text-foreground mb-2">Key Features</h4>
                <ul className="space-y-1">
                  {course.features.map((f) => (
                    <li key={f} className="text-sm text-muted-foreground font-body flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-secondary shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="block mt-4">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-gold-dark font-body font-semibold">
                    Enquire Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Courses;