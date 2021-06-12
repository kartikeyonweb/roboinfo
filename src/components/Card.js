import React from 'react';
const Card=(props)=>{
return(
<div className='tc bg-white dib br3 pa3 ma2 grow bw2 shadow-5'>
<img alt='robots' src={`https://robohash.org/ ${props.id}?200x200`}/>
<div>
    <h2> {props.name}</h2>
    <p>{props.username}</p>
    <p>{props.email}</p>
    </div>
    </div>





    );
}


export default Card;