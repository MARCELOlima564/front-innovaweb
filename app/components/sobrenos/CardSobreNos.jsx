const CardSobreNos = ({ foto, nome, funcao, desc, email, icons }) => {
    return (
        <div className="CardMaior">
            <img src={foto} className="fotos"/>
            <h1 className="Nomes">{nome}</h1>
            <h3 className="funcoes">{funcao}</h3>
            <p className="descricao">{desc}</p>
            <div className="DivEmail">
            <p className="email">{email}</p>
            </div>
            <link rel="stylesheet" href={icons} className="link" />
        </div>
    )
}

export default CardSobreNos;