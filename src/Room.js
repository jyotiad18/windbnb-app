import React from 'react';
import './css/Room.css';

function Room({title, photo, superHost, type, beds, rating }) {
	return (
		<div className="room">
			<img src={photo} alt="" />
			<div className="room__detail">
				{superHost ?
					<div className="room__host">
						superhost
				</div>
			     : null
				}
				<div className="room__types">
					<h5>{type}{" . "}</h5>
					{ beds ? <h6>{beds} beds</h6> : null }
				</div>				
				<div className="room__rating">
					<i className="material-icons md-18">star</i>
					<h6>{rating}</h6>
				</div>
			</div>
			<h1 className="room__title">{title}</h1>
		</div>
	)
}

export default Room;
