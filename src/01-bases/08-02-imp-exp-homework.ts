import scientists, { type Scientist, type Area } from "../data/scientist.data";

const getScientistsByArea = (area: Area): Scientist[] => {
  const scientistsByArea = scientists.filter(
    (scientist) => scientist.area === area,
  );

  return scientistsByArea;
};

// const getScientistsByArea = (area: Area): Scientist[] =>
//   scientists.filter((scientist) => scientist.area === area);

export default getScientistsByArea;
