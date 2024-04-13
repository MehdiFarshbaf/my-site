import styles from './LinkToSite.module.scss'
import {TbWorldWww} from "react-icons/tb";
import {Link} from "react-router-dom";

const LinkToSite = ({address,caption}) => {
    return (
        <div className={styles.row}>
            <TbWorldWww/>
            <a target='_blank'
               rel='noopener noreferrer' href={address}>{caption}</a>
        </div>
    )
}
export default LinkToSite