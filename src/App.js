import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Contacts from "./container/Contacts/Contacts";
import CreateContact from "./container/CreateContact.js/CreateContact"

function App() {
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
  
  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  }
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={'/create'} element={<CreateContact addContact={addContact}/>} />
            <Route path={'/'} exact element={<Contacts contacts={contacts}/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
