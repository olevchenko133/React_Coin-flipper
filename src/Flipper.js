import React, { Component } from 'react';
import Coin from './Coin';
import './Flipper.css';


class Flipper extends Component {
    static defaultProps = {
        coinSides: ['https://tinyurl.com/react-coin-heads-jpg','https://cdn-3b20.kxcdn.com/media/catalog/product/cache/1/image/400x400/e4d92e6aceaad517e7b5c12e0dc06587/b/a/back3d_46_2.jpg']

    }
    constructor(props) {
        super(props);
        this.state = {
            flipTotal: 0,
            flipHead: 0,
            flipTail: 0,
    activeSide:'https://tinyurl.com/react-coin-heads-jpg'

        }
        this.handleClick = this.handleClick.bind(this);
    }
    flipCoin(){
        let srcIndex = Math.floor(Math.random() * this.props.coinSides.length);
//         let totalHeads = 0;
//         let totalTails = 0;

//   {srcIndex == 0 ? totalHeads = this.state.flipHead++ : totalTails  = this.state.flipTail++}
// this.state.flipTotal++;
    this.setState( st =>{
 
        return {
            activeSide : this.props.coinSides[srcIndex],
            flipTotal: st.flipTotal +1,
            flipHead: st.flipHead + (srcIndex === 0 ?  1 :0),
            flipTail: st.flipTail + (srcIndex ===  1 ? 1 :0)
        };
       
    });
    }
    handleClick(e) {
  this.flipCoin();
  
    }
    render() {
        return (
            <section className="Flipper-container">
                <h1>Let's Flip a Coin</h1>
                <Coin src={this.state.activeSide} />

                <p className="Flipper-info">
                    The coin was flipped <span className="Flipper-total"> {this.state.flipTotal}
                    </span> times.
        Head: <span className="Flipper-total"> {this.state.flipHead}
                    </span> times.
        Tails: <span className="Flipper-total"> {this.state.flipTail}
                    </span> times.


        </p>


                <button onClick={this.handleClick} className="Flipper-btn"> Flip!!! </button>
            </section>
        )
    }
}

export default Flipper;