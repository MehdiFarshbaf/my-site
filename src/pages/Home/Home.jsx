import AboutMe from "../../components/Home/AboutMe/AboutMe";
import MyServices from "../../components/Home/MyServices/MyServices";
import MySkills from "../../components/Home/MySkills/MySkills";
import MyProjects from "../../components/Home/MyProjects/MyProjects";
import ContactMe from "../../components/Home/ContactMe/ContactMe";

const Home = () => {
    return (
        <>
            <AboutMe/>
            <MyServices/>
            <MySkills/>
            <MyProjects/>
            <ContactMe/>
        </>
    )
}
export default Home