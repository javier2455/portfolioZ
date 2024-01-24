export default function SectionContainer({ children, styles, id }) {
  return (
    <section id={id} className={`w-full md:w-[740px] mx-auto ${styles}`}>
      {children}
    </section>
  )
}
