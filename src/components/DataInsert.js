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
    data: [
      {
        _id: '10000A',
        dataFreq: 1,
        dataValue: 1,
      },
    ],
    count: 1,
  };

  get createId() {
    const count = this.state.count + 1;
    const newValue = `${count * 10000}${String.fromCharCode((count % 64) + 64)}`;
    return newValue;
  }

  handleClickAdd = () => {
    const actualData = this.state.data.slice();
    const len = actualData.length;
    const addValue = len < 1 ? 0 : actualData[len - 1].dataValue;
    const newData = actualData.concat({
      _id: this.createId,
      dataFreq: 1,
      dataValue: addValue + 1,
    });
    const count = this.state.count + 1;
    this.setState({ data: newData, count: count });
  };

  handleClickRemove = () => {
    const newData = this.state.data.slice(0, -1);
    const count = this.state.count < 1 ? 0 : this.state.count - 1;
    this.setState({ data: newData, count: count});
  }

  handleInsert = (target, id) => {
    const index = this.state.data.findIndex(val => val._id === id);
    if ('freq' in target) {
      const newDataFreq = this.state.data.slice();
      newDataFreq[index].dataFreq = target.freq;
      this.setState({ data: newDataFreq });
    } else {
      const newDataValue = this.state.data.slice();
      newDataValue[index].dataValue = target.value;
      this.setState({ data: newDataValue });
    }
  };

  render() {
    const data = this.state.data;
    const elements = data.map(val => {
      return (
        <DataValue
          key={val._id}
          id={val._id}
          freq={val.dataFreq}
          val={val.dataValue}
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
        <button onClick={this.handleClickRemove}>-</button>
      </React.Fragment>
    );
  }
}
