import React from "react";

export default function HeroComponent() {
    return (
      <section className="flex gap-3 m-2" style={{ overflowX: 'auto', width: '100%', }}>
      <div className="hero" style={{ flex: '0 0 auto', width: '200px' }}>
                <img src="https://kitabisa.com/_next/image?url=https%3A%2F%2Fimgix.kitabisa.com%2F08e30860-3fe1-4891-874f-9eb1fd4d0965.jpg%3Fauto%3Dformat%26fm%3Dpjpg%26ch%3DWidth%2CDPR%2CSave-Data%2CViewport-Width&w=256&q=75"/>
            </div>
            <div className="hero" style={{ flex: '0 0 auto', width: '200px' }}>
                <p>helo world</p>
            </div>
            <div className="hero" style={{ flex: '0 0 auto', width: '200px' }}>
                <p>helo world</p>
            </div>
        </section>
    );
}
