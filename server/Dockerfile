FROM node:22-alpine

WORKDIR /app

# Install production dependencies only
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy application source
COPY index.js ./
COPY routes/ ./routes/
COPY models/ ./models/

# Copy static files (resume, CV)
COPY *.pdf ./
COPY *.docx ./

EXPOSE 5000

CMD ["node", "index.js"]
