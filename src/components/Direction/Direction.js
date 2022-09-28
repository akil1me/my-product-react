import "./direction.scss";

import directionImg1 from "../../assets/direction-img1.png";
import directionImg2 from "../../assets/direction-img2.png";
import directionImg3 from "../../assets/direction-img3.png";

export default function Direction() {
  return (
    <>
      <section className="direction" id="direction">
        <div className="direction__container container">
          <div className="direction__inner">
            <ul className="direction__list">
              <li className="direction__item">
                <div className="direction__item-content">
                  <p className="direction__context">Effortless Validation for</p>

                  <h2 className="direction__title">Management</h2>

                  <p className="direction__text">The Myspace page defines the individual, his or her characteristics, traits,
                    personal choices and the overall personality of the person. </p>

                  <h3 className="direction__subtitle">
                    Accessory makers
                  </h3>
                  <p className="direction__text">While most people enjoy casino gambling, sports betting, lottery and bingo
                    playing for the fun</p>

                  <h3 className="direction__subtitle">
                    Alterationists
                  </h3>
                  <p className="direction__text">If you are looking for a new way to promote your business that won't cost you
                    more money,</p>
                </div>

                <img className="direction__menejment-img" src={directionImg1} alt="Management" width="540"
                  height="474" />
              </li>

              <li className="direction__item">
                <div className="direction__item-content">
                  <p className="direction__context">Easier decision making for</p>

                  <h2 className="direction__title">Customer Support</h2>
                  <p className="direction__text">The Myspace page defines the individual, his or her characteristics, traits,
                    personal choices and the overall personality of the person.</p>

                  <ul className="direction__sublist">
                    <li className="direction__subitem">
                      Never worry about overpaying for your energy again.
                    </li>

                    <li className="direction__subitem">
                      We will only switch you to energy companies that we trust and will treat you right
                    </li>

                    <li className="direction__subitem">
                      We track the markets daily and know where the savings are.
                    </li>
                  </ul>
                </div>

                <img className="direction__support-img" src={directionImg2} alt="Customer Support" width="543"
                  height="500" />
              </li>

              <li className="direction__item">
                <div className="direction__item-content">
                  <p className="direction__context">Optimisation for</p>

                  <h2 className="direction__title">Collaborative</h2>

                  <p className="direction__text">Few would argue that, despite the advancements of feminism over the past
                    three decades, women still face a double standard when it comes to their behavior.</p>

                  <h3 className="direction__subtitle">
                    Accessory makers
                  </h3>
                  <p className="direction__text">While most people enjoy casino gambling, sports betting, lottery and bingo
                    playing for the fun</p>

                  <h3 className="direction__subtitle">
                    Alterationists
                  </h3>
                  <p className="direction__text">If you are looking for a new way to promote your business that won't cost you
                    more money,</p>
                </div>

                <img className="direction__collab-img" src={directionImg3} alt="Collaborative" width="542"
                  height="451" />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}