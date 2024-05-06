FROM node:22.1.0-bullseye-slim

COPY . .

RUN npm install 

EXPOSE 3000

CMD [ "npm", "start" ]





