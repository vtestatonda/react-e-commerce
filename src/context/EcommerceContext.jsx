import { createContext, useState } from "react";

export const EcommerceContext = createContext();
//estamos creando el contexto y exportandolo

export const EcommerceProvider = ({ children }) => {
  //estamos creando el proveedor y exportandolo
  //creamos nuestro componente que nos retorna lo que queremos que este en el contexto.
  const [products, setProducts] = useState([]);
  //todos los consumidores van a poder consumir este estado, pero antes hay que enviarlo al proveedor, en este caso en value colocamos products.
  const [carrito, setCarrito] = useState([]);
  //carrito es un estado y setCarrito la funcion que modifica el estado

  const [productsone, setProductsone] = useState([]);

  async function fetchdata(searchQuery) {
    const data = await fetch(
      `https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery}`
    );
    const response = await data.json();
    setProducts(response.results);
    setProductsone(response.results);
  }

  //siempre que llamamos a una api usamos await
  //siempre que usemos await dentro de una funcion tenemos que recordar hacer la funcion asyncronica. el await lo que hace es parar el codigo hasta que llegue la consulta.

  return (
    <EcommerceContext.Provider
      value={{
        products,
        carrito,
        setCarrito,
        fetchdata,
        setProducts,
        productsone,
      }}
    >
      {children}
    </EcommerceContext.Provider>
    //products es lo que se le va a enviar a todos los children
    //retornamos el contexto
  );
};
