# Dockerfile pour un portfolio statique avec Nginx
FROM nginx:alpine

# Copie des fichiers HTML, CSS et JS vers le répertoire de Nginx
COPY index.html /usr/share/nginx/html/index.html
COPY Main.js /usr/share/nginx/html/Main.js
COPY Main.css /usr/share/nginx/html/Main.css
COPY images/ /usr/share/nginx/html/images/

# Expose le port 8000 pour Nginx
EXPOSE 8000

# Commande de démarrage de Nginx
CMD ["nginx", "-g", "daemon off;"]