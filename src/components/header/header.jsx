import "./header.scss";
import Logo from "./logo/logo";
import Navbar from "./navbar/navbar";


const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navbar />
    </div>
  );
};

export default Header;
