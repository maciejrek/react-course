import React from 'react'
import './Joke.css'

const Joke = (props) =>
(
    <div className="joke-component">
            {props.question?
            <div>
            <h1>{props.question}</h1>
            <h3>{props.response}</h3>
            </div>
            :
            <div>
            <h1>{props.response}</h1>
            </div>}
    </div>
)

export default Joke
