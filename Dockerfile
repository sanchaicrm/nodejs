FROM ubuntu:16.04
RUN apt-get install nodejs
RUN apt-get install python
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
