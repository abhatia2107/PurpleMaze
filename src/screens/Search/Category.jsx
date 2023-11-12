import React from "react";
import "./ecommerce.css";

const Category = ({ ad }) => {
  const {
    name,
    headline,
    display_link,
    call_to_action,
    media_resource_url,
    logo_resource_url,
    format,
  } = ad;

  return (
    <div className="product-card">
      <div className="card-header"></div>
      <div className="card-body">
        <div className="logo-name-container max-h-[40px]">
          <img className="logo-image" src={logo_resource_url} alt={name} />
          <h2 className="name">{name}</h2>
        </div>
        {format === "Video" ? (
          <div className="video-container">
            <video controls>
              <source src={media_resource_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : (
          <img className="media-image" src={media_resource_url} alt={name} />
        )}
      </div>
    </div>
  );
};

export default Category;
