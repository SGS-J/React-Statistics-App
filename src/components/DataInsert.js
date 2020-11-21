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
      <div className="custom-table">
        <div className="table-head">
          <span>Frequency</span>
          <span>Value</span>
        </div>
        <div className="table-elements">{elements}</div>
      </div>
      <div className="buttons">
        <button className="btn btn-outline-success shadow-none" onClick={props.onClickAdd}>+</button>
        <button className="btn btn-outline-success shadow-none" onClick={props.onClickRemove}>-</button>
      </div>
    </section>
  );
}
