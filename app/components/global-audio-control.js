import styles from "./global-audio-control.module.css";

export default function GlobalAudioControl(){
    return(
        <input className={styles.slider} type="range" min="1" max="100" defaultValue="50"></input>
    )
}