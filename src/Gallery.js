import React, { useEffect, useMemo, useRef } from "react";
import TitleText from "./TitleText";
import FadeInSection from "./FadeInSection";

const Gallery = (props) => {
  const importAll = (r) => {
    let images = [];
    r.keys().map((item, index) => {
      images.push(r(item));
    });
    return images;
  };

  const images = importAll(
    require.context("../public/textures", false, /\.(png|jpe?g|svg)$/)
  );
  
  return (
    <div>
      <div className="gallery-header">
        <TitleText text={"gallery"} />
        <a className="glitch glitch-link" href="http://localhost:3000">
          <span aria-hidden="true">Back</span>
          Back
          <span aria-hidden="true">Back</span>
        </a>
      </div>
      <div className="gallery-container">
        {images.map((image, index) => {
          return (
            <FadeInSection>
              <div
                className="gallery-item"
              >
                <img src={image} className="responsive" />
              </div>
            </FadeInSection>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
