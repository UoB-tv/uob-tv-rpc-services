
ffmpeg -re -i rabbit.mp4 -b:a:0 32k -b:a:1 64k -b:v:0 1000k -b:v:1 3000k  \
  -map 0:a -map 0:a -map 0:v -map 0:v -f hls \
  -master_pl_name output/master.m3u8 \
  output/out_%v.m3u8


ffmpeg -hide_banner -y -i rabbit.mp4 -threads 4 \
  -vf scale=w=640:h=360:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 10 -hls_playlist_type vod  -b:v 800k -maxrate 856k -bufsize 1200k -b:a 96k -hls_segment_filename output/360p_%03d.ts output/360p.m3u8 \
  -vf scale=w=842:h=480:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 10 -hls_playlist_type vod -b:v 1400k -maxrate 1498k -bufsize 2100k -b:a 128k -hls_segment_filename output/480p_%03d.ts output/480p.m3u8 \
  -vf scale=w=1280:h=720:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 10 -hls_playlist_type vod -b:v 2800k -maxrate 2996k -bufsize 4200k -b:a 128k -hls_segment_filename output/720p_%03d.ts output/720p.m3u8 \


ffmpeg -hide_banner -y -i rabbit.mp4 -threads 4 \
    -b:a:0 32k -b:v:0 800k \
    -b:a:1 48k  -b:v:1 1500k \
    -b:a:2 48k  -b:v:2 3000k \
    -c:a aac -ar 48000  -map 0:v -map 0:a:0 -map 0:v -map 0:a:0 -map 0:v -map 0:a:0 \
    -f hls \
    -var_stream_map "v:0,a:0 v:1,a:1 v:2,a:2" \
    -master_pl_name manifest.m3u8 \
    output%v.ts



ffmpeg -hide_banner -y -i rabbit.mp4 -threads 4 \
  -vf scale=w=-1:h=720:force_original_aspect_ratio=decrease -c:a aac -ar 48000 -c:v h264 -profile:v main -crf 20 -sc_threshold 0 -g 48 -keyint_min 48 -hls_time 10 -hls_playlist_type vod -b:v 2800k -maxrate 2996k -bufsize 4200k -b:a 128k -hls_segment_filename output/720p_%03d.ts output/720p.m3u8 \
