import { render, RenderResult } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import state from "../../testing/data/state";
import { itHasHeading } from "../../testing/content";
import { itHasNavigationLinks } from "../../testing/links";
import OverviewPage from ".";

describe("overview page", () => {
  let result: RenderResult;

  beforeEach(() => {
    const store = createStore(() => state);
    result = render(
      <Provider store={store}>
        <BrowserRouter>
          <OverviewPage />
        </BrowserRouter>
      </Provider>
    );
  });

  itHasHeading("Overview", () => result);

  itHasNavigationLinks(() => result);
});
