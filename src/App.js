import "./App.css";
import Header from "./Header.js";
import HeroSection from "./HeroSection.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />

        <HeroSection />

        <Footer />
      </div>
    </div>
  );
}

export default App;
