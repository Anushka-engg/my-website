import React from "react";
import { motion } from "framer-motion";

/* ========= Animation helpers ========= */
const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};
const word = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

/* ========= Data you can edit ========= */
const SOCIALS = {
  linkedin: "https://www.linkedin.com/in/anushka-sarkar1",
  github: "https://github.com/Anushka-engg",
  email: "mailto:your.email@example.com",
};

const PROJECTS = [
  {
    title: "DT Business Analyst",
    link: "https://github.com/Anushka-engg/DT-Business-Analyst",
    stack: ["Excel", "SQL", "Power BI"],
    blurb:
      "Business analysis casework: requirements, KPIs, dashboards, and insights for decision-making.",
  },
  {
    title: "CredTech Hackathon",
    link: "https://github.com/Anushka-engg/CredTech-Hackathon-",
    stack: ["Python", "Pandas", "ML"],
    blurb:
      "Credit risk problem: feature engineering and model experiments to improve risk scoring.",
  },
  {
    title: "CARTMATE — AI",
    link: "https://github.com/Anushka-engg/CARTMATE---AI",
    stack: ["Python", "NLP", "Streamlit"],
    blurb:
      "AI helper for shopping/cart decisions: recommendations and intelligent comparisons.",
  },
  {
    title: "RetailSight 360 — Sales Analytics",
    link: "https://github.com/Anushka-engg/RetailSight-360--An-End-to-End-Sales-Analytics-Dashboard",
    stack: ["SQL", "Power BI", "DAX"],
    blurb:
      "End-to-end retail analytics with sales trends, cohorts, and performance KPIs.",
  },
  {
    title: "Revenue Insights — Hospitality",
    link: "https://github.com/Anushka-engg/Revenue_Insights_Hospitality",
    stack: ["Excel", "Power BI"],
    blurb:
      "Hospitality revenue dashboard: occupancy, ADR, RevPAR, and channel performance.",
  },
  {
    title: "SalesTracker 360",
    link: "https://github.com/Anushka-engg/SalesTracker360",
    stack: ["Excel", "Power BI"],
    blurb:
      "Sales KPI tracker with targets vs actuals, seasonality, and salesperson performance.",
  },
  {
    title: "Raktlink",
    link: "https://github.com/Anushka-engg/Raktlink",
    stack: ["React", "Tailwind"],
    blurb:
      "Public service concept app for fast blood donor matching and contact.",
  },
  {
    title: "MICRO IIT Project 2",
    link: "https://github.com/Anushka-engg/MICRO-IIT-Projecct-2",
    stack: ["Python", "Analytics"],
    blurb:
      "Academic analytics project: data cleaning, EDA, and insights write-up.",
  },
  {
    title: "Amazon Review — CodTech (Task 3 & 4)",
    link: "https://github.com/Anushka-engg/Amazonreview-codTech-Task3-4",
    stack: ["Python", "NLP"],
    blurb:
      "Amazon reviews text analytics: sentiment and topic exploration.",
  },
  {
    title: "Amazon Review — CodTech",
    link: "https://github.com/Anushka-engg/amazonreview-codtech",
    stack: ["Python", "Pandas"],
    blurb:
      "ETL and exploratory analysis on Amazon review data.",
  },
  {
    title: "TMDB Dataset Analysis",
    link: "https://github.com/Anushka-engg/TMDB-Dataset-Analysis",
    stack: ["Python", "Matplotlib", "EDA"],
    blurb:
      "Movie analytics: revenue drivers, genres, budgets, and correlations.",
  },
];

const EXPERIENCE = [
  {
    role: "Data Analyst (Intern)",
    company: "Aeries Technology",
    period: "Jun 2024 – Aug 2024",
    where: "Remote/India",
    points: [
      "Improved data quality and built ML models that increased prediction accuracy by ~18%.",
      "Optimized Python workflows, reducing processing time by ~27%.",
      "Created decision-support visualizations used by stakeholders.",
    ],
    stack: ["Python", "Pandas", "Scikit-learn", "SQL", "Power BI", "Excel"],
  },
  {
    role: "Data Analyst (Intern)",
    company: "bluCognition",
    when: "Jan 2024 – Mar 2024",
    where: "Remote/India",
    points: [
      "Streamlined data collection and reporting—boosted productivity by ~15%.",
      "Led process improvements; improved visibility via targeted dashboards.",
      "Produced reports that informed stakeholder decision-making.",
    ],
        stack: ["Excel", "SQL", "Python", "ETL", "Reporting"],
  },
];

