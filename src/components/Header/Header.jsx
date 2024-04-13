import styles from './Header.module.scss'
import {Link, useLocation} from "react-router-dom";
import {navList} from "../../helper/data";
import {useContext} from "react";
import {AuthContext} from "../../context/context";


const Header = () => {

    // variables
    const location = useLocation()
    const {pathname} = location
    const {setArea} = useContext(AuthContext)


    return (
        <header className={`${styles.header}`}>
            <div className="inside">
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Link to="/">
                            <p>Portfo<span>lio</span></p>
                        </Link>
                    </div>
                    <div className="link">

                        <nav>
                            {pathname === "/" && <ul>
                                {navList.map(nav => (
                                    <li key={nav.id} onClick={() => setArea(nav.area)}>{nav.label}</li>
                                ))}

                            </ul>}
                        </nav>

                    </div>
                </div>
            </div>


        </header>
    )
}
export default Header