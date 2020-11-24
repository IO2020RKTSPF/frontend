import React from "react";
import { fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";

import BookForm from "./BookForm";

const title = "Tytuł";
const author = "Autor";
const isbn = "Numer ISBN";
const photo = "Zdjęcie";
const descritpion = "Opis";
const button = "Dodaj";
const longText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae viverra urna. Morbi placerat dignissim sem, a pulvinar lorem egestas ac.";

describe("Add book form", () => {
  test("renders component", () => {
    const { getByText, getByLabelText } = render(<BookForm />);

    expect(getByLabelText(title)).toBeInTheDocument();
    expect(getByLabelText(author)).toBeInTheDocument();
    expect(getByLabelText(isbn)).toBeInTheDocument();
    expect(getByLabelText(photo)).toBeInTheDocument();
    expect(getByLabelText(descritpion)).toBeInTheDocument();
    expect(
      getByText(
        "Niepowtarzalny 13-cyfrowy (kiedyś 10-cyforwy) identyfikator książki."
      )
    ).toBeInTheDocument();
    expect(getByText(button)).toBeInTheDocument();
  });
  test("submits empty form", async () => {
    const { getByText, getAllByText } = render(<BookForm />);

    await act(async () => {
      fireEvent.click(getByText(button));
    });

    expect(getAllByText("Pole wymagane")).toHaveLength(4);
  });

  describe("Valid inputs", () => {
    test("with valid inputs (10-digit isbn)", async () => {
      const mockOnSubmit = jest.fn();
      const { getByText, getByLabelText } = render(
        <BookForm onSubmit={mockOnSubmit} />
      );

      await act(async () => {
        fireEvent.change(getByLabelText(title), {
          target: { value: "Dziady, część 3" },
        });
        fireEvent.change(getByLabelText(author), {
          target: { value: "Adam Mickiewicz" },
        });
        fireEvent.change(getByLabelText(isbn), {
          target: { value: "0123456789" },
        });
        fireEvent.change(getByLabelText(photo), {
          target: {
            files: [
              new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" }),
            ],
          },
        });
        fireEvent.change(getByLabelText(descritpion), {
          target: { value: "Dramat polski" },
        });
      });

      await act(async () => {
        fireEvent.click(getByText(button));
      });

      expect(mockOnSubmit).toHaveBeenCalled();
    });
    test("with valid inputs (13-digit isbn)", async () => {
      const mockOnSubmit = jest.fn();
      const { getByText, getByLabelText } = render(
        <BookForm onSubmit={mockOnSubmit} />
      );

      await act(async () => {
        fireEvent.change(getByLabelText(title), {
          target: { value: "Dziady, część 3" },
        });
        fireEvent.change(getByLabelText(author), {
          target: { value: "Adam Mickiewicz" },
        });
        fireEvent.change(getByLabelText(isbn), {
          target: { value: "0123456789012" },
        });
        fireEvent.change(getByLabelText(photo), {
          target: {
            files: [
              new File(["(⌐□_□)"], "chucknorris.png", { type: "image/png" }),
            ],
          },
        });
        fireEvent.change(getByLabelText(descritpion), {
          target: { value: "Dramat polski" },
        });
      });

      await act(async () => {
        fireEvent.click(getByText(button));
      });

      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });

  describe("Invalid inputs", () => {
    test("with all invalid inputs, version 1", async () => {
      const { getByText, getByLabelText } = render(<BookForm />);
      await act(async () => {
        fireEvent.change(getByLabelText(title), {
          target: { value: "a" },
        });
        fireEvent.change(getByLabelText(author), {
          target: { value: "a" },
        });
        fireEvent.change(getByLabelText(isbn), {
          target: { value: "012345678901" },
        });
        fireEvent.change(getByLabelText(photo), {
          target: {
            files: [
              new File(["(⌐□_□)"], "chucknorris.git", { type: "image/gif" }),
            ],
          },
        });
        fireEvent.change(getByLabelText(descritpion), {
          target: {
            value: longText,
          },
        });
      });
      await act(async () => {
        fireEvent.click(getByText(button));
      });

      expect(
        getByText("Tytuł minimalnie może mieć 3 znaki")
      ).toBeInTheDocument();
      expect(
        getByText("Autor minimalnie może mieć 3 znaki")
      ).toBeInTheDocument();
      expect(getByText("Numer ISBN to 10 lub 13 cyfr")).toBeInTheDocument();
      expect(
        getByText("Zdjęcie tylko w formacie .png lub .jpg")
      ).toBeInTheDocument();
      expect(
        getByText("Opis maksymalnie może mieć 70 znaków")
      ).toBeInTheDocument();
    });
    test("with all invalid inputs, version 2", async () => {
      const { getByText, getByLabelText } = render(<BookForm />);
      await act(async () => {
        fireEvent.change(getByLabelText(title), {
          target: {
            value: longText,
          },
        });
        fireEvent.change(getByLabelText(author), {
          target: {
            value: longText,
          },
        });
        fireEvent.change(getByLabelText(isbn), {
          target: { value: "0a" },
        });
        fireEvent.change(getByLabelText(photo), {
          target: {
            files: [],
          },
        });
        fireEvent.change(getByLabelText(descritpion), {
          target: {
            value: longText,
          },
        });
      });
      await act(async () => {
        fireEvent.click(getByText(button));
      });

      expect(
        getByText("Tytuł maksymalnie może mieć 70 znaków")
      ).toBeInTheDocument();
      expect(
        getByText("Autor maksymalnie może mieć 70 znaków")
      ).toBeInTheDocument();
      expect(getByText("Numer ISBN to 10 lub 13 cyfr")).toBeInTheDocument();
      expect(getByText("Pole wymagane")).toBeInTheDocument();
      expect(
        getByText("Opis maksymalnie może mieć 70 znaków")
      ).toBeInTheDocument();
    });
  });
});
