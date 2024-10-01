import Chatamey from "./Chatamey"
import ChatScreen from "./ChatScreen"
import Login from "./Login"
import { useState } from 'react'

function Homechat() {
    const [user,setUser]=useState(null)
    const [user2,setUser2]=useState(null)

  return (
    <div className="flex flex-row justify-around">

{/* <ChatScreen/>

<Chatamey/> */}
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

{user2 ?(
  <Chatamey name={user}/>
):(
  <Login  
   setUser={setUser2}
  />
)

}
    </>


    </div>
  )
}

export default Homechat