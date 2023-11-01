import Card from './Card'
import bgVideo from "../assets/videos/rides.mp4"

export default function MainContent() {
  return (
      <main className='page-container middle'>
        <section className='page-content flex-container'>
          <Card 
            className={"card card-standard"} 
            heading="Köp biljetter"
            text={"Säkra Din Biljett till En Dags Spänning! Upptäck vårt urval av biljettalternativ för att skräddarsy din perfekta dag på Extravaganza. Från standard endagarsbiljetter till VIP-upplevelser och familjepaket, vi har alternativ för alla äventyrsnivåer och budgetar. Se fram emot en oförglömlig dag full av glädje och skratt!"} 
            link={'/tickets'}>
          </Card>
          <Card 
            className={"card card-standard"} 
            heading="Mat och vila" 
            text={"Kulinariska Upplevelser och Plats för Återhämtning! Smaka på våra läckra rätter från världens alla hörn och hitta din favoritrestaurang bland Extravaganzas många matställen. Och när det är dags att vila benen, leta upp våra sköna platser för avkoppling. Oavsett om du söker en smakupplevelse eller en lugn plats för återhämtning, vi har något för alla smaker och behov."} link={'/break'}>
          </Card>
        </section>
        <section className='video-container'>
          <video muted autoPlay loop>
            <source src={bgVideo} />The video is not supported in your browser
          </video>
        </section>
        <section className='flex-container page-content'>
          <Card 
            className={"card"} 
            heading="Nyheter" 
            text={"Vår värld av spänning och underhållning växer ständigt. Utforska våra senaste attraktioner, magiska shower och specialhändelser här på Extravaganza! Varje besök är en ny möjlighet till äventyr. Klicka här för att lära dig mer och planera ditt nästa besök."} 
            link={'/news'}>
          </Card>
          <Card 
            className={"card card-standard"} 
            heading="Våra attraktioner" 
            text={"Utforska Extravaganzas Fantastiska Attraktioner.Ta en titt på våra spännande attraktioner som tar spänningen till nya höjder! Från adrenalinfyllda berg- och dalbanor till en hisnande gunga och en hissande färd i vårt Pariserhjul. Det finns något för alla äventyrssugna själar här på Extravaganza. Klicka här för att upptäcka våra huvudattraktioner och planera ditt nästa äventyr."} 
            link={'/rides'}>
          </Card>
          <Card 
            className={"card card-standard"} 
            heading="Bra att veta" 
            text={"Värdefull Information och Kontaktdetaljer! Få insikter om allt du behöver veta om Extravaganza! Från parkregler till användbara tips för besök, här finns allt för att göra ditt besök så smidigt som möjligt. Dessutom hittar du våra kontaktuppgifter, så om du någonsin undrar över något är vi bara ett samtal eller e-post bort."} 
            link={'/about'}>
          </Card>
        </section>
      </main>
  )
}
