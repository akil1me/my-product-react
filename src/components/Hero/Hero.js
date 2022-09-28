import "./hero.scss"

export default function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero__container container">
          <div className="hero__inner">
            <div className="hero__content">
              <h2 className="hero__title">
                Work at the speed
                of thought
              </h2>

              <p className="hero__text">
                Tools, tutorials, design and innovation experts, all in one place! The most intuitive way to imagine your
                next user experience.
              </p>

              <div className="hero__links">
                <a className="hero__link-get link-get" href="#link">Get started</a>
                <a className="hero__link-watch link-watch" href="#link">Watch the Video</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}