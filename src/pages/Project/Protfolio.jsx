import {useLocation} from "react-router-dom";
import ImageProject from "../../components/ImageProject/ImageProject";
import LinkToSite from "../../components/LinkToSite/LinkToSite";
import Section from "../../components/Section/Section";
import MyProjects from "../../components/Home/MyProjects/MyProjects";

const Protfolio = () => {

    const location = useLocation()
    const {project} = location.state

    return (
        <>
            <Section title="Protfolio" subTitle="سایت ساده برای معرفی شخص و مهارت ها">
                <ImageProject image={project.image}/>
                {project.link && <LinkToSite address={project.link} caption="مشاهده ی سایت امضا کافه"/>}
                <p className="description">این که سایت شخصی خودم هم هست. ی سایت خیلی خیلی ساده ولی به نظر خودم زیبا، که
                    برای پیاده سازیش از html و css و React استفاده شده.</p>
                <p className="description">هر شخص دیگری میتونه در این سایت به معرفی خودش و مهارت هاش و نمونه کارهاش
                    بپردازه. برای راحتی دوستان لینک git هم به زودی میذارم تا هر کسی که دوست داشته باشه و بخواهد ی نمونه
                    ازش داشته باشه و به راحتی خودشو معرفی کنه</p>
                <p className="description"></p>
            </Section>
            <MyProjects/>
        </>
    )
}
export default Protfolio