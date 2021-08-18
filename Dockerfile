FROM node:12
COPY ./ /app
WORKDIR /app
RUN npm install -g cnpm --registry=https://registry.npm.taobao.org 
RUN cnpm install && npm run build
RUN cnpm install node-less --save
FROM nginx
RUN mkdir /app
COPY --from=0 /app/dist /app
COPY nginx.conf /etc/nginx/nginx.conf



