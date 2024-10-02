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
    <div className="overflow-hidden ">
        {/* <Navbar/> */}
    <div className="flex md:flex-col md:gap-40 lg:flex-row lg:justify-around md:justify-start items-center md:p-40 w-full h-screen overflow-auto"
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
  className=""
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
   className=""
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