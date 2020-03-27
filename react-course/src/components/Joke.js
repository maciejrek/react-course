import React from 'react'
import './Joke.css'

const Joke = (props) =>
(
    <div className="joke-component">
            {props.joke.question?
            <div>
            <h1>{props.joke.question}</h1>
            <h3>{props.joke.response}</h3>
            </div>
            :
            <div>
            <h1>{props.joke.response}</h1>
            </div>}
    </div>
)

export default Joke
