FROM nginx:1.15-alpine
EXPOSE 8080
COPY hls.conf /
RUN mkdir -p /etc/nginx/logs/
CMD ["nginx", "-c", "/hls.conf"]
