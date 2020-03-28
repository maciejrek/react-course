import React, { Component } from "react";
// import ContactCard from "./ContactCard";
// import Joke from "./Joke";
// import jokesData from "./jokesData";
// import Product from "./Product";
// import products from "./vschoolProducts";
// import Conditional from "./Conditional";

class AppWorkshop extends Component{
  constructor() {
    super()
    this.state = {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        destination: "",
        isVegan: false,
        isKosher: false,
        isLactoseFree: false
    }
    this.handleChange = this.handleChange.bind(this)
}

handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? 
        this.setState({
            [name]: checked
        })
    :
    this.setState({
        [name]: value
    }) 
}

render() {
    return (
        <main>
            <form>
                <input 
                    name="firstName" 
                    value={this.state.firstName} 
                    onChange={this.handleChange} 
                    placeholder="First Name" 
                />
                <br />
                
                <input 
                    name="lastName" 
                    value={this.state.lastName}
                    onChange={this.handleChange} 
                    placeholder="Last Name" 
                />
                <br />
                
                <input 
                    name="age" 
                    value={this.state.age}
                    onChange={this.handleChange} 
                    placeholder="Age" 
                />
                <br />
                
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                    /> Male
                </label>
                
                <br />
                
                <label>
                    <input 
                        type="radio" 
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                    /> Female
                </label>
                
                <br />
                
                <select 
                    value={this.state.destination} 
                    name="destination" 
                    onChange={this.handleChange}
                >
                    <option value="">-- Please Choose a destination --</option>
                    <option value="germany">Germany</option>
                    <option value="norway">Norway</option>
                    <option value="north pole">North Pole</option>
                    <option value="south pole">South Pole</option>
                </select>
                
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isVegan"
                        onChange={this.handleChange}
                        checked={this.state.isVegan}
                    /> Vegan?
                </label>
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isKosher"
                        onChange={this.handleChange}
                        checked={this.state.isKosher}
                    /> Kosher?
                </label>
                <br />
                
                <label>
                    <input 
                        type="checkbox"
                        name="isLactoseFree"
                        onChange={this.handleChange}
                        checked={this.state.isLactoseFree}
                    /> Lactose Free?
                </label>
                <br />
                
                <button>Submit</button>
            </form>
            <hr />
            <h2>Entered information:</h2>
            <p>Your name: {this.state.firstName} {this.state.lastName}</p>
            <p>Your age: {this.state.age}</p>
            <p>Your gender: {this.state.gender}</p>
            <p>Your destination: {this.state.destination}</p>
            <p>Your dietary restrictions:</p>
            
            <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
            <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
            <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
            
        </main>
    )
}
}

export default AppWorkshop;

// Form
// class AppWorkshop extends Component {
//   constructor() {
//     super();
//     this.state = {
//       firstName: "",
//       lastName: "",
//       textArea: "",
//       isFriendly: false,
//       gender: "",
//       favColor:""
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     const { name, value, type, checked } = event.target;
//     type === "checkbox"
//       ? this.setState({ [name]: checked })
//       : this.setState({
//           [name]: value // NEED TO BE IN [] due to some js shiet
//         });
//   }

//   handleSubmit(){

//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <input
//           type="text"
//           value={this.state.firstName}
//           name="firstName"
//           placeholder="first name"
//           onChange={this.handleChange}
//         />

//         <br />
//         <input
//           type="text"
//           value={this.state.lastName}
//           name="lastName"
//           placeholder="last name"
//           onChange={this.handleChange}
//         />

//         <br />
//         <textarea
//           value={this.state.textArea}
//           name="textArea"
//           onChange={this.handleChange}
//         />

//         <br />
//         <label>
//           <input
//             type="checkbox"
//             name="isFriendly"
//             checked={this.state.isFriendly}
//             onChange={this.handleChange}
//           />
//           Is friendly?
//         </label>

//         <br />
//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             checked={this.state.gender === "male"}
//             onChange={this.handleChange}
//           />
//           Male
//         </label>

//         <label>
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             checked={this.state.gender === "female"}
//             onChange={this.handleChange}
//           />
//           Female
//         </label>

//         <br />
//         <label>Favourite color: </label>
//         <select 
//         name="favColor"
//         value={this.state.favColor}
//         onChange={this.handleChange}
//         >
//           <option value="red">Red</option>
//           <option value="blue">Blue</option>
//           <option value="yellow">Yellow</option>
//         </select>

//         <h1>
//           {this.state.firstName} {this.state.lastName} {this.state.textArea} {this.state.gender} {this.state.favColor}
//         </h1>
//         <button>Submit</button> 
//       </form>
//     );
//   }
// }

// //Api fetching
// class AppWorkshop extends Component {
//   constructor() {
//     super();
//     this.state = {
//       loading: false,
//       character: {}
//     };
//   }

//   componentDidMount() {
//     this.setState({
//       loading: true
//     });
//     fetch("https://swapi.co/api/people/1")
//       .then(response => response.json())
//       .then(data =>
//         this.setState({
//           character: data,
//           loading:false
//         })
//       );
//   }
//   render() {
//     const text = this.state.loading?"Loading":this.state.character.name
//     return <div><h1>{text}</h1></div>;
//   }
// }

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
