import { useState } from "react"
import PropTypes from "prop-types";



function Chatamey(props) {
const [inputtext, setInputtext]=useState(" ")
// const [texts , setTexts]=useState([])

const inp = (e)=>{
    setInputtext(e.target.value)
}

const send = ()=>{
   if(inputtext.trim() !==""){
    const message= {user: props.name , text:inputtext}
// setTexts([inputtext,...texts])
props.sendMessage(message)
setInputtext("")
}

}
    return (
        <div>
            <h1>Amey-{props.name}</h1>
            <div>
<div className="card w-96 bg-purple-300 h-96 border-solid border-cyan-600 border-4  ">
    <div className="card-body overflow-auto">
    {props.messages.map((mess,index)=>(

<div className={`chat${mess.user=== props.name? 'chat-end':'chat-start'}`}  key={index}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-header">
    {mess.user}
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">{mess.text}</div>
  <div className="chat-footer opacity-50">Delivered</div>
</div>
))}

{/* {texts.map((text,index)=>( */}

{/* ))} */}
 </div>
<div className="flex ">
<input 
  type="text"
  placeholder="Type here"
  value={inputtext}
  className="input input-bordered input-success w-full max-w-xs items-end"
  onChange={inp}
  />
  <button type="button" className="btn" onClick={send}>send</button>
  </div>

 

  
</div>

  </div>
        </div>
    )
}

Chatamey.protoTypes ={
    name:PropTypes.string.isRequired
}

export default Chatamey
