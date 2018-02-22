FROM ubuntu:16.04
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
RUN apt-get install nodejs
RUN apt-get install python
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
