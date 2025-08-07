# Use official Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your project
COPY . .

# Expose the port used by the dev server (default: 5173 for Vite, 3000 or 8080 for others — adjust as needed)
EXPOSE 8080

# Start the development server
CMD ["npm", "run", "dev"]

