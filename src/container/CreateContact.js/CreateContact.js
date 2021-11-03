import React from "react";
import classes from './CreateContact.module.css';
import Button from '../../components/UI/Button/Button'

const CreateContact = () => (
  <div className={classes.CreateContact}>
    <h1>Create contact</h1>
    <form onSubmit={e => e.preventDefault()}>
      <div>Name <input /></div>
      <div>Phone<input /></div>
      <div>Email <input /></div>
      <div>B. day<input /></div>
      <Button type="primary">
        Add contact
      </Button>
    </form>
  </div>
)

export default CreateContact;