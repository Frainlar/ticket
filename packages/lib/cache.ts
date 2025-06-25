import redisClient from './redis';

export async function getOrSetCache<T>(key: string, fetchFn: () => Promise<T>, ttl = 300): Promise<T> {
  const cached = await redisClient.get(key);
  if (cached) return JSON.parse(cached);

  const fresh = await fetchFn();
  await redisClient.set(key, JSON.stringify(fresh), 'EX', ttl);
  return fresh;
}
