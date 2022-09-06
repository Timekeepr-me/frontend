import Button from "./Button"
import styles from '../../styles/Home.module.scss';


export default function LandingPage({className}) {
    return (
        <div className={styles.landingPage}>
            <h1>
                Create your on-chain calender today.
            </h1>

            <Button text='Enter App' className={styles.defaultButton}/>
        </div>
    )
}