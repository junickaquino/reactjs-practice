import "../styles/Header.css";
import trollface from "../images/Troll Face.png";

function Header() {
  return (
    <header className="header">
      <div className="header--logo">
        <img className="logo--img" src={trollface} alt="troll face image" />
        <h1 className="logo--text">Meme Generator</h1>
      </div>

      <div className="header--project">
        <h2 className="project--title">React Course - Project 3</h2>
      </div>
    </header>
  );
}

export default Header;
