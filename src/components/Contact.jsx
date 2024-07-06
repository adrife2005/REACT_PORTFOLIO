import '../css/components/contact.css'

const Contact = () => {
  return (
    <>
      <section className="contact section">
        <div className="container">
          <h2 className="contact__title">Get in Contact</h2>
          <p className="contact__description">Whether you are starting a project, have business inquiries or just want to say hi, my inbox is always open so feel free to reach out and I will get back to you as soon as possible.</p>
          <a href="mailto:adriandev334@gmail.com" className="contact__btn btn">Lets work together</a>
        </div>
      </section>
    </>
  )
}

export default Contact