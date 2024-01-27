

import React from 'react'
import { IncrementLike,DecrementLike } from './Actions'
import {createStore} from 'redux';
import reducer from './Reducer';

const store=createStore(reducer);


const LikeCounter = () => {
    
    const [Likes,setLikes]=React.useState(store.getState().likes);

    function handleLike()
    {
        store.dispatch(IncrementLike())
    }
    // function handleUnlike()
    // {
    //     store.dispatch(DecrementLike())
    // }

    function handleUnlike() {
        if (store.getState().likes > 0) {
          store.dispatch(DecrementLike());
        }
      }
    React.useEffect(()=>{
        const subscribe=store.subscribe(()=>setLikes(store.getState().likes));
        return subscribe;
    },[])
  return (

    <div>
        <h1>{Likes}</h1>
       <button onClick={handleLike}>Increment</button>
     <button onClick={handleUnlike}>Decrement</button>
    </div>
  )
}

export default LikeCounter
