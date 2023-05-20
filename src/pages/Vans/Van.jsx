import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Van = () => {
  const params = useParams();
  const { id } = params;
  const [van, setVan] = useState(null);
  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, []);
  console.log(van);
  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
          <Link to={`/vans/3`} className="link-button">
            Another van
          </Link>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Van;
