import {useContext, useEffect, useRef} from "react";
import {AuthContext} from "../../context/context";

const Section = ({title = "", subTitle = "", area = "", children}) => {

    const {area: areaContext} = useContext(AuthContext)
    const titleRef = useRef(null)

    useEffect(() => {
        if (areaContext == area) {
            titleRef.current.scrollIntoView({behavior: 'smooth'});
        }
    }, [areaContext]);

    return (
        <section className='section' ref={titleRef}>
            <div className="inside">
                <div className="title">
                    <h2 >{title}</h2>
                    <p className='subTitle'>{subTitle}</p>
                    <div className="line"/>
                </div>
                <div className="w-100">
                    {children}
                </div>

            </div>
        </section>
    )
}
export default Section