import Header from "../../components/Header/Header";

const MainLayout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
}
export default MainLayout