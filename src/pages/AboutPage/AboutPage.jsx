import "./AboutPage.css";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import foto from "../../assets/ifIHadOne.gif";
import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
import gmail from "../../assets/gmail.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
const AboutPage = () => {
  return (
    <div className="about-page">
      <HeaderComponent />
      <div className="about-page-body">
        <h1 className="about-page-body-title">YO SOY</h1>
        <div className="about-page-body-i-am">
          <div className="about-page-body-i-am-photo-container">
            <img src={foto} alt="" className="about-page-body-i-am-photo" />
          </div>
          <ul className="about-page-body-i-am-list">
            <li>Adrian Camilo Gil Franco</li>
            <li>Nací en Colombia. Diciembre 23, 1994</li>
            <li>Vivo en Bogotá, Colombia</li>
            <li>Soy Ingeniero Mecánico</li>
            <li>Actualmente me estoy formando como desarrollador full stack</li>
          </ul>
        </div>
        <div className="about-page-body-what-ive-learned">
          <h2 className="about-page-body-subtitle">
            ¿Que he aprendido en Make it Real?
          </h2>
          <h3 className="about-page-body-item">ESTILOS:</h3>
          <p className="about-page-body-item-paragraph">
            Con ayuda de Make it Real he aprendido sobre las diferentes
            herramientas y técnicas para aplicar estilos de forma eficiente a
            las paginas web
          </p>
          <h3 className="about-page-body-item">ECMA SCRIPT Next:</h3>
          <p className="about-page-body-item-paragraph">
            Durante las ultimas semanas he conocido acerca de la sintaxis
            moderna de JavaScript, asi como muchos métodos que facilitan la
            escritura y lectura de código.
          </p>
          <h3 className="about-page-body-item">REACT:</h3>
          <p className="about-page-body-item-paragraph">
            Con ayuda de Make it Real he aprendido sobre las diferentes
            herramientas y técnicas para aplicar estilos de forma eficiente a
            las paginas web
          </p>
        </div>
        <div className="about-page-body-social-network">
          <h2 className="about-page-body-subtitle">Mis Redes Sociales</h2>
          <div className="about-page-body-social-network-all-items">
            <div
              className="about-page-body-social-network-item"
              onClick={() =>
                (window.location.href = "https://github.com/CamiloGilFranco")
              }
            >
              <div className="about-page-body-social-network-icon-background">
                <img
                  src={github}
                  alt=""
                  className="about-page-body-social-network-icon"
                />
              </div>
              <span className="about-page-body-social-network-span">
                GitHub
              </span>
            </div>
            <div
              className="about-page-body-social-network-item"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/adrian-camilo-gil-franco/")
              }
            >
              <div className="about-page-body-social-network-icon-background">
                <img
                  src={linkedin}
                  alt=""
                  className="about-page-body-social-network-icon"
                />
              </div>
              <span className="about-page-body-social-network-span">
                LinkedIn
              </span>
            </div>
            <div
              className="about-page-body-social-network-item"
              onClick={() =>
                (window.location.href =
                  "https://www.facebook.com/adriancamilo.gilfranco/")
              }
            >
              <div className="about-page-body-social-network-icon-background">
                <img
                  src={facebook}
                  alt=""
                  className="about-page-body-social-network-icon-facebook"
                />
              </div>
              <span className="about-page-body-social-network-span">
                Facebook
              </span>
            </div>
            <div
              className="about-page-body-social-network-item"
              onClick={() =>
                (window.location.href =
                  "https://www.instagram.com/acamilo.gil/")
              }
            >
              <div className="about-page-body-social-network-icon-background">
                <img
                  src={instagram}
                  alt=""
                  className="about-page-body-social-network-icon"
                />
              </div>
              <span className="about-page-body-social-network-span">
                Instagram
              </span>
            </div>
            <div
              className="about-page-body-social-network-item about-page-body-social-network-item-mail"
              onClick={() =>
                (window.location.href = "mailto:camilogilfranco@gmail.com")
              }
            >
              <div className="about-page-body-social-network-icon-background">
                <img
                  src={gmail}
                  alt=""
                  className="about-page-body-social-network-icon"
                />
              </div>
              <span className="about-page-body-social-network-span">
                camilogilfranco@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
