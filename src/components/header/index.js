import MenuIcon from "@mui/icons-material/Menu";
import "./header.css";
import Icon from "../../assets/images/icon_no_bg.png";

function Header() {
  const menuItems = (
    <>
      <li className="menu-item">home</li>
      <li className="menu-item">somos</li>
      <li className="menu-item">releases</li>
      <li className="menu-item">videos</li>
      <li className="menu-item">bootlegger</li>
      <li className="menu-item">shop</li>
    </>
  );

  return (
    <header className="header">
      <img className="menu-logo" src={Icon} alt="menu-logo" />
      <nav data-state="desktop">
        <ul className="menu-desktop">{menuItems}</ul>
      </nav>
      <nav data-state="mobile">
        <div className="button-items-box">
          <MenuIcon fontSize="large" className="menu-icon" />
          <ul className="menu-mobile">{menuItems}</ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
