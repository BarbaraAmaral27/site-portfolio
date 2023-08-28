import linkedin from "../../assets/linkedin.svg";
import gitHub from "../../assets/gitHub.svg";
import { Home } from "./style";
import work from "../../assets/work.png";

const HomePage = () => {
  return (
    <>
      <Home>
        <section className="container">
          <div className="home-content">
            <h3>Olá, Meu nome é </h3>
            <h2>Bárbara Amaral </h2>
            <h3>Desenvolvedora Full Stack</h3>
            <h3 className="line typing-animation">
              Bem Vindo ao meu Portfólio.
            </h3>

            <div className="social-media">
              <a href="https://www.linkedin.com/in/barbaramamaral/" target="_blank" rel="noreferrer">
                <img className="linkedin" src={linkedin} alt="linkedin" />
              </a>
              <a href="https://github.com/BarbaraAmaral27" target="_blank" rel="noreferrer">
                <img className="gitHub" src={gitHub} alt="gitHub"  />
              </a>
            </div>
          </div>

          <img className="home-img" src={work} alt="foto perfil" />
        </section>
      </Home>
    </>
  );
};

export default HomePage;
