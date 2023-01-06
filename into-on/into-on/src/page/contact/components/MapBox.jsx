/* global kakao */
import { Map, MapMarker } from "react-kakao-maps-sdk";

const MapBox = () => {

return(
    <Map
    center={{ lat: 37.5382759, lng: 126.9671591 }}
    style={{ width: "100%", height: "360px", marginTop:"100px" }}
  >
    <MapMarker position={{ lat: 37.5382759, lng: 126.9671591}}>
    </MapMarker>
  </Map>
)
}

export default MapBox