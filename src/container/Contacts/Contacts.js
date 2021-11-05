import React from "react";
import { useNavigate } from "react-router";
import Button from "../../components/UI/Button/Button";
import classes from "./Contacts.module.css";


export default function Contacts() {
  const navigate = useNavigate()
  return (
    <div className={classes.Contacts}>
      <h1>Contacts book</h1>
      <Button
        type="success"
        onClick={() => {
          navigate("/create");
        }}
      >Add contact</Button>
    </div>
  )
}