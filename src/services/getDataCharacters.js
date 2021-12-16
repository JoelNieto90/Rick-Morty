const getDataFromAPI = () => {
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
          gender: character.gender,
          origin: character.origin.name,
          episodes: character.episode.length,
        };
      });
    });
};

export default getDataFromAPI;
