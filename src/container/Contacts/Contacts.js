import React, { useState } from "react";
import { useNavigate } from "react-router";
import ListContacts from "../../components/ListContacts/ListContacts";
import Button from "../../components/UI/Button/Button";
import classes from "./Contacts.module.css";


export default function Contacts() {
  const [contacts, setContacts] = useState([
    {
      name: 'Дмитро Cаленко',
      phone: '0932336629',
      email: 'salenko.d@gmail.com',
      bDay: '03.02.1993',
    },
    {
      name: 'Анастасія Саленко',
      phone: '0983912110',
      email: 'ao.salenko@gmail.com',
      bDay: '30.10.1997',
    }
  ])

  const navigate = useNavigate()
  return (
    <div className={classes.Contacts}>
      <h1>Contacts book</h1>
      <ListContacts contacts={contacts} />
      <Button
        type="success"
        onClick={() => {
          navigate("/create");
        }}
      >Add contact</Button>
    </div>
  )
}