import estilo from '../styles/Header.module.css';

export function Header(){
    return(
        <header className={estilo.conteiner}>
            <h1 className={estilo.titulo}> BugTrack </h1>
        </header>
    )
}