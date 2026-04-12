import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);


// GET /api/download/resume — serves resume.pdf
router.get('/resume', (req, res) => {
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ success: false, error: 'Resume not found.' });
  }
  res.download("resume.pdf", 'Maulik_Sharma_Resume.pdf');
});

// GET /api/download/cv — serves cv.pdf
router.get('/cv', (req, res) => {
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ success: false, error: 'CV not found.' });
  }
  res.download("cv.pdf", 'Maulik_Sharma_CV.pdf');
});

// GET /api/download/cv-docx — serves cv.docx (Word format)
router.get('/cv-docx', (req, res) => {
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ success: false, error: 'CV (Word) not found.' });
  }
  res.download("cv.docx", 'Maulik_Sharma_CV.docx');
});

export default router;
