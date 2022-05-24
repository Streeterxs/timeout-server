import fetch from 'node-fetch';
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(request: VercelRequest, response: VercelResponse) {
  const res = await fetch('https://...', {
    method: 'POST',
    body: JSON.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await res.json();
  return response.status(200).json({ data });
}