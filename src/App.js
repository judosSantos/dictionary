import "./App.css";
import Header from "./Header.js";
import HeroSection from "./HeroSection.js";
import Footer from "./Footer.js";
import SearchResults from "./SearchResults.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />

        <HeroSection />
        <SearchResults />

        <Footer />
      </div>
    </div>
  );
}

export default App;
