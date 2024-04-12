import styles from './Chart.module.scss'

const Chart = ({info}) => {
    return (
        <div key={info.id} className={styles.container}>
            <div className={styles.info}>
                <span>{info.title}</span>
                <span>{`${info.percent}%`}</span>
            </div>
            <div className={styles.line}>
                <div style={{width: `${info.percent}%`}} className={styles.bar}/>
            </div>
        </div>
    )
}
export default Chart