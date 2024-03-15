import React from "react";

export default function HeroComponent() {
    return (
      <section className="flex gap-3 m-2" style={{ overflowX: 'auto', width: '100%' }}>
      <div className="hero" style={{ flex: '0 0 auto', width: '200px' }}>
                <p>helo world</p>
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
