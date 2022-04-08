import "../styles/Info.css";
import emailIcon from "../images/email-icon.png";
import linkedinIcon from "../images/linkedin-icon.png";
import myImage from "../images/my-image.png";

function Info() {
  return (
    <div className="Info">
      <div className="info--image">
        <img src={myImage} alt="Junick Aquino Picture" />
      </div>

      <div className="info--title">
        <h1 className="title--name">Junick Marco Aquino</h1>
        <h2 className="title--role">Software Engineer</h2>
        <p className="title--website">
          <a href="https://junickmarco.netlify.app/" target="_blank">
            junickmarco.netlify.app
          </a>
        </p>
      </div>

      <div className="info--links">
        <a href="#" className="btn-email">
          <img src={emailIcon} alt="Email Icon" className="btn-icon" />
          <p className="btn-text">Email</p>
        </a>
        <a
          href="https://www.linkedin.com/in/junickmarcoaquino/"
          target="_blanks"
          className="btn-linkedin"
        >
          <img src={linkedinIcon} alt="LinkedIn Icon" className="btn-icon" />
          <p className="btn-text">LinkedIn</p>
        </a>
      </div>
    </div>
  );
}

export default Info;
