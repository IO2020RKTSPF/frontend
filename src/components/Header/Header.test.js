import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Header from "./Header";

const title = "Poszukaj książki w swojej okolicy";
const subtitle = "Każdy czytający książki wie.";

describe("Header", () => {
  test("renders component", () => {
    const { getByText } = render(<Header title={title} subtitle={subtitle} />);

    expect(getByText(title)).toBeInTheDocument();
    expect(getByText(subtitle)).toBeInTheDocument();
  });
});
