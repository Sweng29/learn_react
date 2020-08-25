import React from "react";

// Changing Contact Component from Container to UI component

const Contact = ({ contactPersons }) => {
  console.log(contactPersons);
  // Conditional Operator using If else
  const contactPersonsList = contactPersons.map((person) => {
    if (person.age > 23) {
      return (
        <div className="person" key={person.id}>
          <div>Name : {person.name}</div>
          <div>Age : {person.age}</div>
          <div>Contact : {person.email}</div>
        </div>
      );
    } else {
      return null;
    }
  });

  // Conditional Operator using ternary operator
  const contactPersonsListA = contactPersons.map((person) => {
    return person.age > 20 ? (
      <div className="person" key={person.id}>
        <div>Name : {person.name}</div>
        <div>Age : {person.age}</div>
        <div>Contact : {person.email}</div>
      </div>
    ) : null;
  });

  return <div>{contactPersonsListA}</div>;
};
export default Contact;
