FROM node:22-alpine

WORKDIR /app

# Copy the entire dist output (flattened and complete)
COPY dist/frontend/ui/.next/standalone /app

# Expose the port
EXPOSE 3000
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Run the standalone server
CMD ["node", "frontend/ui/server.js"]
