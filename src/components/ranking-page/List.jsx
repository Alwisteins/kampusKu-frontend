import "./list.scss";

const data = [
  {
    name: "Kampus A",
    akreditasi: "Akreditasi A",
    ranking: 1,
    image: "some image link here",
  },
  {
    name: "Kampus B",
    akreditasi: "Akreditasi B",
    ranking: 2,
    image: "some image link here",
  },
  {
    name: "Kampus C",
    akreditasi: "Akreditasi A",
    ranking: 3,
    image: "some image link here",
  },
  // Tambahkan data lainnya dari database sesuai dengan struktur yang sama
];

const List = () => {
  return (
    <div className="list">
      <div className="header">
        <h2>Daftar Kampus</h2>
        <h2>Rank nasional</h2>
      </div>
      {data.map((kampus, index) => (
        <div key={index} className="kampus">
          <div className="image">
            <img src={kampus.image} alt="" />
          </div>
          <div className="name-akreditasi">
            <h3>{kampus.name}</h3>
            <p>{kampus.akreditasi}</p>
          </div>
          <p className="kampus-rank">{kampus.ranking}</p>
        </div>
      ))}
    </div>
  );
};

export default List;
