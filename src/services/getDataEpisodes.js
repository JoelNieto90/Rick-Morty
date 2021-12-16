const getDataEpisodes = () => {
  return fetch(`https://rickandmortyapi.com/api/episode`)
    .then((response) => response.json())
    .then((data) => {
      return data.results.map((episode) => {
        return {
          id: episode.id,
          name: episode.name,
          air_date: episode.air_date,
          episode: episode.episode,
          species: episode.species,
          characters: episode.characters.length,
          charactersUrl: episode.characters,
          url: episode.url,
          created: episode.create
        };
      });
    });
};

export default getDataEpisodes;
