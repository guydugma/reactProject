import { setKey } from "react-geocode";
import "./BusinessMap.css"
import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';



const mapApiKey = "AIzaSyD2wbh6P-LEPX1TeG5z1R2a8Zsvv--6vFY";
setKey(mapApiKey);
type Props = {
  location: { address: string, lat: number, lng: number };
}


const BusinessMap = (props: Props) => {

  return (
    <APIProvider apiKey={mapApiKey} libraries={['marker']}>
      <Map mapId={props.location.address} className="google-map bottom-0" center={{ lat: props.location.lat, lng: props.location.lng }} defaultZoom={17}
      >
        <AdvancedMarker className="pin" position={{ lat: props.location.lat, lng: props.location.lng }} />
      </Map>
    </APIProvider>
  )
}

export default BusinessMap;