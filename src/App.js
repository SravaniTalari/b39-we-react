import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import {double,Welcome} from "./Welcome";
import { User } from './User';
import { MovieList } from './MovieList';

console.log("*****" , double(2));
function App() {
  let name="Sravani"
  const users = ["Nihal","lohi","pranavi"]
  let userDetails =[
    {
      name :"Nihal",
      pic :"https://cdn.pixabay.com/photo/2015/06/22/08/40/child-817373__340.jpg"
    },
    {
      name :"Lohi",
      pic :"https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
    },
    {
      name :"Pranavi",
      pic :"https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
    }
  ]
  return (
    <div className="App">
      {/* <Welcome
        name="sravs"
        pic="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
      /> */}
     {/* <Welcome
    //     name="Rachana"
    //     pic="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
    //   />
    //   <Welcome1
    //   name="Vidya"
    //   pic="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
    // />
    // <Welcome2
    //   name="Rachana"
    //   pic="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
    // /> */}
     {/* <User name="Nihal" />
    // <User name="Lohi" /> */}
     {/* {users.map((nm) =>  (
     <User name={nm} />
     ))} */}

    {/* {userDetails.map((user) =>  (
    <Welcome name={user.name} pic={user.pic} />
    ))} */}

       {/* <h1>Hi {name} 🎉🎉</h1>   */}

       {/* <Counter /> */}

       {/* <Movie /> */}

       <MovieList />

    </div>
  );
}


function Welcome1(props){
  // let name="Sravani"
  let {name , pic} =props
  return(
    <div className="App">
      <img className='user-pic' src={pic} alt={name} />
      <h1>Hi {name} 🎉🎉👏</h1>  
    </div>
  );
}

function Welcome2({name,pic}){
  return(
    <div className="App">
      <img className='user-pic' src={pic} alt={name} />
      <h1>Hi {name} 🎉🎉👏</h1>  
    </div>
  );
}



function Counter1(){
  // let like = 10;
  let [like ,setLike] = useState(0);
  let [disLike ,setDisLike] = useState(0);
  
  const likeStyle = {
    color : like >= 10 ? "green" :  "black",
    fontWeight : "bold"
  };
  
  const disLikeStyle = {
    color : disLike >= 10 ? "red" : "black",
    fontWeight : "bold",
    margin : "20px"
  
  };
  
  //conditional styling
  const messageStyle = {
    display : like - disLike >= 10 ? "block" : "none"
  }
  
    return (
      <div>
        {/* conditional rendering */}
        {like-disLike>=10 ? <h2>You are awesome ✨✨</h2> : null }
        
        {/* conditional styling */}
        {/* <h2 style={messageStyle}>You are awesome ✨✨</h2> */}
        
        <button style={likeStyle} onClick={() => {
          setLike(like+1)
          // setLike(10)
          // like = like+1;
          // console.log(like)
        }}>👍 {like}</button>
        <button style={disLikeStyle} onClick={() => { setDisLike(disLike+1) }}>👎 {disLike}</button>
        {/* <h2>{like}</h2>
        <h2>{like+1}</h2> */}
      </div>
    );
  }

  //default export
export default App;
