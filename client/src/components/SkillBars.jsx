import { useState } from 'react';
import { motion } from 'framer-motion';
import './SkillBars.css';

const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML & CSS',        level: 95, tooltip: 'Expert' },
      { name: 'JavaScript',        level: 90, tooltip: 'Advanced' },
      { name: 'React',             level: 85, tooltip: 'Advanced' },
      { name: 'Three.js / WebGL',  level: 75, tooltip: 'Proficient' },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Python / FastAPI',  level: 90, tooltip: 'Advanced' },
      { name: 'C / C++',          level: 80, tooltip: 'Advanced' },
      { name: 'Node.js / Express', level: 78, tooltip: 'Advanced' },
      { name: 'Go',                level: 60, tooltip: 'Intermediate' },
      { name: 'x86 Assembly',      level: 45, tooltip: 'Familiar' },
    ],
  },
  {
    category: 'DevOps',
    skills: [
      { name: 'Git',                   level: 92, tooltip: 'Expert' },
      { name: 'Docker',                level: 80, tooltip: 'Advanced' },
      { name: 'AWS / Oracle Cloud',    level: 68, tooltip: 'Proficient' },
      { name: 'Systems Administration',level: 72, tooltip: 'Proficient' },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { name: 'PostgreSQL / TimescaleDB', level: 85, tooltip: 'Advanced' },
      { name: 'MongoDB',                  level: 80, tooltip: 'Advanced' },
      { name: 'Redis / Valkey',           level: 75, tooltip: 'Proficient' },
    ],
  },
  {
    category: 'AI & Machine Learning',
    skills: [
      { name: 'Machine Learning',   level: 75, tooltip: 'Proficient' },
      { name: 'Computer Vision',    level: 70, tooltip: 'Proficient' },
      { name: 'Deep Learning',      level: 65, tooltip: 'Intermediate' },
      { name: 'Agentic AI',         level: 60, tooltip: 'Intermediate' },
    ],
  },
  {
    category: 'Blockchain',
    skills: [
      { name: 'Solidity / Web3.js', level: 70, tooltip: 'Proficient' },
      { name: 'dApps / NFTs',       level: 65, tooltip: 'Intermediate' },
    ],
  },
  {
    category: 'Systems & Networking',
    skills: [
      { name: 'Socket Programming',       level: 80, tooltip: 'Advanced' },
      { name: 'Network Protocols',        level: 75, tooltip: 'Proficient' },
      { name: 'Async Programming',        level: 82, tooltip: 'Advanced' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const rowVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

function SkillRow({ name, level, tooltip }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="skill-row"
      variants={rowVariants}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="skill-label-row">
        <span className="skill-name">{name}</span>
        <span className="skill-pct">{level}%</span>
        {hovered && (
          <motion.span
            className="skill-tooltip"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.15 }}
          >
            {tooltip}
          </motion.span>
        )}
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.05 }}
        />
      </div>
    </motion.div>
  );
}

export default function SkillBars() {
  return (
    <div className="skillbars-root">
      {skillCategories.map((cat) => (
        <div key={cat.category} className="skill-category">
          <h3 className="skill-category-label">{cat.category}</h3>
          <motion.div
            className="skill-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            {cat.skills.map((skill) => (
              <SkillRow key={skill.name} {...skill} />
            ))}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
