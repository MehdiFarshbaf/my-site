import Section from "../../Section/Section";
import Chart from "../../Chart/Chart";
import {skillsList} from "../../../helper/data";

//styles
import styles from './MySkills.module.scss'
import {FaArrowRight} from "react-icons/fa";


const MySkills = () => {
    return (
        <Section title="مهارت های من" subTitle="چیزی که میدانم">
            <div className={styles.content}>

                <div className={styles.chart}>
                    {skillsList.map(skill => (
                        <Chart info={skill}/>
                    ))}
                </div>
                <div className={styles.description}>
                    <h4 className='sub-title'>مهارت ها و تجربیات من</h4>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab at
                        cupiditate deleniti deserunt doloremque doloribus ducimus est laudantium libero magnam maxime
                        perferendis quis quos repellendus reprehenderit, sequi vero voluptas?</p>
                    {/*<button className='button'>Read more <FaArrowRight/></button>*/}
                </div>
            </div>
        </Section>
    )
}
export default MySkills