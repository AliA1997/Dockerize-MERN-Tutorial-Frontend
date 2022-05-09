# Base image off the node version 17 alpine image.
FROM node:17-alpine
# Set the working directory to app
WORKDIR /app
# Copy the package.json then install it to prevent installing old dependencies.
COPY package.json /app
# Install depencies using npm.
RUN npm install
# Copy source code into the internal's container /app/src folder.
COPY . /app
# Expose port 3000 in the react app.
EXPOSE 3000
# Run npm start.
CMD [ "npm", "start" ]