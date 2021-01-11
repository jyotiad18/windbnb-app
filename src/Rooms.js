import React from 'react'
import './css/Rooms.css';
import Room from './Room';
import { useStateValue } from './StateProvider';

function Rooms() {
	const [{rooms, country }] = useStateValue();  
	return (
		<div className="rooms">
			<div className="rooms__info">
				<h1>Stays in {country}</h1>
				<h3>{rooms.length}+ stays</h3>
			</div>
			<div className="rooms__lists">	
				{
					rooms && rooms.map(({ title, photo, superHost, type, beds, rating }, i) => (
						<Room
							key={i}
							title={title}
							photo={photo}
							superHost={superHost}
							type={type}
							beds={beds}
							rating={rating}
						/>
					))
			  }				
			</div>
		</div>
	)
}

export default Rooms;
