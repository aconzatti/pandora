FROM node:14.4.0-alpine

## Diretorio de execução do container (exec)
WORKDIR /usr/src/app

## Intall npm
RUN npm install --global npm@6.14.5

## Copia os gerenciadores de dependencia para a imagem
COPY package*.json ./

## Instala as dependencias no container
RUN npm install --no-fund

## Copia todo o projeto para a pasta
COPY . .

## Executa o servidor com -- watch 
## Não utilizado quando utilizar o docker-compose
CMD [ "npm", "start" ]