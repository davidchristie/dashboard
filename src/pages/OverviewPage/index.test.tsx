import { render, RenderResult } from "@testing-library/react";
import React from "react";
import { itHasHeading } from "../../testing/content";
import { itHasNavigationLinks } from "../../testing/links";
import { AllProviders } from "../../testing/providers";
import OverviewPage from ".";

describe("overview page", () => {
  let result: RenderResult;

  beforeEach(() => {
    result = render(<OverviewPage />, {
      wrapper: AllProviders
    });
  });

  itHasHeading("Overview", () => result);

  itHasNavigationLinks(() => result);
});
