import "../styles/nav.css"
import { useState } from "react";
import Nav from "./Nav";


export default function Header({state, setState}) {
  
  return (
    <header onClick={() => setState(!state)}>
      <i >
        <div></div>
        <div></div>
        <div></div>
        
      </i>{state &&  <Nav></Nav>}
    </header>
  )
}


