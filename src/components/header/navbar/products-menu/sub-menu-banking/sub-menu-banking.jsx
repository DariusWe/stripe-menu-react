import "./sub-menu-banking.scss";
import RandomColorCircle from "../random-color-circle/random-color-circle";

const SubMenuBanking = ({className}) => {
  return (
    <div className={`sub-menu-container ${className}`}>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Connect</h4>
          <p>Payments for platforms</p>
        </span>
      </div>
      <div className="sub-menu-item">
        <RandomColorCircle />
        <span>
          <h4>Issuing</h4>
          <p>Card creation</p>
        </span>
      </div>
    </div>
  );
};

export default SubMenuBanking;
