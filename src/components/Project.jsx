import '../css/components/proyect.css'

const Project = () => {
  return (
    <>
      <section className="proyect section">
        <div className="container">
          <h2 className="proyect__title">Projects</h2>
          <div className="proyect__grid">
            <div className="proyect__card card">
              <div className="proyect__img">
                <img src="./new2.png" alt="proyect 1" />
              </div>
                <div className="proyect__main">
                  <h3 className="proyect__name">Be Human</h3>
                  <div className="proyect__links">
                    <a href="https://github.com/adrife2005/Be_Human"><i className="fa-brands fa-github-alt"></i></a>
                    <a href="https://be-human-three.vercel.app/"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                </div>
                <p className="proyect__about">"Mi página para el gimnasio 'Be Human' está diseñada para proporcionar una experiencia digital completa y enriquecedora para los miembros del gimnasio.</p>
                <div className="proyect__skills">
                  <img width="35" src="html-5.png" alt="" />
                  <img width="35" src="css-3.png" alt="" />
                  <img width="35" src="js.png" alt="" />
                </div>
            </div>
            <div className="proyect__card card">
              <div className="proyect__img">
                <img src="./new1.png" alt="proyect" />
              </div>
                <div className="proyect__main">
                  <h3 className="proyect__name">Sal Real De Colima</h3>
                  <div className="proyect__links">
                    <a href="#"><i className="fa-brands fa-github-alt"></i></a>
                    <a href="https://simonhandymanservice.vercel.app"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                </div>
                <p className="proyect__about">La página web para Sal Real De Colima es una plataforma integral dedicada a compartir la pasión y la autenticidad de nuestros productos de sal.</p>
                <div className="proyect__skills">
                  <img width="35" src="atom.png" alt="" />
                  <img width="35" src="html-5.png" alt="" />
                  <img width="35" src="css-3.png" alt="" />
                  <img width="35" src="js.png" alt="" />
                </div>
            </div>
            <div className="proyect__card card">
              <div className="proyect__img">
                <img src="./new3.png" alt="proyect" />
              </div>
                <div className="proyect__main">
                  <h3 className="proyect__name">ToDoApp</h3>
                  <div className="proyect__links">
                    <a href="#"><i className="fa-brands fa-github-alt"></i></a>
                    <a href="https://to-do-app-qa3t.onrender.com"><i className="fa-solid fa-arrow-up-right-from-square"></i></a>
                  </div>
                </div>
                <p className="proyect__about">La página TodoApp es el destino central para aquellos que buscan una solución integral para la gestión de tareas y la productividad personal.</p>
                <div className="proyect__skills">
                  <img width="35" src="atom.png" alt="" />
                  <img width="35" src="html-5.png" alt="" />
                  <img width="35" src="css-3.png" alt="" />
                  <img width="35" src="js.png" alt="" />
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Project