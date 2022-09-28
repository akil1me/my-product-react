import footerLogo from "../../assets/footer.svg";
import inst from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg"
import twitter from "../../assets/twitter.svg"

import "./footer.scss";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__container container">
          <div className="footer__inner">
            <div className="footer__top">
              <div className="footer__left">
                <a className="footer__logo logo" href="index.html">
                  <img className="logo__img" src={footerLogo} alt="footer logo" width="210" height="52" />
                </a>

                <div className="footer__icons">
                  <a href="https://www.instagram.com/" target="blank">
                    <img src={inst} alt="instagram" width="40" height="40" />
                  </a>

                  <a href="https://www.instagram.com/" target="blank">
                    <img src={facebook} alt="facebook" width="40" height="40" />
                  </a>

                  <a href="https://www.instagram.com/" target="blank">
                    <img src={twitter} alt="twitter" width="40" height="40" />
                  </a>
                </div>
              </div>
              <div className="footer__lists-content">
                <h3 className="footer__titles">Resource</h3>

                <ul className="footer__list">
                  <li className="footer__item">
                    <a className="footer__link" href="#link">
                      About Us
                    </a>
                  </li>
                  <li className="footer__item">
                    <a className="footer__link" href="#link">
                      Blog
                    </a>
                  </li>

                  <li className="footer__item">
                    <a className="footer__link" href="#link">
                      Contact
                    </a>
                  </li>
                  <li className="footer__item">
                    <a className="footer__link" href="#link">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__lists-content">
                <h3 className="footer__titles">Legal Stuff</h3>

                <ul className="footer__list">
                  <li className="footer__item">
                    <a className="footer__link" href="#link">
                      Disclaimer
                    </a>
                  </li>
                  <li className="footer__item">
                    <a className="footer__link" href="#link">
                      Financing
                    </a>
                  </li>

                  <li className="footer__item">
                    <a className="footer__link" href="#link">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="footer__item">
                    <a className="footer__link" href="#link">
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </div>

              <div className="footer__form-content">
                <h3 className="footer__titles">
                  Knowing you're always on the best energy deal.
                </h3>
                <form className="footer__form" action="https://echo.htmlacademy.ru/" method="POST" autoComplete="off">
                  <input className="footer__input" type="tel" name="user-telephone" placeholder="Enter your phone Num" required />

                  <button className="footer__button" type="submit">Sign up Now</button>
                </form>
              </div>
            </div>

            <div className="footer__bottom">
              Made With Love By Figmaland All Right Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}