import React from 'react'
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
import { Spinner } from 'react-bootstrap';

/*
  NOTA: 
  Podes reutilizar este componente en donde quieras.
  Y personalizarlo un poco, tenes que pasarle por props:

  * zoom que por default esta puesto en 10.
  * center que es la posición del marcador.
  * width, height, margin y borderRadius para personalizar el mapa.
  * isDragable esta opción es para que puedas determinar si la posición del marcador se puede mover. Por default está en false ya que este componente está pensado solo para mostrar una posición.

  with love ♥ by leito :)
*/

const googleAPiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

const Map = ({
  zoom = 10,
  isDragable = false,
  center = { lat: -40.9565, lng: 151.2 },
  width = '400px',
  height = '300px',
  margin = '10px',
  borderRadius = '10px',
}) => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleAPiKey,
  });

  return (
    <>
      {
        isLoaded ?
          <GoogleMap
            zoom={zoom}
            center={center}
            mapContainerStyle={{
              width: width,
              height: height,
              margin: margin,
              borderRadius: borderRadius,
            }}
          >
            <Marker draggable={isDragable} position={center} />
          </GoogleMap>
          : <Spinner animation="grow" variant="light" />
      }
    </>
  );
}

export default Map