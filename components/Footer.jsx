import styles from "../styles/Footer.module.css";

export default function Footer() {
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
