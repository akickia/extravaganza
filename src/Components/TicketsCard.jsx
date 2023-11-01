import { useState, useEffect } from "react"
import { ReactSVG } from "react-svg"
import { AnimatePresence, motion } from "framer-motion"


export default function TicketsCard({name, info, price, desc}) {
  const [nrOfTickets, setNrOfTickets] = useState(1)
  const [showOverlay, setShowOverlay] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [sum, setSum] = useState(0)

  //Overlays:
  const overlayEl = 
  <section className="overlay">
    <motion.section 
      initial={{opacity: 0}} 
      animate={{opacity: 1}}  
      exit={{opacity: 0}} 
      className="inner-overlay tickets-overlay">
      <h2>Hur många {name} vill du köpa?</h2>
      <div className="box">
        <button 
          className="less" 
          onClick={() => {if (nrOfTickets > 0) {setNrOfTickets(nrOfTickets-1)}}}>-</button>
        <p>{nrOfTickets}</p>
        <button 
          className="more" 
          onClick={() => setNrOfTickets(nrOfTickets+1)}>+</button>
      </div>
      <h3>Totalt: {sum} </h3>
      <div className="box">
        <button 
          className="no" 
          onClick={() => {setShowOverlay(false)}}>Avbryt</button>
        <button 
          className="yes" 
          onClick={() => checkNr()}>JA, LET'S GO!</button>
      </div>
    </motion.section>
  </section>

  const confirmationEl = 
    <motion.section 
      className="overlay" 
      initial={{x: 2000, opacity: 0}} 
      animate={{x:0, opacity: 1}} 
      exit={{x:-2000}}>
      <section className="inner-overlay tickets-overlay">
        <h2>Tack för ditt köp av {nrOfTickets}st {name}</h2>
        <section>
          <ReactSVG 
            src="./src/assets/img/clown.svg" 
            className="ticket-svg"
            alt="Colorful happy clown">  
          </ReactSVG>
          <p>Biljetterna hittar du på mailen</p>
          <p><small>Ordernr: 542WEXF5424A</small></p>
        </section>
        <button 
          onClick={() => {confirmationClose()}}>Got it!</button>
      </section>
    </motion.section>

//Number of tickets function
function checkNr() {
  if (nrOfTickets > 0) {
    setShowConfirmation(true)
    setShowOverlay(false)
  }
}

//Reset function
function confirmationClose() {
  setShowConfirmation(false)
  setShowOverlay(false)
  setNrOfTickets(1)
}

//UseEffect to set sum
useEffect(() => {
  {if (nrOfTickets >= 0) {
    return setSum(nrOfTickets * price)
  } }
}, [nrOfTickets])

//UseEffect for positioning overlay
useEffect(() => {
  if (showOverlay || showConfirmation) {
    const userScrollPosition = window.scrollY || window.scrollY;
    const screenHeight = window.innerHeight;
    const yOffset = -500
    const middleOfScreen = userScrollPosition + screenHeight / 4 + yOffset;
    console.log(middleOfScreen)
    const innerOverlayEl = document.querySelector(".inner-overlay")
    innerOverlayEl.style.top = `${middleOfScreen}px`;
  }
}, [showOverlay])

  return (
    <>
      <AnimatePresence> {showOverlay && overlayEl} {showConfirmation && confirmationEl}</AnimatePresence>
      <section className="card card-standard end">
        <h2>{name}</h2>
        <h4>{info}</h4>
        <p>{desc}</p>
        <section className="buy-container">
          <div className="svg-container">
            <ReactSVG src="./src/assets/img/ticket.svg" className="ticket-svg"></ReactSVG>
            <ReactSVG src="./src/assets/img/ticket.svg" className="ticket-svg"></ReactSVG>
          </div>
          <p>{price} kr</p>
          <button onClick={() => setShowOverlay(true)}>Köp biljett</button>
        </section>
      </section>
    </>
  )
}
