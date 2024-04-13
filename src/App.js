import {Route, Routes} from 'react-router-dom'
import MainLayout from "./Layouts/MainLayout/MainLayout";

//pages
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import EmzaCafe from "./pages/Project/EmzaCafe";

const App = () => {
    return (
        <MainLayout>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/project/emza-cafe" element={<EmzaCafe/>}/>
            </Routes>
        </MainLayout>
    )
}
export default App