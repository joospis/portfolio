const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const srcDir = path.join(__dirname, '..', 'videos');
const outputDir = path.join(__dirname, '..', 'public', 'hls');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(srcDir).forEach(file => {
    if (path.extname(file).toLowerCase() === '.mp4') {
        const videoName = path.basename(file, '.mp4');
        const videoPath = path.join(srcDir, file);
        const videoOutputDir = path.join(outputDir, videoName);
        
        if (!fs.existsSync(videoOutputDir)) {
            fs.mkdirSync(videoOutputDir, { recursive: true });
        }

        const resolutions = [
            { width: 1280, bitrate: '2800k', name: '720p' },
            { width: 854, bitrate: '1400k', name: '480p' },
            { width: 640, bitrate: '800k', name: '360p' }
        ];

        let masterPlaylistContent = "#EXTM3U\n";

        resolutions.forEach(({ width, bitrate, name }) => {
            const outputFilePath = path.join(videoOutputDir, `${name}.m3u8`);
            const command = `ffmpeg -i "${videoPath}" -profile:v baseline -level 3.0 -start_number 0 -hls_list_size 0 -vf scale=${width}:-2 -b:v ${bitrate} -hls_time 6 -f hls "${outputFilePath}"`;
            
            console.log(`Processing ${videoName} at ${name} resolution...`);
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error processing ${videoName} at ${name}:`, error.message);
                } else {
                    console.log(`Completed ${videoName} at ${name}`);
                }
            });

            masterPlaylistContent += `#EXT-X-STREAM-INF:BANDWIDTH=${parseInt(bitrate) * 1000},RESOLUTION=${width}x${Math.round(width * 9 / 16)}\n${name}.m3u8\n`;
        });

        fs.writeFileSync(path.join(videoOutputDir, 'master.m3u8'), masterPlaylistContent);
    }
});

