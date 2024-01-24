import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'

export default function Layout({ children }) {
  return (
    <main className='bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'>
      <Header />
      {children}
      <Footer />
    </main>
  )
}
