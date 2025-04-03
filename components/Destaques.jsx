import styles from "@/styles/lancamento.module.css"

export default function DestaqueList({image, title, author, stars, principal_gender, secondary_gender, price}){
    return(
        <li>
            <div className={styles.card_book}>
                <img src={image} alt="" className={styles.image}/>
                <div className={styles.div_main}>
                    <h1 className={styles.title}>{title}</h1>
                    <h4 className={styles.author}>{author}</h4>
                    <h3 className={styles.stars}>{stars}</h3>
                    <div className={styles.genders}>
                        <div className={styles.gender}>
                            <h3 className={styles.principal_gender}>{principal_gender}</h3>
                        </div>
                        <div className={styles.gender}>
                            <h3 className={styles.principal_gender}>{secondary_gender}</h3>
                        </div>
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