import styles from "@/styles/container.module.css"
import CardBook from "./Card"

export default function Container({title}){
    return(
        <section className={styles.section}>
            <h1>{title}</h1>
            <ul className={styles.list}>
                {data.map((item) => (
                    <CardBook key={item.title} {...item} className={cardClassName}></CardBook>
                ))}
            </ul>
        </section>
    )
}