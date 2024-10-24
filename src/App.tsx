import "./App.css";
import LandingPage from "./components/landingPage";
import Pricing from "./components/pricing";
import Carousel from "./components/carousel";
function App() {
  return (
    <>
      <div
        className=" bg-slate-100
      "
      >
        <LandingPage />
        <Carousel />
        <Pricing />
      </div>
    </>
  );
}

export default App;
