export interface Province {
  provinsi: string;
}

const getProvince: Province[] = [];

const fetchData = async () => {
  try {
    const response = await fetch("http://localhost:88/api/v1/province");
    const json = await response.json();
    const provinces: Province[] = json.provinsi;

    const filteredProvinces = provinces.filter((province, index, self) => {
      // Mengembalikan objek hanya jika index pertamanya dalam array
      return index === self.findIndex((p) => p.provinsi === province.provinsi);
    });

    getProvince.push(...filteredProvinces);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

// fetchData();

export default getProvince;