const CERTS = [
  { 
    name: "Google Analytics Certification", 
    org: "Google", 
    year: "Feb 2025", 
    link: "https://skillshop.credential.net/562a3b7a-2712-440e-9e68-9db1a1f4e056" 
  },
  { 
    name: "Data Science 101", 
    org: "IBM", 
    year: "Feb 2025", 
    link: "https://courses.cognitiveclass.ai/certificates/35c4012833ae45f198d5b19f020d10d7" 
  },
  { 
    name: "Data Visualization with Python", 
    org: "IBM", 
    year: "Jan 2025", 
    link: "https://courses.cognitiveclass.ai/certificates/b68b6dd1e4c54705a3914cb27ce0b094" 
  },
  { 
    name: "Data Visualisation: Empowering Business with Effective Insights Job Simulation", 
    org: "TATA", 
    year: "Apr 2024", 
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_6NNuwxAN9v6BAoX2Y_1736239439681_completion_certificate.pdf" 
  },
  { 
    name: "Data Analytics", 
    org: "Accenture", 
    year: "Jul 2024", 
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/hzmoNKtzvAzXsEqx8_Accenture%20North%20America_6NNuwxAN9v6BAoX2Y_1721319303966_completion_certificate.pdf" 
  },
  { 
    name: "Basics of Data Analytics", 
    org: "LinkedIn", 
    year: "Apr 2024", 
    link: "https://www.linkedin.com/learning/certificates/321b9a825171504654366d9447eb78dd3cc1f67a4075e4f55ab16bc67a908769?trk=share_certificate" 
  },
];


const HACKATHONS = [
  {
    name: "AI Mate",
    role: "Participant / Builder",
    result: "Built CARTMATE—AI helper for shopping decisions.",
  },
  {
    name: "CredTech",
    role: "Participant / Data Scientist",
    result: "Credit risk modeling; feature engineering and model tuning.",
  },
];

