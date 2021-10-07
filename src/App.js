import React, { useState, useEffect } from "react";

import Toggle from "./Toggle";


function App() {

  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=8EnwXPGooPzc8KPRAVObz3um51ufzyMVHgcToLS6`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div />;


  return (
    <div className="nasa-photo">
        <img
          src={photoData.url}
          alt={photoData.title}

          className="photo"
        />
      <div>
        <h3>{photoData.title}</h3>
        {/* <p className="date">{photoData.date}</p> */}
        <Toggle />
      </div>
    </div>
  );
}

export default App;
