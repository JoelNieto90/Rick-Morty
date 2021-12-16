const getDataCharacters = () => {
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
    });
};

export default getDataCharacters;
