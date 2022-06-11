import React from "react";
import { useParams } from "react-router-dom";

const WeatherPage = () => {
  const params = useParams();
  return <div>{params.city}</div>;
};

export default WeatherPage;
