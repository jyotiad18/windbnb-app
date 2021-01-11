import React from 'react'
import './css/SearchModal.css';
import { useStateValue } from './StateProvider';
import Locations from './Locations';
import Guests from './Guests';

function SearchModal() {	
	const [{ country, city, adults, childerns, islocVisible, isguestVisible }, dispatch] = useStateValue();

	const toggleVisible = () => {
    	dispatch({
     	 type: 'TOGGLE_INVISIBLE'
      });
	 }
	 	
	const searchRooms = () => {	
		dispatch({
			type: 'SEARCH_ROOM',
			city: city,
			country: country,
			guests: adults  + childerns
    	});
	}
	
	return (
		<div className="searchModal">
			<div className="searchModel__close">
				<i className="material-icons md-24" onClick={toggleVisible}>close</i>
			</div>
			<div className="searchModal__inputs">
				<div className="searchModal__container">
					<div className="searchModal__location">
						<span>location</span>
						<h5>{city}, {country}</h5>
					</div>
					{ islocVisible ? <Locations /> : null }
				</div>
				<div className="searchModal__container">
					<div className="searchModal__beds">
						<span>Guests</span>
						<h5>{adults  + childerns}</h5>
					</div>
					{ isguestVisible ? <Guests /> : null }
				</div>
				<div className="searchModal__container">
					<div className="searchModal__icons" onClick={searchRooms}>					
						<i className="material-icons md-24">search</i>
						<span>Search</span>
					</div>
				</div>				
			</div>				
		</div>
	)
}

export default SearchModal;
