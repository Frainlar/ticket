# System Architecture

The system is divided into a Next.js frontend and a Nest.js backend. Both applications share common packages and follow SOLID principles and 12 factor app methodology. Redis and BullMQ provide caching and job queues, while MongoDB is accessed via Prisma.
