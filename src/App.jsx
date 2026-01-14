import { Route, Routes } from 'react-router';
import MailboxDetails from "./components/MailboxDetails/MailboxDetails"
import MailboxList from "./components/MailboxList/MailboxList"
import MailboxForm from "./components/MailboxForm/MailboxForm"
import NavBar from "./components/NavBar/NavBar"

import './App.css'
import { useState } from 'react';

const App = () =>{

  const [mailboxes,setMailboxes] = useState([])

  const addBox = (newBox)=>{
    const newBoxWithId = {
      ... newBox,
      _id: mailboxes.length+1
    }
    setMailboxes([...mailboxes,newBoxWithId])
  }
  
  return(
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<h2>Post Office</h2>}/>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>}/>
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>}/>
      </Routes>
    </>
  )

}

export default App;


