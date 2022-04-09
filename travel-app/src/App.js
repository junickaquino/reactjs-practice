import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const placesCard = data.map((place) => {
    return <Card place={place} />;
  });

  return (
    <div className="App">
      <Navbar />
      {placesCard}
    </div>
  );
}

export default App;
