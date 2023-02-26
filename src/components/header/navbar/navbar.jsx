import "./navbar.scss";
import { useEffect, useRef, useState } from "react";
import DropdownWrapper from "./dropdown-wrapper/dropdown-wrapper";
import AnimatedArrow from "./animated-arrow/animated-arrow";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const prevMenuRef = useRef(false);

  useEffect(() => {
    prevMenuRef.current = activeMenu;
  }, [activeMenu]);

  return (
    <nav>
      <div className="navbar" onMouseLeave={() => setActiveMenu(null)}>
        <AnimatedArrow activeMenu={activeMenu} prevMenu={prevMenuRef.current} />
        <span
          className="list-item"
          onMouseEnter={() => setActiveMenu("products")}
          style={activeMenu === "products" ? { color: "rgba(255, 255, 255, 0.7)" } : null}
        >
          Products
        </span>
        <span
          className="list-item"
          onMouseEnter={() => setActiveMenu("solutions")}
          style={activeMenu === "solutions" ? { color: "rgba(255, 255, 255, 0.7)" } : null}
        >
          Solutions
        </span>
        <span
          className="list-item"
          onMouseEnter={() => setActiveMenu("developers")}
          style={activeMenu === "developers" ? { color: "rgba(255, 255, 255, 0.7)" } : null}
        >
          Developers
        </span>
        <span
          className="list-item"
          onMouseEnter={() => setActiveMenu("resources")}
          style={activeMenu === "resources" ? { color: "rgba(255, 255, 255, 0.7)" } : null}
        >
          Resources
        </span>
        <div className="dropdown-positioning">
          <DropdownWrapper menu={activeMenu} />
        </div>
      </div>
      <span className="list-item">Pricing</span>
    </nav>
  );
};

export default Navbar;
