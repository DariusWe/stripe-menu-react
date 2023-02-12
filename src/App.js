import "./App.scss";
import { useEffect } from "react";
import { Gradient } from "./Gradient.js";
import Header from "./components/header/header";

function App() {
  const gradient = new Gradient();

  useEffect(() => {
    gradient.initGradient(".gradient-canvas");
  }, []);

  return (
    <div className="App">
      <Header />
      <canvas className="gradient-canvas" data-transition-in />
      <div className="desc">
        <h1>Payments infrastructure for the internet</h1>
        <h1>Payments infrastructure for the internet</h1>
        <p>
          Millions of businesses of all sizes—from startups to large enterprises—use Stripe’s software and APIs to
          accept payments, send payouts, and manage their businesses online.{" "}
        </p>
      </div>
    </div>
  );
}

export default App;
