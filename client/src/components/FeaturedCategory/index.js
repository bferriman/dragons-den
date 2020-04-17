import React from "react";
import "./featuredcategory.css";

function FeaturedCategory(props) {
  return (
    <>
      <div className="TBMarg LHeight">
        <img className="align-bot featured-img" src={props.image} />
      </div>
    </>
  );
}

export default FeaturedCategory;
