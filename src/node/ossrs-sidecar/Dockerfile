FROM node:8-alpine

RUN mkdir -p /opt/app
RUN apk add --no-cache libc6-compat openssl-dev curl
ENV NODE_ENV production
ENV PORT 30150
EXPOSE 30150

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/

WORKDIR /opt/app
COPY . /opt/app

CMD [ "npm", "start" ]