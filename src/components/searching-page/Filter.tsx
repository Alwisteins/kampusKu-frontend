import { FaFilter } from "react-icons/fa";
import Button from "../base/button";
import { cn } from "../../utils";
import { input } from "../../utils/base";
import Flexbox from "../base/Flexbox";
import getProvince from "../../model/getProvince";

function Filter() {
  return (
    <div className="md:w-auto w-full">
      <h1 className="md:text-4xl text-2xl font-bold mb-5 text-center text-gray-800">
        Filter Pencarian Kampus
      </h1>
      <form className="md:flex grid  md:items-center md:justify-between gap-3 my-10">
        <Flexbox
          items="center"
          className="md:flex-row flex-col md:items-center items-start md:mb-0 mb-3"
        >
          <label htmlFor="jenis">Jenis</label>
          <select className={cn(input())}>
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
          <select className={cn(input())}>
            <option className={getProvince[0].provinsi} value="">Semua</option>
            {
              getProvince.map((province) => {
                return <option className={province.provinsi} value="">{province.provinsi}</option>
              })
            }
          </select>
        </Flexbox>

        <Flexbox
          items="center"
          className="md:flex-row flex-col md:items-center items-start md:mb-0 mb-3"
        >
          <label htmlFor="akreditasi">Akreditasi</label>
          <select className={cn(input())}>
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
          <select className={cn(input())}>
            <option value="">Semua</option>
            <option value="Teknik">Teknik</option>
            <option value="Ekonomi">Ekonomi</option>
            <option value="Hukum">Hukum</option>
          </select>
        </Flexbox>

        <Button className="rounded-xl">
          <FaFilter />
          Filter
        </Button>
      </form>
    </div>
  );
}

export default Filter;
