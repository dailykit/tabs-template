FROM mhart/alpine-node:11 as build

ARG REACT_APP_KEYCLOAK_URL
ARG REACT_APP_DAILYCLOAK_URL

WORKDIR /usr/src/app
COPY package.json ./
RUN yarn
COPY . .

ENV PATH /app/node_modules/.bin:$PATH
ENV SKIP_PREFLIGHT_CHECK true
ENV REACT_APP_KEYCLOAK_URL $REACT_APP_KEYCLOAK_URL
ENV REACT_APP_DAILYCLOAK_URL $REACT_APP_DAILYCLOAK_URL

RUN yarn build

FROM nginx:1.15.2-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
