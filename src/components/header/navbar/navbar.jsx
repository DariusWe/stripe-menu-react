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
        <span className="list-item" onMouseEnter={() => setActiveMenu("products")}>
          Products
        </span>
        <span className="list-item" onMouseEnter={() => setActiveMenu("solutions")}>
          Solutions
        </span>
        <span className="list-item" onMouseEnter={() => setActiveMenu("developers")}>
          Developers
        </span>
        <span className="list-item" onMouseEnter={() => setActiveMenu("resources")}>
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
