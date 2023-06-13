import "./result.scss";
//sample data
const data = [
  {
    name: "Kampus A",
    location: "kampus location",
    image: "some image link here",
  },
  {
    name: "Kampus B",
    location: "kampus location",
    image: "some image link here",
  },
  {
    name: "Kampus C",
    location: "kampus location",
    image: "some image link here",
  },
  // Tambahkan data lainnya dari database sesuai dengan struktur yang sama
];

function Result() {
  return (
    <div className="result">
      {data.map((kampus, index) => (
        <div key={index} className="kampus">
          <div className="image">
            <img src={kampus.image} alt="" />
          </div>
          <div className="name-location">
            <h3>{kampus.name}</h3>
            <p>{kampus.location}</p>
          </div>
          <a href="/:id" className="detail">Detail</a>
        </div>
      ))}
    </div>
  );
}

export default Result;
