import React from 'react';
import Statistic from './../helpers/statisticAlg';

export default function ResultTable({ data }) {
  const table = data.map(el => ({ freq: el.dataFreq, value: el.dataValue }));
  const statistic = new Statistic(table);
  const result = statistic.measurements;
  const elements = Object.entries(result).map(el => (
    <tr key={el[0]} className="result-data">
      <th>{el[0]}: </th>
      <td>{el[1]}</td>
    </tr>
  ));

  return (
    <table>
      <tbody>{elements}</tbody>
    </table>
  );
}
