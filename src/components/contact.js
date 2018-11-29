import React from 'react';

import './contact.css';

export default function Contact(props) {
    return (
        <div id={`contact-${props.index}`} className="contact">
            <img src={props.photo} alt={props.name} className="contact-photo" />
            <h2 className="contact-name">
                {props.name}
            </h2>
            <div className="contact-address">
                {props.address}
            </div>
        </div>
    )
}