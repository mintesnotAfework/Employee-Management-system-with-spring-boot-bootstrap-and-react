FROM nginx:stable-alpine3.20-perl

COPY ./default.conf /etc/nginx/conf.d/default.conf

USER root

RUN mkdir /var/www/ems-react\  
&& chown -R root:www-data /var/www/ems-react/\ 
&& chmod 755 /var/www/ems-react\ 
  && apk add --update --no-cache --virtual .tmp openssl\
   && mkdir -p /etc/nginx/ssl\
    && chmod -R 755 /etc/nginx && \
    openssl req -x509 -nodes -days 365\
     -newkey rsa:2048 -keyout /etc/nginx/ssl/secure_note.key\
      -out /etc/nginx/ssl/secure_note.crt -subj\
       "/C=ET/ST=Amhara/L=Bahir Dar/O=Bahir dar/CN=mintesnot.afework"\
        && apk del .tmp
# USER nginx