import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

/*
   This Index function was created to use 
   Bootstrap responsive classes in a parent 
   container to avoid modifying the main App.
*/
function Index() {
  return (
    <div id="main-box" className="row">
      <App />
    </div>
  );
}

ReactDOM.render(<Index />, document.getElementById('root'));
