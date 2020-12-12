import * as yup from "yup";

const required = "Pole wymagane";
const supportedFormats = ["image/png", "image/jpeg", "image/jpg"];

export const errorMessage = (text) => {
  return <span className="error">{text}</span>;
};

export const validationSchema = yup.object().shape({
  title: yup
    .string()
    .required(required)
    .min(3, "Tytuł minimalnie może mieć 3 znaki")
    .max(70, "Tytuł maksymalnie może mieć 70 znaków"),
  author: yup
    .string()
    .required(required)
    .min(3, "Autor minimalnie może mieć 3 znaki")
    .max(70, "Autor maksymalnie może mieć 70 znaków"),
  isbn: yup
    .string()
    .required(required)
    .matches(/^(\d{10}|\d{13})$/, "Numer ISBN to 10 lub 13 cyfr"),
  photo: yup
    .mixed()
    .test("required", required, (value) => {
      return value && value.length === 1;
    })
    .test("fileFormat", "Zdjęcie tylko w formacie .png lub .jpg", (value) => {
      return value[0] && supportedFormats.includes(value[0].type);
    })
    .test("fileSize", "Maksymalny rozmiar zdjęcia to 1 MB", (value) => {
      return value[0] && value[0].size <= 1000000;
    }),
  description: yup
    .string()
    .required(required)
    .min(3, "Tytuł minimalnie może mieć 3 znaki")
    .max(70, "Opis maksymalnie może mieć 70 znaków"),
});
