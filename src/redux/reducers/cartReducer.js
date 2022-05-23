const INIT_STATE = {
  cart: [],
};
//iniciamos la constante en 0 porque si no tiene valor al principio la funcion siguiente devuelve null

export const cartReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "PUSH NEW PRODUCT":
      if (action.payload) {
        // validar stock
        // validar oferta o cupon
        console.log("existe");
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
