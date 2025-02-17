## My Portfolio

This was made using Next.js as well as a couple utility scripts.

## Utility Scripts

This project uses two utility scripts. The first, computeBounds.js, is used to find the rectangle of transparency in the picture frame images so that the video elements can be properly sized to them. The second, mp4Converter, uses ffmpeg to convert the .mp4 files in the videos folder to HLS files and playlists. This way the website can stream the videos instead of directly loading the .mp4 files.