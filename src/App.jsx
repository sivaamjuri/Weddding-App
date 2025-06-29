import Header from "./components/Header";
import Hero from "./components/Hero";
import Couple from "./components/Couple";
import Schedule from "./components/Schedule";
import Rvsp from "./components/Rvsp";
import Venue from "./components/Venue";
import Album from "./components/Album";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full relative overflow-x-hidden bg-white">
      <Header />
      <Hero />
      <Couple />
      <Schedule />
      <Rvsp />
      <Venue />
      <Album />
      <Footer />
    </div>
  );
};

export default App;
