# FROM node:8.7.0-alpine
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# EXPOSE 3000
# CMD [ "npm", "start" ]


FROM node
RUN mkdir -p /app/frontend
WORKDIR /app/frontend
COPY package*.json /app/frontend/
RUN npm install
COPY . /app/frontend/
# Runs the frontend
CMD ["npm", "start"]
