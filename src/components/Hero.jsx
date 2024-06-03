const Hero = () => {
  return (
    <main className="Hero container">
      <div className="HeroContent">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST YOUR FEET DESERVE THE BEST AND WE ARE HERE
          TO HELP YOU WITH OUR SHOES.
        </p>
        <div className="Hero-btn">
          <button>Shop Now</button>
          <button className="secondary-btn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available on</p>
          <div className="icons">
            <img src="./images/flipkart.png"></img>
            <img src="./images/amazon.png"></img>
          </div>
        </div>
      </div>
      <div className="heroImage">
        <img src="/images/shoe_image.png"></img>
      </div>
    </main>
  );
};
export default Hero;
