import logo from './logo.svg';
import './App.css';

function App() {
  let name="Sravani"
  return (
    <div className="App">
      <Welcome
        name="sravs"
        pic="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
      />
    {/* <Welcome
        name="Rachana"
        pic="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
      /> */}
      <Welcome1
      name="Vidya"
      pic="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
    />
    <Welcome2
      name="Rachana"
      pic="https://www.finetoshine.com/wp-content/uploads/2020/04/Beautiful-Girl-Wallpapers-New-Photos-Images-Pictures.jpg"
    />
       {/* <h1>Hi {name} 🎉🎉</h1>   */}
    </div>
  );
}

function Welcome(props){
  let name="Sravani"
  return(
    <div className="App">
      <img className='user-pic' src={props.pic} alt={props.name} />
      <h1>Hi {props.name} 🎉🎉👏</h1>  
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

export default App;
