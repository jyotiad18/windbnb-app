export const getUniqueLocation = (data) => {
	return Array.from(new Set(data.map(s => s.city)))
		.map(city => {
			return {
				city: city,
				country: data.find(s => s.city === city).country
			}
		});
};


export const addGuest = (adult, child) => {
	return adult + child
}