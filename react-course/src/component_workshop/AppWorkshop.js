import React, { Component } from "react";
// import ContactCard from "./ContactCard";
// import Joke from "./Joke";
// import jokesData from "./jokesData";
// import Product from "./Product";
// import products from "./vschoolProducts";
// import Conditional from "./Conditional";

class AppWorkshop extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {}
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data =>
        this.setState({
          character: data,
          loading:false
        })
      );
  }
  render() {
    const text = this.state.loading?"Loading":this.state.character.name
    return <div><h1>{text}</h1></div>;
  }
}

export default AppWorkshop;

// //Conditional rendering
// class AppWorkshop extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoading: true
//     };
//   }

//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({
//         isLoading: false
//       });
//     }, 1500);
//   }

//   render() {
//     return (
//       <div>{this.state.isLoading ? <h1>Loading..</h1> : <Conditional />}</div>
//     );
//   }
// }

// //conditional rendering practice
// class AppWorkshop extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isLoggedIn: false
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }));
//   }
//   render() {
//     let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In"
//     let displayText = this.state.isLoggedIn ? "Logged In" : "Logged out"
//     return (
//       <div>
//         <h1>{displayText}</h1>
//         <button onClick={this.handleClick}>
//           <h2>{buttonText}</h2>
//         </button>
//       </div>
//     );
//   }
// }

//
// function AppWorkshop() {
// //   const jokeComponents = jokesData.map(joke => (
// //     <Joke key={joke.id} question={joke.question} response={joke.response} />
// //   ));
//   const productComponents = products.map(product => (
//     <Product key={product.id} name={product.name}  price={product.price} description={product.description}/>
//   ))

//   return <div className="products">{productComponents}</div>;
// }

// Click Handle
// class AppWorkshop extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0
//     };
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(prevState => ({ count: prevState.count + 1 }));
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Change!</button>
//       </div>
//     );
//   }
// }

// onClick and onHover
// const AppWorkshop = ()=>(
//   <div>
//     <img src="https://www.fillmurray.com/200/100"/>
//     <br/>
//     <br/>
//     <button onClick={()=>{console.log("I was clicked")}} onMouseOver={()=>{console.log("I was almost clicked")}}>Click me</button>
//   </div>
// )
