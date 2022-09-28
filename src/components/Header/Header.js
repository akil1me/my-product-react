import "./header.scss";

import Navber from "./Navbar";
import Humburger from "./Humburger";


import logo from '../../assets/logo.svg';

const Header = () => {

  return (
    <>
      <header className="header">
        <div className="header__container container">
          <div className="header__inner">
            <a className="header__logo logo" href="index.html">
              <img className="logo__imgs" src={logo} alt="site logo" />
            </a>

            <Navber />

            <Humburger />
          </div>
        </div>
      </header>
    </>
  )
}

export default Header;