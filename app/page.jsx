
import styles from "../styles/Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
                <div>
                    <h1>LivrariaLLA 📚</h1>
                    <p>Bem-vindo à LivrariaLLA, onde você encontra os melhores livros!</p>
                </div>

                <nav>
                    <a href="#inicio">Início</a>
                    <a href="#destaque">Destaques da Semana</a>
                    <a href="#categorias">Categorias</a>
                </nav>
        </footer>
    );
}

import styles from "../styles/Home.module.css";

