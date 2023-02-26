import "./dropdown-wrapper.scss";
import { useState, useEffect, useRef } from "react";
import ProductsMenu from "../products-menu/products-menu";
import SolutionsMenu from "../solutions-menu/solutions-menu";
import DevelopersMenu from "../developers-menu/developers-menu";
import ResourcesMenu from "../resources-menu/resources-menu";

const DropdownWrapper = ({ activeMenu }) => {
  const [previousMenu, setPreviousMenu] = useState(null);
  const [dropdownDimensions, setDropdownDimensions] = useState({ height: 0, width: 0 });
  const productsMenuRef = useRef(null);
  const solutionsMenuRef = useRef(null);
  const developersMenuRef = useRef(null);
  const resourcesMenuRef = useRef(null);

  useEffect(() => {
    if (!previousMenu) {
      setPreviousMenu(activeMenu);
      return;
    }
    if (activeMenu !== previousMenu) {
      // setPreviousMenu with 200ms delay to allow tilt-out-animation when activeMenu is set to null.
      setTimeout(() => {
        setPreviousMenu(activeMenu);
      }, 200);
    }
  }, [activeMenu, previousMenu]);

  useEffect(() => {
    if (activeMenu === "products" && productsMenuRef.current) {
      const refHeight = productsMenuRef.current.offsetHeight;
      const refWidth = productsMenuRef.current.offsetWidth;
      setDropdownDimensions({ height: refHeight, width: refWidth });
      return;
    }
    if (activeMenu === "solutions" && solutionsMenuRef.current) {
      const refHeight = solutionsMenuRef.current.offsetHeight;
      const refWidth = solutionsMenuRef.current.offsetWidth;
      setDropdownDimensions({ height: refHeight, width: refWidth });
      return;
    }
    if (activeMenu === "developers" && developersMenuRef.current) {
      const refHeight = developersMenuRef.current.offsetHeight;
      const refWidth = developersMenuRef.current.offsetWidth;
      setDropdownDimensions({ height: refHeight, width: refWidth });
      return;
    }
    if (activeMenu === "resources" && resourcesMenuRef.current) {
      const refHeight = resourcesMenuRef.current.offsetHeight;
      const refWidth = resourcesMenuRef.current.offsetWidth;
      setDropdownDimensions({ height: refHeight, width: refWidth });
      return;
    }
  }, [activeMenu]);

  return (
    <div
      className="dropdown-container"
      // Notes to use of previousMenu below: If not checked for previousMenu, height and width of dropdown
      // will be set to 0 and immediately afterwards (next render) to the intended height and width. As
      // height and width have a css transition effect, this will lead to an unwanted scaling effect.
      style={
        previousMenu && activeMenu
          ? { height: dropdownDimensions.height, width: dropdownDimensions.width, animationName: "tiltIn" }
          : previousMenu && !activeMenu
          ? { height: dropdownDimensions.height, width: dropdownDimensions.width, animationName: "tiltOut" }
          : null
      }
    >
      <ProductsMenu ref={productsMenuRef} className={`${activeMenu}MenuIsActive`} />
      <SolutionsMenu ref={solutionsMenuRef} className={`${activeMenu}MenuIsActive`} />
      <DevelopersMenu ref={developersMenuRef} className={`${activeMenu}MenuIsActive`} />
      <ResourcesMenu ref={resourcesMenuRef} className={`${activeMenu}MenuIsActive`} />
    </div>
  );
};

export default DropdownWrapper;
