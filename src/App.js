import React, { useEffect, useState } from "react";
import MovieList from "./Components/MovieList";
import getMovie from "./api";
import MovieShow from "./Components/MovieShow";
import Navbar from "./Components/Navbar";

function App() {
  const [movie, setMovie] = useState([]);
  const [pop, setPop] = useState([]);
  const [rated, setRated] = useState([]);
  const [week, setWeek] = useState([]);
 
    const Data = async () => {
      const result = await getMovie();
      setMovie((await result[0]).data.results);
      setPop((await result[1]).data.results);
      setRated((await result[2]).data.results);
    };
     useEffect(() => {
    Data();
  }, []);

  return (
    <div>
      <Navbar/>
      <MovieShow week={week} setWeek={setWeek}/>
      <MovieList movie={movie} pop={pop} rated={rated} />
    </div>
  );
}

export default App;
