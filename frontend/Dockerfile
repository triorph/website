FROM node:lts as build-env
LABEL desc="Docker image of my angular app"
WORKDIR /app
COPY ["package.json","package-lock.json","/app/"]
RUN npm install
RUN npm install -g @angular/cli
EXPOSE 4200
CMD ng serve --host 0.0.0.0 --port 4200
