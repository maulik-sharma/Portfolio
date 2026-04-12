import { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut', delay: i * 0.1 },
  }),
};

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const STATUS = { IDLE: 'idle', SENDING: 'sending', SUCCESS: 'success', ERROR: 'error' };

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(STATUS.IDLE);
  const [serverMsg, setServerMsg] = useState('');
  const [errors, setErrors] = useState({});

  // ── Validation ──────────────────────────────────────────────────
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      errs.email = 'Enter a valid email address.';
    }
    if (!form.message.trim()) {
      errs.message = 'Message is required.';
    } else if (form.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear field error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }

    setStatus(STATUS.SENDING);
    setServerMsg('');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.success) {
        setStatus(STATUS.SUCCESS);
        setServerMsg(data.message || 'Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus(STATUS.ERROR);
        setServerMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch(error) {
      console.log(error)
      setStatus(STATUS.ERROR);
      setServerMsg('Unable to reach the server. Please try again later.');
    }
  };

  const isDisabled = status === STATUS.SENDING;

  return (
    <div className="contact-container">
      {/* ── Left column — heading + info ── */}
      <motion.section
        className="contact-info"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h1>Contact</h1>
        <p className="contact-intro">
          Have a project in mind, a question, or just want to say hello?
          Drop a message and I&apos;ll get back to you as soon as possible.
        </p>

      </motion.section>

      {/* ── Right column — form ── */}
      <motion.section
        className="contact-form-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={sectionVariants}
      >
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <motion.div
            className={`form-group ${errors.name ? 'has-error' : ''}`}
            custom={0}
            variants={fieldVariants}
          >
            <label htmlFor="contact-name">Name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              disabled={isDisabled}
              autoComplete="name"
            />
            {errors.name && <span className="field-error">{errors.name}</span>}
          </motion.div>

          {/* Email */}
          <motion.div
            className={`form-group ${errors.email ? 'has-error' : ''}`}
            custom={1}
            variants={fieldVariants}
          >
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your@email.com"
              disabled={isDisabled}
              autoComplete="email"
            />
            {errors.email && <span className="field-error">{errors.email}</span>}
          </motion.div>

          {/* Message */}
          <motion.div
            className={`form-group ${errors.message ? 'has-error' : ''}`}
            custom={2}
            variants={fieldVariants}
          >
            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={6}
              placeholder="Tell me about your project or question…"
              disabled={isDisabled}
            />
            <span className="char-count">
              {form.message.length} / 2000
            </span>
            {errors.message && <span className="field-error">{errors.message}</span>}
          </motion.div>

          {/* Submit */}
          <motion.div custom={3} variants={fieldVariants}>
            <button
              id="contact-submit"
              type="submit"
              className={`submit-btn ${status}`}
              disabled={isDisabled}
            >
              {status === STATUS.SENDING ? (
                <span className="btn-inner">
                  <span className="spinner" />
                  Sending…
                </span>
              ) : (
                <span className="btn-inner">Send Message</span>
              )}
            </button>
          </motion.div>

          {/* Server feedback */}
          {serverMsg && (
            <motion.p
              className={`server-msg ${status}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {serverMsg}
            </motion.p>
          )}
        </form>
      </motion.section>
    </div>
  );
}