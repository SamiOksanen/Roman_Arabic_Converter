FROM node:10

WORKDIR /tmp
COPY package.json /tmp/
RUN npm i

WORKDIR /tmp
COPY package.json /tmp/
RUN npm i

WORKDIR /usr/src/app
COPY . /usr/src/app/
RUN cp -a /tmp/node_modules /usr/src/app/
RUN npm run build

CMD [ "/usr/local/bin/npm", "run", "start" ]