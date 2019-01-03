FROM nginx:1.5-alpine
EXPOSE 8080
COPY hls.conf /

CMD ["nginx", "-c", "/hls.conf"]
