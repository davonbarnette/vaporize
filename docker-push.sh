#!/usr/bin/env bash
docker login &&
docker build -t vaporize:latest . &&
docker tag vaporize:latest davonbarnette/vaporize:latest &&
docker push davonbarnette/vaporize:latest