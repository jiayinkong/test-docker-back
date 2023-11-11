FROM node:16.14.0
LABEL name="test-docker-back"
LABEL version="1.0"
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE 3000
CMD npm run start