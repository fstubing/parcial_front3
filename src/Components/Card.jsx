const Card = ({ nombre, anime }) => {
  return (
    <div className="card text-bg-success my-5 text-center">
      <div className="card-header">ENVIO EXITOSO</div>
      <div className="card-body">
        <p className="card-text">Hola {nombre}!</p>
        <p className="card-text">Tu anime favorito es: {anime}</p>
      </div>
    </div>
  );
};

export default Card;
