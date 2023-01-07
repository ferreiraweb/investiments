const moneyFormat = Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

const numberLocaleNumberFormat = Intl.NumberFormat("pt-br", {
  maximumFractionDigits: 2,
  minimumFractionDigits: 2,
});

function formatPtBrMoney(value: number) {
  return moneyFormat.format(value);
}

function formatPtBrNumber(value: number) {
  return numberLocaleNumberFormat.format(value);
}

function formatPtBrPercent(value: number) {
  return `${formatPtBrNumber(value)} %`;
}

export { formatPtBrMoney, formatPtBrNumber, formatPtBrPercent };
