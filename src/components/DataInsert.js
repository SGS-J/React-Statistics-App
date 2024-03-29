import React from 'react';
import DataValue from './DataValue';
import HelpWindow from './HelpWindow';
import './DataInsert.css';

export default function DataInsert({ data, onClickAdd, onClickRemove, onInsert }) {
    const elementData = data.slice();
    const elements = data.map(val => {
      return (
        <DataValue
          key={val._id}
          id={val._id}
          dataFreq={val.dataFreq}
          dataValue={val.dataValue}
          onInsert={onInsert}
        />
      );
    });

    return (
      <section id="data-insert">
        <button className="btn btn-help shadow-none">?</button>
        <HelpWindow />
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
            onClick={onClickAdd}
          >
            +
          </button>
          <button
            className="btn btn-outline-default shadow-none"
            onClick={onClickRemove}
          >
            -
          </button>
        </div>
      </section>
    );
}
