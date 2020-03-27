import React from 'react'
import ContactCard from './ContactCard'
import Joke from './Joke'

const AppWorkshop = ()=>(
    <div className="jokes">
        <Joke 
        joke = {{question:"Joke question",response:"Joke repsponse"}}
        />
        <Joke 
        joke = {{response:"No question, only response"}}
        />
    </div>
        // <div className="contacts">
        //     <ContactCard 
        //     contact = {{name:"Mr.Whiskerson",
        //     imgUrl:"http://placekitten.com/408/287",
        //     alt:"",
        //     phone:"123 123 123",
        //     email:"email@email.com"}}
            
        //     />
        //     <ContactCard 
        //     contact = {{name:"Mr.Dickerson",
        //     imgUrl:"http://placekitten.com/200/286",
        //     alt:"",
        //     phone:"321 321 312",
        //     email:"email2@2email.com"}}
        //     />   
        // </div>
    )
export default AppWorkshop 