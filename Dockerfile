FROM node:6-alpine
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "test" ]
CMD [ "npm", "start" ]