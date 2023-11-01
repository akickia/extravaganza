import { useEffect } from 'react'
import H1Animation from '../Components/H1Animation'
import BreakCard from '../Components/BreakCard'
import bgVideo from '../assets/videos/food2.mp4'
import bgVideo1 from '../assets/videos/relax.mp4'

export default function Break() {
  //Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //Break page
  return (
    <main className="page-container">
      <H1Animation text={"Mat och vila"}/>
      <section className='page-intro page-content'>
        <p>Smaka på våra läckra rätter från världens alla hörn och hitta din favoritrestaurang bland Extravaganzas många matställen. Och när det är dags att vila benen, leta upp våra sköna platser för avkoppling. Oavsett om du söker en smakupplevelse eller en lugn plats för återhämtning, vi har något för alla smaker och behov.</p>
      </section>
      <section className='video-container'>
        <video className='video-noMrg' muted autoPlay loop alt="Närbild på pannkakor med sirap">
          <source src={bgVideo} />The video is not supported in your browser
        </video>
      </section>
      <BreakCard 
        classname={"page-content card start"} 
        title={'Gastronomisk Glädje'} 
        info={"Välkommen till Gastronomisk Glädje, en restaurang där smaker från världens alla hörn möts! Här kan du njuta av gourmeträtter och internationella läckerheter i en elegant och avslappnad atmosfär. Från saftiga biffar till färska skaldjur, vår meny är skapad för att tillfredsställa alla smaklökar. Vi erbjuder även ett noggrant utvalt vin- och cocktailsortiment för att komplettera din måltid. Gastronomisk Glädje är platsen där matlagningskonst möter nöjesparkens magi."} >
      </BreakCard>   
      <BreakCard 
        classname={"page-content card end"} 
        title={'Äventyrliga Smaker'} 
        info={"På Äventyrliga Smaker tar vi dig med på en kulinarisk resa full av överraskningar! Vår meny är inspirerad av resor över hela världen och erbjuder allt från street food favoriter till fusionrätter. Här kan du smaka på kreativa och smakfulla rätter som utmanar traditionerna och tar dina smaklökar på äventyr. Varje måltid på Äventyrliga Smaker är en utforskning av smaker och dofter som kommer att lämna dig förtrollad."} >
      </BreakCard>   
      <BreakCard 
        classname={"page-content card start"} 
        title={'Hemtrevlig Hälsa'} 
        info={"På För dem som söker hälsosamma alternativ är Hemtrevlig Hälsa det perfekta valet. Vår restaurang är dedikerad till att erbjuda färska och näringsrika måltider som ger energi och glädje. Vår meny inkluderar fräscha sallader, smoothies, grillade rätter och mycket mer. Vi strävar efter att använda lokala och ekologiska ingredienser för att skapa smakrika rätter som både är goda och bra för hälsan. Kom och upplev en smakupplevelse som är snäll både mot din kropp och ditt sinne."} >
      </BreakCard>   
      <BreakCard 
        classname={"page-content card end"} 
        title={'Söta Frestanden'} 
        info={"För alla sötsugna besökare är Söta Frestanden den ultimata himmelriket! Här hittar du allt från färska bakverk och chokladkreationer till glass i alla smaker du kan tänka dig. Våra konditorer och glassmakare är mästare på att skapa läckra godsaker som kommer att tillfredsställa ditt sötsug. Varför inte unna dig själv en bit av himmelriket och njut av något sött och underbart på Söta Frestanden?"} >
      </BreakCard>   
      <section className='video-container'>
        <video muted autoPlay loop alt="Barn som gungar från ett träd med natur i bakgrunden">
          <source src={bgVideo1} />The video is not supported in your browser
        </video>
      </section>
      <section className='page-content card start'>
        <h2>Plats för Återhämtning</h2>
        <p>Efter en dag full av spänning är det viktigt att hitta en plats för återhämtning. Våra noga utvalda områden för avkoppling är perfekta för att vila benen och samla energi. Slå dig ner i en skuggig vrå eller vid dammen, lyssna på fåglarnas sång och känn lugnet sänka sig över dig. Här kan du samla intryck och njuta av den rogivande atmosfären innan du ger dig iväg på nästa äventyr.</p>
      </section>
      <section className='page-content page-outro middle'>
        <h2>Oavsett vilken restaurang du väljer på Extravaganza, kan du vara säker på att din smakupplevelse kommer att vara lika minnesvärd som ditt äventyr i nöjesparken. Bon appétit och njut av din måltid och avkoppling! Om du har några specifika önskemål om restaurangteman eller andra detaljer, tveka inte att låta oss veta!</h2>
      </section>
    </main>
  )
}
