import Section from "../../Section/Section";

import styles from './ContactMe.module.scss'
import {contactInfoList} from "../../../helper/data";
import ContactInfo from "../../ContactInfo/ContactInfo";
import {useState} from "react";
import {toast} from "react-toastify";
import {handleShowErrorMessage} from "../../../helper/functions";
import http from "./../../../helper/API";

const ContactMe = () => {

    // variables
    const [loading, setLoading] = useState(false)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [description, setDescription] = useState("")

    // functions
    const handleSendMessage = async () => {
        setLoading(true)
        try {
            const message = {name, email, subject, description}

            const {data} = await http.get("/message")
            // const {data} = await http.post("/message", message)
            // if (data.success) {
            //     toast.success(data.message)
            //     setLoading(false)
            // }
            console.log(data)
            setLoading(false)
        } catch (err) {
            setLoading(false)
            await handleShowErrorMessage(err)
        }
    }

    return (
        <Section title="با من تماس بگیر" subTitle="در تماس باشید">
            <div className={styles.container}>
                <div className='w-100'>
                    <h2 className='sub-title'>به من پیام بزن</h2>
                    <div className={styles.fields}>
                        <input className={styles.field} value={name} onChange={e => setName(e.target.value)} type="text"
                               placeholder="نام"/>
                        <input className={styles.field} type="email"
                               value={email}
                               onChange={e => setEmail(e.target.value)}
                               placeholder="ایمیل"/>
                    </div>
                    <div className={styles.field}>
                        <input className={styles.field} type="text"
                               value={subject}
                               onChange={e => setSubject(e.target.value)}
                               placeholder="عنوان"/>
                    </div>
                    <div className="">
                        <textarea name="" id="" cols="30" placeholder="توضیحات"
                                  value={description}
                                  onChange={e => setDescription(e.target.value)}
                                  rows="8"/>
                    </div>
                    <div className="buttonContainer">
                        <button disabled={loading} onClick={() => handleSendMessage()} className='button'>ارسال پیام
                        </button>
                    </div>
                </div>
                <div className='w-100'>
                    <h2 className='sub-title'>در تماس باشید</h2>
                    <p className="description">خوشحال میشم با انتقادات و پیشنهادات خودتون منو راهنمایی کنید.</p>
                    <div className={styles.infoList}>
                        {contactInfoList.map(info => <ContactInfo key={info.id} info={info}/>)}
                    </div>
                </div>
            </div>
        </Section>
    )
}
export default ContactMe