import React from 'react';
import './ResultTable.css';
import Statistic from './../helpers/statisticAlg';

export default function ResultTable({ data }) {
  const table = data.map(el => ({ freq: el.dataFreq, value: el.dataValue }));
  const result = new Statistic(table).measurements;
  const elements = result.map(el => (
    <tr key={el.name}>
      <td>{el.name}:</td>
      <td>{el.value}</td>
    </tr>
  ));

  return (
    <table>
      <tbody>{elements}</tbody>
    </table>
  );
}
