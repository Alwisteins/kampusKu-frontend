import KampusCard from "../partials/KampusCard";
import { dataKampus } from "./Filter";

function Result() {
  if (dataKampus !== null) {
    if (typeof dataKampus === "string") {
      return (
        <div>
          <p>{dataKampus}</p>
        </div>
      );
    }
    return (
      <div>
        {dataKampus == true ? (
          "loading..."
        ) : (
          <>
            <h4 className="text-2xl font-bold text-center uppercase text-blue-600">
              Hasil Filter
            </h4>
            <div className="result grid  md:grid-cols-3 2xl:grid-cols-4 gap-8 py-10">
              {dataKampus instanceof Array &&
                dataKampus.map((kampus, index) => (
                  <KampusCard key={index} kampus={kampus} />
                ))}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Result;
