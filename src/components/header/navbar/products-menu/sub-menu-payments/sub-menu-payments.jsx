import "./sub-menu-payments.scss";
import RandomColorCircle from "../random-color-circle/random-color-circle";

const SubMenuPayments = ({ className }) => {
  return (
    <div className={`sub-menu-container ${className}`}>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Payments</h4>
          <p>Online payments</p>
        </span>
      </div>
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
          <h4>Checkout</h4>
          <p>Pre-built payments page</p>
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
          <h4>Elements</h4>
          <p>Customizable payments UIs</p>
        </span>
      </div>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Terminal</h4>
          <p>In-person payments</p>
        </span>
      </div>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Payment Links</h4>
          <p>No-code payments</p>
        </span>
      </div>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Financial Connections</h4>
          <p>Linked financial account data</p>
        </span>
      </div>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Radar</h4>
          <p>Fraud & risk management</p>
        </span>
      </div>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Identity</h4>
          <p>Online identity verification</p>
        </span>
      </div>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Connect</h4>
          <p>Payments for platforms</p>
        </span>
      </div>
    </div>
  );
};

export default SubMenuPayments;
