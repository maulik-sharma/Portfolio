import { useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import SkillBars from '../components/SkillBars.jsx';
import useDocumentMeta from '../hooks/useDocumentMeta.js';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: .5, ease: "easeOut" } 
  }
};

const tableVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

export default function Home() {
  useDocumentMeta({
    title: 'Maulik Sharma — Developer & Engineer',
    description: 'Portfolio of Maulik Sharma — Computer Science & Engineering developer specializing in full-stack development, systems programming, blockchain, and machine learning.',
  });

  // Wake up the backend server (moved from module scope to avoid blocking import)
  useEffect(() => {
    fetch(`${API_URL}/api/health`).catch(() => {});
  }, []);

  return (
    <main className="home-container">
      {/* Row 1, Col 1: About */}
      <section className="grid-item about-section" id="about">
        <h1>About</h1>

      </section>

      {/* Row 1, Col 2: My Monthly Favorites */}
      <motion.section 
        className="grid-item about-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <p>
          I am a Computer Science and Engineering developer driven by a 
          fascination with the inner workings of modern technology, from 
          low-level systems architecture to the decentralized future of the web. 
          My technical foundation spans building high-performance C++ HTTP servers 
          and scalable FastAPI backends to exploring the intersections of Blockchain 
          and Machine Learning. With a hands-on approach to problem-solving, I have 
          engineered full-stack financial charting tools, designed dApps, and integrated computer vision for IoT applications like facial 
          recognition attendance systems. Whether I am optimizing time-series 
          databases or assembling custom drone hardware, I strive to build 
          efficient, secure, and impactful technology that bridges the gap between 
          theoretical computer science and practical, real-world utility.
        </p>
      </motion.section>

      {/* Row 2, Col 1: Achievements */}
      <section className="grid-item achievements-section" id="achievements">
        <h2>Achievements</h2>
      </section>

      {/* Row 2, Col 2: Details Context (Experience, Skills, Languages) */}
      <section className="grid-item details-section">

        <div className="details-block">
          
          <h2>Education</h2>

          <motion.table 
            className="details-table"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={tableVariants}
          >
            <motion.thead variants={tableVariants}>
              <motion.tr variants={rowVariants}>
                <th>WHAT</th>
                <th>WHERE</th>
                <th className="align-right">WHEN</th>
              </motion.tr>
            </motion.thead>
            <motion.tbody variants={tableVariants}>
              <motion.tr variants={rowVariants}>
                <td>Secondary Education (Class X)</td>
                <td>St. Teresa's School, Jaipur</td>
                <td className="align-right">2021</td>
              </motion.tr>

              <motion.tr variants={rowVariants}>
                <td>Senior Secondary Education (Class XII)</td>
                <td>St. Teresa's School, Jaipur</td>
                <td className="align-right">2023</td>
              </motion.tr>
              <motion.tr variants={rowVariants}>
                <td>Bachelor of Technology (CSE)</td>
                <td>JK Lakshmipat University, Jaipur</td>
                <td className="align-right">2023 - 2027</td>
              </motion.tr>
            </motion.tbody>
          </motion.table>
        </div>


        <div className="details-block">
          
          <h2>Experience</h2>

          <motion.table 
            className="details-table"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={tableVariants}
          >
            <motion.thead variants={tableVariants}>
              <motion.tr variants={rowVariants}>
                <th>WHAT</th>
                <th>WHERE</th>
                <th className="align-right">WHEN</th>
              </motion.tr>
            </motion.thead>
            <motion.tbody variants={tableVariants}>
              <motion.tr variants={rowVariants}>
                <td>Freelancing</td>
                <td>Self</td>
                <td className="align-right">2024 - Now</td>
              </motion.tr>

              <motion.tr variants={rowVariants}>
                <td>Backend Developer Intern</td>
                <td>Keystocks OPC Pvt. Ltd.</td>
                <td className="align-right">2024</td>
              </motion.tr>
              <motion.tr variants={rowVariants}>
                <td>Software Development Intern</td>
                <td>Khandelwal Agrawal & Co.</td>
                <td className="align-right">2025</td>
              </motion.tr>
            </motion.tbody>
          </motion.table>
        </div>

        <div className="details-block">
          
          <h2>Skills</h2>
          <SkillBars />
        </div>

        <div className="details-block">
          <h2>Languages</h2>

          <motion.table className="details-table"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={tableVariants}
          >
            <motion.thead variants={tableVariants}>
              <motion.tr variants={rowVariants}>
                <th>LANGUAGE</th>
              </motion.tr>
            </motion.thead>
            <motion.tbody variants={tableVariants}>
              <motion.tr variants={rowVariants}>
                <td>English</td>
              </motion.tr>
              <motion.tr variants={rowVariants}>
                <td>Hindi</td>
              </motion.tr>
            </motion.tbody>
          </motion.table>
        </div>
        
        <div className="downloadables">
          <a href={`${API_URL}/api/download/resume`}>[Resume]</a>
          <a href={`${API_URL}/api/download/cv`}>[CV — PDF]</a>
          <a href={`${API_URL}/api/download/cv-docx`}>[CV — DOCX]</a>
        </div>
      </section>

    </main>
);
}