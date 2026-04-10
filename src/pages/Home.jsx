import { motion } from "framer-motion";
import "./Home.css";

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
  return (
    <div className="home-container">
      {/* Row 1, Col 1: About */}
      <section className="grid-item about-section">
        <h2>About</h2>

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
          I am an Industrial Design graduate from Eindhoven University of
          Technology. Here, I have mostly focused on the improving the UI/UX of
          music listening in social settings. Nowadays, I focus on design
          engineering websites. Having knowledge of both the frontend and the
          backend, I am able to craft the experience exactly as desired. Due to
          my background in Industrial Design, I bring a fresh, user-focused
          perspective to web design.
        </p>
      </motion.section>

      {/* Row 2, Col 1: Achievements */}
      <section className="grid-item achievements-section">
        <h2>Achievements</h2>
      </section>

      {/* Row 2, Col 2: Details Context (Experience, Skills, Languages) */}
      <section className="grid-item details-section">
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
                <td>Design Engineer</td>
                <td>35®</td>
                <td className="align-right">2024 - Now</td>
              </motion.tr>
              <motion.tr variants={rowVariants}>
                <td>Master of Industrial Design</td>
                <td>Eindhoven University of Technology</td>
                <td className="align-right">2021 - 2024</td>
              </motion.tr>
              <motion.tr variants={rowVariants}>
                <td>Founder Rootnote</td>
                <td>Self</td>
                <td className="align-right">2021 - Now</td>
              </motion.tr>
              <motion.tr variants={rowVariants}>
                <td>Bachelor of Industrial Design</td>
                <td>Eindhoven University of Technology</td>
                <td className="align-right">2018 - 2021</td>
              </motion.tr>
            </motion.tbody>
          </motion.table>
        </div>

        <div className="details-block">
          
          <h2>Skills</h2>
          <motion.table 
            className="details-table"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={tableVariants}
            >

            <motion.thead variants={tableVariants}>
              <motion.tr variants={rowVariants}>
                <th>CATEGORY</th>
                <th className="align-right">TECHNOLOGIES</th>
              </motion.tr>
            </motion.thead>
            <motion.tbody variants={tableVariants}>
              <motion.tr variants={rowVariants}>
                <td>Frontend</td>
                <td className="align-right">Vue, Astro, Javascript, HTML, CSS, Three.js, Pixi.js, WEBGL</td>
              </motion.tr>
              <motion.tr variants={rowVariants}>
                <td>Backend</td>
                <td className="align-right">Python, Django, Postgres, Redis, Laravel, PHP, Typescript</td>
              </motion.tr>
            </motion.tbody>
          </motion.table>
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
                <td>Dutch</td>
              </motion.tr>
            </motion.tbody>
          </motion.table>
        </div>
      </section>
    </div>
  );
}