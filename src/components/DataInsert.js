import React from 'react';
import DataValue from './DataValue';
import './DataInsert.css';

export default function DataInsert(props) {
  const data = props.data.slice();
  const elements = data.map(val => {
    return (
      <DataValue
        key={val._id}
        id={val._id}
        dataFreq={val.dataFreq}
        dataValue={val.dataValue}
        onInsert={props.onInsert}
      />
    );
  });

  return (
    <section id="data-insert">
      <div className="custom-table overflow-auto">
        <table>
          <thead className="title-insert">
            <tr>
              <th>Frequency</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>{elements}</tbody>
        </table>
      </div>
      <div className="buttons">
        <button onClick={props.onClickAdd}>+</button>
        <button onClick={props.onClickRemove}>-</button>
      </div>
    </section>
  );
}
