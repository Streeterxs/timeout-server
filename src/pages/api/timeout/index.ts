import type { VercelRequest, VercelResponse } from '@vercel/node';
import { timeout } from './_timeout';

const handler = async (
  request: VercelRequest,
  response: VercelResponse,
) => {
  await timeout()

  response.json({success: `timeouted after 100 ms`, error: null})
  response.status(200);
};

export default handler;