
export default function Header() {
    return (
        <div>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#f4f4f4' }}>
                <h1>LivrariaLLA</h1>
                <input 
                    type="text" 
                    placeholder="Pesquisar" 
                    style={{ padding: '5px', fontSize: '16px', width: '200px', borderRadius: '15px', border: '10px' }} 
                />
                <nav style={{ display: 'flex', justifyContent: 'center', gap: '20px', padding: '10px', backgroundColor: '#f4f4f4' }}>
                <a href="#inicio" style={{ textDecoration: 'none', color: '#333' }}>Início</a>
                <a href="#destaque" style={{ textDecoration: 'none', color: '#333' }}>Destaque da Semana</a>
                <a href="#categorias" style={{ textDecoration: 'none', color: '#333' }}>Categorias</a>
            </nav>
            </header>
        </div>
    );
}


