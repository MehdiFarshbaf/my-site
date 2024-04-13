import Section from "../../components/Section/Section";
import ImageProject from "../../components/ImageProject/ImageProject";
import LinkToSite from "../../components/LinkToSite/LinkToSite";
import MyProjects from "../../components/Home/MyProjects/MyProjects";
import {useLocation} from "react-router-dom";

const Fiat = () => {

    const location = useLocation()
    const {project} = location.state

    return (
        <>
            <Section title="Money Exchange" subTitle="صرافی ثانیه (استرالیا)">
                <ImageProject image={project.image}/>
                {project.link && <LinkToSite address={project.link} caption="مشاهده ی سایت صرافی ثانیه"/>}
                <p className="description">دومین کاری که توو شرکت ویستا دست گرفتم صرافی ثانیه بود. اولین بارم بود که میخواستم ی کار دو زبانه بزنم. این صرافی واقع در کشور استرالیا هستش. متاسفانه این پروژه به مشکل برخورد و نشد که کامل باشه (بیشتر بخاطر بک اند)</p>
                <p className="description"></p>
                <p className="description"></p>
                <p className="description"></p>

            </Section>
            <MyProjects/>
        </>
    )
}
export default Fiat