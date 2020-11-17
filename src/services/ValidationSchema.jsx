import * as yup from "yup";

const required = "Pole wymagane";

export default yup.object().shape({
  title: yup
    .string()
    .required(required)
    .min(3, "Minimum 3 znaki")
    .max(70, "Maksymalnie 70 znaków"),
  author: yup
    .string()
    .required(required)
    .min(3, "Minimum 3 znaki")
    .max(70, "Maksymalnie 70 znaków"),
  isbn: yup
    .string()
    .required(required)
    .matches(/^(\d{10}|\d{13})$/, "Tylko 10 lub 13 cyfr"),
  photo: yup
    .mixed()
    .test("required", required, (value) => {
      return value && value.length === 1;
    })
    .test("fileFormat", "Zdjęcie tylko w formacie .png lub .jpg", (value) => {
      return (
        value[0] &&
        (value[0].type === "image/png" || value[0].type === "image/jpeg")
      );
    })
    .test("fileSize", "Maksymalny rozmiar zdjęcia to 1 MB", (value) => {
      return value[0] && value[0].size <= 1000000;
    }),
  description: yup.string().max(70, "Maksymalnie 70 znaków"),
});
