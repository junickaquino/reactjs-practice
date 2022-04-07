function Header() {
  return (
    <header>
      <nav className="navbar">
        <img className="logo" src="./react-logo.svg"></img>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div className="main-content">
      <h1>Reasons why I am excited to be learning React</h1>
      <ol>
        <li>Find a job or career using React</li>
        <li>Expand my skills</li>
        <li>Actually become a Full Stack developer</li>
      </ol>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <small>@ 2022 JunickAquino development. All rights reserved.</small>
    </footer>
  );
}

function CustomPage() {
  return (
    <div>
      <Header />

      <MainContent />

      <Footer />
    </div>
  );
}

const root = document.getElementById("root");

// ReactDOM.render(
//   <div>
//     <Header />
//     <CustomPage />
//   </div>,
//   root
// );

ReactDOM.render(<CustomPage />, root);
