import "./dropdown-wrapper.scss";
import { useState, useEffect, useRef } from "react";
import ProductsMenu from "../products-menu/products-menu";
import SolutionsMenu from "../solutions-menu/solutions-menu";
import DevelopersMenu from "../developers-menu/developers-menu";
import ResourcesMenu from "../resources-menu/resources-menu";

const DropdownWrapper = ({ menu }) => {
  const [previousMenu, setPreviousMenu] = useState(null);
  const [dropdownDimensions, setDropdownDimensions] = useState({ height: 0, width: 0 });
  const productsMenuRef = useRef(null);
  const solutionsMenuRef = useRef(null);
  const developersMenuRef = useRef(null);
  const resourcesMenuRef = useRef(null);

  useEffect(() => {
    if (!previousMenu) {
      setPreviousMenu(menu);
      return;
    }
    if (menu !== previousMenu) {
      setTimeout(() => {
        setPreviousMenu(menu);
      }, 200);
    }
  }, [menu, previousMenu]);

  useEffect(() => {
    if (menu === "products" && productsMenuRef.current) {
      const refHeight = productsMenuRef.current.offsetHeight;
      const refWidth = productsMenuRef.current.offsetWidth;
      setDropdownDimensions({ height: refHeight, width: refWidth });
      return;
    }
    if (menu === "solutions" && solutionsMenuRef.current) {
      const refHeight = solutionsMenuRef.current.offsetHeight;
      const refWidth = solutionsMenuRef.current.offsetWidth;
      setDropdownDimensions({ height: refHeight, width: refWidth });
      return;
    }
    if (menu === "developers" && developersMenuRef.current) {
      const refHeight = developersMenuRef.current.offsetHeight;
      const refWidth = developersMenuRef.current.offsetWidth;
      setDropdownDimensions({ height: refHeight, width: refWidth });
      return;
    }
    if (menu === "resources" && resourcesMenuRef.current) {
      const refHeight = resourcesMenuRef.current.offsetHeight;
      const refWidth = resourcesMenuRef.current.offsetWidth;
      setDropdownDimensions({ height: refHeight, width: refWidth });
      return;
    }
  }, [menu]);

  return (
    <div
      className="dropdown-container"
      style={
        previousMenu && menu
          ? { height: dropdownDimensions.height, width: dropdownDimensions.width, animationName: "tiltIn" }
          : previousMenu && !menu
          ? { height: dropdownDimensions.height, width: dropdownDimensions.width, animationName: "tiltOut" }
          : null
      }
    >
      {(menu === "products" || previousMenu === "products") && (
        <ProductsMenu
          ref={productsMenuRef}
          fadeInToLeft={false}
          fadeInToRight={menu === "products" && (previousMenu === "solutions" || previousMenu === "developers" || previousMenu === "resources")}
          fadeOutToLeft={previousMenu === "products" && (menu === "solutions" || menu === "developers" || menu === "resources")}
          fadeOutToRight={false}
        />
      )}
      {(menu === "solutions" || previousMenu === "solutions") && (
        <SolutionsMenu
          ref={solutionsMenuRef}
          fadeInToLeft={menu === "solutions" && previousMenu === "products"}
          fadeInToRight={menu === "solutions" && (previousMenu === "developers" || previousMenu === "resources")}
          fadeOutToLeft={previousMenu === "solutions" && (menu === "developers" || menu === "resources")}
          fadeOutToRight={previousMenu === "solutions" && menu === "products"}
        />
      )}
      {(menu === "developers" || previousMenu === "developers") && (
        <DevelopersMenu
          ref={developersMenuRef}
          fadeInToLeft={menu === "developers" && (previousMenu === "products" || previousMenu === "solutions")}
          fadeInToRight={menu === "developers" && previousMenu === "resources"}
          fadeOutToLeft={previousMenu === "developers" && menu === "resources"}
          fadeOutToRight={previousMenu === "developers" && (menu === "products" || menu === "solutions")}
        />
      )}
      {(menu === "resources" || previousMenu === "resources") && (
        <ResourcesMenu
          ref={resourcesMenuRef}
          fadeInToLeft={menu === "resources" && previousMenu && previousMenu !== "resources"}
          fadeInToRight={false}
          fadeOutToLeft={false}
          fadeOutToRight={previousMenu === "resources" && menu && menu !== "resources"}
        />
      )}
    </div>
  );
};

export default DropdownWrapper;
