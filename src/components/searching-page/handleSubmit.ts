import { Kampus, getAllCampus } from "../../model/getAllCampus";

//kalo value dataKampus =  getAllCampus.slice() maka state di Result.jsx harus array kosong
const dataKampus: Kampus[] = getAllCampus.slice();

const getCampusByFilter: Array<Kampus> = [];
let url = "http://localhost:88/api/v1/campus/filter";

export const handleSubmit = async (): Promise<void> => {
  const jenis = (document.getElementById("jenis") as HTMLSelectElement).value;
  const provinsi = (document.getElementById("provinsi") as HTMLSelectElement)
    .value;
  const akreditasi = (
    document.getElementById("akreditasi") as HTMLSelectElement
  ).value;
  const fakultas = (document.getElementById("fakultas") as HTMLSelectElement)
    .value;

  // Query params
  const params: string[] = [];

  if (jenis === "" && provinsi === "" && akreditasi === "" && fakultas === "") {
    // Mengganti nilai dataKampus dengan sesuai filter ketika disubmit
    dataKampus.splice(0, dataKampus.length, ...getAllCampus);
  } else if (
    jenis !== "" ||
    provinsi !== "" ||
    akreditasi !== "" ||
    fakultas !== ""
  ) {
    if (jenis !== "") params.push(`type=${jenis}`);
    if (provinsi !== "") params.push(`province=${provinsi}`);
    if (akreditasi !== "") params.push(`akreditasi=${akreditasi}`);
    if (fakultas !== "") params.push(`fakultas=${fakultas}`);
  }

  // Update URL
  if (params.length > 0) {
    url += `?${params.join("&")}`;
  }

  try {
    const response = await fetch(url);
    const json = await response.json();
    const campuss: Array<Kampus> = json.kampus;
    campuss.forEach((campus) => getCampusByFilter.push(campus));

    // Mengganti nilai dataKampus dengan sesuai filter ketika disubmit
    dataKampus.splice(0, dataKampus.length, ...getCampusByFilter);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export { dataKampus };
