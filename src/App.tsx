import "./App.css";
import Header from "./components/header";
import Features from "./components/features";
import Pricing from "./components/pricing";
import CustomerFeedbackCarousel from "./components/customerFeedbackCarousel";
function App() {
  return (
    <>
      <div className=" bg-gradient-to-r from-indigo-50 via-white to-blue-50">
        <Header />
        <Features />
        <Pricing />
        <CustomerFeedbackCarousel />
      </div>
    </>
  );
}

export default App;
