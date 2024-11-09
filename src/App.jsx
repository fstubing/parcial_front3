import { useState } from "react";
import Card from "./Components/Card";

const App = () => {
  const [user, setUser] = useState({
    nombre: "",
    anime: "",
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.nombre.trim().length >= 3 && user.anime.trim().length >= 6) {
      setShow(true);
    } else {
      setError(true);
    }
  };
  return (
    <div className="container p-5">
      <h1 className="text-center">Anime Favorito</h1>
      {show ? (
        <Card nombre={user.nombre} anime={user.anime} />
      ) : (
        <form onSubmit={handleSubmit}>
          <label className="form-label">Nombre:</label>
          <input
            className="form-control mb-3"
            placeholder="Ingrese su nombre (no debe ser inferior a tres caracteres)"
            name="nombre"
            type="text"
            value={user.nombre}
            onChange={handleChange}
          />
          <label className="form-label">Anime Favorito:</label>
          <input
            className="form-control mb-3"
            placeholder="Ingrese el nombre de su anime favorito (no debe ser inferior a seis caracteres)"
            name="anime"
            type="text"
            value={user.anime}
            onChange={handleChange}
          />
          <button className="btn btn-primary btn-lg">Enviar</button>
          {error && (
            <h4 className="text-danger my-3">
              Por favor chequea que la información sea correcta
            </h4>
          )}
        </form>
      )}
    </div>
  );
};

export default App;
