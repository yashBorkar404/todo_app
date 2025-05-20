# Stage 1: Build the Next.js app
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy rest of the app
COPY . .

# Build the app (this will generate the static `out` directory)
RUN npm run build && npm run export

# Stage 2: Serve using Nginx
FROM nginx:alpine

# Remove default nginx static files
RUN rm -rf /usr/share/nginx/html/*

# Copy exported static site from builder
COPY --from=builder /app/out /usr/share/nginx/html

# Expose port 80 and set default command
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
