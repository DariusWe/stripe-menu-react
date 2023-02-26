import "./developers-menu.scss";
import { forwardRef } from "react";

const DevelopersMenu = forwardRef(({ fadeInToLeft, fadeInToRight, fadeOutToLeft, fadeOutToRight }, ref) => {
  return (
    <div
      className={
        fadeInToLeft
          ? "menu-content developers-container fade-in-to-left"
          : fadeInToRight
          ? "menu-content developers-container fade-in-to-right"
          : fadeOutToLeft
          ? "menu-content developers-container fade-out-to-left"
          : fadeOutToRight
          ? "menu-content developers-container fade-out-to-right"
          : "menu-content developers-container"
      }
      ref={ref}
    >
      <section className="section-top">
        <h3>Documentation</h3>
        <p className="description">Start integrating Stripe's producuts and tools</p>
        <ul>
          <p>GET STARTED</p>
          <p>GUIDES</p>
          <li>Prebuilt checkout</li>
          <li>Libraries</li>
          <li>Plugins</li>
          <li>Code samples</li>
          <li>Accept online payments</li>
          <li>Manage subscriptions</li>
          <li>Send Payments</li>
          <li>Set up in-person payments</li>
        </ul>
      </section>
      <section className="section-bottom">
        <ul>
          <li><i className="fa-solid fa-bars"></i>Full API Reference</li>
          <li><i className="fa-solid fa-heart-pulse"></i>API Status</li>
          <li><i className="fa-solid fa-circle-arrow-right"></i>API Changelog</li>
          <li><i className="fa-solid fa-layer-group"></i>Build a Stripe App</li>
        </ul>
      </section>
    </div>
  );
});

export default DevelopersMenu;
