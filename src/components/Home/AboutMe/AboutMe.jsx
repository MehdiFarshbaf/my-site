import Section from "../../Section/Section";

// styles
import styles from './AboutMe.module.scss'

//images
import profile from '../../../assets/images/profile.jpeg'

//cv
import cv from './../../../assets/cv/Mehdi Farshbaf 2024.pdf'

const AboutMe = () => {
    return (
        <Section title="درباره ی من" subTitle="من کی هستم">
            <div className={styles.container}>
                <img src={profile} className={styles.profileImage} alt=""/>
                <div>
                    <h4 className="sub-title">من مهدی هستم، توسعه دهنده هستم</h4>
                    <p className="description">سلام، وقت بخیر. من مهدی فرشباف هستم. برنامه نویس و توسعه دهنده ی React.
                        حدود دو سال هست که وارد دنیای برنامه نویسی شدم و عاشق این کار هستم.</p>
                    <div className="buttonContainer">
                        <a href={cv} download="MyExampleDoc" target='_blank'>
                            <button className='button'>دانلود رزومه</button>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default AboutMe