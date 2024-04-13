//styles
import styles from './ProjectCard.module.scss'
import {Link} from "react-router-dom";

const ProjectCard = ({project}) => {
    return (
        <Link to={project.path} state={{project}} key={project.id} className={styles.container}>
            <div className={styles.box}>
                <img src={project.image} alt="" className={styles.image}/>
                <p className={styles.name}>{project.name}</p>
                <p className={styles.description}>{project.description}</p>
            </div>
        </Link>
    )
}
export default ProjectCard