import React from 'react';
import ReactDOM from 'react-dom';

function MyApp(){
  return (
  <ul>
    <li>first</li>
    <li>second</li>
    <li>third</li>
  </ul>
)
}

ReactDOM.render(
  <MyApp />,
  document.getElementById('root')
);
