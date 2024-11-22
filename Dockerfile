FROM node:18-alpine
# The base image for Dockerizing the Node.js application

WORKDIR /app
# Creating the working directory

COPY package*.json .
# Copies the dependencies in the package.json file

RUN npm install
# Installing all the dependencies

COPY . .
# Copies all the files to the working directory

EXPOSE 5000
# Container will run on this port

CMD ["npm", "start"]
# Start the Docker container Node.js application