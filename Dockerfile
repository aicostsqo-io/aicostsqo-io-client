
FROM node:18-alpine
WORKDIR /app
COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
RUN npm prune --production
EXPOSE 3000
CMD ["yarn", "start"]