export type Area = "Biology" | "Physics";

// Presenta problemas
// enum Area2 {
//   Physics = "Physics",
//   Biology = "Biology",
// }

export interface Scientist {
  id: number;
  name: string;
  area: Area;
}

export const scientists: Scientist[] = [
  {
    id: 1,
    name: "Galilei",
    area: "Physics",
  },
  {
    id: 2,
    name: "Mendel",
    area: "Biology",
  },
  {
    id: 3,
    name: "Newton",
    area: "Physics",
  },
  {
    id: 4,
    name: "Einstein",
    area: "Physics",
  },
  {
    id: 5,
    name: "Morgan",
    area: "Biology",
  },
  {
    id: 6,
    name: "Hooke",
    area: "Biology",
  },
];

export default scientists;
