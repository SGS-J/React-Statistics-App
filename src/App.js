/* eslint-disable default-case */
import React from 'react';
import './App.css';

export default class App extends React.Component {
  state = {
    names: [],
    pos: 0,
  };

  handleClick = element => {
    const className = element.className;
    switch (className) {
      case 'insert': {
        const name = document.querySelector('input').value;
        const names = this.state.names.concat(name);
        name && this.setState({ names: names, pos: names.length - 1 });
        break;
      }

      case 'undo': {
        const pos = this.state.pos - 1;
        this.setState({ pos: pos < 0 ? 0 : pos });
        break;
      }

      case 'redo': {
        const len = this.state.names.length - 1;
        const pos = this.state.pos + 1;
        this.setState({ pos: pos > len ? len : pos });
      }
    }
  };

  render() {
    const names = this.state.names;
    const pos = this.state.pos;
    const actualLen = names.length;
    return (
      <main onClick={e => this.handleClick(e.target)}>
        <input type="text" placeholder="Put your name here" />
        <button className="insert">Click me</button>
        <button className="undo">Undo</button>
        <button className="redo">Redo</button>
        <p>{actualLen < 1 ? "There're not names yet..." : names[pos]}</p>
      </main>
    );
  }
}
