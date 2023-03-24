import { useState } from "react";

function MovieList({ movie, pop, rated }) {
  const [showModal, setShowModal] = useState(false); 
  
  const handleClick = () => {
    setShowModal(!showModal);
  };


  const URL = "https://image.tmdb.org/t/p/w500";
  const photolist = "flex cursor-pointer  overflow-x-scroll";
  const body = "bg-black pt-3 text-white ";
  const photo = "relative  h-[190px] w-[140px]  m-1";
  const name = "ml-3 text-xl font-bold"
  return (
    <div className={body}>
      <p className={name}>NETFLİX ORİGİNAL</p>

      <div className={photolist}>
        {rated.map((rateds, index) => (
          <div key={index}>
            <img
            onClick={handleClick}
              className={photo}
              src={`${URL}${rateds.poster_path}`}
              alt={rateds.name}
            />
    {/* {showModal ===true ? (rateds.overview):""} */}
          </div>
        ))}
      </div>
      <p className={name}>TOP</p>
      <div className={photolist}>
        {pop.map((pops, index) => (
          <div key={index}>
            <img
              className={photo}
              src={`${URL}${pops.poster_path}`}
              alt={pops.name}
            />
          </div>
        ))}
      </div>
      <p className={name}>TREND</p>
      <div className={photolist}>
        {movie.map((movies, index) => (
          <div key={index}>
            <img
            // onClick={showModal} 
              className={photo}
              src={`${URL}${movies.poster_path}`}
              alt={movies.name}
            />
          {/* <div > {movies.overview}  </div>  */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MovieList;
