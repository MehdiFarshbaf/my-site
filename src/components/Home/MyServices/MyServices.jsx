import Section from "../../Section/Section";
import {myServices} from "../../../helper/data";
import ServiceCard from "../../Cards/ServiceCard/ServiceCard";

const MyServices = () => {
    return (
        <Section title="خدمات من" subTitle="من ارائه می کنم" area="Services">
            <div className="myServiceContainer">
                {myServices.map(service => (<ServiceCard service={service} key={service.id}/>))}
            </div>
        </Section>
    )
}
export default MyServices