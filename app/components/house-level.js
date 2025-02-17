import styles from "./house-level.module.css";
import React from 'react';

function Heading(props) {
    
    const letters = props.children.split("")
    let spans = []
    for (const letter of letters){
        const randomTilt = Math.random() * 10 - 5
        const randomSize = (Math.random() * 1- 0.5) + 8
        const span = React.createElement('span', {
                className: styles.letter, 
                style: {
                    "--tilt" : randomTilt + "deg",
                    "--size" : randomSize + "vw"
                }
            }, 
            letter !== " " ? letter : "\u00A0"
        )
        spans.push(span)
    }
    return(
        <h1 className={props.className}>
            {spans}
        </h1>
    )
}

export default function HouseLevel(props) {
    return(
    <section className={`${styles.body} ${props.className}`}>
        <Heading className={styles.header}>{props.header}</Heading>
        {props.children}
    </section>
    )
}