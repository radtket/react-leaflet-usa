import { useEffect } from "react";
import { useLeaflet } from "react-leaflet";
import L from "leaflet";
import statesData from "../data/states.json";
import { style } from "../utils";

const HighlightedGeoJson = () => {
  const { map } = useLeaflet();

  useEffect(() => {
    // control that shows state info on hover
    const info = L.control();

    info.onAdd = () => {
      info._div = L.DomUtil.create("div", "info");
      info.update();
      return info._div;
    };

    info.update = props => {
      info._div.innerHTML = `<h4>US Population Density</h4>${
        props
          ? `<b>${props.name}</b><br />${props.density} people / mi<sup>2</sup>`
          : "Hover over a state"
      }`;
    };

    info.addTo(map);

    const highlightFeature = e => {
      const layer = e.target;

      layer.setStyle({
        weight: 5,
        color: "#666",
        dashArray: "",
        fillOpacity: 0.7,
      });

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
      }

      info.update(layer.feature.properties);
    };

    let geojson;

    const resetHighlight = e => {
      geojson.resetStyle(e.target);
      info.update();
    };

    const zoomToFeature = e => {
      map.fitBounds(e.target.getBounds());
    };

    const onEachFeature = (feature, layer) => {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature,
      });
    };

    geojson = L.geoJson(statesData, {
      style,
      onEachFeature,
    }).addTo(map);
  }, [map]);

  return null;
};

export default HighlightedGeoJson;
