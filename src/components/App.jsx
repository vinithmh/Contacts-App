import React from "react";
import Card from "./Card";
import contacts from "../contacts";
import Avatar from "./Avatar";

function createCard(contact){
    return <Card
    key={contact.id}
    name={contact.name}
    age={contact.age}
    gender={contact.gender}
    company={contact.company}
    email={contact.email}
    photo={contact.photo}
    />
}
function App() {
    return (
    <div>
    <h1 className="heading">
My contacts
  </h1>
{contacts.map(createCard)}

 </div>
    );
}

export default App;