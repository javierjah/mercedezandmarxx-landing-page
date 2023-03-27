// import logo from "./logo.svg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <img
        className="menu-logo"
        src="https://uploads-ssl.webflow.com/5efb454a51d5f6e79850e4ea/61e6097e13ffe84953ec0406_KGLW-Logo-02.svg"
      />
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
