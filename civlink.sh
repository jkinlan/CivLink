#!/usr/bin/env bash

# Update host
sudo apt update
sudo apt upgrade -y

# Install Nginx
audo apt install -y nginx node npm

# Overwrite Nginx config file
cp nginx.config /etc/nginx/sites-available/default.config
sudo systemctl reload nginx

# Overwrite hosts file
cp hosts /etc/hosts

# Setup e-petition database
cd e-petitions
bin/run rake db:setup
cd ..

# Start landing page
cd civlink
rm -rf node_modules
rm package-lock.json
npm cache clean --force
npm install ajv@8.12.0 ajv-keywords@5.1.0
npm install
npm start headless
cd ..

# Start fixmystreet docker containers
cd fixmystreet
docker-compose up -d
cd ..

# Start e-petition docker containers
cd e-petitions
docker-compose up -d
cd ..
