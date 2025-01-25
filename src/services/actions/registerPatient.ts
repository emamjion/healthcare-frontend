"use server";

export const registerPatient = async (formData: FormData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/create-patient`,
    {
      method: "POST",
      body: formData,
      cache: "no-store",
    }
  );

  const patientInfo = await response.json();
  return patientInfo;
};
