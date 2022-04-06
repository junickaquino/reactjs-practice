// == Create components by functions ==
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container">
      <Header title="Hello" />
    </div>
  );
};

// == Create components via classes ==
// import React from react;
// class App extends React.Component {
//   render() {
//     return <h1>Hello</h1>;
//   }
// }

export default App;
