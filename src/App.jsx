import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import HeroSection from "./components/Hero/HeroSection";

function App() {
  return (
    <div className="main_container">
      {" "}
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
