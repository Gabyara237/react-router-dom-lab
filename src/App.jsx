import { Route, Routes } from 'react-router';
import MailboxDetails from "./components/MailboxDetails/MailboxDetails"
import MailboxList from "./components/MailboxList/MailboxList"
import MailboxForm from "./components/MailboxForm/MailboxForm"
import LetterForm from './components/LetterForm.jsx/LetterForm';
import NavBar from "./components/NavBar/NavBar"

import './App.css'
import { useState } from 'react';

const App = () =>{

  const [mailboxes,setMailboxes] = useState([])
  const [letters, setLetters] = useState([])

  const addBox = (newBox)=>{
    const newBoxWithId = {
      ... newBox,
      _id: mailboxes.length+1
    }
    setMailboxes([...mailboxes,newBoxWithId])
  }

  const addLetter = (newLetter) =>{
    setLetters([...letters, newLetter])
  }
  
  return(
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<h1>Post Office</h1>}/>
        <Route path='/mailboxes' element={<MailboxList mailboxes={mailboxes}/>}/>
        <Route path='/new-mailbox' element={<MailboxForm addBox={addBox}/>}/>
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails mailboxes={mailboxes}/>}/>
        <Route path='/new-letter' element={<LetterForm mailboxes={mailboxes} addLetter={addLetter}/>}/>
      </Routes>
    </>
  )

}

export default App;


