FROM node:current-slim
WORKDIR /usr/src/app
COPY package.json .
RUN npm i
EXPOSE 8080
COPY . .
RUN npm start
