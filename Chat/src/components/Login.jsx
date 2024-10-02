import { useState } from "react"
import Chatamey from "./Chatamey"
import chatlogo from '../assets/chat_5508181.png'
import cat from "../assets/vecteezy_cartoon-cute-character-funny-illustration-anime-cat_44022720.png"
import iconeye from "../assets/vecteezy_eye-roll-face-emoji_47424812.png"
function Login({setUser, userLabel}) {
const [name , setName]=useState("")

// const [savename ,setSavename]=useState(false)
const handleSubmit =(e)=>{
    e.preventDefault();
    if(name.trim()){
   setUser(name)

}
    else{
        Swal.fire({
          title: "Enter your name",
          text: "How you gonna communicate with other without Login",
          imageUrl:iconeye,
          imageWidth: 100,
          imageHeight: 100, 
          imageAlt: 'Custom image',
        });
    }
    {userLabel}
};
  return (
    <>
    
    <div className="card border-solid border-black border-8 h-96 shadow-md shadow-gray-50 bg-white">
        <div className="card-body  justify-between h-full flex items-center ">
            {/* <div className=" flex"> */}
            <h1 className="flex flex-row flex-wrap">
        <img 
            src={chatlogo}
            className=" h-40 -mt-40"
            />
      <p className="text-3xl text-white bg-[#bf80fe] rounded-full -mt-24 p-7 shadow-md shadow-white border-solid border-black border-4 font-bold "> Let's Chat</p>
      
      </h1>
        {/* </div> */}
        <img 
        className="h-full w-64"
        src={cat}/>
        <div className="flex flex-col justify-center items-center">
     
            <form className="flex"
            onSubmit={handleSubmit} >
                
<input 
  type="text"
  placeholder="Enter your name"
  value={name}
  className="input input-bordered input-success w-full max-w-xs items-end "
onChange={(e)=>{setName(e.target.value)}}
  />
  {/* <button type="submit" className="btn"  onClick={()=>{ 
    {!name?alert("please enter your name"):""}
  }}>Start</button> */}
<button type="submit" className="btn bg-[#bf80fe] text-white border border-[#bf80fe]">Start Chat</button>
  
  </form>
  </div>
  </div>

    </div>
    </>
  )
}

export default Login