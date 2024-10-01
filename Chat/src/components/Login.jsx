import { useState } from "react"
import Chatamey from "./Chatamey"
function Login({setUser}) {
const [name , setName]=useState("")

// const [savename ,setSavename]=useState(false)
const handleSubmit =(e)=>{
    e.preventDefault();
    if(name.trim()){
   setUser(name)

}
    // }else{
    //     alert("please enter your name")
    // }

};
  return (
    <div>
        <h1>Login</h1>
        <div className="flex flex-col justify-center items-center">
            <form
            onSubmit={handleSubmit} >
                
<input 
  type="text"
  placeholder="Enter your name"
  value={name}
  className="input input-bordered input-success w-full max-w-xs items-end"
onChange={(e)=>{setName(e.target.value)}}
  />
  {/* <button type="submit" className="btn"  onClick={()=>{ 
    {!name?alert("please enter your name"):""}
  }}>Start</button> */}
<button type="submit">Start Chat</button>
  
  </form>
  </div>


    </div>
  )
}

export default Login