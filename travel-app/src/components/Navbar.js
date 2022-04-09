import "../styles/Navbar.css";
import globe from "../images/globe.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img className="logo--img" src={globe} alt="globe icon" />
        <h1 className="logo--text">my travel journal.</h1>
      </div>
    </nav>
  );
}

export default Navbar;
