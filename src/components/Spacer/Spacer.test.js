import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Spacer from "./Spacer";

describe("Spacer", () => {
  test("renders component with width", () => {
    const { container } = render(<Spacer width="100px" />);
    expect(container.querySelector("span").style.width).toEqual("100px");
  });
});