/* ========= UI starts here ========= */
function App() {
  return (
    <div className="font-sans bg-gray-900 text-white min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800/90 backdrop-blur shadow z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <a href="#home" className="text-2xl font-bold text-purple-400">
            Porfolio
          </a>
          <ul className="flex space-x-6">
            {["Home", "About", "Experience", "Projects", "Hackathons", "Certifications", "Contact"].map((item) => (
              <motion.li key={item} whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.98 }}>
                <a href={`#${item.toLowerCase()}`} className="hover:text-purple-400 transition-colors">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      {/* Hero */}
<section
  id="home"
  className="flex flex-col justify-center items-center text-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 px-6 pt-24"
>
  {/* Profile Image */}
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="w-40 h-40 mb-6"
  >
    <img
  src="https://media.licdn.com/dms/image/v2/D4D03AQFyUIZ1LLgw1g/profile-displayphoto-shrink_400_400/B4DZUTUqhdHAAk-/0/1739785939657?e=1758758400&v=beta&t=PoT2l3uglcB-lUwM_1Zvt7DWLhBZU5GvLHEO2KaJvV4"
  alt="Anushka Sarkar"
  className="w-40 h-40 rounded-full border-4 border-purple-500 shadow-lg mb-6 object-cover"
/>

  </motion.div>

  {/* Word-by-word heading */}
  <motion.h1
    variants={container}
    initial="hidden"
    animate="visible"
    className="text-4xl md:text-6xl font-extrabold mb-4"
  >
    {["Hi,", "I'm", "Anushka", "Sarkar"].map((w, i) => (
      <motion.span
        key={i}
        variants={word}
        className={`inline-block mr-2 ${i >= 2 ? "text-purple-400" : ""}`}
      >
        {w}
      </motion.span>
    ))}
  </motion.h1>

        {/* Word-by-word tagline */}
        <motion.p
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-2xl text-gray-200 mb-4 font-medium"
        >
          {["Aspiring", "Data", "Analyst", "|", "AI", "&", "Machine", "Learning", "Enthusiast"].map((w, i) => (
            <motion.span key={i} variants={word} className="inline-block mr-1 text-pink-500">
              {w}
            </motion.span>
          ))}
        </motion.p>

        <motion.p variants={fadeUp(0.6)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-white-1000 italic">
          “If data tells stories, then this is where mine begins.”
        </motion.p>

        <motion.p
          variants={fadeUp(1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-gray-300 leading-relaxed max-w-3xl mt-6 text-base md:text-lg"
        >
          I’ve never won a karaoke contest, I can’t run a marathon, and my cooking might be a health hazard, but when it comes to messy data, complex pipelines, or building clear, actionable insights. I’m in my zone.
          I love turning messy data into clear, actionable insights. Comfortable with Python, SQL, ML, and visualization.
        </motion.p>

        <motion.div variants={fadeUp(0.8)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-8 flex gap-4">
          <a href="#projects" className="bg-purple-700 px-6 py-3 rounded-lg hover:bg-blue-900 transition">View Projects</a>
          <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="bg-purple-700 px-6 py-3 rounded-lg hover:bg-blue-900 transition">
            LinkedIn
          </a>
          <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="bg-purple-700 px-6 py-3 rounded-lg hover:bg-blue-900 transition">
            GitHub
          </a>
        </motion.div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 {...fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold mb-6 text-purple-400">
            About Me
          </motion.h2>
          <motion.p
            {...fadeUp(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-gray-300"
          >
            Aspiring Data Analyst with growing experience across analytics, dashboards, and ML.
            I enjoy scoping problems, cleaning data, experimenting with models, and building clear visuals that help teams decide faster.
          </motion.p>
        </div>
      </section>

<section
  id="about"
  className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-center px-6"
>
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="text-4xl font-bold mb-8 text-purple-400"
  >
    About Me
  </motion.h2>

  {/* ✅ Intro Text */}
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.7 }}
    viewport={{ once: true }}
    className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-relaxed mb-6"
  >
    Hi, I’m <span className="text-purple-400 font-semibold">Anushka Sarkar</span>, I completed my schooling at <span className="text-pink-400 font-semibold"> Kendriya Vidyalaya, Ayodhya</span>, 
    and recently graduated from
    <span className="text-pink-400 font-semibold"> Babu Banarasi Das University, Lucknow</span>. 
    I’ve done my Bachelor’s in CS and developed a strong interest in 
    <span className="text-purple-300"> Data Analytics, AI, and Machine Learning</span>.
  </motion.p>

  {/* ✅ Strengths */}
  <motion.p
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1.4 }}
    viewport={{ once: true }}
    className="max-w-2xl mx-auto text-gray-400 text-lg italic mb-10"
  >
    Strengths: I’m <span className="text-pink-400 font-semibold">perseverant</span>, 
    <span className="text-pink-400 font-semibold"> versatile</span>, and always curious to learn new things.
  </motion.p>

  {/* ✅ Education in free flow */}
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1, delay: 2 }}
    viewport={{ once: true }}
    className="text-gray-300 text-lg md:text-xl"
  >
    Experience 
  </motion.div>
</section>
{/* ✅ Experience Section */}
{/* ✅ Experience Section */}
<section id="experience" className="py-16 px-6 text-white">
  <h2 className="text-4xl font-bold text-center mb-10">Experience</h2>
  
  <div className="max-w-5xl mx-auto space-y-14">
    
    {/* Aeries Technology */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-2xl font-semibold mb-3">
        Data Analyst Intern at <span className="text-purple-400">Aeries Technology</span>
      </h3>
      <p className="text-gray-400 italic mb-4">June 2024 – August 2024</p>
      
      <p className="text-lg text-gray-300 mb-3">
        At Aeries, I worked on making data cleaner and more useful for business decisions. My main tasks included:
      </p>
      
      <ul className="list-disc ml-6 text-gray-300 space-y-2">
        <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Cleaned and organized messy datasets for accurate analysis.
        </motion.li>
        <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          Built Machine Learning models that improved prediction accuracy by <span className="text-pink-400">18%</span>.
        </motion.li>
        <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          Created interactive dashboards using <span className="text-purple-400">Power BI</span> for management insights.
        </motion.li>
        <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }}>
          Optimized Python scripts, reducing processing time by <span className="text-pink-400">27%</span>.
        </motion.li>
      </ul>

      <p className="text-gray-400 mt-4">
        <strong>Tools & Skills:</strong> Python, Pandas, SQL, Machine Learning, Power BI, Excel
      </p>
      
      <p className="mt-4 text-pink-400 italic">
        Learned how to apply ML to real data, improve workflows, and communicate insights effectively.
      </p>
    </motion.div>

    {/* bluCognition */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h3 className="text-2xl font-semibold mb-3">
        Data Analyst Intern at <span className="text-purple-400">bluCognition</span>
      </h3>
      <p className="text-gray-400 italic mb-4">Jan 2024 – Mar 2024</p>
      
      <p className="text-lg text-gray-300 mb-3">
        At bluCognition, I focused on automating reports and improving how data was collected and presented.
      </p>
      
      <ul className="list-disc ml-6 text-gray-300 space-y-2">
        <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Automated daily reports, reducing manual work and errors.
        </motion.li>
        <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }}>
          Built data pipelines to streamline collection and reporting.
        </motion.li>
        <motion.li initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          Improved productivity by <span className="text-pink-400">15%</span> by reducing repetitive tasks.
        </motion.li>
      </ul>

      <p className="text-gray-400 mt-4">
        <strong>Tools & Skills:</strong> Excel, SQL, Python, Data Automation, Reporting
      </p>
      
      <p className="mt-4 text-pink-400 italic">
        Learned how to automate processes, work with large datasets, and deliver reports that matter.
      </p>
    </motion.div>

  </div>
</section>



      {/* Projects */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="text-4xl font-bold mb-8 text-purple-400"
  >
    Project
  </motion.h2>
          <motion.h2 {...fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold mb-10 text-center text-purple-400">
            Projects
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <motion.a
                key={p.link}
                href={p.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-gray-800 rounded-xl p-6 hover:scale-[1.02] hover:shadow-lg transition transform"
              >
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{p.blurb}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span key={t} className="text-xs bg-purple-500/20 border border-purple-500/40 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Hackathons */}
      <section id="hackathons" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6">
          <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="text-4xl font-bold mb-8 text-purple-400"
  >
  Hackathons
  </motion.h2>
          <motion.h2 {...fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold mb-10 text-center text-purple-400">
           
          </motion.h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {HACKATHONS.map((h, i) => (
              <motion.div
                key={h.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-gray-900 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold">{h.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{h.role}</p>
                <p className="text-gray-300 mt-3">{h.result}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
     {/* Certifications */}
<section id="certifications" className="py-20 bg-gray-900">
  <div className="container mx-auto px-6">
    <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="text-4xl font-bold mb-8 text-purple-400"
  >
  Certifications
  </motion.h2>
    <motion.h2
      {...fadeUp(0)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="text-4xl font-bold mb-10 text-center text-purple-400"
    >
     
    </motion.h2>
    <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      {CERTS.map((c, i) => (
        <motion.div
          key={`${c.name}-${i}`}
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: i * 0.06 }}
          className="bg-gray-800 rounded-lg p-4"
        >
          <div className="font-semibold">{c.name}</div>
          <div className="text-gray-400 text-sm">{c.org}</div>
          <div className="text-gray-500 text-xs">{c.year}</div>
          
          {c.link && (
            <a 
              href={c.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-2 text-purple-400 text-sm hover:underline"
            >
              View Certificate
            </a>
          )}
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Contact */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <motion.h2 {...fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-4xl font-bold mb-6 text-purple-400">
            Contact
          </motion.h2>
          <motion.p {...fadeUp(0.2)} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-gray-300 mb-6">
            Open to internships, full-time roles, and collaborations.
          </motion.p>
          <div className="flex justify-center gap-4">
            <a href={SOCIALS.email} className="bg-purple-500 px-6 py-3 rounded-lg hover:bg-purple-600 transition">
              Email Me
            </a>
            <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="border border-purple-500 px-6 py-3 rounded-lg hover:bg-purple-500/10 transition">
              LinkedIn
            </a>
            <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="border border-purple-500 px-6 py-3 rounded-lg hover:bg-purple-500/10 transition">
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} Anushka. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
