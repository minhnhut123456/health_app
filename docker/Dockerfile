FROM node:18-alpine as build

RUN apk update && apk add --no-cache git jq
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

COPY . /app
RUN jq -c 'del(.dependencies, .devDependencies)' package.json > tmp.$$.json && mv tmp.$$.json package.json
RUN npm run build

FROM nginx:1.27-alpine AS release

WORKDIR /app
COPY --from=powerman/dockerize:0.19.0 /usr/local/bin/dockerize /usr/local/bin/dockerize
COPY ./docker/nginx.conf /etc/nginx/nginx.conf.template
COPY --from=build /app/dist/ /app

ENV PORT=80
EXPOSE $PORT

ENTRYPOINT ["dockerize", "-template", "/etc/nginx/nginx.conf.template:/etc/nginx/nginx.conf"]
CMD ["nginx", "-g", "daemon off;"]