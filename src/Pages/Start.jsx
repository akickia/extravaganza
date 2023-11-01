import { useEffect } from "react"
import Entrance from "../Components/Entrance"
import MainContent from "../Components/MainContent"


export default function Start() {
  //Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
        <Entrance /> 
        <MainContent />
    </>
  )
}
