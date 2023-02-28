FROM node:latest

LABEL maintainer="Smarti9 <devops@smarti9.com.br>"
WORKDIR /usr/app
RUN npm install -g npm@7.11.2
RUN npm install pm2 -g

COPY ./package*.json ./
RUN npm install
COPY . ./

RUN npm run build
EXPOSE 3000

ENV NODE_ENV=production
ENV PM2_PUBLIC_KEY 3y5iwuihm8ki9s4
ENV PM2_SECRET_KEY grwrcs7y5zmm87d

CMD ["pm2-runtime", "./node_modules/next/dist/bin/next start"]