import Header from "../components/Header";
import Main from "../components/Main";
import { backend as investiments } from "../data/backend";
import { DetailsMonths } from "../utils/date-utils";
import { formatPtBrMoney, formatPtBrPercent } from "../utils/formats-util";

function getClassColorIndicationValue(value: number) {
  if (value > 0) {
    return "text-blue-800";
  } else {
    return "text-red-800 font-semibold";
  }
}

export default function InvestimentsPage() {
  return (
    <div className="container">
      <Header>Investiments</Header>
      <Main>
        <ul className="space-y-2">
          {investiments.map((investiment) => {
            const {
              id,
              description,
              rendimentoTotalCurrency,
              rendimentoTotalPercent,
              reports,
            } = investiment;

            return (
              <li key={id} className="border p-2">
                <div className="text-center space-y-2 mb-3">
                  <h2 className="font-semibold text-lg">{description}</h2>
                  <h3 className="space-x-3">
                    <span className="font-semibold pr-1">
                      Rendimento total:
                    </span>
                    <span
                      className={getClassColorIndicationValue(
                        rendimentoTotalCurrency
                      )}
                    >
                      {formatPtBrMoney(rendimentoTotalCurrency)}
                    </span>
                    <span
                      className={`font-mono ${getClassColorIndicationValue(
                        rendimentoTotalCurrency
                      )}`}
                    >
                      ({formatPtBrPercent(rendimentoTotalPercent)}%)
                    </span>
                  </h3>
                </div>
                <ul className="font-mono">
                  {reports.map((report) => (
                    <li
                      key={report.id}
                      className={`${getClassColorIndicationValue(
                        report.percent
                      )} flex`}
                    >
                      <span className="w-1/6">
                        {DetailsMonths[report.month - 1].shortName}/
                        {report.year}
                      </span>
                      <span className="w-1/6 text-right">
                        {formatPtBrMoney(report.value)}
                      </span>
                      <span className="w-4/6 text-right">
                        {formatPtBrPercent(report.percent)}
                      </span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </Main>
    </div>
  );
}
