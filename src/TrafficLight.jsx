const TrafficLight = ({ color, isOn }) => {
  return (
    <div className={`ctdg-circle ${color} ${isOn ? "on" : "off"}`}></div>
  );
}

export default TrafficLight;