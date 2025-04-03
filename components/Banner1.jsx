import styles from "../styles/Banner1.module.css";  

export default function Banner1() {
    return (
        <div className={styles.div12}>
            <div className={styles.div22}>
                <h2 className={styles.h22}>Fique por dentro das novidades!</h2>
                <p className={styles.p2}>Aproveite as nossas promoções com até 30% de desconto</p>
            </div>
            <div className={styles.card}>
                <h3 className={styles.h3}>📚 Ver Ofertas</h3>
            </div>
        </div>
    )
}