import { Seq } from "immutable";

export default function printBestStudents(obj) {
  const bestStudents = Seq(obj)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      score: student.score,
      firstName:
        student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName:
        student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1),
    }));

  console.log(bestStudents.toJS());
}

const grades = {
  1: {
    score: 99,
    firstName: "guillaume",
    lastName: "salva",
  },
  2: {
    score: 69,
    firstName: "guillau",
    lastName: "sal",
  },
  3: {
    score: 79,
    firstName: "guillu",
    lastName: "sa",
  },
};

printBestStudents(grades);
