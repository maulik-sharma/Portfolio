import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Public folder is two levels up from server/routes/
const PUBLIC_DIR = path.resolve(__dirname, '..');

// GET /api/download/resume — serves resume.pdf
router.get('/resume', (req, res) => {
  const filePath = path.join(PUBLIC_DIR, 'resume.pdf');
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ success: false, error: 'Resume not found.' });
  }
  res.download(filePath, 'Maulik_Sharma_Resume.pdf');
});

// GET /api/download/cv — serves cv.pdf
router.get('/cv', (req, res) => {
  const filePath = path.join(PUBLIC_DIR, 'cv.pdf');
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ success: false, error: 'CV not found.' });
  }
  res.download(filePath, 'Maulik_Sharma_CV.pdf');
});

// GET /api/download/cv-docx — serves cv.docx (Word format)
router.get('/cv-docx', (req, res) => {
  const filePath = path.join(PUBLIC_DIR, 'cv.docx');
  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ success: false, error: 'CV (Word) not found.' });
  }
  res.download(filePath, 'Maulik_Sharma_CV.docx');
});

export default router;
