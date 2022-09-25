FROM node:14
WORKDIR /usr/app
COPY package.json .
RUN npn install
COPY . .
EXPOSE 8080
CMD ["node", "app.js"]