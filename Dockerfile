FROM node:8.9.4-alpine
COPY package*.json ./
RUN apt-get install python
RUN npm install
COPY . .
EXPOSE 8080
