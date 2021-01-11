import React from 'react'
import './css/Locations.css';
import { useStateValue } from './StateProvider';

function Locations() {
	const [{ locations }, dispatch] = useStateValue();
	const addlocation = (location) => {
		dispatch({
			type: 'SELECT_LOCATION',
			location: location 
    	});
	}
	return (
		<div className="locations">
			{
						locations && locations.map((loc, i) => (
							<div className="location" onClick={() => { addlocation(loc) }} key={i}>
								<i className="material-icons md-24">location_on</i>
								<span>{loc.city}</span>
								<span>{" , "}</span>
								<span>{loc.country}</span>
							</div>
					  ))		
			}
		</div>
	)
}

export default Locations;
