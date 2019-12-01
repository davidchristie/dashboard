import { order1, order2 } from "./orders";
import { product1, product2 } from "./products";

const state = {
  orders: {
    details: {
      [order1.id]: order1,
      [order2.id]: order2
    },
    list: [order1, order2]
  },
  products: {
    details: {
      [product1.id]: product1,
      [product2.id]: product2
    },
    list: [product1, product2]
  },
  router: {
    action: "POP",
    location: {
      hash: "",
      key: "g9wn4i",
      pathname: "/",
      search: "",
      state: undefined
    }
  }
};

export default state;
