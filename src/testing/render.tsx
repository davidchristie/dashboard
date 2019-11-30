import { RenderResult, render } from "@testing-library/react";
import React from "react";
import { AllProviders } from "./providers";

export const describeRender = (
  name: string,
  element: React.ReactElement,
  fn: (getResult: () => RenderResult) => void
) => {
  describe(name, () => {
    let result: RenderResult;

    beforeEach(() => {
      result = render(element, {
        wrapper: AllProviders
      });
    });

    fn(() => result);
  });
};
