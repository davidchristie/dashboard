import { Store } from "redux";

import { createReduxStore } from ".";

describe("redux store", () => {
  let store: Store;

  beforeEach(() => {
    store = createReduxStore();
  });

  describe("initial state", () => {
    it("matches snapshot", () => {
      expect(store.getState()).toMatchSnapshot();
    });
  });
});
