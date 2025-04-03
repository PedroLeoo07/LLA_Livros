import styles from "../styles/Banner1.module.css";  

export default function Banner1() {
    return (

        <footer className={styles.footer}>
                <div>
                    <h1 className={(styles.h1)}>LivrariaLLA 📚</h1>
                    <p className={(styles.p)}>Bem-vindo à LivrariaLLA</p>
                    <p>onde você encontra os melhores livros!</p>
                </div>

                <nav>
                    <a href="#inicio">Início</a>
                    <a href="#destaque">Destaques da Semana</a>
                    <a href="#categorias">Categorias</a>
                    <a href="#Lancamentos">Lançamentos</a>
                </nav>
        </footer>
    );
}
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

