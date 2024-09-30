import { useState } from "react"

function ChatScreen(props) {
const [inputtext, setInputtext]=useState(" ")
const [texts , setTexts]=useState([])
const inp = (e)=>{
    setInputtext(e.target.value)
}

const send = ()=>{
    // if(inputtext !=""){
setTexts([inputtext,...texts])
setInputtext("")
// }

}
    return (
        <div>
            <h1>  ChatScreen</h1>
<div className="card w-96 bg-white h-96 border-solid border-cyan-600 border-4 ">
    <div className="card-body">
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-header">
    Obi-Wan Kenobi
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble">You were the Chosen One!</div>
  <div className="chat-footer opacity-50">Delivered</div>
</div>
{texts.map((text,index)=>(
    
<div className="chat chat-end" key={index}>
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-header">
    Anakin
    <time className="text-xs opacity-50">12:46</time>
  </div>
  <div className="chat-bubble">{text}</div>
  <div className="chat-footer opacity-50">Seen at 12:46</div>
</div>
))}
<div className="card-actions">
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

export default ChatScreen