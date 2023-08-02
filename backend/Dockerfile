FROM node:16-alpine

WORKDIR /back

COPY . . 

RUN npm ci

EXPOSE 5000

CMD ["npm","start"]