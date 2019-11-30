import { render, RenderResult } from "@testing-library/react";
import React from "react";
import { itHasHeading } from "../../testing/content";
import { itHasNavigationLinks } from "../../testing/links";
import NotFoundPage from ".";
import { AllProviders } from "../../testing/providers";

describe("not found page", () => {
  let result: RenderResult;

  beforeEach(() => {
    result = render(<NotFoundPage />, { wrapper: AllProviders });
  });

  itHasHeading("Not Found", () => result);

  itHasNavigationLinks(() => result);
});
