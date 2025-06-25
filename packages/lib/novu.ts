import { Novu } from '@novu/node';

export const novu = new Novu(process.env.NOVU_API_KEY || '');

export async function sendNotification({
  to,
  templateId,
  payload,
}: {
  to: string;
  templateId: string;
  payload: object;
}) {
  await novu.trigger(templateId, {
    to: { subscriberId: to },
    payload,
  });
}
