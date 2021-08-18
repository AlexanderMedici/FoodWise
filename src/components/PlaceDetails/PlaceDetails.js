import React from "react";

import useStyles from "./styles.js";

const PlaceDetails = ({place}) => {
  // const classes = useStyles();
  return (
    <div>
      <h1>{place.name}</h1>
    </div>
  );
};
export default PlaceDetails;
