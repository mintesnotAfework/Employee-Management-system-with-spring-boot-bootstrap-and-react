FROM node:22.7-alpine

RUN mkdir -p /app/ems-frontend
WORKDIR /app/ems-frontend
COPY package-lock.json  .
COPY package.json . 
COPY . .

RUN npm install


EXPOSE 3000

CMD [ "npm", "run", "dev" ]