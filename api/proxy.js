import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // Allow CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, Authorization'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const backendUrl = process.env.BACKEND_URL;
  if (!backendUrl) {
    // Fallback: Handle submissions directly in memory / /tmp/ folder
    const SUBMISSIONS_FILE = '/tmp/submissions.json';
    const readSubmissions = () => {
      try {
        if (!fs.existsSync(SUBMISSIONS_FILE)) return [];
        return JSON.parse(fs.readFileSync(SUBMISSIONS_FILE, 'utf8') || '[]');
      } catch (e) {
        return [];
      }
    };
    const writeSubmissions = (data) => {
      try {
        fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(data, null, 2), 'utf8');
      } catch (e) {}
    };

    const apiPath = req.url.replace(/^\/api\/?/, '').split('?')[0];

    if (apiPath === 'contact' && req.method === 'POST') {
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
      submissions.unshift(newSubmission);
      writeSubmissions(submissions);
      return res.status(201).json({ success: true, submission: newSubmission });
    }

    if (apiPath === 'login' && req.method === 'POST') {
      const { username, password } = req.body;
      if (username === 'admin' && password === 'admin123') {
        return res.json({ success: true, token: 'super-secret-admin-token-404' });
      }
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    if (apiPath === 'submissions' && req.method === 'GET') {
      const token = req.headers.authorization;
      if (token !== 'super-secret-admin-token-404') {
        return res.status(403).json({ error: 'Unauthorized access.' });
      }
      return res.json(readSubmissions());
    }

    if (apiPath.startsWith('submissions/') && apiPath.endsWith('/resolve') && req.method === 'POST') {
      const token = req.headers.authorization;
      if (token !== 'super-secret-admin-token-404') {
        return res.status(403).json({ error: 'Unauthorized access.' });
      }
      const id = apiPath.split('/')[1];
      const submissions = readSubmissions();
      const index = submissions.findIndex(s => s.id === id);
      if (index !== -1) {
        submissions[index].status = 'resolved';
        writeSubmissions(submissions);
        return res.json({ success: true, submission: submissions[index] });
      }
      return res.status(404).json({ error: 'Submission not found' });
    }

    return res.status(404).json({ error: 'Not Found' });
  }

  // Get the path from the URL, e.g. /api/contact -> contact
  const path = req.url.replace(/^\/api\/?/, '');
  const targetUrl = `${backendUrl.replace(/\/$/, '')}/api/${path}`;

  try {
    const options = {
      method: req.method,
      headers: {
        ...req.headers,
        // Host header needs to match the target host or be deleted
        host: new URL(backendUrl).host,
      },
    };

    if (['POST', 'PUT', 'PATCH'].includes(req.method) && req.body) {
      options.body = typeof req.body === 'object' ? JSON.stringify(req.body) : req.body;
      options.headers['content-type'] = 'application/json';
    }

    const response = await fetch(targetUrl, options);
    const data = await response.json();

    res.status(response.status).json(data);
  } catch (error) {
    console.error('Proxy error:', error);
    res.status(500).json({ error: 'Failed to connect to backend service.' });
  }
}
