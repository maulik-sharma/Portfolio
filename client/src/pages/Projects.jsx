import { motion } from "framer-motion";
import "./Projects.css";
import useDocumentMeta from '../hooks/useDocumentMeta.js';

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
    title: "Simple HTTP Server",
    type: "Backend · Systems",
    year: "2026",
    description: "A lightweight, multi-threaded HTTP/1.1 server built in modern C++ from scratch. Utilizes a custom thread pool for high-concurrency, low-latency request handling.",
    tags: ["C++", "Sockets", "POSIX Threads"],
    link1: "https://github.com/maulik-sharma/Minor_Project_PR1103",
    image: "/httpserver.jpg"
  },
  {
    title: "Visual SVD Analyzer",
    type: "Data Science · Linear Algebra · Web",
    year: "2026",
    description: "An interactive web application that demonstrates image compression using Singular Value Decomposition (SVD). It visualizes eigenface generation, energy retention, and rank-k approximations to illustrate the fundamentals of principal component analysis.",
    tags: ["Python", "Flask", "NumPy", "SVD", "Computer Vision"],
    link1: "https://github.com/Aman018-gif/svd-eigenfaces-image-reconstruction",
    link2: "https://svd-eigenfaces-image-reconstruction.onrender.com/",
    image: "/svd.jpg"
  },
    {
    title: "Attendance Monitoring",
    type: "Computer Vision · IoT",
    year: "2023",
    description: "An edge-computed facial recognition attendance system that combines OpenCV with a Raspberry Pi and a scalable FastAPI backend for seamless identity verification.",
    tags: ["Python", "OpenCV", "FastAPI", "Raspberry Pi", "PostgreSQL"],
    link1: "https://github.com/maulik-sharma/Attendance-Monitoring",
    image: "/attendance.jpg"
  },
  {
    title: "BlockLance",
    type: "Blockchain · Web3",
    year: "2023",
    description: "A DApp for decentralized freelancer reputation. It uses Blockchain to store immutable performance data and an off-chain Machine Learning (ML) oracle to calculate an objective 'Trust Factor'. This provides employers with a verifiable, mathematically grounded metric for hiring.",
    tags: ["Solidity", "Web3.js", "React", "Node.js", "Machine Learning"],
    link1: "https://github.com/maulik-sharma/BlockLance",
    image: "/blocklance.jpg"
  },
  {
    title: "Alumni Management",
    type: "Desktop GUI · Full Stack",
    year: "2023",
    description: "This project is a full-stack Alumni Management System that combines a CustomTkinter GUI with a FastAPI backend to facilitate professional networking through real-time messaging and mentorship tracking.",
    tags: ["Python (FastAPI & CustomTkinter)", "Asynchronous Programming", " WebSockets", "JWT"],
    link1: "https://github.com/maulik-sharma/Alumni-management",
    image: "/dbms.jpg"
  }
];

function Projects() {
  useDocumentMeta({
    title: 'Projects — Maulik Sharma',
    description: 'Explore projects by Maulik Sharma including HTTP servers, SVD analyzers, facial recognition systems, blockchain dApps, and full-stack applications.',
  });

  return (
    <main className="projects-container">

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
                ? <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="338"
                  />
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
                <div className="project-links">
                <a href={project.link1} target="_blank" rel="noopener noreferrer" className="project-link">
                  [Github]
                </a>
                {project.link2 ? <a href={project.link2} target="_blank" rel="noopener noreferrer" className="project-link">
                  [Demo]
                </a> : ""}
                </div>
              </div>
            </div>

          </motion.article>
        ))}
      </motion.div>

    </main>
  );
}

export default Projects;
