import "./solutions-menu.scss";
import { forwardRef } from "react";

const SolutionsMenu = forwardRef(({ className }, ref) => {
  return (
    <div className={`menu-content solutions-menu ${className}`} ref={ref}>
      <section className="section-top">
        <h3>Use Cases</h3>
        <ul>
          <li>
            <i className="fa-solid fa-bag-shopping"></i>Ecommerce
          </li>
          <li>
            <i className="fa-solid fa-rotate"></i>SaaS
          </li>
          <li>
            <i className="fa-solid fa-house"></i>Marketplaces
          </li>
          <li>
            <i className="fa-solid fa-puzzle-piece"></i>Embedded Finance{" "}
          </li>
          <li>
            <i className="fa-solid fa-layer-group"></i>Platforms
          </li>
          <li>
            <i className="fa-solid fa-lightbulb"></i>Creator Economy
          </li>
          <li>
            <i className="fa-solid fa-wallet"></i>Crypto
          </li>
          <li>
            <i className="fa-solid fa-globe"></i>Global Businesses
          </li>
        </ul>
      </section>
      <section className="section-bottom">
        <h3>Integrations & Custom Solutions</h3>
        <ul>
          <li>
            <i className="fa-solid fa-square-plus"></i>App Marketplace
          </li>
          <li>
            <i className="fa-solid fa-comments"></i>Professional Services
          </li>
          <li>
            <i className="fa-solid fa-cube"></i>Partner Ecosystem{" "}
          </li>
        </ul>
      </section>
    </div>
  );
});

export default SolutionsMenu;
