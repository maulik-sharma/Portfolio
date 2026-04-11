import { motion } from "framer-motion";
import "./Projects.css";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const projects = [
  {
    title: "Nexus HTTP Server",
    type: "Backend · Systems",
    year: "2024",
    description: "A lightweight, multi-threaded HTTP/1.1 server built in modern C++ from scratch. Utilizes epoll and a custom thread pool for high-concurrency, low-latency request handling.",
    tags: ["C++", "Epoll", "Sockets", "POSIX Threads"],
    link: "https://github.com/maulik-sharma/nexus-server",
    image: null
  },
  {
    title: "TradeLens Analytics",
    type: "Full-Stack · Web App",
    year: "2024",
    description: "A real-time financial charting platform with live WebSocket feeds, custom technical indicators, and time-series queries for a fluid trading dashboard experience.",
    tags: ["React", "Python", "WebSockets", "TimescaleDB"],
    link: "https://github.com/maulik-sharma/tradelens",
    image: null
  },
  {
    title: "SightSync IoT",
    type: "Computer Vision · IoT",
    year: "2023",
    description: "An edge-computed facial recognition attendance system that combines OpenCV with a Raspberry Pi and a scalable FastAPI backend for seamless identity verification.",
    tags: ["Python", "OpenCV", "FastAPI", "Raspberry Pi", "PostgreSQL"],
    link: "https://github.com/maulik-sharma/sightsync-iot",
    image: null
  },
  {
    title: "BlockVote dApp",
    type: "Blockchain · Web3",
    year: "2023",
    description: "A decentralized, tamper-proof voting system on Ethereum. End-to-end encrypted for voter privacy with real-time, publicly verifiable poll analytics.",
    tags: ["Solidity", "Web3.js", "React", "Node.js"],
    link: "https://github.com/maulik-sharma/blockvote-dapp",
    image: null
  }
];

function Projects() {
  return (
    <div className="projects-container">

      <motion.div
        className="projects-heading"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={itemVariants}
      >
        <h1>Projects</h1>
      </motion.div>

      <motion.div
        className="projects-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.article key={index} className="project-card" variants={itemVariants}>

            {/* Image area */}
            <div className="project-image-wrapper">
              {project.image
                ? <img src={project.image} alt={project.title} className="project-image" />
                : <div className="project-image-placeholder">
                    <span>No preview available</span>
                  </div>
              }
            </div>

            {/* Content */}
            <div className="project-content">
              <div className="project-header">
                <div>
                  <h2 className="project-title">{project.title}</h2>
                  <p className="project-type">{project.type}</p>
                </div>
                <span className="project-year">{project.year}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-footer">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  [GitHub]
                </a>
              </div>
            </div>

          </motion.article>
        ))}
      </motion.div>

    </div>
  );
}

export default Projects;
