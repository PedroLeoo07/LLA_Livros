import styles from '../styles/Header.module.css';

export default function Header() {
    return (
        <div>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', background: 'linear-gradient(to right, #2950a9, #7d93f5)' }}>

                <h1 className={styles.h1}>LivrariaLLA 📚</h1>
        
                <a href="#inicio" style={{ textDecoration: 'none', color: '#FFFF' }}>Início</a>
                <a href="#destaque" style={{ textDecoration: 'none', color: '#FFFF  ' }}>Destaque da Semana</a>
                <a href="#categorias" style={{ textDecoration: 'none', color: '#FFFF' }}>Categorias</a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', backgroundColor: '#fff', padding: '5px', borderRadius: '10px' }}>
                    <input 
                        type="text" 
                        placeholder="Pesquisar" 
                        style={{ padding: '5px', fontSize: '16px', width: '200px', border: 'none', outline: 'none' }} 
                    />
                    <span role="img" aria-label="search">🔍</span>
                </div>
                
            </header>
        </div>
    );
}