import Header from "../components/header.jsx"
import Footer from "../components/footer.jsx" 
import Banner1 from "../components/Banner1.jsx"
import Categorias from "../components/categoria.jsx"
import Container from "../components/container.jsx"
import { destaqueLivros } from "@/data/DestaqueList.js"
import Card4 from "../components/Card4.jsx"

export default function Home() {
    return (
        <div>
        <Header/>
        <Banner1/>
        <Container title="Destaque" data={destaqueLivros} />
        <Categorias/>
        <Card4/>
        <Footer/>
        </div>

    )
}

