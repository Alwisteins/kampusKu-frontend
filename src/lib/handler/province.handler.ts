export const getAllProvince = async () => {
  const res = await fetch(import.meta.env.VITE_BACKEND_API_URL + "/provinsi");
  const { provinsi: data } = await res.json(); // Ganti struktur res data (kalo perlu)
  return data;
};
