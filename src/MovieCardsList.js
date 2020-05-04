import React  from 'react';
import MovieCard from './MovieCard';

function MovieCardsList(props) {
  const { profiles, users, movies } = this.props;
  const usersByMovie = {}; // create empty object

  profiles.forEach(profile => {
    const movieID = profile.favoriteMovieID; // get movieID as key

    if (usersByMovie[movieID]) { // loop thru ea. profile item
      usersByMovie[movieID].push(profile.userID); // push user onto array
    } else { // else if movie key does not exit
      usersByMovie[movieID] = [profile.userID]; // assign user array to key
    }
  });

  const movieCards = Object.keys(movies).map(id => (
    <MovieCard
      key={id}
      users={users}
      usersWhoLikedMovie={usersByMovie[id]}
      movieInfo={movies[id]}
    />
  ));

  return <ul>{movieCards}</ul>;
}
export default MovieCardsList;
