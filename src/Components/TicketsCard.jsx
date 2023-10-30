import { useState, useEffect } from "react"
import { ReactSVG } from "react-svg"
import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

export default function TicketsCard({name, info, price, desc}) {

  const navigate = useNavigate()
const [nrOfTickets, setNrOfTickets] = useState(1)
const [showOverlay, setShowOverlay] = useState(false)
const [showConfirmation, setShowConfirmation] = useState(false)
const [sum, setSum] = useState(0)
const overlayEl = <section className="overlay">

    <motion.section initial={{opacity: 0}} animate={{opacity: 1}}  exit={{opacity: 0}} className="inner-overlay">
    <h2>Hur många {name} vill du köpa?</h2>
    <div>
      <button className="less" onClick={() => {if (nrOfTickets > 0) {setNrOfTickets(nrOfTickets-1)}}}>-</button>
      <p>{nrOfTickets}</p>
      <button className="more" onClick={() => setNrOfTickets(nrOfTickets+1)}>+</button>
    </div>
    <h3>Totalt: {sum} </h3>
    <div>
      <button className="no" onClick={() => {setShowOverlay(false)}}>Avbryt</button>
      <button className="yes" onClick={() => checkNr()}>JA, LET'S GO!</button>
    </div>
  </motion.section>
</section>

function checkNr() {
  if (nrOfTickets > 0) {
    setShowConfirmation(true)
    setShowOverlay(false)
  }
}

const confirmationEl = 
  <motion.section className="overlay" initial={{x: 2000, opacity: 0}} animate={{x:0, opacity: 1}} exit={{x:-2000}}>
    <section className="inner-overlay">
    <h2>Tack för ditt köp av {nrOfTickets}st {name}</h2>
    <p>Biljetterna hittar du på mailen</p>
    <p><small>Ordernr: 542WEXF5424A</small></p>
    <button onClick={() => {confirmationClose()}}>Got it!</button>
    </section>
  </motion.section>
  

function confirmationClose() {
  setShowConfirmation(false)
  setShowOverlay(false)
  setNrOfTickets(1)
  navigate("/")
}


useEffect(() => {
  {if (nrOfTickets >= 0) {
    return setSum(nrOfTickets * price)
  } }
}, [nrOfTickets])

  return (
    <>
      <AnimatePresence> {showOverlay && overlayEl} {showConfirmation && confirmationEl}</AnimatePresence>
   
    <section className="tickets_card">
      <h2>{name}</h2>
      <h4>{info}</h4>
      <p>{desc}</p>
      <section className="buy-container">
        <div className="svg-container"><ReactSVG src="./src/assets/img/ticket.svg" className="ticket-svg"></ReactSVG>
        <ReactSVG src="./src/assets/img/ticket.svg" className="ticket-svg"></ReactSVG>
        </div>
        <p>{price} kr</p>
        <button onClick={() => setShowOverlay(true)}>Köp biljett</button>
      </section>
    </section>
    </>
  )
}
