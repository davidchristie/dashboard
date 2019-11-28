import { RenderResult } from "@testing-library/react";

export const itHasHeading = (text: string, getResult: () => RenderResult) => {
  it(`has heading "${text}"`, () => {
    const result = getResult();
    result.getByText(text, {
      selector: `h1`
    });
  });
};
