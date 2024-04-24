import { RESTAURANT_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-items">
        <div className="logo-container">
          <img src={RESTAURANT_LOGO} />
        </div>
        <div className="nav-items">
          <span>Home</span>
          <span>About Us</span>
          <span>LogIn</span>
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
