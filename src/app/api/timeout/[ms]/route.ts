import { timeout } from './_timeout';

export const dynamic = 'force-dynamic'; // static by default, unless reading the request

export async function GET(request: Request, {params}: {params: {ms: number}}) {
  const response = new Response();
  const {ms: msString} = params;

  const ms = Number(msString);

  if (!ms) {

    return Response.json({success: null, error: 'Wrong ms value'}, {status: 400});
  }
  
  await timeout(ms);
  
  return Response.json({success: `Timeouted ${ms}ms`, error: null}, {status: 200});
}