import React from "react";

const Person = ({ el, coleur }) => {
  return (
    <div className={"person l" + coleur}>
      <h2>{el.name}</h2>
      <h2>{el.username}</h2>
      <p>{el.email}</p>
      <ul>
        <li>{el.address.street}</li>
        <li>{el.address.suite}</li>
        <li>{el.address.city}</li>
        <li>{el.address.zipcode}</li>
      </ul>
      <ul>
        <li>{el.address.geo.lat}</li>
        <li>{el.address.geo.lng}</li>
      </ul>
    </div>
  );
};

export default Person;
