import "./header.scss";
import { useEffect, useRef, useState } from "react";
import DropdownMenu from "../dropdown-menu/dropdown-menu";
import arrow from "../../assets/arrow.png";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const prevMenuRef = useRef(false);

  useEffect(() => {
    prevMenuRef.current = activeMenu;
  }, [activeMenu]);

  return (
    <div className="header">
      <div className="logo">stripe</div>
      <nav>
        <div className="navbar" onMouseLeave={() => setActiveMenu(null)}>
          {activeMenu ? (
            <img
              className={`arrow-up ${prevMenuRef.current !== null && "activate-transition"}`}
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
          ) : <div className="placeholder"></div>}
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
            <DropdownMenu menu={activeMenu} />
          </div>
        </div>
        <span className="list-item">Pricing</span>
      </nav>
    </div>
  );
};

export default Header;
