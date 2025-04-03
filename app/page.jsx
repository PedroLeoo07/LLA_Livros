import styles from "@/styles/page.module.css"
import CardBook from "@/components/Card"
import { livros } from "@/data/BookList"
import Container from "@/components/Container"

export default function Home (){
    return(
        <Container title="Destaques da Semana" data={ livros } cardClassName={CardBook}/>
    )
}