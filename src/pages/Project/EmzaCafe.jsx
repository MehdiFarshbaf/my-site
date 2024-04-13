import Section from "../../components/Section/Section";
import {useLocation} from "react-router-dom";
import ImageProject from "../../components/ImageProject/ImageProject";
import LinkToSite from "../../components/LinkToSite/LinkToSite";
import MyProjects from "../../components/Home/MyProjects/MyProjects";

const EmzaCafe = () => {

    const location = useLocation()
    const {project} = location.state

    return (
       <>
           <Section title="امضا کافه" subTitle="خرید و سفارش قهوه و محصولات مربوطه">
               <ImageProject image={project.image}/>
               {project.link && <LinkToSite address={project.link} caption="مشاهده ی سایت امضا کافه"/>}
               <p className="description">
                   واقعا دوست داشتم فرانت این پروژه رو به من بدن، وقتی استارت این کارو زدم خیلی خوشحال بود. پر از چالش های
                   جالب بود برام
               </p>
               <p className="description">ی سایت فروشگاهی برای محصولات مربوط به قهوه، تعداد شعبه هست که با انتخاب هر کدوم
                   میشه محصولات اون شعبه رو دید. یا سفارش قهوه داد. یکی از نکات جالبش این بود که وقتی میخواستی قهوه سفارش
                   بدی میتونی ی جمله ای رو انتخاب کنی که روی لیوانت چاپ بشه.</p>
               <p className="description">
                   برای پیاده سازی این کار از html و css خالی استفاده کردم به همراه Mantine دوست داشتنی. اصلا بدون Mantine
                   نمیشه کار کرد.
               </p>
           </Section>
           <MyProjects/>
       </>
    )
}
export default EmzaCafe