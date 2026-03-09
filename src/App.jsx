import { useState } from "react";
import "./App.css";
import TrafficLight from "./TrafficLight";

function App() {
  const [light, setLight] = useState("stop");

  const advanceLight = () => {
    if (light === "stop"){ 
      setLight("slow");
    }
    else if (light === "slow") {
      setLight("go");
    }
    else {
      setLight("stop");
    }
  };

  return (
    <div className="ctdg-traffic-light">
      <TrafficLight color="red" isOn={light === "stop"} />
      <TrafficLight color="amber" isOn={light === "slow"} />
      <TrafficLight color="green" isOn={light === "go"} />
      <button className="ctdg-btn" onClick={advanceLight}>Advance</button>
    </div>
  );
}

export default App;