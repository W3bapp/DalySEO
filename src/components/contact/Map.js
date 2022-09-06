import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
  import { useTheme } from '../../context/theme/ThemeContext'

const center = {
	lat: 52.011250, lng: 4.286770,
};

function Map (props) {
	const darkTheme = useTheme();

	return (
		<>
			<LoadScript googleMapsApiKey="AIzaSyCSfB3HhJXkskqLOKlqaiSY3NK4VxlSjQQ">
				<GoogleMap center={center} zoom={15} mapContainerClassName="map">
					<>
						{/*<Marker icon={darkTheme.dark ? logoWhite : logo} position={center}/>*/}
					</>
				</GoogleMap>
			</LoadScript>
		</>
	)
}

export default Map
