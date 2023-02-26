import RandomColorCircle from "../random-color-circle/random-color-circle";
import "./sub-menu-revenue.scss";

const SubMenuRevenue = ({ className }) => {
  return (
    <div className={`sub-menu-container ${className}`}>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Billing</h4>
          <p>Subscription management</p>
        </span>
      </div>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Sigma</h4>
          <p>Custom reports</p>
        </span>
      </div>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Invoicing</h4>
          <p>Online invoices</p>
        </span>
      </div>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Data Pipeline</h4>
          <p>Data warehouse sync</p>
        </span>
      </div>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Tax</h4>
          <p>Sales tax & VAT automation</p>
        </span>
      </div>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Atlas</h4>
          <p>Startup incorporation</p>
        </span>
      </div>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Revenue Recognition</h4>
          <p>Accounting automation</p>
        </span>
      </div>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Climate</h4>
          <p>Carbon removal</p>
        </span>
      </div>
    </div>
  );
};

export default SubMenuRevenue;
