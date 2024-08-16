FROM node:16.15.1-stretch-slim AS build

WORKDIR /src
RUN npm install
COPY . .
RUN npm run build

FROM caddy:2.4.6-alpine
COPY --from=build /src/caddy/Caddyfile /etc/caddy/Caddyfile
COPY --from=build /src/build /usr/share/caddy