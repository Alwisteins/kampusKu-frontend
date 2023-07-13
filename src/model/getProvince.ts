import { useState, useEffect } from 'react'

interface Province {
  provinsi: string;
}

const getProvince: Province[] = [];
export const getProvinceStorageKey = "getProvince";

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:88/api/v1/province");
    const json = await response.json();
    const provinces: Province[] = json.provinsi;

    const filteredProvinces = provinces.filter((province, index, self) => {
      // Mengembalikan objek hanya jika index pertamanya dalam array
      return index === self.findIndex((p) => p.provinsi === province.provinsi);
    });

    localStorage.setItem(getProvinceStorageKey, JSON.stringify(filteredProvinces));

    getProvince.push(...filteredProvinces);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

// State untuk menandai apakah data telah selesai di-fetch
const [isDataFetched, setIsDataFetched] = useState(false);

useEffect(() => {
  // Fetch data hanya jika array getProvince kosong
  if (getProvince.length === 0) {
    fetchData().then(() => {
      setIsDataFetched(true);
    });
  } else {
    setIsDataFetched(true);
  }
}, []);

export default function useGetProvince(): [Province[], boolean] {
  return [getProvince, isDataFetched];
}
