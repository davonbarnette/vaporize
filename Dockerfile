FROM node:11.4 as frontend_build

WORKDIR /frontend
COPY ./frontend/package.json .
COPY ./frontend/package-lock.json .
RUN npm install
COPY ./frontend/. .
RUN npm run build
RUN ls -l /frontend/build

FROM python:3.6.7

EXPOSE 8000

WORKDIR /app
COPY ./backend/requirements.txt .
RUN pip3 install --no-cache-dir -r requirements.txt

ADD ./backend /app
COPY --from=frontend_build /frontend/webpack-stats.prod.json .
COPY --from=frontend_build /frontend/build/ ./static/
RUN rm -rf ./static/frontend

ENV DJANGO_DEBUG=False
ENV PYTHONUNBUFFERED=1

CMD ["./run-site.sh"]