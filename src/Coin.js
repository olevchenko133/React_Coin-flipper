import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component{
render(){
    return(
        <img className="Coin" src={this.props.src}/>
    )
}


}
export default Coin;