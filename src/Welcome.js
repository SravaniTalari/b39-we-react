//Named export
export function Welcome(props){
    let name="Sravani"
    return(
      <div className="App">
        <img className='user-pic' src={props.pic} alt={props.name} />
        <h1>Hi {props.name} 🎉🎉👏</h1>  
      </div>
    );
  }

  export const double = (n)=> n*2;
  
//named-export
// export{Welcome,double}