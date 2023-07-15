import { FaFilter } from "react-icons/fa";
import Button from "../base/button";
import { cn } from "../../utils";
import { input } from "../../utils/base";
import Flexbox from "../base/flexbox";
// import getProvince, { Province } from "../../model/getProvince";
import { handleSubmit } from "./handleSubmit";
import { useEffect, useState } from "react";
import { Province } from "../../model/getProvince";
import { IoIosArrowForward } from "react-icons/io";
// import { useQuery } from "@tanstack/react-query";
// import { fetcher } from "../../lib/fetcher";

const Filter = () => {
  const [provinsi, setProvinsi] = useState<Province[]>([]);
  const [status, setStatus] = useState(false);
  const [collapse, setCollapse] = useState(true);

  useEffect(() => {
    // TODO : Lakukan fetch data yang diperlukan
    async function getData() {
      const res = await fetch("http://localhost:3001/provinsi");
      // const provinsi = await res.json();
      const { provinsi, status } = await res.json();
      setProvinsi(provinsi);
      setStatus(status);
    }

    getData();
  }, []);

  if (status == false) return <FilterSkeleton />;

  return (
    <div className="md:w-auto w-full">
      <button
        onClick={() => setCollapse((prev) => !prev)}
        className="md:text-2xl mx-auto text-lg font-bold mb-5 text-center text-gray-800 flex items-center gap-x-2"
      >
        Filter Pencarian Kampus
        <IoIosArrowForward className="md:hidden inline-block" />
      </button>
      <form
        method="GET"
        className={`${
          collapse ? "hidden" : "md:flex grid"
        } md:flex py-2 overflow-hidden duration-200 grid md:items-center md:justify-between gap-3 md:px-0 px-3 my-10`}
      >
        <Flexbox
          items="center"
          className="md:flex-row flex-col md:items-center items-start md:mb-0 mb-3"
        >
          <label htmlFor="jenis">Jenis</label>
          <select className={cn(input())} id="jenis" name="jenis">
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
          <select className={cn(input())} id="provinsi" name="provinsi">
            <option value="">Semua</option>
            {provinsi.map((p) => {
              return <option value={p.provinsi}>{p.provinsi}</option>;
            })}
          </select>
        </Flexbox>

        <Flexbox
          items="center"
          className="md:flex-row flex-col md:items-center items-start md:mb-0 mb-3"
        >
          <label htmlFor="akreditasi">Akreditasi</label>
          <select className={cn(input())} id="akreditasi" name="akreditasi">
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
          <select className={cn(input())} id="fakultas" name="fakultas">
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
    </div>
  );
};

const FilterSkeleton = () => {
  const filterField = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="w-1/3 animate-pulse mx-auto h-5 bg-gray-200 rounded-xl mb-5" />
      <div className="grid md:grid-cols-5 grid-cols-1 animate-pulse items-center justify-center gap-5">
        {filterField.map((item) => (
          <div key={item} className="flex gap-x-3">
            <div className="aspect-square h-10 bg-gray-200 rounded-xl" />
            <div className="w-full h-10 bg-gray-200 rounded-xl" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;
