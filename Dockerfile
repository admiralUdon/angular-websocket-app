FROM httpd:latest

# SPA require rewrite module
RUN sed -i \
		-e 's/^#\(LoadModule .*mod_rewrite.so\)/\1/' \
		conf/httpd.conf

COPY httpd/httpd.conf /usr/local/apache2/conf/httpd.conf
COPY httpd/.htaccess /usr/local/apache2/htdocs/.htaccess
COPY dist/angular-websocket-app.zip /usr/local/apache2/htdocs/angular-websocket-app.zip
WORKDIR /usr/local/apache2/htdocs/
RUN apt update && apt install zip -y
RUN unzip -o angular-websocket-app.zip
RUN rm -rf angular-websocket-app.zip

EXPOSE 80