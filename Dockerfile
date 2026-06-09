FROM node:20

ENV MONGODB_CONNECTION_PROTOCOL mongodb
ENV MONGODB_DB_NAME gha-demo
ENV MONGODB_CLUSTER_ADDRESS mongodb_service
ENV MONGODB_USERNAME root
ENV MONGODB_PASSWORD example

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]