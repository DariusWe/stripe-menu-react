import "./random-color-circle.scss";
import { useRef } from "react";

const RandomColorCircle = () => {
  // As this component renders multiple times (because of parent component), background color has to be saved
  // with useRef(). Otherwise, colors would change when rerendering, which would lead to unwanted flicker.
  const backgroundColor = useRef(`rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`);

  return (
    <div
      className="circle"
      style={{ backgroundColor: backgroundColor.current }}
    ></div>
  );
};

export default RandomColorCircle;
