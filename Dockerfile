# Multi-stage build for production

# Stage 1: Build client
FROM node:18-alpine AS client-builder
WORKDIR /app
COPY package*.json ./
COPY client/package*.json ./client/
RUN npm install --workspace=client
COPY client ./client
RUN npm run build --workspace=client

# Stage 2: Build server
FROM node:18-alpine AS server-builder
WORKDIR /app
COPY package*.json ./
COPY server/package*.json ./server/
RUN npm install --workspace=server
COPY server ./server
RUN npm run build --workspace=server

# Stage 3: Production
FROM node:18-alpine
WORKDIR /app

# Copy server build and dependencies
COPY --from=server-builder /app/server/dist ./server/dist
COPY --from=server-builder /app/server/package*.json ./server/
COPY --from=server-builder /app/server/prisma ./server/prisma
COPY --from=server-builder /app/node_modules ./node_modules

# Copy client build
COPY --from=client-builder /app/client/dist ./client/dist

# Install production dependencies
WORKDIR /app/server
RUN npm install --production

# Generate Prisma Client
RUN npx prisma generate

EXPOSE 3000

CMD ["node", "dist/index.js"]
