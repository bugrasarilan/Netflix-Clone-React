import axios from "axios";
const KEY = process.env.REACT_APP_API_KEY;
const URL = process.env.REACT_APP_URL;
const getMovie = async () => {
    
  const promise1 = axios.get(`${URL}/trending/tv/day?api_key=${KEY}`);
  const promise2 = axios.get(`${URL}/movie/top_rated?api_key=${KEY}`);
  const promise3 = axios.get(`${URL}/discover/movie?api_key=${KEY}`);
  const promise4 = axios.get(`${URL}/trending/all/week?api_key=${KEY}`);
 
  const response = [promise1, promise2, promise3, promise4];
  console.log(response);
  
  return response;
};

export default getMovie;




