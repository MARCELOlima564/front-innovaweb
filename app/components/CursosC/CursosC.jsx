
function CursosC({
  titulo,
  modalidade,
  carga_horaria,
  nivel,
  descricao,
  descricao_requisitos,
  programacao,
  modalidade_aula,
  metodologia_ensino,
  idade,
  turnos,
  status,
  imagem
}) {
  return (
    <div className="curso">
      <p className="titulo">{titulo}</p>
      <p className="text">{modalidade}</p>
      <p className="text">{carga_horaria}</p>
      <p className="text">{nivel}</p>
      <p className="text">{descricao}</p>
      <p className="text">{descricao_requisitos}</p>
      <img className="imagem" src={imagem} alt={titulo} />
      <p className="text">{programacao}</p>
      <p className="text">{modalidade_aula}</p>
      <p className="text">{metodologia_ensino}</p>
      <p className="text">{idade}</p>
      <p className="text">{status}</p>
      <p className="text">{turnos}</p>
    </div>
  );
}

export default CursosC;