import '../css/components/mobilemenu.css'

const MobileMenu = () => {
  return (
    <>
       <div className="mobile-menu">
        <ul className="mobile__list">
        <img width="100" src="men.png" alt="Me image" />
        <div className="mobile__social">
          <a target="_blank" className="mobile__link" href="https://github.com/adrife2005"><i className="fa-brands fa-github-alt"></i></a>
          <a target="_blank" className="mobile__link" href="https://www.linkedin.com/in/adrifecova/"><i className="fa-brands fa-linkedin-in"></i></a>
          <a className="mobile__link" href="/"><i className="fa-brands fa-x-twitter"></i></a>
          <a className="mobile__link" href="/"><i className="fa-brands fa-discord"></i></a>
        </div>
        <div className="mobile__line"></div>
        <a className="navbar__toggle"><i className="fa-solid fa-sun"></i></a>
        <a href="mailto:adriandev334@gmail.com" className="btn">Email</a>
      </ul>
      </div>
    </>
  )
}

export default MobileMenu