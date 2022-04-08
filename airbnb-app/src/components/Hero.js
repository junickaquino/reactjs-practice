import "../styles/Hero.css";
// import heroImg from "../images/hero-img.png";

function Hero() {
  const date = new Date();
  const hours = date.getHours();

  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return (
    <div className="hero">
      <img
        className="hero--img"
        src="../images/hero-img.png"
        alt="Bunch of images"
      />
      <div className="hero--content">
        <h1 className="hero--content-title">Online Experiences</h1>
        <p className="hero--content-subtitle">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home. Good {timeOfDay}!
        </p>
      </div>
    </div>
  );
}

export default Hero;
