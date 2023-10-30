import { useNavigate } from "react-router-dom"

export default function Card({className, heading, img, text, link}) {

const navigate = useNavigate()

  return (
    <section className={className}>
      <h2>{heading}</h2>
      {/* <img className="image" src={img}></img> */}
      <p>{text}</p>
      <button onClick={() => navigate(link)}>Läs mer</button>
    </section>
  )
}
