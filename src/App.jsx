import { Route, Routes } from 'react-router';
import MailboxList from "./components/MailboxList/MailboxList"
import NavBar from "./components/NavBar/NavBar"

import './App.css'

const App = () =>{
  return(
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<h2>Home Page</h2>}/>
        <Route path='/mailboxes' element={<MailboxList/>}/>
      </Routes>
    </>
  )

}

export default App;


