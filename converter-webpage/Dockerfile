FROM node:12

WORKDIR /tmp
COPY package.json /tmp/
RUN npm i

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/

CMD [ "npm", "run", "start" ]