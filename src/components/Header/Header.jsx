import styles from './Header.module.scss'
import {Link} from "react-router-dom";

const Header = () => {
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
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                                <li>Services</li>
                                <li>Skills</li>
                                <li>Teams</li>
                                <li>Contacts</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>


        </header>
    )
}
export default Header