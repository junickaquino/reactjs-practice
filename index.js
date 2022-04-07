function CustomPage() {
  return (
    <div>
      <header>
        <nav>
          <img src="./react-logo.svg" width="50px"></img>
        </nav>
      </header>

      <h1>Reasons why I am excited to be learning React</h1>
      <ol>
        <li>Find a job or career using React</li>
        <li>Expand my skills</li>
        <li>Actually become a Full Stack developer</li>
      </ol>

      <footer>
        <small>@ 2022 JunickAquino development. All rights reserved.</small>
      </footer>
    </div>
  );
}

const root = document.getElementById("root");

ReactDOM.render(<CustomPage />, root);
