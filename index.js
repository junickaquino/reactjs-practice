function CustomPage() {
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

const root = document.getElementById("root");

ReactDOM.render(<CustomPage />, root);
