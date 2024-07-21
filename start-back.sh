#!/bin/bash

(cd back && docker-compose -f docker-compose-auth-service.yml up --build) & \
(cd back && docker-compose -f docker-compose-my-service.yml up --build)