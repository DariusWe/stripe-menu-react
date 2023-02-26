import "./products-menu.scss";
import { forwardRef, useEffect, useState } from "react";
import SubMenuBanking from "./sub-menu-banking/sub-menu-banking";
import SubMenuPayments from "./sub-menu-payments/sub-menu-payments";
import SubMenuRevenue from "./sub-menu-revenue/sub-menu-revenue";

const ProductsMenu = forwardRef(({ className }, ref) => {
  const [activeSubMenu, setActiveSubMenu] = useState("firstMenu");

  useEffect(() => {
    // As this component does not unmount, activeSubMenu has to be reset manually when productsMenu is not active.
    // Reset after 200ms to allow css transition effect to work properly.
    if (className !== "productsMenuIsActive") {
      setTimeout(() => {
        setActiveSubMenu("firstMenu");
      }, 200);
    }
  }, [className]);

  return (
    <div className={`menu-content products-menu ${className}`} ref={ref}>
      <section className="section-left">
        <ul>
          <li onMouseEnter={() => setActiveSubMenu("firstMenu")} className={`${activeSubMenu}IsActive`}>
            <h3>Global Payments</h3>
            <p>Accept payments online, in person, or through your platform.</p>
          </li>
          <li onMouseEnter={() => setActiveSubMenu("secondMenu")} className={`${activeSubMenu}IsActive`}>
            <h3>Revenue and Financial Management</h3>
            <p>Automate revenue collection and do finance stuff.</p>
          </li>
          <li onMouseEnter={() => setActiveSubMenu("thirdMenu")} className={`${activeSubMenu}IsActive`}>
            <h3>Banking-as-a-Service</h3>
            <p>Embed financial services in your platform or product.</p>
          </li>
        </ul>
      </section>
      <section className="section-right">
        <SubMenuPayments className={`${activeSubMenu}IsActive`} />
        <SubMenuRevenue className={`${activeSubMenu}IsActive`} />
        <SubMenuBanking className={`${activeSubMenu}IsActive`} />
      </section>
    </div>
  );
});

export default ProductsMenu;
