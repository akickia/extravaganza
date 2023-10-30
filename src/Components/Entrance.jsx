import clown from '../assets/img/clown.svg'
import roller from '../assets/img/rc.svg'
import swing from '../assets/img/swing.svg'
import wheel from '../assets/img/wheel.svg'
import { motion } from "framer-motion"
import H1Animation from './H1Animation'

export default function Entrance() {


  return (
    <article className='hero'>
      <section>
        <h3>Ditt Äventyr börjar här!</h3>
        <H1Animation text={"EXTRAVAGANZA"} />
      </section>
   
      <section className='tivoli'>
        <motion.img 
          className="swing" 
          src={swing} 
          alt='silouette of large swing'
          initial={{y: -1000}}
          animate={{y: 0, scaleY:2}}
          transition={{duration: .5, delay: 1}}/>
        <motion.img 
          className='rollercoaster' 
          src={roller} 
          alt='silouette of roller coaster ride'
          initial={{scaleY: 0}}
          animate={{scaleY:2.4, scaleX:2.4, y: 250 }}
          transition={{duration: .5, delay: 2.5}}/>
        <motion.img 
          className='wheel' 
          src={wheel} 
          alt='silouette of ferris wheel'
          initial={{x: 1000}}
          animate={{x: 0, scale:1.8, y: 45 }}
          transition={{duration: .5, delay: 1.5}}/>
      </section>
      <section className='figure' >
        <motion.div 
          className='bubble'
          animate={{opacity: 1}} 
          transition={{ delay: 7.5}} >
          <p>Redo för en åktur?</p>
        </motion.div>
        <motion.div 
          className='bubble'
          animate={{opacity: 1}} 
          transition={{ delay: 7.25}}>
        </motion.div>
        <motion.div 
          className='bubble'
          animate={{opacity: 1}} 
          transition={{ delay: 7}} >
        </motion.div>
        <motion.img 
          className='clown' 
          initial={{ scale: 0 }} 
          animate={{ scale: 1}} 
          transition={{ duration: 1, delay: 5 }} 
          src={clown}>  
        </motion.img>
      </section>
    </article>
  )
}
