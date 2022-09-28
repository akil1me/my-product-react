import './navbar.scss'

export default function Navber() {
  return (
    <>
      <div className="header__navbar">
        <nav className="header__nav nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#intro">Product</a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="#direction">Customers</a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="#price">Pricing</a>
            </li>

            <li className="nav__item">
              <a className="nav__link" href="#product">Resources</a>
            </li>
          </ul>
        </nav>

        <a className="header__link-sign link-sign--in" href="#link">
          Sign In
        </a>

        <a className="header__link-sign link-sign--up" href="#link">
          Sign Up
        </a>
      </div>
    </>
  )
}