export function getDataCharacters() {
  return fetch(`https://rickandmortyapi.com/api/character`)
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((character) => {
        return {
          id: character.id,
          name: character.name,
          img: character.image,
          status: character.status,
          species: character.species,
          type: character.type,
          gender: character.gender,
          location: character.location.name,
          origin: character.origin.name,
          episodes: character.episode.length,
          episodeUrl: character.episode,
        };
      });
    })
  .catch((error) => console.log(error))
};


export function getDataCharactersByID(url) {
  return fetch(`${url}`)
    .then((response) => response.json())
    .then((data) => {
      return {
        id: data.id,
        name: data.name,
        img: data.image,
        status: data.status,
        species: data.species,
        type: data.type,
        gender: data.gender,
        location: data.location.name,
        origin: data.origin.name,
        episodes: data.episode.length,
        episodeUrl: data.episode,
      };
    })
  .catch((error) => console.log(error))
}
