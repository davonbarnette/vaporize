#!/usr/bin/env bash
set -e
echo "===========> Checking for migrations"
python manage.py migrate --no-input || exit
echo "===========> Moving static files" &&\
python manage.py collectstatic --no-input &&\
echo "===========> Done collecting static files" &&\
echo "===========> Starting vaporize" &&\
exec python manage.py runserver 0.0.0.0:8080