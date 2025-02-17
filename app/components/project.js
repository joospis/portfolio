import PictureFrame from './picture-frame'
import styles from './project.module.css'

const Project = (props) => {
    return(
        <div className={styles.project}>
            {!props.reversed ? props.children.filter(child => child.type === PictureFrame)[0] : ""}
            <div className={styles.textWrapper}>
                <div className={styles.text}>
                    <h2>{props.title}</h2>
                    <p>{props.children.filter(child => child.type === Project.Text)[0]}</p>
                </div>
            </div>
            {props.reversed ? props.children.filter(child => child.type === PictureFrame)[0] : ""}
        </div>
    )
}
Project.Text = (props) => {
    return(<>{props.children}</>)
}
export default Project