FROM node:21

RUN apt-get update && apt-get install -y libssl-dev


WORKDIR /app/

ENV PATH /app/node_modules/.bin:$PATH
COPY ./package.json .
COPY ./prisma/ .




# Limpa o cache npm
RUN npm cache clean --force
RUN npm install
RUN npm install -g prisma
RUN npx prisma generate

COPY . .

# Expor a porta 3001
EXPOSE 3001

# Define o comando padrão para iniciar a aplicação
CMD ["node", "index.js"]
