interface IDetailsMonths {
  seq: number;
  shortName: string;
  fullName: string;
  maxDay: number;
}

const DetailsMonths: IDetailsMonths[] = [
  { seq: 1, shortName: "jan", fullName: "Janeiro", maxDay: 31 },
  { seq: 2, shortName: "fev", fullName: "Fevereiro", maxDay: 28 },
  { seq: 3, shortName: "mar", fullName: "Março", maxDay: 31 },
  { seq: 4, shortName: "abr", fullName: "Abril", maxDay: 30 },
  { seq: 5, shortName: "mai", fullName: "Maio", maxDay: 31 },
  { seq: 6, shortName: "jun", fullName: "Junho", maxDay: 30 },
  { seq: 7, shortName: "jul", fullName: "Julho", maxDay: 31 },
  { seq: 8, shortName: "ago", fullName: "Agosto", maxDay: 31 },
  { seq: 9, shortName: "set", fullName: "Setembro", maxDay: 30 },
  { seq: 10, shortName: "out", fullName: "Outubro", maxDay: 31 },
  { seq: 11, shortName: "nov", fullName: "Novembro", maxDay: 30 },
  { seq: 12, shortName: "dez", fullName: "Dezembro", maxDay: 31 },
];

export { DetailsMonths };
