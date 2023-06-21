import KampusCard from "../partials/KampusCard";

const data = [
  {
    name: "Kampus A",
    akreditasi: "Akreditasi A",
    ranking: 1,
    location: "Campus Location",
    image: "some image link here",
  },
  {
    name: "Kampus B",
    location: "Campus Location",
    akreditasi: "Akreditasi B",
    ranking: 2,
    image: "some image link here",
  },
  {
    name: "Kampus C",
    location: "Campus Location",
    akreditasi: "Akreditasi A",
    ranking: 3,
    image: "some image link here",
  },
  // Tambahkan data lainnya dari database sesuai dengan struktur yang sama
];

const List = () => {
  return (
    <div className="list md:px-0 px-3">
      <h2 className="md:text-4xl text-3xl font-extrabold text-gray-800 capitalize mt-10">
        Daftar Kampus Rank Nasional
      </h2>
      <div className="result grid  md:grid-cols-3 2xl:grid-cols-4 gap-8 py-10">
        {data.map((kampus, index) => (
          <KampusCard key={index} kampus={kampus} />
        ))}
      </div>
    </div>
  );
};

// const List = () => {
//   return (
//     <div className="list">
//       <div className="header flex">
//         <h2>Daftar Kampus</h2>
//         <h2>Rank nasional</h2>
//       </div>
//       {data.map((kampus, index) => (
//         <div key={index} className="kampus">
//           <div className="image">
//             <img src={kampus.image} alt="" />
//           </div>
//           <div className="name-akreditasi">
//             <h3>{kampus.name}</h3>
//             <p>{kampus.akreditasi}</p>
//           </div>
//           <p className="kampus-rank">{kampus.ranking}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

export default List;
