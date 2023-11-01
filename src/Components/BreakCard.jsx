import { useState, useEffect } from 'react'
import foodImg from '../assets/img/chef.png'
import { AnimatePresence, motion } from 'framer-motion'

export default function BreakCard({classname, title, info}) {
  //Overlay: 
  const [showOverlay, setShowOverlay] = useState(false)
  let overlayEl = 
  <section className="overlay">
    <motion.section 
      initial={{x: -2000, y: 0}} 
      animate={{x: 0, y: 0}}  
      transition={{duration: .25}}
      exit={{x: 2000, y: 0}} 
      className="inner-overlay food-overlay">
      <h2>{title}</h2>
      <img src={foodImg} alt='tecknade kockar'></img>
      <p>{info}</p>
      <button onClick={() => setShowOverlay(false)}>Got it!</button>
    </motion.section>
  </section>

//UseEffect for positioning overlay
useEffect(() => {
  if (showOverlay) {
  const userScrollPosition = window.scrollY || window.scrollY;
  const screenHeight = window.innerHeight;
  const yOffset = -200
  const middleOfScreen = userScrollPosition + screenHeight / 4 + yOffset;
  console.log(middleOfScreen)
  const innerOverlayEl = document.querySelector(".food-overlay")
  innerOverlayEl.style.top = `${middleOfScreen}px`;
  }
}, [showOverlay])

  return (
    <>
      <AnimatePresence>{ showOverlay && overlayEl}</AnimatePresence>
      <section className={classname}>
        <h2>{title}</h2>
        <p>{info}</p> 
        <button onClick={() => setShowOverlay(true)}>Läs mer</button>
    </section>  
    </>
  )
}
