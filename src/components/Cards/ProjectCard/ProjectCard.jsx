//styles
import styles from './ProjectCard.module.scss'

const ProjectCard = ({project}) => {
    return (
        <div key={project.id} className={styles.container}>
            <div className={styles.box}>
                <img src={project.image} alt="" className={styles.image}/>
                <p className={styles.name}>{project.name}</p>
                <p className={styles.description}>{project.description}</p>
            </div>
        </div>
    )
}
export default ProjectCard