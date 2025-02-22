"use client";

import Image from "next/image";
import VideoPlayer from "./video-player";
import styles from "./picture-frame.module.css";
import frameBounds from "../../data/imageBounds.json";
import React from 'react';

export default function PictureFrame(props){
    const data = frameBounds.find(frame => frame.fileName === props.frameFile);
    
    const videoHeight = data.bounds.height / data.bounds.original.height * 101 + '%';
    const videoWidth = data.bounds.width / data.bounds.original.width * 101 + '%';
    const videoTop = data.bounds.top / data.bounds.original.height * 95 + '%';
    const videoleft = data.bounds.left / data.bounds.original.width * 99 + '%';


    const [isOpen, setIsOpen] = React.useState(false);
    const pictureFrameRef = React.useRef(null)
    const videoPlayerRef = React.useRef(null)
    const backgroundRef = React.useRef(null)
    const clickMeRef = React.useRef(null)
    const [wrapperStyle, setWrapperStlye] = React.useState({transform: `rotate(${props.tilt}deg)`})
    const [pictureFrameStyle, setPictureFrameStlye] = React.useState({})
    const [backgroundStyle, setBackgroundStyle] = React.useState({})

    //function closes frame
    async function close(){
        if (!isOpen) return;

        videoPlayerRef.current.stop()

        setIsOpen(false)
        const rect = pictureFrameRef.current.getBoundingClientRect();
        const centerX = window.innerWidth / 2 - rect.width / 2;
        const centerY = window.innerHeight / 2 - rect.height / 2;

        setWrapperStlye(prevStyle => ({
            ...prevStyle,
            transform: `rotate(${props.tilt}deg)`,
            zIndex: '99',
        }));
        setBackgroundStyle({
            opacity: '0',
            cursor: 'default'
        });
        await smoothMoveFrame(centerX, centerY, rect.x, rect.y, window.scrollY)
        setWrapperStlye({transform: `rotate(${props.tilt}deg)`});
        setPictureFrameStlye({});
    }

    //function opens frame
    async function wrapperClick(){
        if (props.clickMe) {
            clickMeRef.current.className = ""
        }

        backgroundRef.current.className = `${styles.background} ${styles.cssTransitionsOnlyAfterPageLoad}`

        videoPlayerRef.current.play()

        const rect = pictureFrameRef.current.getBoundingClientRect();
        const centerX = window.innerWidth / 2 - rect.width / 2;
        const centerY = window.innerHeight / 2 - rect.height / 2;

        setIsOpen(true);
        if (!isOpen){
            setWrapperStlye({
                position: 'fixed',
                width: `${rect.width}px`,
                height: `${rect.height}px`,
                top: `${rect.y}px`,
                left: `${rect.x}px`,
                transform: `scale(${Math.min((window.innerHeight - 40) / rect.height, (window.innerWidth - 40) / rect.width)})`,
                cursor: 'default',
                zIndex: '100'
            })
            setPictureFrameStlye({
                width: `${rect.width}px`,
                height: `${rect.height}px`
            });
            setBackgroundStyle({
                opacity: '1',
                visibility: 'visible',
                cursor: 'pointer'
            });
            smoothMoveFrame(rect.x, rect.y, centerX, centerY)
        }
    }
    //recursive function animates the smooth transition of static positioned frame to fixed positioned frame with animation
    function smoothMoveFrame(posX, posY, targetX, targetY, scrollY = null) {
        return new Promise(resolve => {
            const duration = 1000
            const startTime = performance.now()

            function easeInOutCubic(t) {
                return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
            }

            function animate(currentTime) {
                const elapsedTime = currentTime - startTime
                const t = Math.min(elapsedTime / duration, 1) // normalize time to range [0, 1]
    
                const deltaX = targetX - posX
                const deltaY = targetY - posY
    
                const easedT = easeInOutCubic(t)
    
                const moveX = deltaX * easedT
                let moveY = deltaY * easedT

                if (scrollY){
                    const scrollDiff = scrollY - window.scrollY
                    moveY += scrollDiff
                }
    
                setWrapperStlye(prevStyle => ({
                    ...prevStyle,
                    left: posX + moveX + "px",
                    top: posY + moveY + "px"
                }))
    
                if (t < 1) {
                    requestAnimationFrame(animate)
                } else {
                    resolve()
                }
            }

            requestAnimationFrame(animate)
        })
    }

    //Close frame when video ends
    React.useEffect(() => {
        // console.log(videoPlayerRef.current)
        const videoElement = videoPlayerRef.current?.getVideoElement()
        if (videoElement) {
            const handleEnded = () => {
                close()
                // console.log("ended")
            }
            videoElement.addEventListener('ended', handleEnded)
            return () => {
                videoElement.removeEventListener('ended', handleEnded)
            }
        }
    }, [videoPlayerRef.current?.getVideoElement().src])

    return(
        <div ref={pictureFrameRef} style={pictureFrameStyle} className={styles.pictureFrame}>
            <div style={backgroundStyle} className={styles.background} onClick={close} ref={backgroundRef}></div>
            <div style={wrapperStyle} className={styles.wrapper} onClick={wrapperClick}>
                <div className={styles.video} style={{height: videoHeight, width: videoWidth, top: videoTop, left: videoleft}}>
                    <VideoPlayer ref={videoPlayerRef} src={`/hls/${props.src}/master.m3u8`} thumbnail={`/thumbnails/${props.src}.webp`}></VideoPlayer>
                </div>
                <Image
                    className={styles.frame}
                    src={`/pictureframes/${props.frameFile}`}
                    width={data.bounds.width}
                    height={data.bounds.height}
                    alt="Picture Frame"
                />
                <div className={props.clickMe ? styles.clickMe : "bar"} ref={clickMeRef}>

                </div>

            </div>
        </div>
    );
}
