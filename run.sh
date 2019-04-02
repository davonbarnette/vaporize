#!/usr/bin/env bash
docker login &&
docker pull davonbarnette/vaporize:latest &&
docker run -d --env-file vaporize.env -p 8000:8000 davonbarnette/vaporize