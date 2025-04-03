import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
                <div>
                    <h1 className={styles.h1}>LivrariaLLA 📚</h1>
                    <p className={styles.p}>Bem-vindo à LivrariaLLA</p>
                    <p className={styles.p}>onde você encontra os melhores livros!</p>
                </div>

                <nav>
                    <div className={styles.navItem}>
                        <a href="#inicio">Links Rapidos</a>
                        <p className={(styles.texto)}>Home</p>
                        <p className={(styles.texto)}>Cátalogo</p>
                        <p className={(styles.texto)}>Ofertas</p>
                        <p className={(styles.texto)}>Sobre Nós</p>
                        <p className={(styles.texto)}>Contato</p>
                    </div>

                    <div className={styles.navItem}>
                        <a href="#categorias">Categorias</a>
                        <p className={(styles.texto)}>Ficção Científica</p>
                        <p className={(styles.texto)}>Romance</p>
                        <p className={(styles.texto)}>Biografia</p>
                        <p className={(styles.texto)}>Tecnologia</p>
                        <p className={(styles.texto)}>Fantasia</p>
                    </div>

                    <div className={styles.navItem}>
                        <a href="#Lancamentos">Redes Sociais</a>
                        <p>a</p>
                    </div>
                </nav>  
        </footer>
    );
}