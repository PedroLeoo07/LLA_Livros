import styles from "../styles/Card4.module.css";

export default function banner() {
    return (
        <div className={styles.div1}>
            <div className={styles.div2}>
                <h2 className={styles.h2}>Fique por dentro das novidades!</h2>
                <p className={styles.p}>
                    Assine nossa newsletter e receba atualizações sobre novos lançamentos, promoções exclusivas e dicas de leitura.
                </p>
                <div className={styles.div3}>
                    <input
                        type="email"
                        placeholder="Seu melhor e-mail"
                        className={styles.input}
                    />
                    <button className={styles.button}>Entrar</button>
                </div>
            </div>
        </div>  
    )
}