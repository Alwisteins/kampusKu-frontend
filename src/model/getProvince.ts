interface Province {
  provinsi: string;
}

const getProvince: Province[] = [];

fetch("http://localhost:88/api/v1/province")
  .then((response) => response.json())
  .then((json) => {
    const provinces: Province[] = json.provinsi;

    const filteredProvinces = provinces.filter((province, index, self) => {
      // Mengembalikan objek hanya jika index pertamanya dalam array
      return (
        index ===
        self.findIndex((p) => p.provinsi === province.provinsi)
      );
    });

    getProvince.push(...filteredProvinces);
  });


export default getProvince;
