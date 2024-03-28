import React from "react";

export default function HeroComponent({ data }) {
  return (
      <section
          className="flex gap-3 m-2"
          style={{ overflowX: "auto", width: "100%" }}
      >
          {data.map((item) => (
              <div className="hero" style={{ flex: "0 0 auto", width: "200px", marginTop:"10px" }} key={item.id}>
                  <img
                      src={item.img}
                      className="hero"
                  />
              </div>
          ))}
      </section>
  );
}
