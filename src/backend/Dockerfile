FROM node:lts-buster-slim AS development

# Create app directory
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json
RUN npm ci

COPY . /usr/src/app

EXPOSE 3000

CMD [ "npm", "run", "dev" ]

#FROM development as dev-envs
#RUN apt-get update
#RUN apt-get install -y --no-install-recommends git
#
#RUN useradd -s /bin/bash -m vscode
#RUN groupadd docker
#RUN usermod -aG docker vscode
#
## install Docker tools (cli, buildx, compose)
#COPY --from=gloursdocker/docker / /
#CMD [ "npm", "run", "dev" ]