import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CardComponent from "../component/CardComponent";
import InfoBarComponent from "../component/InfoBar";
import { EcommerceContext } from "../context/EcommerceContext";

const ProductsContainer = () => {
  const { products, carrito, setCarrito, fetchdata, setProducts, productsone } =
    useContext(EcommerceContext);
  //esta es la manera para llamar al contexto.
  //esta manera es la correcta pero antes usabamos esta:  const [products, setProducts] = useState([]);
  //las llaves implican una desustruraccion de objetos, tomando la propiedad de productos de nuestro objeto. Nuestro objeto tiene muchas caracteristicas, nosotros tomamos solo la de products.
  const { busqueda } = useParams();
  //utilizamos este parametro que recibimos de una ruta dinamica. y luego se lo enviamos en useeffect al contexto para que cambie el termino de busqueda.
  //recibimos a carrito y retornamos la vista que queremos.

  const AgregarAlCarrito = (event, products) => {
    carrito.push(products);
    setCarrito([...carrito]);
    console.log(carrito);
    //entre llaves porque es un array y los ... para que tome todo el array
    //con setCarrito estamos usando el hook, actualiza el valor de carrito definido en el inicio. De no ser asi quedaria el valor dentro de la funcion y no se mostraria en pantalla.
  };

  useEffect(() => {
    fetchdata(busqueda);
    return () => {};
  }, [busqueda]);
  //si no ponemos el filtro [], el useefect cada vez que se cambie el estado se va a volver a ejecutar, sin los cochetes el bucle es infinito, con los corchetes entiende que se ejecuta al primera vez.

  const handleKeyUp = (e) => {
    console.log(e.target.value);

    const productsFilter = productsone.filter((element) => {
      if (element.title.toUpperCase().match(e.target.value.toUpperCase())) {
        return true;
      }
      return false;
    });
    //entramos al listado de products y filtramos, Por cada elemento

    setProducts(productsFilter);
    //estoy cambiando la busqueda solo a los filtrados.
  };

  return (
    <div className="container bg-warning">
      <InfoBarComponent carrito={carrito} handleKeyUp={handleKeyUp} />
      arriba termina el primer componente (carrito)
      <div className="row px-2 py-2">
        segundo componente
        {products.map((element, index) => {
          return (
            <span key={index}>
              <CardComponent
                product={element}
                AgregarAlCarrito={AgregarAlCarrito}
                //dentro de las llaves enviamos al funcion para que la pueda recibir, ahora cardcomponent recibe esta funcion para poder hacer la callback
              />
              tercer componenete
            </span>
          );
        })}
      </div>
    </div>
  );
};
export default ProductsContainer;
