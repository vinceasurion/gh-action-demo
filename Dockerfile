FROM node:18-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

ENV NODE_ENV production

ENV PORT 8081

EXPOSE 8081

ENTRYPOINT [ "npm", "start" ]