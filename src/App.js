import {Route, Routes} from 'react-router-dom'
import MainLayout from "./Layouts/MainLayout/MainLayout";

//pages
import Home from "./pages/Home/Home";
import Fiat from "./pages/Project/Fiat";
import EmzaCafe from "./pages/Project/EmzaCafe";
import Protfolio from "./pages/Project/Protfolio";
import Salmode from "./pages/Project/Salmode";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

const App = () => {
    return (
        <ScrollToTop>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/project/emza-cafe" element={<EmzaCafe/>}/>
                    <Route path="/project/portfolio" element={<Protfolio/>}/>
                    <Route path="/project/fiat" element={<Fiat/>}/>
                    <Route path="/project/salmode" element={<Salmode/>}/>
                </Routes>
            </MainLayout>
        </ScrollToTop>
    )
}
export default App