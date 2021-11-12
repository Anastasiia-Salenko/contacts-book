import React from "react";
import { useNavigate } from "react-router";
import ListContacts from "../../components/ListContacts/ListContacts";
import Button from "../../components/UI/Button/Button";
import classes from "./Contacts.module.css";


export default function Contacts(props) {
  const navigate = useNavigate()
  return (
    <div className={classes.Contacts}>
      <h1>Contacts book</h1>
      <ListContacts contacts={props.contacts} />
      <Button
        type="success"
        onClick={() => {
          // addContact({name: 'dfj', phone: '0938487', email: 'ksjdhk', bDay: '093284'})
          navigate("/create");
        }}
      >Add contact</Button>
    </div>
  )
}