import "./lava-lamp-animation.scss";
import { useEffect } from "react";
import { Gradient } from "../../Gradient.js";

const LavaLampAnimation = () => {
  const gradient = new Gradient();

  useEffect(() => {
    gradient.initGradient(".gradient-canvas");
  }, []);

  return <canvas className="gradient-canvas" data-transition-in />;
};

export default LavaLampAnimation;
