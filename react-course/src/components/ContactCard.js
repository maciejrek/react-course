import React from 'react'

const ContactCard = (props) =>
(
    <div className="contact-card">
        <img src={props.contact.imgUrl} alt={props.contact.alt}/>
        <h3>{props.contact.name}</h3>
        <p>Email: {props.contact.email}</p>
        <p>Phone: {props.contact.phone}</p>
    </div>
)

export default ContactCard
