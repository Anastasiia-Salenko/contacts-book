import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Formik, Form, useField } from "formik";
import * as Yup from 'yup';
import classes from './CreateContact.module.css';
import Button from '../../components/UI/Button/Button'
import moment from "moment";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className={classes.error}>{meta.error}</div>
      ) : null}
    </>
  )
}

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
      <div className={classes.form}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            bDay: ""
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .required("Required")
              .max(255, "Max length should be 255 characters"),
            lastName: Yup.string()
              .required("Required")
              .max(255, "Max length should be 255 characters"), 
            phone: Yup.string()
              .required("Required")
              .matches(/^\+380\d{9}$/, 'The phone format should be +380XXXXXXXXX'),
            email: Yup.string()
              .email("Invalid email address"),
            bDay: Yup.date()
              .transform((__, value) => moment(value, 'DD.MM.YYYY', true).toDate())
              .typeError('Invalid date'),
          })}
          onSubmit={values => {
            alert(JSON.stringify(values, null, 2))
          }}
        >
          <Form>
            <MyTextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="Elon"
            />

            <MyTextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Musk"
            />

            <MyTextInput
              label="Phone"
              name="phone"
              type="text"
              placeholder="+380XXXXXXXXX"
            />

            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="elon@spacex.com"
            />

            <MyTextInput
              label="Birthday"
              name="bDay"
              type="text"
              placeholder="dd.mm.yyyy"
            />

            <Button className={classes.buttonAdd} type="primary">
              Add contact
            </Button>
          </Form>
        </Formik>
      </div>
      {/* <form onSubmit={e => {
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
      </form> */}
    </div>
  )
}

export default CreateContact;