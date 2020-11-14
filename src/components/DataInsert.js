import React from 'react';
import DataValue from './DataValue';
import './DataInsert.css';

export default function DataInsert(props) {
  const data = props.data.slice();
  const elements = data.map((val, i) => {
    return (
      <DataValue key={val._id} self={props.data[i]} onInsert={props.onInsert} />
    );
  });

  return (
    <React.Fragment>
      <section>
        <span className="title-freq">Frequency</span>
        <span className="title-value">Value</span>
        <div className="table-data">{elements}</div>
      </section>
      <button onClick={props.onClickAdd}>+</button>
      <button onClick={props.onClickRemove}>-</button>
    </React.Fragment>
  );
}
