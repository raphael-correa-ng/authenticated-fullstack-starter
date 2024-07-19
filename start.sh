#!/bin/bash

(cd back && docker-compose up --build) & \
(cd front && docker-compose up --build)