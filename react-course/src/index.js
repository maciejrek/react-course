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

function MyInfo(){
  return(
    <div>
      <h1>My Name</h1>
      <p>A little blurb about myself</p>
      <h3>My top 3 vacation spots</h3>
      <ul> 
        <li>1st spot</li>
        <li>2nd spot</li>
        <li>3rd spot</li>
      </ul>
    </div>
  )
}

ReactDOM.render(
  <MyInfo />,
  document.getElementById('root')
);
