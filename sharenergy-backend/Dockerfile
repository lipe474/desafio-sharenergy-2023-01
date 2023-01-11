FROM node:18.12.1-alpine

RUN npm install -g npm@8.19.2

WORKDIR /user/backend

COPY package.json ./

RUN npm install --legacy-peer-deps

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]