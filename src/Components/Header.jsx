import { AnimatePresence } from "framer-motion";
import "../styles/nav.css"
import Nav from "./Nav";

export default function Header({state, setState}) {
  //Open nav when clicking burger icon
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


