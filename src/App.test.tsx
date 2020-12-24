import { render } from "@testing-library/react";
import { expect } from "chai";
import App from "./App";

describe("<App>", () => {
  it("renders learn react link", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/wee/i);
    expect(document.body.contains(linkElement));
  });
});
