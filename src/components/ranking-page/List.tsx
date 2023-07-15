import KampusCard from "../partials/KampusCard";

const datas = [
  {
    name: "Kampus A",
    akreditasi: "Akreditasi A",
    ranking: 1,
    lokasi: "Campus Location",
    image: "some image link here",
    kota: "Kota Satu",
    provinsi: "Provinsi Satu",
  },
  {
    name: "Kampus B",
    lokasi: "Campus Location",
    akreditasi: "Akreditasi B",
    ranking: 2,
    image: "some image link here",
    kota: "Kota Dua",
    provinsi: "Provinsi Dua",
  },
  {
    name: "Kampus C",
    lokasi: "Campus Location",
    akreditasi: "Akreditasi A",
    ranking: 3,
    image: "some image link here",
    kota: "Kota Tiga",
    provinsi: "Provinsi Tiga",
  },
  {
    name: "Kampus A",
    akreditasi: "Akreditasi A",
    ranking: 1,
    lokasi: "Campus Location",
    image: "some image link here",
    kota: "Kota Satu",
    provinsi: "Provinsi Satu",
  },
  {
    name: "Kampus B",
    lokasi: "Campus Location",
    akreditasi: "Akreditasi B",
    ranking: 2,
    image: "some image link here",
    kota: "Kota Dua",
    provinsi: "Provinsi Dua",
  },
  {
    name: "Kampus C",
    lokasi: "Campus Location",
    akreditasi: "Akreditasi A",
    ranking: 3,
    image: "some image link here",
    kota: "Kota Tiga",
    provinsi: "Provinsi Tiga",
  },
  // Tambahkan data lainnya dari database sesuai dengan struktur yang sama
];

const List = () => {
  // const [data, setData] = useState<Kampus[]>([]);

  // useEffect(() => {
  //   async function getData() {
  //     const res = await fetch("http://localhost:3001/kampus?_page=10&_limit=5");
  //     const { kampus: data } = await res.json();
  //     setData(data);
  //   }
  //   getData();
  // }, []);

  return (
    <div className="list md:px-0 px-3 min-h-screen">
      <h2 className="md:text-4xl text-3xl font-extrabold text-gray-800 capitalize mt-10">
        Daftar Kampus Rank Nasional
      </h2>
      <div className="result grid  md:grid-cols-3 2xl:grid-cols-4 gap-8 py-10">
        {datas.map((kampus, index) => (
          <KampusCard key={index} kampus={kampus} />
          // <RankCardSkeleton />
        ))}
      </div>
    </div>
  );
};

export default List;
