import styles from '../styles/Header.module.css';
export default function Header() {
    return (
        <div>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#7d93f5' }}>
                <h1 className={styles.h1}>LivrariaLLA</h1>
                <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '20px', backgroundColor: '#7d93f5' }}>
                <a href="#inicio" style={{ textDecoration: 'none', color: '#FFFF' }}>Início</a>
                <a href="#destaque" style={{ textDecoration: 'none', color: '#FFFF  ' }}>Destaque da Semana</a>
                <a href="#categorias" style={{ textDecoration: 'none', color: '#FFFF' }}>Categorias</a>
            </nav>
                <input 
                    type="text" 
                    placeholder="Pesquisar" 
                    style={{ padding: '5px', fontSize: '16px', width: '200px', borderRadius: '15px', border: '10px' }} 
                />
            </header>
        </div>
    );
}