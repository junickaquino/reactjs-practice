import logo from "../logo.svg";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} className="react-logo" alt="logo" />
        <h2 className="logo-title">ReactFacts</h2>
      </div>

      <div className="project-name">
        <h3>React Course - Project 1</h3>
      </div>
    </nav>
  );
}

export default Navbar;
