FROM node:21

RUN apt-get update && apt-get install -y libssl-dev

# Instalação do nodemon globalmente
RUN npm install -g nodemon

WORKDIR /code/backend

# Copiando o código fonte para o diretório de trabalho
COPY . .

# Limpa o cache npm
RUN npm cache clean --force
RUN npm install
RUN npm install -g prisma
RUN npx prisma generate

# Expor a porta 3001
EXPOSE 3001

# CMD para iniciar a aplicação usando nodemon
CMD ["npm", "run", "dev"]
