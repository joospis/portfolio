import styles from "./footer.module.css"

export default function Footer(props){
    return(
        <footer className={styles.footer}>
            <div className={styles.wrapper}>
                Copyright © 2025 Jasper Bushey |&nbsp;All&nbsp;Rights&nbsp;Reserved
                <br/>
                <details>
                    <summary>Attribution</summary>
                    <a href="https://www.freevector.com/flowers-wallpaper-pattern">Floral Wallpaper - FreeVector.com</a>
                    <br/>
                    <a href="https://www.freevector.com/retro-floral-pattern-wallpaper">Red Wallpaper - FreeVector.com</a>
                </details>
            </div>
        </footer>
    )
}