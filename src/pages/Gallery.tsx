import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from "@/components/LazyImage";

import karanPortrait from "@/assets/karan-portrait.jpeg";
import karanDesk from "@/assets/karan-desk.jpg";
import aparnaStanding from "@/assets/aparna-standing.jpg";
import aparnaLaptop from "@/assets/aparna-laptop.jpg";
import sonuFaculty from "@/assets/faculty-sonu.jpg";
import truptiFaculty from "@/assets/faculty-trupti.jpg";
import classroomFull from "@/assets/classroom-full.jpg";
import classroomLecture from "@/assets/classroom-lecture.jpg";
import karanStudents from "@/assets/karan-students.jpg";
import karanCounseling from "@/assets/karan-counseling.jpg";
import cricketLargeGroup from "@/assets/cricket-large-group.jpg";
import cricketTrophyBoys from "@/assets/cricket-trophy-boys.jpg";
import cricketGirlsTeam from "@/assets/cricket-girls-team.jpg";
import cricketGirlsTrophy from "@/assets/cricket-girls-trophy.jpg";
import cricketAllTeams from "@/assets/cricket-all-teams.jpg";
import kacplTeam from "@/assets/kacpl-team.jpeg";
import birthdayClassroom from "@/assets/birthday-classroom.jpg";
import birthdayCake from "@/assets/birthday-cake.jpg";
import tripGroup1 from "@/assets/trip-group-1.jpg";
import tripNight from "@/assets/trip-night.jpg";
import tripBoys from "@/assets/trip-boys.jpg";
import tripGirls from "@/assets/trip-girls.jpg";
import tripMixed from "@/assets/trip-mixed.jpg";

const categories = ["All", "Faculty", "Classroom", "Events"];

const images = [
  { src: karanPortrait, alt: "Karan Agarwal – Founder", category: "Faculty" },
  { src: karanDesk, alt: "Karan Agarwal at work desk", category: "Faculty" },
  { src: aparnaStanding, alt: "Aparna Agarwal – Co-Founder", category: "Faculty" },
  { src: aparnaLaptop, alt: "Aparna Agarwal working", category: "Faculty" },
  { src: sonuFaculty, alt: "Sonu Bhure – Language Faculty", category: "Faculty" },
  { src: truptiFaculty, alt: "Faculty member", category: "Faculty" },
  { src: classroomFull, alt: "Students in KAC uniform – classroom", category: "Classroom" },
  { src: classroomLecture, alt: "Lecture session with TV screens", category: "Classroom" },
  { src: karanStudents, alt: "Karan Sir with students", category: "Classroom" },
  { src: karanCounseling, alt: "Student counseling session", category: "Classroom" },
  { src: cricketLargeGroup, alt: "KACPL Cricket Tournament – all teams", category: "Events" },
  { src: kacplTeam, alt: "KACPL team photo", category: "Events" },
  { src: cricketGirlsTeam, alt: "Girls cricket team – KACPL", category: "Events" },
  { src: cricketTrophyBoys, alt: "KAC Dominators winning trophy", category: "Events" },
  { src: cricketGirlsTrophy, alt: "KAC Smashers with trophy", category: "Events" },
  { src: cricketAllTeams, alt: "All KACPL teams with trophies", category: "Events" },
  { src: birthdayClassroom, alt: "Birthday celebration in classroom", category: "Events" },
  { src: birthdayCake, alt: "Birthday cake cutting celebration", category: "Events" },
  { src: tripGroup1, alt: "Student trip – Aaroh Srusti", category: "Events" },
  { src: tripNight, alt: "Students group outing – night", category: "Events" },
  { src: tripBoys, alt: "Boys batch trip", category: "Events" },
  { src: tripGirls, alt: "Girls batch trip", category: "Events" },
  { src: tripMixed, alt: "Mixed batch excursion", category: "Events" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

  return (
    <div>
      <section className="bg-gradient-hero py-20 px-4">
        <div className="container-custom text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
          >
            Photo <span className="text-gradient-gold">Gallery</span>
          </motion.h1>
          <p className="text-primary-foreground/70 font-body text-lg">A glimpse into life at Karan Agarwal Classes.</p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full font-body text-sm font-medium transition-colors ${
                  active === cat
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
            >
              {filtered.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl overflow-hidden shadow-[var(--shadow-soft)] card-hover"
                >
                  <LazyImage src={img.src} alt={img.alt} aspectClass="aspect-[4/3]" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
