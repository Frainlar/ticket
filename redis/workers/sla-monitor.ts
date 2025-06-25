import { Queue, Worker } from 'bullmq';
import redisClient from '../../packages/lib/redis';

const slaQueue = new Queue('sla-monitor', { connection: redisClient });

const slaWorker = new Worker(
  'sla-monitor',
  async job => {
    const { ticketId, deadline } = job.data;
    const now = new Date();
    if (now > new Date(deadline)) {
      console.log(`SLA Breach for ticket ${ticketId}`);
    }
  },
  { connection: redisClient }
);

export { slaQueue, slaWorker };
