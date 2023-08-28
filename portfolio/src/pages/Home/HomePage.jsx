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
            <h3>Olá, Meu nome é </h3><h2>Bárbara Amaral </h2>
            <h3>Desenvolvedora Full Stack</h3>
            <h3 className="line typing-animation">Bem Vindo ao meu Portfólio.</h3>

            <div className="social-media">
              <img className="linkedin" src={linkedin} alt="linkedin"/>
              <img className="gitHub" src={gitHub} alt="gitHub"/>
            </div>
          </div>

          <img className="home-img" src={work} alt="foto perfil" />
        </section>
      </Home>
    </>
  );
};

export default HomePage;
