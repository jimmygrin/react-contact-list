import React from 'react';
import { Link } from "react-router-dom"
import Contacts from "./randomUsers.json" 

    function List(props) {
        return (
          
        <div id="listview">
         
          <h3>List View</h3>

         
          <div id="mypeeps">My Peeps
          
          <div id="list">
           {Contacts.map(individual => ( 
            <Link key={"ind-link-" + individual.id} to={"/Individual/" + individual.id}> 
            
              <img id="thumb" src={individual.picture.thumbnail}></img><span>{individual.name.first} {individual.name.last}</span>
              <hr></hr>
            
            </Link>))
            
            }
            </div>
           
           </div>
        </div>

        )

}


export default List