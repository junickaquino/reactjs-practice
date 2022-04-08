import "./App.css";
import Card from "./components/Card";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import data from "./data";

function App() {
  const dataCard = data.map((experience) => {
    return (
      <Card
        key={experience.id}
        // img={experience.coverImg}
        // status={experience.status}
        // rating={experience.stats.rating}
        // reviewCount={experience.stats.reviewCount}
        // country={experience.location}
        // title={experience.title}
        // price={experience.price}
        // openSpots={experience.openSpots}
        {...experience}
      />
    );
  });

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="experiences">{dataCard}</div>
    </div>
  );
}

export default App;
