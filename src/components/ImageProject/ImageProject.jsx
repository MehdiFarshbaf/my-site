import styles from './ImageProject.module.scss'

const ImageProject = ({image}) => {
    return (
        <div className={styles.row}>
            <img src={image} alt=""/>
        </div>
    )
}
export default ImageProject