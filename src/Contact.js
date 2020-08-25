import React from 'react';

// Changing Contact Component from Container to UI component

const Contact = ({contactPersons}) => {
        console.log(contactPersons);
        const contactPersonsList = contactPersons.map(person =>{
            return (
                <div className="person" key={person.id}>
                    <div>Name : {person.name}</div>
                    <div>Age : {person.age}</div>
                   <div>Contact : {person.email}</div>
                </div>
            );
        });
        return(
            <div>
                {contactPersonsList}
            </div>
        );
}
export default Contact