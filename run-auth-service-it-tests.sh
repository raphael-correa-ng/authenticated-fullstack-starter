#!/bin/bash

cd back && docker-compose -f docker-compose-auth-service-it.yml up --build --remove-orphans --abort-on-container-exit
