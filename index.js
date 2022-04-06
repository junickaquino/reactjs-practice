function MainContent() {
  return (
    <div>
      <h1>Hello, Madlang People!</h1>
      <p>This is the main content</p>

      <ul>
        <li>Hindi ba?</li>
        <li>Kamusta</li>
      </ul>
    </div>
  );
}

ReactDOM.render(<MainContent />, document.querySelector("#root"));
