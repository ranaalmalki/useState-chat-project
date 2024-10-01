import Chatamey from "./Chatamey"
import ChatScreen from "./ChatScreen"
import Login from "./Login"
import { useState } from 'react'
import Navbar from "./Navbar"

function Homechat() {
    const [user,setUser]=useState(null)
    const [user2,setUser2]=useState(null)
    const [messages , setMessages]=useState([])
const sendMessage = (message)=>{
    setMessages([...messages , message])
}

  return (
    <div>
        {/* <Navbar/> */}
    <div className="flex flex-row justify-around items-center"
    style={{
        backgroundImage:`url(https://pressstart.vip/images/uploads/assets/snowymountains.png)`,
    height:'100vh'
    }}
    
    >

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
    </div>
  )
}

export default Homechat