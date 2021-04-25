FROM node:12.22.1-alpine3.12

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

CMD yarn start