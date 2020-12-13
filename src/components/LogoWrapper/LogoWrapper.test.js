import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import LogoWrapper from "./LogoWrapper";

describe("LogoWrapper", () => {
  test("renders component", () => {
    const { getByText } = render(
      <MemoryRouter>
        <LogoWrapper text="© 2020 Wszelkie prawa zastrzeżone." />
      </MemoryRouter>
    );

    expect(getByText("© 2020 Wszelkie prawa zastrzeżone.")).toBeInTheDocument();

    const link = document.querySelector("a");
    const image = document.querySelector("img");

    expect(link.getAttribute("href")).toBe("/");
    expect(image.getAttribute("src")).toBe("logo.svg");
  });
});
