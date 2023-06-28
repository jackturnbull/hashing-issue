FROM node:18
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY index.js ./
CMD npm run start