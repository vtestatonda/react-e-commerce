const CardComponent = ({ product, AgregarAlCarrito }) => {
  return (
    <div className="card col-4">
      <img
        src={product.thumbnail}
        className="card-img-top"
        alt="Card img cap"
      />
      <div className="card-title">
        <h5 className="card-title">
          {" "}
          {product.title} ${product.price}
        </h5>
        <p className="card-text"> texto que pongo lo que quiero</p>
        <button
          className="btn btn-primary"
          onClick={(event) => {
            AgregarAlCarrito(event, product);
            //creamos un boton, ese boton con un evento onclic. Se ejecuta una funcion que recibe ese callback con el evento (que se genero en el navegador con el onclick) y se lo enviamos a una fucion donde enviamos el evento y un producto.
            //recibimos el evento que esta susediendo en nuestro navegador (del sitio en este caso) y como lo recibimos lo enviamos a la funcion
          }}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};
export default CardComponent;
