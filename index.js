function Header() {
  return (
    <header>
      <nav>
        <img src="./react-logo.svg" width="50px"></img>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <div>
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
