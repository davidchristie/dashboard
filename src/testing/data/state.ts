import State from "../../types/State";
import { product1, product2 } from "./products";

const state: State = {
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
