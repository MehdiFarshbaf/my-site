import Section from "../../Section/Section";
import {projectList} from "../../../helper/data";
import ProjectCard from "../../Cards/ProjectCard/ProjectCard";

const MyProjects = () => {
    return (
        <Section title="پروژه ها" subTitle="نمونه کارهای من" area="Projects">
            <div className="myProjectsContainer">
                {projectList.map(project=>(<ProjectCard key={project.id} project={project} />))}
            </div>
        </Section>
    )
}
export default MyProjects