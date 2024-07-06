import '../css/components/header.css'



const Header = ({toggleMenu}) => {

  const getLocal = localStorage.getItem("theme");
  getLocal && document.body.classList.add("light-mode");

  function toggleTheme() {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    localStorage.setItem("theme", "ligh-mode");
  } else {
    localStorage.removeItem("theme");
    document.body.removeAttribute("class");
    }
}


  return (
    <>
      <header className="fixed">
        <nav className="navbar">
          <div className="container">
            <h3 className="navbar__logotext">ADRIFE.DEV</h3>
            <ul className="navbar__menu">
              <a target="_blank" className="navbar__link" href="https://github.com/adrife2005"><i className="fa-brands fa-github-alt"></i></a>
              <a target="_blank" className="navbar__link" href="https://www.linkedin.com/in/adrifecova/"><i className="fa-brands fa-linkedin-in"></i></a>
              <a target="_blank" className="navbar__link" href="/"><i className="fa-brands fa-x-twitter"></i></a>
              <a target="_blank" className="navbar__link" href="/"><i className="fa-brands fa-discord"></i></a>
              <div className="navbar__line"></div>
              <a onClick={toggleTheme} className="navbar__toggle"><i className="fa-solid fa-circle-half-stroke"></i></a>
              <a href="mailto:adriandev334@gmail.com" className="btn">Email</a>
            </ul>
            <button onClick={toggleMenu} className="navbar__hamburgerbtn">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header