FROM node:alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY ./database/* ./database/
COPY . ./

EXPOSE 3000
EXPOSE 5000
CMD ["yarn", "start"]
