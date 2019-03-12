# FROM node:8.7.0-alpine
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# RUN npm install -g nodemon

# EXPOSE 3000
# CMD [ "npm", "start" ]



FROM node
RUN npm install -g nodemon
RUN mkdir -p /app/backend
WORKDIR /app/backend
COPY package*.json /app/backend/
RUN npm install
COPY . /app/backend/
CMD ["nodemon", "server.js"]
