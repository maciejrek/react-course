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
      isLoggedIn: true
    };
  }

  render() {
    return (
      <div>
        <h1>You are logged {this.state.isLoggedIn? "in": "out"}</h1>
      </div>
    );
  }
}

export default AppWorkshop;
