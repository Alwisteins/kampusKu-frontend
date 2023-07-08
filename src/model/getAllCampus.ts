export interface kampus {
  id?: number;
  name?: string;
  tipe?: string;
  deskripsi?: string | null;
  image?: string | null;
  akreditasi?: string | null;
  fakultas?: string | null;
  ranking?: number | null;
  kota?: string | null;
  provinsi?: string | null;
  link?: string | null;
}

export const getAllCampus: kampus[] = [];

// Fetch data into getCampusByFilter
const fetchDataAllCampus = async () => {
  try {
    const response: Response = await fetch(
      "http://localhost:88/api/v1/campus/"
    );
    const json = await response.json();
    const campus: Array<kampus> = json.kampus;
    campus.forEach((object) => {
      getAllCampus.push(object);
    });
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
fetchDataAllCampus();
