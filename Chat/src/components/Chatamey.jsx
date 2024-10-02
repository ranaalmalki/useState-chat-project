import { useEffect, useRef,useState } from "react"
import PropTypes from "prop-types";
import chatlogo from '../assets/chat_5508181.png'
import catIcon from "../assets/vecteezy_british-shorthair-clipart_24077630.png"


function Chatamey(props) {
const [inputtext, setInputtext]=useState(" ")
const scrolldown = useRef(null)

// const [texts , setTexts]=useState([])

const inp = (e)=>{
    setInputtext(e.target.value)
}

const send = ()=>{
   if(inputtext.trim() !==""){
    const message= { user: props.name , text:inputtext}
// setTexts([inputtext,...texts])
props.sendMessage(message)
setInputtext("")
}}

useEffect(()=>{
  scrolldown.current?.scrollIntoView({behavior: 'smooth'})
  },[props.messages])
    return (
      <div className="card  border-solid border-black border-8  shadow-md shadow-gray-50 bg-white  ">
      <h1 className="flex flex-row flex-wrap justify-between p-7">
  <img 
      src={chatlogo}
      className=" h-40 -mt-40"
      />
<p className="text-3xl text-white bg-[#3f51b5] rounded-full  -mt-24 w-64 h-24 p-7 shadow-md shadow-white border-solid border-black border-4 font-bold ">{props.name}</p>
</h1>
<div className="card w-full h-96  border-solid ">
    <div className="card-body overflow-auto">
    {props.messages.map((mess,index)=>(

<div className={`chat ${mess.user=== props.name ? `chat-start`:'chat-end'}`}  key={index}>
  <div className="chat-image avatar">
  {console.log(mess.user)}

    <div className="w-10 rounded-full bg-slate-300">
      <img
        alt="Tailwind CSS chat bubble component"
        src={catIcon} />
    </div>
  </div>
  <div className="chat-header text-black">
    {mess.user}
    <time className="text-xs opacity-50">12:45</time>
  </div>
  <div className="chat-bubble ">{mess.text}</div>
  <div className="chat-footer opacity-50">Delivered</div>
</div>
))}
  <div ref={scrolldown}/>

{/* {texts.map((text,index)=>( */}

{/* ))} */}
 </div>
<div className="grid grid-flow-col ">
<input 
  type="text"
  placeholder="Type here"
  value={inputtext}
  className="input input-bordered input-success w-full max-w-xs items-end"
  onChange={inp}
  />
  <button type="button" className="btn  bg-[#3f51b5] text-white" onClick={send}>send</button>
  </div>

 

  
</div>

  </div>
      
    )
}



Chatamey.propTypes={
  name:PropTypes.string.isRequired,
  messages:PropTypes.array.isRequired,
  sendMessage:PropTypes.func.isRequired,

}
export default Chatamey
