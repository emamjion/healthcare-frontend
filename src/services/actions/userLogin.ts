"use server";

import { FieldValues } from "react-hook-form";


export const userLogin = async (data : FieldValues) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(data) ,
      cache: "no-store",
    }
  );
  const userInfo = await response.json();
  return userInfo;
};
