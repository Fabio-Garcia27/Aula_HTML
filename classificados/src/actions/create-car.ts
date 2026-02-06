"use server";

import { redirect } from "next/navigation";
import { createCarSchema } from "../schemas/create-car";

export const createCar = async (formData: FormData) => {
  const data = createCarSchema.safeParse({
    title: formData.get("title") ?? "",
    description: formData.get("description") ?? "",
    author_name: formData.get("author_name") ?? "",
    author_email: formData.get("author_email") ?? "",
    negotiable: formData.get("negotiable"),
    price_from: formData.get("price_from") ?? "",
    price_to: formData.get("price_to") ?? "",
    img: formData.get("img") as File,
  });
  /*
  const parsed = createCarSchema.safeParse(data);

  if (!parsed.success) {
    console.log(parsed.error.flatten().fieldErrors);
    return;
  }
*/

  if (data.success) {
    console.log(data.data);
  } else {
    console.log(data.error.flatten().fieldErrors);
  }

  redirect("/");
};
