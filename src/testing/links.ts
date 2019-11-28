import { RenderResult } from "@testing-library/react";

export const itHasLink = (
  text: string,
  url: string,
  getResult: () => RenderResult
) => {
  it(`has a link to "${url}" with text "${text}"`, () => {
    const result = getResult();
    result.getByText(text, {
      selector: `a[href="${url}"]`
    });
  });
};

export const itHasNavigationLinks = (getResult: () => RenderResult) => {
  itHasLink("Overview", "/", getResult);

  itHasLink("Products", "/products", getResult);
};
