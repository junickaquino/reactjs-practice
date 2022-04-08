import "../styles/Hero.css";
import heroImg from "../images/hero-img.png";

function Hero() {
  return (
    <div className="hero">
      <img className="hero--img" src={heroImg} alt="Bunch of images" />
      <div className="hero--content">
        <h1 className="hero--content-title">Online Experiences</h1>
        <p className="hero--content-subtitle">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Hero;
