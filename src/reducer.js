import data from "./data/stays.json";
import { getUniqueLocation }from "./utils.js"

export const initialState = {
	rooms: data, 	
	isVisible: false,
	city: 'Helsinki',
	country: 'Finland',
	locations: getUniqueLocation(data),
	adults: 0,
	childerns: 0,
	islocVisible: false,
	isguestVisible: false,
}

export const reducer = (state, action) => {    
	switch (action.type) {
		case "TOGGLE_VISIBLE": 			
			return {
			   ...state,
				isVisible: true,
				islocVisible: action.islocVisible,
				isguestVisible: action.isguestVisible
			}
		case "TOGGLE_INVISIBLE": 
			return {
			   ...state,
				isVisible: false,
			    islocVisible: false,
				isguestVisible: false
		   }        
        case "SELECT_LOCATION":
            return {
                ...state,
				city: action.location.city,
				country: action.location.country
			} 
		case "SEARCH_ALL": 
			return {
				...state,	
				rooms: data,
				adults: 0,
				childerns: 0
			} 
		case "SEARCH_ROOM":		
			let newRooms = [];
			if (action.guests > 0 && (action.city !== '' && action.country !== '')) {
				newRooms = data.filter(x => x.city === action.city && x.country === action.country && x.maxGuests >= action.guests);
			}
			else if (action.guests <= 0 && (action.city !== '' && action.country !=='')) {
				newRooms = data.filter(x => x.city === action.city && x.country === action.country);
			}
			else if (action.guests >= 0 && (action.city === '' && action.country === '')) {
				newRooms = data.filter(x => x.maxGuests <= action.guests);
			}
			return {
				...state,	
				rooms: newRooms,
				isVisible: false
			} 
		case "ADD_GUEST":
			let child = state.childerns + action.childerns;
			console.log(child);
			return {
				...state,
				childerns: state.childerns + action.childerns,
				adults: state.adults + action.adults
			}
		case "REMOVE_GUEST":
			return {
				...state,
				childerns: state.childerns - action.childerns,
				adults: state.adults - action.adults
			}
        default:
            return state;
    }
}