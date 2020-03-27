import React from "react";
import ContactCard from "./ContactCard";
import Joke from "./Joke";
import jokesData from "./jokesData";
import Product from './Product'
import products from './vschoolProducts'

function AppWorkshop() {
//   const jokeComponents = jokesData.map(joke => (
//     <Joke key={joke.id} question={joke.question} response={joke.response} />
//   ));
  const productComponents = products.map(product => (
    <Product key={product.id} name={product.name}  price={product.price} description={product.description}/>
  ))

  return <div className="products">{productComponents}</div>;
}
export default AppWorkshop;
