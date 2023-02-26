import "./developers-menu.scss";
import { forwardRef } from "react";

const DevelopersMenu = forwardRef(({ className }, ref) => {
  return (
    <div className={`menu-content developers-menu ${className}`} ref={ref}>
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
          <li>
            <i className="fa-solid fa-bars"></i>Full API Reference
          </li>
          <li>
            <i className="fa-solid fa-heart-pulse"></i>API Status
          </li>
          <li>
            <i className="fa-solid fa-circle-arrow-right"></i>API Changelog
          </li>
          <li>
            <i className="fa-solid fa-layer-group"></i>Build a Stripe App
          </li>
        </ul>
      </section>
    </div>
  );
});

export default DevelopersMenu;
