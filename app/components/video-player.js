import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import Hls from 'hls.js'
import styles from './video-player.module.css'

const VideoPlayer = forwardRef(({ src }, ref) => {
    const videoRef = useRef(null)

    useEffect(() => {
        if (Hls.isSupported() && src) {
            const hls = new Hls()
            hls.loadSource(src)
            hls.attachMedia(videoRef.current)

            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                // Uncomment if autoplay is required
                // videoRef.current.play()
            })

            return () => hls.destroy()
        } else if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
            // Native HLS support (e.g., Safari)
            videoRef.current.src = src + "#t=0.001"
        }
    }, [src])

    useImperativeHandle(ref, () => ({
        play: () => {
            videoRef.current?.play()
        },
        stop: () => {
            if (videoRef.current) {
                videoRef.current.pause()
                videoRef.current.currentTime = 0
            }
        },
        getVideoElement: () => videoRef.current
    }))

    return (
        <video playsInline
            ref={videoRef}
            className={styles.HTMLVideo}
        />
    )
})

export default VideoPlayer
