import React from 'react'
import './css/Guests.css';
import { useStateValue } from './StateProvider';

function Guests() {
	const [{ adults, childerns }, dispatch] = useStateValue();	
	const addGuest = (type) => {
		dispatch({
			type: 'ADD_GUEST',		
			adults: type === 0 ? 1 : 0,
			childerns: type === 1 ? 1 : 0		
    	});
	}
	const removeGuest = (type) => {
		dispatch({
			type: 'REMOVE_GUEST',
			adults: type === 0 ? 1 : 0,
			childerns: type === 1 ? 1 : 0			
    	});
	}
	return (
		<div className="guests">
			<div className="guest__info">
						<h1><strong>Adults</strong> <p>Ages 13 or above</p></h1>
						<div className="guest__number">
							<i className="material-icons md-24" onClick={() => removeGuest(0)}>remove</i>
							<span>{adults}</span>
							<i className="material-icons md-24" onClick={() => addGuest(0)}>add</i>
						</div>
					</div>
					<div className="guest__info">
						<h1><strong>Children</strong> <p> Ages 2-12</p></h1>
						<div className="guest__number">
							<i className="material-icons md-24" onClick={() => removeGuest(1)}>remove</i>
							<span>{childerns}</span>
							<i className="material-icons md-24" onClick={() => addGuest(1)}>add</i>
						</div>
					</div>
		</div>
	)
}

export default Guests;
