export function getDataCharacters(value) {
	return fetch(`${value}`)
		.then((response) => response.json())
		.then((data) => {
			return data.results.map(
				({
					id,
					name,
					image,
					status,
					species,
					type,
					gender,
					location,
					origin,
					episode,
				}) => {
					return {
						id: id,
						name: name,
						img: image,
						status: status,
						species: species,
						type: type,
						gender: gender,
						location: location.name,
						origin: origin.name,
						episodes: episode.length,
						episodeUrl: episode,
					};
				}
			);
		})
		.catch((error) => console.log(error));
}

export function getDataCharactersByID(value) {
	return fetch(`${value}`)
		.then((response) => response.json())
		.then(
			({
				id,
				name,
				image,
				status,
				species,
				type,
				gender,
				location,
				origin,
				episode,
			}) => {
				return {
					id: id,
					name: name,
					img: image,
					status: status,
					species: species,
					type: type,
					gender: gender,
					location: location.name,
					origin: origin.name,
					episodes: episode.length,
					episodeUrl: episode,
				};
			}
		)
		.catch((error) => console.log(error));
}