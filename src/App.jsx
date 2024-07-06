import Header from "./components/Header"
import MobileMenu from "./components/MobileMenu"
import Hero from "./components/Hero"
import About from "./components/About"
import Project from "./components/Project"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  const toggleMenu = () => {
    const hamburguerline1 = document.querySelectorAll(".line")[0];
    const hamburguerline2 = document.querySelectorAll(".line")[1];
    const hamburguerline3 = document.querySelectorAll(".line")[2];
    const mobileMenu = document.querySelector(".mobile-menu");

    hamburguerline1.classList.toggle("linetop");
    hamburguerline2.classList.toggle("remove");
    hamburguerline3.classList.toggle("linebottom");
    mobileMenu.classList.toggle("open");
  }

  return (
    <>
      <Header toggleMenu={toggleMenu} />
      <MobileMenu />
      <main>
        <Hero />
        <About/>
        <Project/>
      <Contact />
      </main>
      < Footer />
      </>
  )
}

export default App
