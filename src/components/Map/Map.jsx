import React from "react";
import GoogleMapReact from "google-map-react";
import {Paper, Typography, useMediaQuery} from "@material-ui/core";
import {LocationOnOutlinedIcon} from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab";
import useStyles from "./styles.js";

const Map = ({setCoordinates, setBounds, coordinates}) => {
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        // the api key has to be added process env is not working remember that rest is oky just use the key from the env file i am using  key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY for security do not upload an api key to github ever
        bootstrapURLKeys={{key: "AIzaSyABUG3yep49qSukqk4zVwHRg_9_cOX_Xw4"}}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(evt) => {
          setCoordinates({lat: evt.center.lat, lng: evt.center.lng});
          setBounds({ne: evt.marginBounds.ne, sw: evt.marginBounds.sw});
        }}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};
export default Map;
