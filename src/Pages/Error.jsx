import { useEffect } from 'react'
import H1Animation from '../Components/H1Animation'

export default function Error() {
  //Scroll to top when mounted
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  //Error page
  return (
    <main className="page-container">
    <section className='page-content'>
      <H1Animation text={"Någonting gick fel"} />
      <p>404 - page not found</p>
    </section>
  </main>
  )
}
