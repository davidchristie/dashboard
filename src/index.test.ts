import { getByText } from "@testing-library/dom";

describe("when application loads", () => {
  let root: HTMLDivElement;

  beforeEach(() => {
    root = document.createElement("div");
    root.id = "root";
    document.body.appendChild(root);
    require(".");
  });

  afterEach(() => {
    document.body.removeChild(root);
  });

  it("displays the overview page", () => {
    getByText(document.body, "Overview", {
      selector: "h1"
    });
  });
});
