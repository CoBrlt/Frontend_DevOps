FROM nginx:alpine3.18

WORKDIR /app

COPY ./dist/angular-16-crud/* /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
