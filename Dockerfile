FROM node:alpine as builder
WORKDIR /app

RUN apk add --update git bash

ADD package.json /app
RUN npm install --production

FROM node:alpine
WORKDIR /app

EXPOSE 3000

ENV NODE_ENV production

COPY --from=builder /app/node_modules ./node_modules
ADD . /app

RUN npm run build

CMD ["node", "index.js"]
