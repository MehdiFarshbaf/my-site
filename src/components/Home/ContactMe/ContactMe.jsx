import Section from "../../Section/Section";

import styles from './ContactMe.module.scss'
import {contactInfoList} from "../../../helper/data";
import ContactInfo from "../../ContactInfo/ContactInfo";

const ContactMe = () => {
    return (
        <Section title="با من تماس بگیر" subTitle="در تماس باشید">
            <div className={styles.container}>
                <div className='w-100'>
                    <h2 className='sub-title'>به من پیام بزن</h2>
                    <form action="#" className="">
                        <div className={styles.fields}>
                            <input className={styles.field} type="text" placeholder="نام"/>
                            <input className={styles.field} type="email" placeholder="ایمیل"/>
                        </div>
                        <div className={styles.field}>
                            <input className={styles.field} type="text" placeholder="عنوان"/>
                        </div>
                        <div className="">
                            <textarea name="" id="" cols="30" placeholder="توضیحات" rows="8"/>
                        </div>
                        <div className="buttonContainer">
                            <button className='button' type='submit'>ارسال پیام</button>
                        </div>
                    </form>
                </div>
                <div className='w-100'>
                    <h2 className='sub-title'>در تماس باشید</h2>
                    <p className="description">خوشحال میشم با انتقادات و پیشنهادات خودتون منو راهنمایی کنید.</p>
                    <div className={styles.infoList}>
                        {contactInfoList.map(info => <ContactInfo info={info}/>)}
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default ContactMe