import { render, RenderResult } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import state from "../../testing/data/state";
import { itHasHeading } from "../../testing/content";
import { itHasNavigationLinks } from "../../testing/links";
import NotFoundPage from ".";

describe("not found page", () => {
  let result: RenderResult;

  beforeEach(() => {
    const store = createStore(() => state);
    result = render(
      <Provider store={store}>
        <BrowserRouter>
          <NotFoundPage />
        </BrowserRouter>
      </Provider>
    );
  });

  itHasHeading("Not Found", () => result);

  itHasNavigationLinks(() => result);
});
