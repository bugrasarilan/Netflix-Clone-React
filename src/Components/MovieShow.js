import { useEffect } from "react";
import getMovie from "../api";

// const URL = "https://image.tmdb.org/t/p/w500";

function MovieShow({ week, setWeek }) {
useEffect(() => {
  const Data = async () => {
    const result = await getMovie();
    setWeek(
      (await result[3]).data.results[Math.floor(Math.random() * (await result[3]).data.results.length )]
  );
  }; console.log(week)
  
  Data();
}, []);
const backgroundImage= (`https://image.tmdb.org/t/p/w500${week?.backdrop_path}`)
  return (
    <div className=""> 
    <div className="absolute top-[40%] left-5 text-white text-2xl font-bold">  {week.title||week.name}</div> 
    <div className="absolute top-[46%] left-4 w-[500px] text-white">{week.overview}</div> 
    <img className="h-[80vh] w-screen mx-auto"  src={backgroundImage} alt="img"/>

    </div>
  );
}

export default MovieShow;