import React from "react";
import classes from './ItemContact.module.css';

export default function ItemContact(props) {
  console.log('props2', props)
  return (
    <li className={classes.ItemContact}>{props.contact.name}, {props.contact.phone}</li>
  )
}