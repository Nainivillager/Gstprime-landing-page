import "./App.css";
import LandingPage from "./components/landingPage";
import Pricing from "./components/pricing";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
        <LandingPage />
        <Pricing />
      </div>
    </>
  );
}

export default App;
