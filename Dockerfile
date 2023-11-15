FROM node
WORKDIR /usr/app
copy package.json .
RUN npm install
copy . .
EXPOSE 5000
CMD ["npm","start"]
