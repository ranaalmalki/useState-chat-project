
import { useState } from 'react'
import './App.css'
import Chatamey from './components/Chatamey'
import ChatScreen from './components/ChatScreen'
import Homechat from './components/Homechat'
import Login from './components/Login'

function App() {
const [user,setUser]=useState(null)

// const  handlelogout =()=>{
// setUser(null)

// }
  return (
    <>
    {/* <Homechat/> */}
   {/* <ChatScreen/> */}
   {/* <Chatamey/> */}
   {/* <Login/> */}
{user ?(
  <ChatScreen name={user}/>
):(
  <Login  
   setUser={setUser}
  />
)

}

    </>
  )
}

export default App
