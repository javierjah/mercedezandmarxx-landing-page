// import logo from "./logo.svg";
import "./header.css";
import Icon from "../../assets/images/icon_no_bg.png";

function Header() {
  return (
    <header className="header">

      <img className="menu-logo" src={Icon} alt="" />
      <div className="menu-item">home</div>
      <div className="menu-item">somos</div>
      <div className="menu-item">releases</div>
      <div className="menu-item">videos</div>
      <div className="menu-item">bootlegger</div>
      <div className="menu-item">shop</div>
    </header>
  );
}

export default Header;
