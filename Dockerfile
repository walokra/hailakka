FROM node:18-alpine as build

WORKDIR /app

RUN apk add rsync bash

COPY package.json package-lock.json ./
RUN npm install

COPY . .
ENV NODE_ENV=production

RUN npx expo export:web

# Serve the web build with nginx
FROM nginx:1-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/web-build /usr/share/nginx/html

# For running as non-root user
RUN chown -R nginx:nginx /var/cache/nginx && \
        chown -R nginx:nginx /var/log/nginx && \
        chown -R nginx:nginx /etc/nginx/conf.d
RUN touch /var/run/nginx.pid && \
        chown -R nginx:nginx /var/run/nginx.pid

ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080

USER nginx

CMD ["nginx", "-g", "daemon off;"]
