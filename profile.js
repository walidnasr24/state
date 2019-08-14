import React from 'react';
import Button from './button';
import Image1 from './image1.jpg';
import Image2 from './image2.jpg';
import Image3 from './image3.jpg';

export default class Profile extends React.Component{


 state=
    {
name:"Sarra",
src:Image1,
par:"des",
    }
    render(){
return (
    <div>
<Button onSimpleClick={()=>{
    this.setState({
        name:"sarra",
        src:Image1,
        par:"hello"})
        }}>sarra</Button>
<Button onSimpleClick={()=>{
    this.setState({
        name:"walid",
        src:Image2,
        par:"bye"})
        }}
        >walid</Button>
<Button onSimpleClick={()=>{
    this.setState({name:"khalil",
    src:Image3,
    par:"web"})}}>khalil</Button>
<h1>{this.state.name}</h1>
<img src={this.state.src}/>
<p>{this.state.par}</p>
</div>
)
 }

}