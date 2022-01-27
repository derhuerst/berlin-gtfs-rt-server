FROM node:alpine as builder
WORKDIR /app

# install dependencies
RUN apk add --update git bash
ADD package.json /app
RUN npm install

# build documentation
ADD . /app
RUN npm run docs

# ---

FROM node:alpine
LABEL org.opencontainers.image.title="berlin-gtfs-rt-server"
LABEL org.opencontainers.image.description="Expose Berlin & Brandenburg transit data as a GTFS-RT feed."
LABEL org.opencontainers.image.authors="Jannis R <mail@jannisr.de>"
LABEL org.opencontainers.image.documentation="https://github.com/derhuerst/berlin-gtfs-rt-server"
LABEL org.opencontainers.image.source="https://github.com/derhuerst/berlin-gtfs-rt-server"
LABEL org.opencontainers.image.revision="3"
LABEL org.opencontainers.image.licenses="(Apache-2.0 AND Prosperity-3.0.0)"
WORKDIR /app

# install dependencies
RUN apk add --update bash wget postgresql-client
ADD package.json /app
RUN npm install --production && npm cache clean --force

# add source code
ADD . /app
COPY --from=builder /app/docs ./docs

EXPOSE 3000

ENV PORT 3000

CMD ["./start.sh"]
