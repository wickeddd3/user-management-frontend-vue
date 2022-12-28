
FROM node:14.21-alpine3.16

WORKDIR /var/www/user-management-frontend-vue

COPY package*.json ./

RUN apk add g++ make py3-pip

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "serve"]