# Use the official Node.js 16 image
FROM node:16

# Set the working directory inside the container
WORKDIR app/

# Copy the entire application directory to the working directory
COPY . .

# Install dependencies
RUN npm install

# Install pm2 locally
RUN npm install pm2@latest -g --silent

# Expose port 8080 to the outside world
EXPOSE 8080

# Command to run the application
CMD ["pm2", "start", "gpassessmentnode.js", "--no-daemon", "--watch"]

