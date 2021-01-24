import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Footer from "./Footer";

describe("Footer", () => {
  test("renders component", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    expect(getByText("© 2020 Wszelkie prawa zastrzeżone.")).toBeInTheDocument();
    expect(getByText("Polityka prywatności")).toBeInTheDocument();
    expect(getByText("Regulamin")).toBeInTheDocument();

    const links = document.querySelectorAll("a");

    expect(links[0].getAttribute("href")).toBe("/");
    expect(links[1].getAttribute("href")).toBe("/privacy-policy");
    expect(links[2].getAttribute("href")).toBe("/regulations");
  });
});
