import { useEffect } from "react";
import H1Animation from "../Components/H1Animation";

export default function About() {
  //Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //About page
  return (
    <main className="page-container">
      <H1Animation text={"Om Extravaganza"} />
      <section className='page-content page-intro'>
        <p>Välkommen till Extravaganza - Ditt Äventyr börjar här!</p>
      </section>
      <section className='page-content card start'>
        <h2>Om Oss:</h2>
        <p>Extravaganza är inte bara en nöjespark; det är en magisk värld fylld med spänning, skratt och minnen som varar livet ut. Med över två decennier av underhållning och äventyr är vi stolta över att vara ett av de mest älskade nöjesfälten i regionen. Vi strävar efter att skapa en plats där fantasin blir verklighet och där människor i alla åldrar kan uppleva glädje och spänning tillsammans.</p>
      </section>
      <section className='page-content card end'>
        <h2>Vår Mission:</h2>
        <p>På Extravaganza tror vi på att skapa en plats där drömmar tar flyg och där vardagen lämnas bakom. Vår mission är att erbjuda en säker och underhållande miljö där familjer och vänner kan koppla av, skratta och skapa minnen tillsammans. Vi strävar efter att leverera enastående kundservice och en mångfald av attraktioner som tilltalar alla smaker.</p>
      </section>
      <section className='page-content card start'>
        <h2>Våra Attraktioner:</h2>
        <p>Från adrenalinfyllda berg- och dalbanor till magiska shower och lekfulla områden för de små, har Extravaganza något för alla. Våra noggrant utvalda attraktioner är utformade för att ge en balans mellan spänning och säkerhet, vilket gör dem till perfekta aktiviteter för hela familjen.</p>
      </section>
      <section className='page-content card end'>
        <h2>Vår Personal:</h2>
        <p>Vår dedikerade personal är hjärtat och själen i Extravaganza. Våra vänliga medarbetare arbetar hårt för att skapa en välkomnande atmosfär och se till att varje gäst har den bästa möjliga upplevelsen hos oss. Från parkvakter till underhållspersonal, är varje medlem av vårt team här för att se till att din dag hos oss blir oförglömlig.</p>
      </section>
      <section className='page-content card start'>
        <h2>Besök Oss:</h2>
        <p>Vi ser fram emot att välkomna dig till Extravaganza för en dag fylld med glädje, äventyr och skratt. Oavsett om du är här med din familj, vänner eller kollegor, kommer du att upptäcka en värld av spännande möjligheter här hos oss. Kom och låt oss skapa minnen tillsammans!
        </p>
      </section>
      <section className='page-content card end'>
        <h2>Kontaktuppgifter:</h2>
        <p>Tel: 070 - 100 00 00</p>
        <p>Adress: Vaganzgatan 23 <br></br>100 00 Staden</p>
        <p>Epost: extravaganza@extravaganza.se</p>
      </section>
      <section className="page-content page-outro middle"><h2>Tack för att du väljer Extravaganza som ditt nöjesmål. Vi ser fram emot att ge dig en oförglömlig upplevelse!</h2>
      </section>
    </main>
  )
}
