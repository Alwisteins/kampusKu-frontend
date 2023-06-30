const getAllCampus: Array<object> = [];

fetch("http://localhost:88/api/v1/campus/")
  .then((response) => response.json())
  .then((json) => {
    const campuss: Array<object> = json.kampus;
    campuss.forEach((campus) => getAllCampus.push(campus));
  });

export default getAllCampus;
