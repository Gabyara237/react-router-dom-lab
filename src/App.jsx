import { Route, Routes } from 'react-router';
import MailboxDetails from "./components/MailboxDetails/MailboxDetails"
import MailboxList from "./components/MailboxList/MailboxList"
import MailboxForm from "./components/MailboxForm/MailboxForm"
import NavBar from "./components/NavBar/NavBar"

import './App.css'

const App = () =>{
  return(
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<h2>Home Page</h2>}/>
        <Route path='/mailboxes' element={<MailboxList/>}/>
        <Route path='/new-mailbox' element={<MailboxForm/>}/>
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails/>}/>
      </Routes>
    </>
  )

}

export default App;


