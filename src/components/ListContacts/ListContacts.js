import React from "react";
import ItemContact from "../ItemContact/ItemContact";
import classes from './ListContacts.module.css';

export default function ListContacts(props) {
  console.log('props', props);
  return (
    <div>
      <ul className={classes.ListContacts}>
        {props.contacts.map((item, index) => (
          <ItemContact key={index} contact={item}/>
        ))}
      </ul>
    </div>
  )
}