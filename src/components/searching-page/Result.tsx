//sample data
// const data = [
//   {
//     name: "Kampus A",
//     location: "kampus location",
//     image: "some image link here",
//   },
//   {
//     name: "Kampus B",
//     location: "kampus location",
//     image: "some image link here",
//   },
//   {
//     name: "Kampus C",
//     location: "kampus location",
//     image: "some image link here",
//   },
//   {
//     name: "Kampus B",
//     location: "kampus location",
//     image: "some image link here",
//   },
//   {
//     name: "Kampus C",
//     location: "kampus location",
//     image: "some image link here",
//   },
//   // Tambahkan data lainnya dari database sesuai dengan struktur yang sama
// ];

import KampusCard from "../partials/KampusCard";
import getAllCampus from "../../model/getAllCampus";

function Result() {
  return (
    <>
      <h4 className="text-2xl font-bold text-center uppercase text-blue-600">
        Hasil Filter
      </h4>
      <div className="result grid  md:grid-cols-3 2xl:grid-cols-4 gap-8 py-10">
        {getAllCampus.map((kampus, index) => (
          <KampusCard key={index} kampus={kampus} />
          // <div key={index} className="kampus">
          //   <div className="image">
          //     <img src={kampus.image} alt="" />
          //   </div>
          //   <div className="name-location">
          //     <h3>{kampus.name}</h3>
          //     <p>{kampus.location}</p>
          //   </div>
          //   <a href="/:id" className="detail">Detail</a>
          // </div>
        ))}
      </div>
    </>
  );
}

export default Result;
