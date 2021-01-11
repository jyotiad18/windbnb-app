
import React from 'react';
import './css/Header.css';
import logo from './images/logo.png';
import { useStateValue } from './StateProvider';

function Header() {	
	const [{ city, country, adults, childerns }, dispatch] = useStateValue();		
	const toggleVisible = (type) => {
		dispatch({
			type: 'TOGGLE_VISIBLE',
			islocVisible: type === "0" ? true : false,
			isguestVisible: type === "1" ? true : false,
		});
	}
	const searchAll = () => {
		dispatch({
			type: 'SEARCH_ALL'
		});
	}
	
	return (
	    <div className="header">
			<img src={logo} alt="windbnb"></img>
			<div className="header__search">
				<h3 className="search__country" onClick={() => { toggleVisible("0") }}>{city}, {country}</h3>				
				<h3 className="search__guest" onClick={() => { toggleVisible("1") }}>{(adults + childerns) > 0 ? (adults + childerns) : 'Add guests'}</h3>
				<i className="material-icons md-24" onClick={searchAll}>search</i>
			</div>			
		</div>			
	)
}

export default Header;
