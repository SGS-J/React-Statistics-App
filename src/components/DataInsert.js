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
      <button className="btn btn-help shadow-none">?</button>
      <table className="custom-table">
        <thead className="table-head">
          <tr>
            <th scope="col">Frequency :</th>
            <th scope="col">Value :</th>
          </tr>
        </thead>
        <tbody className="table-elements">{elements}</tbody>
      </table>
      <div className="buttons">
        <button
          className="btn btn-outline-default shadow-none"
          onClick={props.onClickAdd}
        >
          +
        </button>
        <button
          className="btn btn-outline-default shadow-none"
          onClick={props.onClickRemove}
        >
          -
        </button>
      </div>
    </section>
  );
}
