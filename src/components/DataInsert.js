import React from 'react';
import './DataInsert.css';

function DataValue({ freq, val, id, onInsert }) {
  return (
    <div className="data-value">
      <input
        type="number"
        value={freq}
        onChange={e => onInsert({ freq: Number(e.target.value) }, id)}
      />
      <input
        type="number"
        value={val}
        onChange={e => onInsert({ value: Number(e.target.value) }, id)}
      />
    </div>
  );
}

export default class DataInsert extends React.Component {
  state = {
    _id: [],
    dataFreq: [1],
    dataValue: [1],
  };

  get mergeData() {
    return this.state.dataFreq.map((freq, i) => [
      freq,
      this.state.dataValue[i],
    ]);
  }

  handleClickAdd = () => {
    const actualData = this.mergeData;
    const len = actualData.length;
    const addValue = len < 1 ? 0 : actualData[len - 1][1];
    const newData = actualData.concat([[1, addValue + 1]]);
    const newFreq = newData.map(val => val[0]);
    const newValue = newData.map(val => val[1]);
    this.setState({ dataFreq: newFreq, dataValue: newValue });
  };

  handleInsert = (target, id) => {
    // debugger;
    const index = this.state.dataValue.findIndex(val => val === id);
    if ('freq' in target) {
      const newDataFreq = this.state.dataFreq.slice();
      newDataFreq[index] = target.freq;
      this.setState({ dataFreq: newDataFreq });
    } else {
      const newDataValue = this.state.dataValue.slice();
      newDataValue[index] = target.value;
      this.setState({ dataValue: newDataValue });
    }
  };

  render() {
    const dataFreq = this.state.dataFreq;
    const dataValue = this.state.dataValue;
    const ids = this.state._id;
    const data = dataFreq.map((freq, i) => [freq, dataValue[i], ids[i]]);
    const elements = data.map(val => {
      return (
        <DataValue
          key={val[2]}
          id={val[2]}
          freq={val[0]}
          val={val[1]}
          onInsert={this.handleInsert}
        />
      );
    });

    return (
      <React.Fragment>
        <section>
          <span className="title-freq">Frequency</span>
          <span className="title-value">Value</span>
          <div className="table-data">{elements}</div>
        </section>
        <button onClick={this.handleClickAdd}>+</button>
      </React.Fragment>
    );
  }
}
