import "./intro.scss";

import introImg1 from "../../assets/intro-cursor-img.png"
import introImg2 from "../../assets/intro-desigin-img.png"
import introImg3 from "../../assets/intro-test-img.png"
import introImg4 from "../../assets/intro-second-test-img.png"

export default function Intro() {
  return (
    <>
      <section className="intro" id="intro">
        <div className="intro__container container">
          <div className="intro__inner">
            <div className="intro__title-box">
              <h2 className="intro__title">
                Product was Built Specifically
                for You
              </h2>
            </div>

            <ul className="intro__list">
              <li className="intro__item-product item-product">
                <img src={introImg1} alt="First click tests" width="50" height="50" />

                <h3 className="item-product__title">First click tests</h3>
                <p className="item-product__text">While most people enjoy casino gambling.</p>
              </li>

              <li className="intro__item-product item-product">
                <img src={introImg2} alt="Design surveys" width="50" height="50" />

                <h3 className="item-product__title">Design surveys</h3>
                <p className="item-product__text">Sports betting, lottery and bingo playing for the fun.</p>
              </li>
              <li className="intro__item-product item-product">
                <img src={introImg3} alt="Preference tests" width="50" height="50" />

                <h3 className="item-product__title">Preference tests</h3>
                <p className="item-product__text">The Myspace page defines the individual.</p>
              </li>

              <li className="intro__item-product item-product">
                <img src={introImg4} alt="Five second tests" width="50" height="50" />

                <h3 className="item-product__title">Five second tests</h3>
                <p className="item-product__text">Personal choices and the overall personality of the person. </p>
              </li>
            </ul>

            <div className="intro__link-box">
              <a className="intro__link" href="#link">SIGN UP NOW</a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}