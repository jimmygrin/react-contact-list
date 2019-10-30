
import React from 'react';
import { Link } from "react-router-dom"
import Contacts from "./randomUsers.json" 

function Individual (props) {

const id = props.match.params.id

const Individual = Contacts.find(contact => contact.id == id)

return (
    
    <div id="singleview">
    <h3>Single View </h3>
    <div id="singlepic">
    
    <img src={Individual.picture.large}/>
    </div>
    <Link to="/"><span id="link">&#8592;</span></Link>
    <div id="singledetails">
    <p>{Individual.name.first} {Individual.name.last}</p>
    <hr></hr>
    <p>{Individual.email}</p>
    <hr></hr>
    <p>{Individual.cell}</p>
    <hr></hr>
    <p>{Individual.location.city}, {Individual.location.state}</p>
    </div>
    </div>
    
)

}

export default Individual