import { useEffect } from 'react'
import H1Animation from '../Components/H1Animation'
import bgVideo from '../assets/videos/happy.mp4'

export default function News() {
  //Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //News page
  return (
    <main className="page-container">
      <H1Animation text={"Nyheter"}/>
      <section className='page-content page-intro'>
        <p>Vår värld av spänning och underhållning växer ständigt. Utforska våra senaste attraktioner, magiska shower och specialhändelser här på Extravaganza! Varje besök är en ny möjlighet till äventyr.</p></section>
      <section className='page-content card start'>
        <h2>Ny Attraktion: "SkyRush Extreme" Tar Höjden till en Ny Nivå!</h2>
        <p>Vi är glada att presentera vår senaste sensation, "SkyRush Extreme"! En hisnande berg- och dalbana som tar dig på en otrolig resa genom skyn. Upplev adrenalinkicken med de snabbaste kurvorna och de mest fantastiska vyerna över Extravaganza. Kom och känn vinden i ditt hår och hjärtat i halsgropen med SkyRush Extreme - nu öppen för alla äventyrssugna själar!</p>
      </section>   
      <section className='page-content card end'>
        <h2>Magiska Shower Under Stjärnorna!</h2>
        <p>Njut av våra enastående kvällsshower under den gnistrande stjärnhimlen! Våra shower har fått en ny dimension när de framförs under nattens täcke. Följ med på en resa genom fantasiens värld, där ljus, ljud och magi förenas till en oförglömlig upplevelse. Missa inte detta spektakulära äventyr som får stjärnorna själva att dansa!</p>
      </section>
        <video muted autoPlay loop>
          <source src="../public/videos/happy.mp4" />The video is not supported in your browser
        </video>
      <section className='page-content card start'>
        <h2>Sommarfestival: Ett Hav av Kul!!</h2>
        <p>Extravaganza är redo att välkomna sommaren med en fantastisk festival! Upplev en färgglad värld av karuseller, god mat och skratt. Våra specialerbjudanden och aktiviteter kommer att göra sommaren minnesvärd för hela familjen. Ta med dig dina nära och kära och låt sommaren börja med ett leende på Extravaganza!!</p>
      </section>
      <section className='page-content page-outro middle'>
        <h2>Håll ögonen öppna för fler spännande nyheter och evenemang som kommer snart till Extravaganza. Följ oss på sociala medier och håll dig uppdaterad om alla våra senaste äventyr!</h2>
      </section>
    </main>
  )
}
