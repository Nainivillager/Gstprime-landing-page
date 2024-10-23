import "./App.css";
import LandingPage from "./components/landingPage";
import Pricing from "./components/pricing";
import Carousel from "./components/carousel";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <LandingPage />
        <Carousel />
        <Pricing />
      </div>
    </>
  );
}

export default App;
