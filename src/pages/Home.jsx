import React from 'react';

function Home() {
  return (
    <>
      <section id="home" className="home-section">
        <div className="home-container">
          <div className="hero">
            <div className="heroH"><h2>NEW COLLECTION 2026</h2></div>
            <h1>Fashion for<br/> Every Age & Style</h1>
            <p>Discover the latest trends in clothing and <br/> accessories for women, men, kids, and teenagers.<br/> Quality meets style.</p>
          </div>
           <div className="home-cta">
            <button className="hero-cta">Shop now</button>
          <button className="hero-cta1">Latest offers</button>
        </div>
        </div>
      </section>
    </>
  );
}

export default Home;