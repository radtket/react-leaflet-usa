// get color depending on population density value
export const getColor = d => {
  if (d > 1000) {
    return "#800026";
  }
  if (d > 500) {
    return "#BD0026";
  }
  if (d > 200) {
    return "#E31A1C";
  }
  if (d > 100) {
    return "#FC4E2A";
  }
  if (d > 50) {
    return "#FD8D3C";
  }
  if (d > 20) {
    return "#FEB24C";
  }
  if (d > 10) {
    return "#FED976";
  }
  return "#FFEDA0";
};

export const style = feature => {
  return {
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7,
    fillColor: getColor(feature && feature.properties.density),
  };
};
