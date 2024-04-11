const Section = ({title = "", subTitle = "", children}) => {
    return (
        <section className='section'>
            <div className="inside">
                <div className="title">
                    <h2>{title}</h2>
                    <p className='subTitle'>{subTitle}</p>
                    <div className="line"/>
                </div>
                <div className="w100">
                    {children}
                </div>

            </div>
        </section>
    )
}
export default Section