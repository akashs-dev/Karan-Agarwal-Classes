import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Instagram, Youtube } from "lucide-react";
import InquiryForm from "@/components/InquiryForm";

const Contact = () => (
  <div>
    <section className="bg-gradient-hero py-20 px-4">
      <div className="container-custom text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          Contact <span className="text-gradient-gold">Us</span>
        </motion.h1>
        <p className="text-primary-foreground/70 font-body text-lg">We'd love to hear from you. Reach out for admissions, queries, or feedback.</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-custom grid lg:grid-cols-2 gap-12">
        {/* Form */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Admission Inquiry</h2>
          <div className="bg-card rounded-xl p-8 shadow-[var(--shadow-card)] border border-border">
            <InquiryForm />
          </div>
        </motion.div>

        {/* Info */}
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Get in Touch</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-foreground">Phone</h3>
                <a href="tel:+917758077686" className="text-muted-foreground font-body text-sm hover:text-secondary transition-colors block">7758077686</a>
                <a href="tel:+917758067686" className="text-muted-foreground font-body text-sm hover:text-secondary transition-colors block">7758067686</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-foreground">Email</h3>
                <a href="mailto:karanagarwalclasses@gmail.com" className="text-muted-foreground font-body text-sm hover:text-secondary transition-colors">karanagarwalclasses@gmail.com</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                <MessageCircle className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-foreground">WhatsApp</h3>
                <a
                  href="https://wa.me/917758077686"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground font-body text-sm hover:text-success transition-colors"
                >
                  Chat with us on WhatsApp
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                <Instagram className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-foreground">Social Media</h3>
                <a href="https://instagram.com/karanagarwalclasses" target="_blank" rel="noopener noreferrer" className="text-muted-foreground font-body text-sm hover:text-secondary transition-colors block">@karanagarwalclasses</a>
                <a href="https://youtube.com/@KaranAgarwalClasses" target="_blank" rel="noopener noreferrer" className="text-muted-foreground font-body text-sm hover:text-secondary transition-colors block">YouTube: Karan Agarwal Classes</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-foreground">Our Branches</h3>
                <p className="text-muted-foreground font-body text-sm">Tingrenagar | Yerwada | Dhanori — Pune</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-body font-semibold text-foreground">Batch Timings</h3>
                <p className="text-muted-foreground font-body text-sm">Morning & Evening Batches</p>
                <p className="text-muted-foreground font-body text-sm">Monday - Saturday</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Contact;