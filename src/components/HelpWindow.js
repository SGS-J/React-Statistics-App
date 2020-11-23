import React from 'react';
import './HelpWindow.css';

export default function HelpWindow() {
  return (
    <div id="helpWin">
      <h5>INSTRUCTIONS:</h5>
      <p className="">
          {`Put the number of occurrences on frequency
            inputs below and their respective value in
            the sample as numbers(e.g. Animals: {Dog: 1, Cat: 2, etc}.)
            Use the arrows below table value to add or remove the values.`}
      </p>
    </div>
  );
}
