import "../styles/Navbar.css";
// import logo from "../images/airbnblogo.png";

function Navbar() {
  return (
    <div className="navbar">
      <a href="#">
        <img
          className="navbar--logo"
          src="../images/airbnblogo.png"
          alt="AirBnb Logo"
        />
      </a>
    </div>
  );
}

export default Navbar;
