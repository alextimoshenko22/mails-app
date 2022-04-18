import { Link } from "react-router-dom"
import styles from "./styles.module.css"

export const NotFound = () => {
    return <div className={styles.root}>
        <span>Страница не найдена</span>
        <Link to={"/mails"}>Перейти на Mails App</Link>
    </div>
}