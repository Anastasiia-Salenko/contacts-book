import React from "react";
import { useNavigate } from "react-router";
import classes from './CreateContact.module.css';
import Button from '../../components/UI/Button/Button'

const CreateContact = (props) => {
  const navigate = useNavigate();
  return (
    <div className={classes.CreateContact}>
      <div className={classes.header}>
        <Button
          type="primary"
          onClick={() => {
            navigate("/");
          }}
        >Back
        </Button>
        <h1>Create contact</h1>
      </div>
      <form onSubmit={e => {
        e.preventDefault();
        const formData = new FormData(e.target);
        props.addContact({
          name: formData.get('name'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          bDay: formData.get('bDay')
        });
      }}>
        <div>Name <input name="name" /></div>
        <div>Phone<input name="phone" /></div>
        <div>Email <input name="email" /></div>
        <div>B. day<input name="bDay" /></div>
        <Button type="primary">
          Add contact
        </Button>
      </form>
    </div>
  )
}

export default CreateContact;