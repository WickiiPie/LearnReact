import React from "react";
import Card from "../../shared/components/UIElements/Card";
const PlaceItem = (props) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div className="place-item__image">
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className="place-item__info">
          <h2>{props.title}</h2>
          <h2>{props.address}</h2>
          <h2>{props.description}</h2>
        </div>
        <div className="place-item__actions">
          <button>VIEW ON MAP</button>
          <button>EDIT</button>
          <button>DELETE</button>
        </div>
      </Card>
    </li>
  );
};

export default PlaceItem;
