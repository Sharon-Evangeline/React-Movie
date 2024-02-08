import {Counter} from "./Counter";


export function User({name,pic}){
    return(
      <div>
        <img className ="pic" src={pic}/>
        <h1 clasName="user-head"> Hello,<span className="name">{name}</span></h1>
        <Counter />
            </div>
    )
    }