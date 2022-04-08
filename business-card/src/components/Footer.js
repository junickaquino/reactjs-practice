import "../styles/Footer.css";
import facebookIcon from "../images/Facebook-Icon.png";
import githubIcon from "../images/GitHub-Icon.png";
import instagramIcon from "../images/Instagram-Icon.png";
import twitterIcon from "../images/Twitter-Icon.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="socials">
        <a href="#" target="_blank">
          <img src={twitterIcon} alt="twitter icon" />
        </a>
        <a href="#" target="_blank">
          <img src={facebookIcon} alt="facebook icon" />
        </a>
        <a href="#/" target="_blank">
          <img src={instagramIcon} alt="instagram icon" />
        </a>
        <a href="https://github.com/junickaquino" target="_blank">
          <img src={githubIcon} alt="github icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
