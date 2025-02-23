import React, { useRef, useEffect, forwardRef, useImperativeHandle } from 'react'
import Hls from 'hls.js'
import styles from './video-player.module.css'

const VideoPlayer = forwardRef(({ src, thumbnail }, ref) => {
    const videoRef = useRef(null)
    const posterRef = useRef(null)
    const hlsRef = useRef(null)
    const loadingRef = useRef(false)

    useEffect(() => {
        const video = videoRef.current

        if (Hls.isSupported() && src) {
            let hls = new Hls({
                autoStartLoad: false
            })
            hls.loadSource(src)
            hls.attachMedia(videoRef.current)

            // Preload only the first second
            hls.on(Hls.Events.MANIFEST_PARSED, () => {
                hls.startLoad(0) // Start loading from 0 seconds
                setTimeout(() => hls.stopLoad(), 1000) // Stop loading after a short delay
            })

            hlsRef.current = hls

            return () => hls.destroy()
        } else if (videoRef.current?.canPlayType('application/vnd.apple.mpegurl')) {
            // Native HLS handling for Apple devices
            video.preload = 'metadata' // Load only metadata (not full video)
            video.src = src
            video.load() // Apply the preload behavior

            video.onloadedmetadata = () => {
                video.currentTime = 0.001 // Forces loading the first segment
            }
        }
    }, [src])

    useImperativeHandle(ref, () => ({
        play: () => {
            videoRef.current?.play()
            posterRef.current.style.opacity = "0"

            console.log(loadingRef.current)
            if (!loadingRef.current) {
                hlsRef.current?.startLoad()
                loadingRef.current = true // Persist state
            }
            
        },
        stop: () => {
            if (videoRef.current) {
                videoRef.current.pause()
                videoRef.current.currentTime = 0
                posterRef.current.style.opacity = "1"
                // videoRef.current.load() // This will reset the video and show the poster
            }
        },
        getVideoElement: () => videoRef.current
    }))

    return (
        <>
            <video playsInline ref={videoRef} className={styles.HTMLVideo}/>
            <img ref={posterRef} className={styles.poster} src={thumbnail}/>
        </>
    )
})
VideoPlayer.displayName = "VideoPlayer"
export default VideoPlayer
