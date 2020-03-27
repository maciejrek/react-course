import React from "react";
import ContactCard from "./ContactCard";
import Joke from "./Joke";
import jokesData from "./jokesData";
import Product from "./Product";
import products from "./vschoolProducts";

// function AppWorkshop() {
// //   const jokeComponents = jokesData.map(joke => (
// //     <Joke key={joke.id} question={joke.question} response={joke.response} />
// //   ));
//   const productComponents = products.map(product => (
//     <Product key={product.id} name={product.name}  price={product.price} description={product.description}/>
//   ))

//   return <div className="products">{productComponents}</div>;
// }

class AppWorkshop extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Change!</button>
      </div>
    );
  }
}

// const AppWorkshop = ()=>(
//   <div>
//     <img src="https://www.fillmurray.com/200/100"/>
//     <br/>
//     <br/>
//     <button onClick={()=>{console.log("I was clicked")}} onMouseOver={()=>{console.log("I was almost clicked")}}>Click me</button>
//   </div>
// )

export default AppWorkshop;
