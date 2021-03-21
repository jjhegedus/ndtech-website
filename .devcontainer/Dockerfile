FROM node:lts-buster as build
WORKDIR /work

COPY ./package.json ./
RUN npm install

COPY . .

RUN npm run build

ENTRYPOINT [ "npm", "run", "start" ]