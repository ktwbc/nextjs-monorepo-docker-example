FROM node:22-alpine

WORKDIR /app

# Copy the entire dist output (flattened and complete)
COPY dist /app/dist

# Run from the path where Next expects server.js
WORKDIR /app/dist/flat-ui

# Expose the port
EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000

# Run the standalone server
#CMD ["node", "server.js"]
