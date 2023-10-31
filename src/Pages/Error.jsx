import H1Animation from '../Components/H1Animation'

export default function Error() {
  return (
    <main className="page-container">
    <section className='page-content'>
      <H1Animation text={"Någonting gick fel"} />
      <p>404 - page not found</p>
    </section>
  </main>
  )
}
