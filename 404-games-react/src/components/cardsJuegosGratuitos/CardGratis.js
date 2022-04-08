import React from "react";
import PropTypes from "prop-types";

import "../../styles/css/JuegosGratis.css";

function CardGratis({ imageSource, title, description, url }) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
      <div className="overflow">
        <img src={imageSource} className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">
          {description}
        </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          {/* Obtener {title} */}
        </a>
      </div>
    </div>
  );
}

CardGratis.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default CardGratis;