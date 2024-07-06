import '../css/components/about.css'

const About = () => {
  return (
    <>
      <section className="about section">
        <div className="container">
          <div className="about__section">
            <h2 className="about__title">About</h2>
            <p className="about__description">Hello 🫡, my name is <strong>Adrián Felipe Covarrubias Merlo </strong> and I am 18 years old. I am currently studying telematics as a software developer and I am very interested in the entire field of technology. I'm always looking for things that require effort and self-discipline, and becoming a web developer is one of them.</p>
            <p className="about__description"><strong> I have been programming since september 2023 </strong>, on my journey to become a web developer i've been doing some proyects to improve my skills that i've acquired, but now i'm focused on creating web applications that can solve real-world problems and be able to improve the experience of people on the internet🙂.</p>
            <h3 className="about__technologys">My technologies</h3>
              <ul className="about__list">
                <img width="40" src="./public/atom.png" alt="" />
                <img width="40" src="./public/js.png" alt="" />
                <img width="40" src="./public/node-js.png" alt="" />
                <img width="40" src="./public/database.png" alt="" />
                <img width="40" src="./public/html-5.png" alt="" />
                <img width="40" src="./public/css-3.png" alt="" />
              </ul>
          </div>
          <div className="about__img">
            <img  src="./public/Me2.0.jpg" alt="Image of a wood" />
          </div>
        </div>
      </section>
    </>
  )
}

export default About