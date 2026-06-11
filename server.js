import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;
const SUBMISSIONS_FILE = path.join(__dirname, 'submissions.json');

app.use(cors());
app.use(express.json());

// Helper to read submissions
const readSubmissions = () => {
  try {
    if (!fs.existsSync(SUBMISSIONS_FILE)) {
      return [];
    }
    const data = fs.readFileSync(SUBMISSIONS_FILE, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error('Error reading submissions file:', err);
    return [];
  }
};

// Helper to write submissions
const writeSubmissions = (data) => {
  try {
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(data, null, 2), 'utf8');
  } catch (err) {
    console.error('Error writing submissions file:', err);
  }
};

// API: Save contact form submission
app.post('/api/contact', (req, res) => {
  const { name, email, whatsapp, type, message, otherText } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required.' });
  }

  const submissions = readSubmissions();
  const newSubmission = {
    id: Date.now().toString(),
    name,
    email,
    whatsapp: whatsapp || undefined,
    type,
    otherText: type === 'others' ? otherText : undefined,
    message,
    createdAt: new Date().toISOString(),
    status: 'pending'
  };

  submissions.unshift(newSubmission); // Newest first
  writeSubmissions(submissions);

  res.status(201).json({ success: true, submission: newSubmission });
});

// API: Admin Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin123') {
    return res.json({ success: true, token: 'super-secret-admin-token-404' });
  }
  res.status(401).json({ error: 'Invalid username or password' });
});

// API: Get all submissions (requires token check)
app.get('/api/submissions', (req, res) => {
  const token = req.headers.authorization;
  if (token !== 'super-secret-admin-token-404') {
    return res.status(403).json({ error: 'Unauthorized access.' });
  }

  const submissions = readSubmissions();
  res.json(submissions);
});

// API: Update submission status (e.g. resolve/delete)
app.post('/api/submissions/:id/resolve', (req, res) => {
  const token = req.headers.authorization;
  if (token !== 'super-secret-admin-token-404') {
    return res.status(403).json({ error: 'Unauthorized access.' });
  }

  const { id } = req.params;
  const submissions = readSubmissions();
  const index = submissions.findIndex(s => s.id === id);

  if (index !== -1) {
    submissions[index].status = 'resolved';
    writeSubmissions(submissions);
    return res.json({ success: true, submission: submissions[index] });
  }

  res.status(404).json({ error: 'Submission not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Contact API Server running on http://localhost:${PORT}`);
});
