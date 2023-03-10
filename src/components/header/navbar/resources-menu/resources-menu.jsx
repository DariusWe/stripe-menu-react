import "./resources-menu.scss";
import { forwardRef } from "react";

const ResourcesMenu = forwardRef(({ className }, ref) => {
  return (
    <div className={`menu-content resources-menu ${className}`} ref={ref}>
      <section className="section-top">
        <ul>
          <li>
            <i className="fa-solid fa-circle-info"></i>Support Center
          </li>
          <li>
            <i className="fa-solid fa-pen"></i>Blog
          </li>
          <li>
            <i className="fa-solid fa-file"></i>Support Plans
          </li>
          <li>
            <i className="fa-solid fa-cake-candles"></i>Annual Conference
          </li>
          <li>
            <i className="fa-solid fa-paper-plane"></i>Guides
          </li>
          <li>
            <i className="fa-solid fa-comments"></i>Contact Sales
          </li>
          <li>
            <i className="fa-solid fa-hands-bubbles"></i>Customer Stories
          </li>
        </ul>
      </section>
      <section className="section-bottom">
        <ul>
          <li>
            <i className="fa-solid fa-suitcase"></i>Jobs
          </li>
          <li>
            <i className="fa-solid fa-book-open"></i>Stripe Press
          </li>
          <li>
            <i className="fa-solid fa-file"></i>Newsroom
          </li>
          <li>
            <i className="fa-solid fa-handshake"></i>Become a Partner
          </li>
        </ul>
      </section>
    </div>
  );
});

export default ResourcesMenu;
