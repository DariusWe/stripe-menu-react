import "./products-menu.scss";
import { forwardRef, useState } from "react";

const ProductsMenu = forwardRef(({ fadeInToLeft, fadeInToRight, fadeOutToLeft, fadeOutToRight }, ref) => {
  const [activeSubMenu, setActiveSubMenu] = useState("firstMenu");

  return (
    <div
      className={
        fadeInToLeft
          ? "menu-content products-container fade-in-to-left"
          : fadeInToRight
          ? "menu-content products-container fade-in-to-right"
          : fadeOutToLeft
          ? "menu-content products-container fade-out-to-left"
          : fadeOutToRight
          ? "menu-content products-container fade-out-to-right"
          : "menu-content products-container"
      }
      ref={ref}
    >
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
        <div></div>
      </section>
    </div>
  )
});

export default ProductsMenu;
