import styles from "../styles/Categoria.module.css";

export default function Categoria() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Categorias Populares</h1>
        <a href="#" className={styles.verTodas}>Ver todas</a>
      </div>
      <div className={styles.categorias}>
        <div className={styles.categoria}><span>🚀</span> Ficção Científica</div>
        <div className={styles.categoria}><span>💕😍</span> Romance</div>
        <div className={styles.categoria}><span>👨🏼‍🎨</span> Biografia</div>
        <div className={styles.categoria}><span>💻</span> Tecnologia</div>
        <div className={styles.categoria}><span>🧙‍♂️</span> Fantasia</div>
        <div className={styles.categoria}><span>📜</span> História</div>
        <div className={styles.categoria}><span>🌱</span> Autoajuda</div>
        <div className={styles.categoria}><span>🔍</span> Mistério</div>
      </div>
    </div>
  );
}

