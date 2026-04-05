import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Landmark } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";

const branches = [
  {
    name: "Tingrenagar Branch",
    address: "Karan Agarwal Classes, Above Hotel RK Pure Veg, Opposite Navrang Plaza, Near Bharat Sawant Petrol Pump, Tingrenagar, Pune - 411015",
    phone: "7758077686 / 7758067686",
    hours: "Mon - Sat: Morning & Evening Batches",
    landmark: "Opposite Bharat Sawant Petrol Pump",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5!2d73.89!3d18.55!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzAwLjAiTiA3M8KwNTMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1",
    courses: ["Std 8th SSC/CBSE", "Std 9th SSC/CBSE", "Std 10th SSC/CBSE"],
  },
  {
    name: "Yerwada Branch",
    address: "Karan Agarwal Classes, P.S. Plaza Building, Behind Muslim Bank, Shramik Vasahat, Mohanwadi, Yerawada, Pune - 411006",
    phone: "7758077686 / 7758067686",
    hours: "Mon - Sat: Morning & Evening Batches",
    landmark: "Next to Chitra Talkies",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5!2d73.89!3d18.56!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMzJzM2LjAiTiA3M8KwNTMnMjQuMCJF!5e0!3m2!1sen!2sin!4v1",
    courses: ["Std 8th SSC/CBSE", "Std 9th SSC/CBSE", "Std 10th SSC/CBSE"],
  },
  {
    name: "Dhanori Branch",
    address: "Triaa Vasantam City Center, 401 and 401A, Lohgaon Rd, Dhanori, Pune, Maharashtra 411015",
    phone: "7758077686 / 7758067686",
    hours: "Mon - Sat: Morning & Evening Batches",
    landmark: "Triaa Vasantam City Center",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5!2d73.90!3d18.59!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDM1JzI0LjAiTiA3M8KwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1",
    courses: ["Std 8th SSC/CBSE", "Std 9th SSC/CBSE", "Std 10th SSC/CBSE"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Branches = () => (
  <div>
    <section className="bg-gradient-hero py-20 px-4">
      <div className="container-custom text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          Our <span className="text-gradient-gold">Branches</span>
        </motion.h1>
        <p className="text-primary-foreground/70 font-body text-lg">3 branches across Pune for your convenience.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom space-y-20">
        {branches.map((branch) => (
          <motion.div
            key={branch.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="grid lg:grid-cols-2 gap-10"
          >
            <div>
              <div className="rounded-xl overflow-hidden shadow-[var(--shadow-soft)]">
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${branch.name} location`}
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">{branch.name}</h2>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 font-body text-muted-foreground">
                  <MapPin className="w-5 h-5 text-secondary mt-0.5 shrink-0" /> {branch.address}
                </div>
                <div className="flex items-start gap-3 font-body text-muted-foreground">
                  <Landmark className="w-5 h-5 text-secondary mt-0.5 shrink-0" /> Landmark: {branch.landmark}
                </div>
                <a href="tel:+917758077686" className="flex items-center gap-3 font-body text-muted-foreground hover:text-secondary transition-colors">
                  <Phone className="w-5 h-5 text-secondary shrink-0" /> {branch.phone}
                </a>
                <div className="flex items-center gap-3 font-body text-muted-foreground">
                  <Clock className="w-5 h-5 text-secondary shrink-0" /> {branch.hours}
                </div>
              </div>

              <h3 className="font-body font-semibold text-foreground mb-2">Courses Available</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {branch.courses.map((c) => (
                  <span key={c} className="text-xs font-body px-3 py-1 rounded-full bg-muted text-muted-foreground">{c}</span>
                ))}
              </div>

              <div className="bg-card rounded-xl p-6 border border-border shadow-[var(--shadow-soft)]">
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">Book a Demo Class</h3>
                <InquiryForm />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </div>
);

export default Branches;