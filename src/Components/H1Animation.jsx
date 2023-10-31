import { motion } from "framer-motion"

export default function H1Animation({text}) {
  const defaultAnimations = {
    hidden: {
      opacity: 0,
      color: "#ffffff",
    },
    visible: {
      opacity: 1,
      color: ["#000000", "#ff0000", "#ffff00"],
    }
  }
  return (
    <motion.h1 className="page-content"
          initial="hidden" 
          animate="visible" 
          transition={{staggerChildren: .05, easings: "ease"}}>
            {text.split("").map((char, i) => (<motion.span variants={defaultAnimations}  key={i} >{char}</motion.span>))}
          </motion.h1>
  )
}
