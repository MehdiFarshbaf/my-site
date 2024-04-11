import Header from "../../components/Header/Header";

const MainLayout = ({children}) => {
    return (
        <>
            <Header/>
            {children}
            <footer>this is footer</footer>
        </>
    )
}
export default MainLayout