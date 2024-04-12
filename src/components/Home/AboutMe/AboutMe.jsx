import Section from "../../Section/Section";

// styles
import styles from './AboutMe.module.scss'
//images
import profile from '../../../assets/images/profile.jpeg'

const AboutMe = () => {
    return (
        <Section title="درباره ی من" subTitle="من کی هستم">
            <div className={styles.container}>
                <img src={profile} className={styles.profileImage} alt=""/>
                <div>
                    <h4 className="sub-title">من مهدی هستم، توسعه دهنده هستم</h4>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab at
                        cupiditate deleniti deserunt doloremque doloribus ducimus est laudantium libero magnam maxime
                        perferendis quis quos repellendus reprehenderit, sequi vero voluptas?</p>
                </div>
            </div>
        </Section>
    )
}
export default AboutMe