import "./App.scss";
import Header from "./components/header/header";
import LavaLampAnimation from "./components/lava-lamp-animation/lava-lamp-animation";

function App() {
  return (
    <div className="App">
      <Header />
      <LavaLampAnimation />
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
