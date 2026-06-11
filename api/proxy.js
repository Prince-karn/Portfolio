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
    return res.status(500).json({ error: 'BACKEND_URL environment variable is not set on Vercel.' });
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
