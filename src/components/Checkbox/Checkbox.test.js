import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  test("renders component", () => {
    const { container } = render(<Checkbox />);
    const checkbox = container.querySelector("button");

    expect(checkbox).toHaveClass("checkbox");
  });
  test("onClick", async () => {
    const mockOnCheck = jest.fn();
    const mockOnUncheck = jest.fn();
    const { container } = render(
      <Checkbox onCheck={mockOnCheck} onUncheck={mockOnUncheck} />
    );
    const checkbox = container.querySelector("button");

    await act(async () => {
      fireEvent.click(checkbox);
    });

    expect(checkbox).toHaveClass("checkbox checked");
    expect(mockOnCheck).toHaveBeenCalled();

    await act(async () => {
      fireEvent.click(checkbox);
    });

    expect(checkbox.classList.contains("checked")).toBe(false);
    expect(mockOnUncheck).toHaveBeenCalled();
  });
  test("force check", async () => {
    const { container } = render(<Checkbox isChecked={true} />);
    const checkbox = container.querySelector("button");

    expect(checkbox).toHaveClass("checked");
  });
});
