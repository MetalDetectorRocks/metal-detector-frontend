FROM --platform=linux/amd64 node:18.14.2-alpine3.17 as build-step

ENV TZ=Europe/Berlin

RUN apk update && apk upgrade

RUN mkdir /app
WORKDIR /app

# Arguments
ARG BUILD_DATE
ARG VCS_REF

# Labels
LABEL org.label-schema.schema-version="1.0"
LABEL org.label-schema.build-date=$BUILD_DATE
LABEL org.label-schema.name="metaldetector/metal-detector-frontend"
LABEL org.label-schema.description="Mark your favorite metal bands and receive regular notifications about upcoming and recently released albums."
LABEL org.label-schema.maintainer="https://github.com/MetalDetectorRocks"
LABEL org.label-schema.url="https://metal-detector.rocks"
LABEL org.label-schema.vcs-url="https://github.com/MetalDetectorRocks/metal-detector-frontend"
LABEL org.label-schema.vcs-ref=$VCS_REF

COPY package.json package-lock.json ./
RUN npm ci --ignore-scripts
RUN npm rebuild node-sass

COPY . /app

RUN npm run-script build

FROM nginxinc/nginx-unprivileged:1.23.3-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

USER 12345

EXPOSE 80/tcp

CMD ["nginx", "-g", "daemon off;"]
