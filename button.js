import React from 'react';

export default function Button(props){

return(

    <button onClick={props.onSimpleClick}>{props.children} </button>
)

}