import './App.css';
import React, {useState} from "react";
//state 변경되는 사항
function App() {
  const [name,setName] = useState("");
  const [price,setPrice] =useState();
  const [movies, setMovies] =useState([]);


  const nameOnChange = (e) => {
setName(e.target.value);

  };
  const priceOnChange = (e) =>{
setPrice(e.target.value);

  };
  const buttonOnClick =() => {
    const temp=movies.concat({
      name:name,
      price: price,
    });
    setMovies(temp);
  };
  return (
  <div>
    <h2>영화리스트</h2>
    {movies.map((movie) => {
      return (
        <div>
          <ul>
            <li>영화제목: {movie.name}</li>
            <li>영화가격: {movie.price}</li>
          </ul>
        </div>

      );
    })}
    <h2>영화등록 </h2>
    <div>
      <span className="box">이름</span>
      <input type="text" value={name} onChange={nameOnChange}></input>
    </div>
    <div>
    <span span className="box" >가격</span>
    <input type="number" value={price} onChange={priceOnChange}></input>
    </div>
   <button onClick={buttonOnClick}>등록하기</button>
  </div>  
  );
}

export default App;
