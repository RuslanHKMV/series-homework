
//A 
export const getEpisodeTitle = (show, seasonIndex, episodeIndex) =>
show.seasons[seasonIndex].episodes[episodeIndex].title;

export const getLastSeasonNumber = show => show.seasons.at(-1)?.number ?? 0;

export const getNextSeasonYear = show => show.nextSeason?.year ?? "No announcement";
//B
export const getById = (shows, id) => shows.find(show => show.id === id);

export const getSeasonsCount = shows => shows.map(show => ({ title: show.title, seasons: show.seasons.length }));

export const hasTopEpisode = (show, minRating) => show.seasons.some(season => season.episodes.some(episode => episode.rating >= minRating));

export const getCreatorsFrom = (shows, country) =>
shows.filter(show => show.creator.country === country).map(show => show.creator.name);

export const sortByStartYear = shows => [...shows].sort((a, b) => a.startYear - b.startYear);
