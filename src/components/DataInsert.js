import React from 'react';
import './DataInsert.css';

function DataValue({ freq, val, onInsert }) {
  return (
    <div className="data-value">
      <input type="number" value={freq} onChange={e => onInsert(e.target)} />
      <input type="number" value={val} onChange={e => onInsert(e.target)} />
    </div>
  );
}

export default class DataInsert extends React.Component {
  state = {
    data: [{ freq: 1, value: 7 }],
  };

  handleClickAdd = () => {
    const actualData = this.state.data;
    const newData = actualData.concat({ freq: 1, value: 1 });
    this.setState({ data: newData });
  };

  handleInsert = element => {
    const parent = element.parentElement;
    const pos = parent.getKey();
    const [freq, value] = Array.from(parent.children).map(el => el.value);
    this.setState({});
  };

  render() {
    const data = this.state.data;
    const elements = data.map(({ freq, value }, i) => {
      return <DataValue key={i} freq={freq} val={value} onInsert={this.handleInsert} />;
    }).map(chunk => chunk);

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
