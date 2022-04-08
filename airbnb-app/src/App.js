import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import swimmer from "./images/swimmer.png";
import wedding from "./images/wedding.png";
import bike from "./images/bike.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="experiences">
        <Card
          // img="swimmer.png"
          img={swimmer}
          status="Sold Out"
          rating={5.0}
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zafares"
          price={136}
        />

        <Card
          img={wedding}
          status="Online"
          rating={5.0}
          reviewCount={30}
          country="Paris"
          title="Learn wedding photography"
          price={125}
        />

        <Card
          img={bike}
          status="Sold Out"
          rating={4.8}
          reviewCount={2}
          country="Philippines"
          title="Group mountain biking"
          price={50}
        />
      </div>
    </div>
  );
}

export default App;
