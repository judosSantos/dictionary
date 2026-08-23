import React, { useState, useEffect } from "react";
import "./Images.css";

import axios from "axios";

export default function Images(props) {
  const [images, setImages] = useState([]);

  function handleImagesResults(response) {
    console.log(response.data);
    setImages(response.data.photos);
  }
  useEffect(() => {
    if (!props.word) {
      return;
    }

    const pexelsKey =
      "EEepXNZUarzM0oOGSMvaI77wPw42wVSYulRmQhVIQkNixhIDVuuWv14r";
    const pexelsApi = `https://api.pexels.com/v1/search?query=${props.word}&per_page=3`;

    axios
      .get(pexelsApi, {
        headers: {
          Authorization: pexelsKey,
        },
      })
      .then(handleImagesResults);
  }, [props.word]);

  return (
    <div className="images-results row">
      <div className="col-4">
        {images.length >= 1 && (
          <img src={images[0].src.medium} alt={images[0].alt} />
        )}
      </div>

      <div className="col-4">
        {images.length >= 2 && (
          <img src={images[1].src.medium} alt={images[1].alt} />
        )}{" "}
      </div>

      <div className="col-4">
        {images.length >= 3 && (
          <img src={images[2].src.medium} alt={images[2].alt} />
        )}{" "}
      </div>
    </div>
  );
}
