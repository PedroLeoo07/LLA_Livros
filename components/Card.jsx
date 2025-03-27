import styles from "@/styles/card.module.css"

export default function CardBook({image, title, author, stars, principal_gender, secondary_gender, price}){
    return(
        <li>
            <div>
                <img src={image} alt="" className={styles.image}/>
                <div className={styles.div_main}>
                    <h1 className={styles.title}>{title}</h1>
                    <h4 className={styles.author}>{author}</h4>
                    <h3 className={styles.stars}>{stars}</h3>
                    <div className={styles.genders}>
                        <h3 className={styles.principal_gender}>{principal_gender}</h3>
                        <h3 className={styles.secondary_gender}>{secondary_gender}</h3>
                    </div>
                    <div className={styles.prices}>
                        <h1 className={styles.price}>{price}</h1>
                        <h1 className={styles.emotes}>❤ 🛒</h1>
                    </div>
                </div>
            </div>
        </li>
    )
}