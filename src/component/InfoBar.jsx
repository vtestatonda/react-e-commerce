import { Link } from "react-router-dom";

const InfoBarComponent = ({ carrito, Children, handleKeyUp }) => {
  return (
    <div className="bg-white py-4">
      <div>
        <input
          type="text"
          onInput={handleKeyUp}
          placeholder="Buscar por nombre"
        />
      </div>
      <Link to={"/"}> ir a la home </Link>
      <h4>elementos en el carrito: {carrito.length}</h4>
      {Children}
    </div>
  );
};
export default InfoBarComponent;
