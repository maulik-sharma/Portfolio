import express from 'express';
import nodemailer from 'nodemailer';
import Message from '../models/Message.js';

const router = express.Router();

// POST /api/contact — save message & optionally send email notification
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'All fields (name, email, message) are required.',
    });
  }

  try {
    // 1. Persist to MongoDB
    const newMessage = await Message.create({ name, email, message });

    // 2. Optional: send email notification via Nodemailer
    if (
      process.env.EMAIL_USER &&
      process.env.EMAIL_PASS &&
      process.env.NOTIFY_EMAIL
    ) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // App password recommended
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.NOTIFY_EMAIL,
        subject: `New message from ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br/>')}</p>
          <hr/>
          <small>Submitted at: ${new Date().toLocaleString()}</small>
        `,
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Message received. Thank you!',
      data: { id: newMessage._id },
    });
  } catch (err) {
    console.error('[Contact Route Error]', err);

    if (err.name === 'ValidationError') {
      const errors = Object.values(err.errors).map((e) => e.message);
      return res.status(400).json({ success: false, error: errors.join(' ') });
    }

    return res.status(500).json({
      success: false,
      error: 'Server error. Please try again later.',
    });
  }
});

export default router;
