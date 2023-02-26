import "./random-color-circle.scss";

const RandomColorCircle = () => {
  return (
    <div
      className="circle"
      // style={{ backgroundColor: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` }}
      style={{ backgroundColor: "red" }}
    ></div>
  );
};

export default RandomColorCircle;
