FROM node:6-alpine
EXPOSE 3000
COPY server.js .
CMD node server.js