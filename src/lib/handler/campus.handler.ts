export const getAllCampus = async () => {
  const res = await fetch(import.meta.env.VITE_BACKEND_API_URL + "/kampus");
  const { kampus: data } = await res.json(); // Ganti struktur res data (kalo perlu)
  return data;
};
