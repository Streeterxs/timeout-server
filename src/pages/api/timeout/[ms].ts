import type { VercelRequest, VercelResponse } from '@vercel/node';
import { timeout } from './_timeout';

const handler = async (
  request: VercelRequest,
  response: VercelResponse,
) => {
  const {ms: msString} = request.query;

  const ms = Number(msString);
  
  if (!ms) {
    response.status(400);
    response.json({success: null, error: 'Wrong ms value'})
    return;
  }

  await timeout(ms)

  response.json({success: `timeouted after ${ms} ms`, error: null})
  response.status(200);
};

export default handler;