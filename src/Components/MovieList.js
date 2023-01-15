const URL = "https://image.tmdb.org/t/p/w500";
function MovieList({ movie, pop, rated }) { 
  const photolist= "flex cursor-pointer  overflow-x-scroll"
  const body="bg-black pt-3 text-white "
  const photo="relative  h-[190px] w-[140px]  m-1"
  return (
    <div className={body}>
      <div className={photolist} > 
        {rated.map((rateds, index) => (
          <div  key={index}>
            <img
              className={photo}
              src=  {`${URL}${rateds.poster_path}`}
              alt={rateds.name}
            />
            {/* {rateds.title} */}
          </div>
        ))}
      </div>
      <div className={photolist}>
        {pop.map((pops, index) => (
          <div key={index}>
            <img
              className={photo}
              src={`${URL}${pops.poster_path}`}
              alt={pops.name}
            />
            {/* {pops.title} */}
          </div>
        ))}
      </div>
      <div className={photolist}>
        {movie.map((movies, index) => (
          <div key={index}>
            <img
            className={photo}
              src={`${URL}${movies.poster_path}`}
              alt={movies.name}
            />
            {/* {movies.title} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
