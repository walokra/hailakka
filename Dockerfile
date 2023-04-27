FROM node:16-slim as build

WORKDIR /app

RUN apt update && apt install -y rsync

COPY package.json package-lock.json ./
RUN npm install

COPY . .
ENV NODE_ENV=production

RUN npx expo export:web

# Serve the web build with nginx
FROM nginx:1-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/web-build /usr/share/nginx/html
#COPY web-build /usr/share/nginx/html

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
