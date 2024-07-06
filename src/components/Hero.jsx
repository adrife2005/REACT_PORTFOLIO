import '../css/components/hero.css'

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <img className="hero__img" src="./public/face.jpg" alt="Image hero section" />
          <h2 className="hero__name">Hi, I'm Adrian 👋</h2>
          <h1 className="hero__rol">FRONT-END <br/> WEB DEVELOPER. </h1>
          <p className="hero__description">I'm always looking for things that massively improve my life if i achieve them, and becoming a web developer is one of them. Once i've achieved my goal, i'll teach other people how to do it.</p>
          <a href="mailto:adriandev334@gmail.com" className="hero__btn btn">Send Email</a>
          <iframe  className="hero__mousescroll" width="50" src="https://lottie.host/embed/1cb5c5bb-36e3-4528-9b3f-d170ea2de130/HJLAziNuYq.json"></iframe>
        </div>
      </section>
    </>
  )
}

export default Hero