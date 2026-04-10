import React from 'react';

function Home() {
  return (
    <>
      <section id="home" className="home-section">
        <div className="home-container">
          <div className="hero">
            <div className="heroH"><h2>NEW COLLECTION 2026</h2></div>
            
          </div>
          <div className='herotag'>
              <h1>Fashion for<br/> Every Age & Style</h1>
            <p>Discover the latest trends in clothing and <br/> accessories for women, men, kids, and teenagers.<br/> <span>Quality</span> meets <span className='styled'><span className='s'>s</span><span className='s'>t</span><span className='y'>y</span><span className='l'>l</span><span className='e'>e</span>.</span></p>
            </div>
           <div className="home-cta">
            <button className="hero-cta">Shop now</button>
          <button className="hero-cta">Latest offers</button>
        </div>
        </div>
      </section>
    </>
  );
}

export default Home;