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
                        <Chart key={skill.id} info={skill}/>
                    ))}
                </div>
                <div className={styles.description}>
                    <h4 className='sub-title'>مهارت ها و تجربیات من</h4>
                    <p className="description">نزدیک به دو سال در شرکت جوان فکران داده گستر پویا(ویستا) کار کردم. یکسال
                        و چند ماه حظوری و چند ماهی دور کاری. خیلی خب بود، همه چی از اونجا شروع کرد، تیم UI کار رو در
                        فیگما اماده میکرد و بچه های بک و فرانت و موبایل جدا جدا مشغول میشدیم. حظور تمام تیم ها کنار هم
                        باعث شد خیلی از مهارت ها رو از همونجا یاد بگیرم و ...</p>
                </div>
            </div>
        </Section>
    )
}
export default MySkills