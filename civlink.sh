#!/usr/bin/env bash

# Setup e-petition database
cd e-petitions
bin/run rake db:setup
cd ..

# Start fixmystreet docker containers
cd fixmystreet
docker-compose up -d
cd ..

# Start e-petition docker containers
cd e-petitions
docker-compose up -d
cd ..
