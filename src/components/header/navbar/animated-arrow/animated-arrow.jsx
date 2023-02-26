import "./animated-arrow.scss";
import arrow from "../../../../assets/arrow.png";

const AnimatedArrow = ({ activeMenu, prevMenu }) => {
  if (activeMenu) {
    return (
      <img
        className={`arrow-up ${prevMenu !== null && "activate-transition"}`}
        style={
          activeMenu === "products"
            ? { transform: "rotate(180deg) translateX(-58px)", opacity: 1 }
            : activeMenu === "solutions"
            ? { transform: "rotate(180deg) translateX(-162px)", opacity: 1 }
            : activeMenu === "developers"
            ? { transform: "rotate(180deg) translateX(-275px)", opacity: 1 }
            : activeMenu === "resources"
            ? { transform: "rotate(180deg) translateX(-390px)", opacity: 1 }
            : null
        }
        src={arrow}
        alt=""
      />
    );
  } else {
    return <div className="placeholder"></div>;
  }
};

export default AnimatedArrow;
