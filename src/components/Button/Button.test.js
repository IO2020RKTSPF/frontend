import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

import Button from "./Button";

describe("Button", () => {
  test("renders component", () => {
    const { getByText, container } = render(
      <Button className="accent-button" text="Wypożycz" disabled={true} />
    );

    expect(container.firstChild).toHaveClass("accent-button");
    expect(container.firstChild).toHaveAttribute("disabled");
    expect(getByText("Wypożycz")).toBeInTheDocument();
  });
  test("onClick", async () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(
      <Button onClick={mockOnClick} text="Wypożycz" />
    );

    await act(async () => {
      fireEvent.click(getByText("Wypożycz"));
    });

    expect(mockOnClick).toHaveBeenCalled();
  });
});
