import React from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Contacts from "./container/Contacts/Contacts";
import CreateContact from "./container/CreateContact.js/CreateContact"

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path={'/create'} element={<CreateContact />} />
            <Route path={'/'} exact element={<Contacts />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
