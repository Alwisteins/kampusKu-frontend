import { FaFilter } from "react-icons/fa";
import Button from "../base/button";
import { cn } from "../../utils";
import { input } from "../../utils/base";
import Flexbox from "../base/Flexbox";
import { useState } from "react";
import useFetch from "../../model/useFetch";

export let dataKampus;

function Filter() {
  //get all campus
  const getAllCampus = () => {
    const { data, loading, error } = useFetch(
      "http://localhost:88/api/v1/campus/"
    );
    dataKampus = data || loading || error;
  };
  getAllCampus();

  const [jenis, setJenis] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [akreditasi, setAkreditasi] = useState("");
  const [fakultas, setFakultas] = useState("");

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();

    // Query params
    const params: string[] = [];
    let url: string = "http://localhost:88/api/v1/campus/filter";

    if (jenis) params.push(`type=${jenis}`);
    if (provinsi) params.push(`province=${provinsi}`);
    if (akreditasi) params.push(`akreditasi=${akreditasi}`);
    if (fakultas) params.push(`fakultas=${fakultas}`);

    // Update URL
    if (params.length == 1) {
      url += `?${params}`;
    } else if (params.length >= 2) {
      url += `?${params.join("&")}`;
    }

    const { data, loading, error } = useFetch(url);
    dataKampus = data || loading || error;
  };

  //get province
  const { data, loading, error } = useFetch(
    "http://localhost:88/api/v1/province"
  );

  return (
    <div className="md:w-auto w-full">
      {loading ? (
        "loading..."
      ) : (
        <>
          <h1 className="md:text-4xl text-2xl font-bold mb-5 text-center text-gray-800">
            Filter Pencarian Kampus
          </h1>
          <form className="md:flex grid  md:items-center md:justify-between gap-3 my-10">
            <Flexbox
              items="center"
              className="md:flex-row flex-col md:items-center items-start md:mb-0 mb-3"
            >
              <label htmlFor="jenis">Jenis</label>
              <select
                className={cn(input())}
                id="jenis"
                value={jenis}
                onChange={(e) => setJenis(e.target.value)}
              >
                <option value="">Semua</option>
                <option value="Universitas">Universitas</option>
                <option value="Politeknik">Politeknik</option>
                <option value="Institut">Institut</option>
                <option value="Akademi">Akademi</option>
              </select>
            </Flexbox>

            <Flexbox
              items="center"
              className="md:flex-row flex-col md:items-center items-start md:mb-0 mb-3"
            >
              <label htmlFor="provinsi">Provinsi</label>
              <select
                className={cn(input())}
                id="provinsi"
                value={provinsi}
                onChange={(e) => setProvinsi(e.target.value)}
              >
                <option className={data[0].provinsi} value="">
                  Semua
                </option>
                {data !== null &&
                  data.map((province) => {
                    return (
                      <option className={province.provinsi} value="">
                        {province.provinsi}
                      </option>
                    );
                  })}
              </select>
            </Flexbox>

            <Flexbox
              items="center"
              className="md:flex-row flex-col md:items-center items-start md:mb-0 mb-3"
            >
              <label htmlFor="akreditasi">Akreditasi</label>
              <select
                className={cn(input())}
                id="akreditasi"
                value={akreditasi}
                onChange={(e) => setAkreditasi(e.target.value)}
              >
                <option value="">Semua</option>
                <option value="A">Akreditasi A</option>
                <option value="B">Akreditasi B</option>
                <option value="C">Akreditasi C</option>
              </select>
            </Flexbox>

            <Flexbox
              items="center"
              className="md:flex-row flex-col md:items-center items-start md:mb-0 mb-3"
            >
              <label htmlFor="fakultas">Fakultas</label>
              <select
                className={cn(input())}
                id="fakultas"
                value={fakultas}
                onChange={(e) => setFakultas(e.target.value)}
              >
                <option value="">Semua</option>
                <option value="Teknik">Teknik</option>
                <option value="Ekonomi">Ekonomi</option>
                <option value="Hukum">Hukum</option>
              </select>
            </Flexbox>

            <Button className="rounded-xl" onClick={handleSubmit}>
              <FaFilter />
              Filter
            </Button>
          </form>
        </>
      )}
    </div>
  );
}

export default Filter;
