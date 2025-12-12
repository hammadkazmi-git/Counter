import { useState } from "react";

export default function App() {
  const [Count , setCount] = useState(0);
  const [Name , setName] = useState("");
  const [Email , setEmail] = useState("");
  const [Message , setText] = useState("");
  const handleSubmit = (e) => {
  e.preventDefault();
  console.log("Submitted" , {Name , Email , Message});
  setName("");
  setEmail("");
  setText("");
};

  return (
  <div style={{background:"red", height:"100vh", justifyContent:"center", display:"flex", alignItems:"center", gap:"2rem"}}>
    <div style={{color:"yellow", textAlign:"center", width:"10%", padding:"5%", background:"black", borderRadius:"10%",border:"2px solid white"}}
    >
      <h1>{Count}</h1>
      <button style={{color:"yellow", background:"black", padding:"1%", borderRadius:"20%", border:"white solid", fontSize:"3rem"}} onClick={() => setCount(Count + 1)}>
      +
      </button>
      <button style={{color:"yellow", background:"black", padding:"1% 4% 1% 4%", borderRadius:"20%", border:"white  solid", fontSize:"3rem", marginLeft:"1rem"}} onClick={() => setCount(Count - 1)}>
      -
      </button> 
      <br></br>
      <button style={{color:"red", background:"black", border:"white 2px solid", fontSize:"1rem", marginTop:"5%"}} onClick={() => setCount(0)}>
      Reset
      </button>
    </div>
    <div style={{width:"15%",}}>
      <form onSubmit={handleSubmit} style={{border:"2px solid white", borderRadius:"10%", padding:"20%", width:"100%",background:"black"}}>
      <h3 style={{color:"yellow"}}>Name</h3>
      <input type="text" placeholder="Enter your name" value={Name} onChange={(e) => setName(e.target.value)} style={{padding:"3%"}}></input>
      <h3 style={{color:"yellow"}}>Email</h3>
      <input type="email" placeholder="Enter your email" value={Email} onChange={(e) => setEmail(e.target.value)} style={{padding:"3%"}}></input>
      <h3 style={{color:"yellow"}}>Message</h3>
      <input type="text" placeholder="Your Message?" value={Message} onChange={(e) => setText(e.target.value)} style={{padding:"10% 3% 10% 3%"}}></input> <br></br>
      <button type="submit" style={{color:"green", background:"black", border:"2px solid white", marginTop:"1rem"}}> 
      Submit
      </button>
      </form>
    </div>
  </div>
  );
}