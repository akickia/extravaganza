import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Nav() {

  //Create staggereffect for nav-items
  const container = {
    hidden: { x: -250 },
    show: {
      x: 0,
      duration: 2,
      transition: {
        staggerChildren: .1
      }
    }
  }
  
  const item = {
    hidden: { x: -250 },
    show: { x: 0, duration: .5 },
  }

  return (
      <nav>
        <motion.ul variants={container} initial="hidden" animate="show">
          <Link to="/"><motion.li variants={item}>Startsida</motion.li></Link>
          <Link to="/tickets"><motion.li variants={item}>Biljetter</motion.li></Link>
          <Link to="/break"><motion.li variants={item}>Mat och Vila</motion.li></Link>
          <Link to="/news"><motion.li variants={item}>Nyheter</motion.li></Link>
          <Link to="/rides"><motion.li variants={item}>Våra attraktioner</motion.li></Link>
          <Link to="/about"><motion.li variants={item}>Bra att veta</motion.li></Link>
        </motion.ul>
      </nav>
  )
}
