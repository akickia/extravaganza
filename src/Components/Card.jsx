import { useNavigate } from "react-router-dom"

//Card component with navigate
export default function Card({className, heading, text, link}) {
const navigate = useNavigate()
  return (
    <section className={className}>
      <h2>{heading}</h2>
      <p>{text}</p>
      <button onClick={() => navigate(link)}>Läs mer</button>
    </section>
  )
}
