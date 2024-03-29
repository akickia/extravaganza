import { useEffect } from 'react'
import twist from '../assets/img/twist.jpg'
import bgVideo2 from '../assets/videos/roller.mp4'
import H1Animation from '../Components/H1Animation'

export default function Rides() {
  //Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //Rides page
  return (
    <main className="page-container">
      <H1Animation text={"Attraktioner"} />
      <section className='page-content page-intro'>
        <p>Från adrenalinfyllda berg- och dalbanor till en hisnande gunga och en hissande färd i vårt Pariserhjul. Det finns något för alla äventyrssugna själar här på Extravaganza. </p>
      </section>
      <section className='page-content card start'>
        <h2>Himmelska Gungan - Sväva Mot Skyarna!</h2>
        <p>Sätt dig fast och sväva över marken på vår hisnande Himmelska Gunga! Känn vinden i ditt hår och njut av panoramautsikten över hela parken. Detta är en upplevelse för de modiga, där spänning och glädje möts i luften.</p>
      </section>
      <section className='page-content card end'>
        <h2>SkyRush Berg- och Dalbana - En Hastig Resa Genom Äventyret!</h2>
        <p>Upplev en hisnande färd på vår SkyRush berg- och dalbana! Gör dig redo för snabba kurvor, branta nedförsbackar och virvlande loopar. Den här banan tar adrenalinkicken till en ny nivå och är perfekt för dem som söker en riktig utmaning.</p>
      </section>
      <section className='video-container'>
        <video muted autoPlay loop alt={"Inuti en berg-och-dalbanevagn i rörelse"}>
          <source src={bgVideo2} />The video is not supported in your browser
        </video>
      </section>
      <section className='page-content card start'>
        <h2>Pariserhjulet - En Romantisk Vy över Parken!</h2>
        <p>Ta en lugn åktur i vårt Pariserhjul och upplev en romantisk vy över Extravaganza. Se solnedgången över parken eller njut av den gnistrande stjärnhimlen på kvällen. Det här är den perfekta aktiviteten för avkoppling och romantik.</p>
      </section>
      <section className='page-content card end'>
        <h2>Turbo Twist - Snurra In i Glädjen!</h2>
        <p>Gör dig redo för en snurrig upplevelse på vår Turbo Twist! Den här attraktionen tar dig på en vild färd med snabba varv och virvlande rörelser. En rolig och yrväckande attraktion som kommer få ditt hjärta att slå fortare.</p>
        <img className="img-opac" src={twist} alt={"Attraktionen Turbo Twist"}></img>
      </section>
      <section className='page-content page-outro middle'>
        <h2>Oavsett vilken attraktion du väljer är spänningen garanterad på Extravaganza! Planera ditt besök idag och upplev en dag full av äventyr, skratt och fantastiska minnen.</h2>
      </section>
    </main>
  )
}
