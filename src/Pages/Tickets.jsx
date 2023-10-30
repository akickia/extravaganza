import H1Animation from '../Components/H1Animation'
import TicketsCard from '../Components/TicketsCard'
import '../styles/tickets.css'
const optionsTickets = [
  {
    name: "Endagsbiljett",
    price: 295,
    info: "Tillgång till alla attraktioner och shower under en dag.",
    desc: "Perfekt för dem som vill uppleva allt Extravaganza har att erbjuda på en dag."
  },
  {
    name: "Familjebiljett",
    price: 950,
    info: "Alla familjemedlemmar (max 5 personer) får tillgång till attraktioner och shower under en dag.",
    desc: "Spara pengar genom att köpa som en familj, perfekt för en rolig dag tillsammans."
  },
  {
    name: "VIP-upplevelse",
    price: 595,
    info: "Snabbkö för attraktioner och gratis mat och dryck.",
    desc: "En lyxig upplevelse med personlig service och bekvämlighet."
  },
  {
    name: "Årskort",
    price: 1495,
    info: "Obegränsat antal besök under ett år, specialerbjudanden och rabatter på mat och souvenirer.",
    desc: "Perfekt för lokalbefolkningen eller dem som planerar flera besök, erbjuder flexibilitet och förmånliga erbjudanden."
  },
]

export default function Tickets() {

  const ticketsEl = optionsTickets.map((option, i) => {
    return <TicketsCard key={i} name={option.name} price={option.price} info={option.info} desc={option.desc} />
  })

  return (
    <article className="page page-tickets">
      <section className='page-content'>
        <H1Animation text={"Biljetter"} />
        <section className='page-intro'><p>Välkommen till Extravaganza - ditt ultimata resmål för spänning, glädje och oförglömliga äventyr! För dem som söker en enda dag fylld av skratt, spänning och underhållning är vår nöjespark det perfekta valet för en oförglömlig upplevelse.</p>
</section>
        <section className="tickets_info">
          <h2>Biljettinformation:</h2>
          <p><b>Biljettköp online:</b> För att göra din upplevelse ännu smidigare rekommenderar vi att du köper din biljett online. Välj din biljett och datum här nedanför och få enkelt din biljett via SMS eller e-post. Detta sparar tid och gör att du kan hoppa över köerna vid entrén.</p>
          <p><b>Biljettköp på plats:</b> Om du föredrar att köpa din biljett på plats, finns det biljettluckor vid huvudentrén där du kan göra ditt köp. Vi accepterar olika betalningsmetoder, inklusive kontanter och kreditkort.</p>
        </section>
        <section className='tickets_container'>
          {ticketsEl}
        </section>
       
        <section className='page-content middle'><h2>Vi ser fram emot att välkomna dig till Extravaganza för en dag fylld av skratt, glädje och äventyr! Ha en fantastisk tid och skapa minnen som varar livet ut. Tack för att du väljer Extravaganza som ditt nöjesmål!</h2>
        </section>
      </section>
    </article>
  )
}
