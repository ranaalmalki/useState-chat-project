import Chatamey from "./Chatamey"
import ChatScreen from "./ChatScreen"
import Login from "./Login"
import { useState } from 'react'

function Homechat() {
    const [user,setUser]=useState(null)
    const [user2,setUser2]=useState(null)
    const [messages , setMessages]=useState([])
const sendMessage = (message)=>{
    setMessages([...messages , message])
}

  return (
    <div className="flex flex-row justify-around">


   <>

{user ?(
  <ChatScreen  
  name={user} 
  messages={messages}
  sendMessage = {sendMessage}
  />
):(
  <Login  
   setUser={setUser}
   userLabel="user1"
  />
)}

{user2 ?(
  <Chatamey 
  name={user2}
  messages={messages}
  sendMessage = {sendMessage}
  />
):(
  <Login  
   setUser={setUser2}
   userLabel="user2"

  />
)

}
    </>


    </div>
  )
}

export default Homechat