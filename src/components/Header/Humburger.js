import './humburger.scss';

import humburgerImg from "../../assets/humburger.svg"
import humburgerImgX from "../../assets/humburger-x.svg"

export default function Humburger() {

  return (
    <>
      <div className="header__humburger humburger">
        <input className="humburger__input visually-hidden" type="checkbox" name="humburger" id="humburgerx" />
        <div className="humburger__modal">
          <ul className="humburger__list">
            <li className="humburger__item">
              <a className="humburger__link" href="#intro">Product</a>
            </li>

            <li className="humburger__item">
              <a className="humburger__link" href="#direction">Customers</a>
            </li>

            <li className="humburger__item">
              <a className="humburger__link" href="#price">Pricing</a>
            </li>

            <li className="humburger__item">
              <a className="humburger__link" href="#product">Resources</a>
            </li>
          </ul>

          <div className="humburger__more">
            <a className="humburger__link-sign" href="#link">
              Sign In
            </a>

            <a className="humburger__link-sign" href="#link">
              Sign Up
            </a>
          </div>
        </div>
        <label className="humburger__label" htmlFor="humburgerx">


          <img className="humburger__img" src={humburgerImg} alt="humburger" width="28" height="31" />
          <img className="humburger__img-x" src={humburgerImgX} alt="humburger x" width="28" height="31" />
        </label>
      </div>
    </>
  )
}