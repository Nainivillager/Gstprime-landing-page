import "./App.css";
import Features from "./components/features";
import Pricing from "./components/pricing";
import CustomerFeedbackCarousel from "./components/customerFeedbackCarousel";
function App() {
  return (
    <>
      <div
        className=" bg-slate-100
      "
      >
        <Features />
        <Pricing />
        <CustomerFeedbackCarousel />
      </div>
    </>
  );
}

export default App;
