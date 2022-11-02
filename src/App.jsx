import Navbar from "./components/Navbar";
import Traveltile from "./components/Traveltile";
import data from "./data";

function App() {
  const places = data.map((place) => {
    return <Traveltile key={place.id} place={place} />;
  });

  return (
    <div className="App">
      <Navbar />
      {places}
    </div>
  );
}

export default App;
