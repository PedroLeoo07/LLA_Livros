import styles from "@/styles/container.module.css"
import CardBook from "./Detaques"

export default function Container({title, data, cardClassName}){
    return(
        <section className={styles.section}>
            <h1 className={styles.title}>{title}</h1>
            <ul className={styles.list}>
                {data.map((item) => (
                    <CardBook key={item.title} {...item} className={cardClassName}></CardBook>
                ))}
            </ul>
        </section>
    )
}