const Hero = () => {
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          alt="left-leaf"
          src="/images/hero-left-leaf.png"
          className="left-leaf"
        />
        <img
          alt="right-leaf"
          src="/images/hero-right-leaf.png"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Coll.Crisp.Classic</p>
              <p className="sub-content">
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className="view-cocktails">
              <p className="sub-content">
                Every cocktail on our menu is a blend of premium ingredients,
                creative flair, and timless recipes - designed to delight your
                senses.
              </p>
              <a href="#cocktails">View cockatils</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
