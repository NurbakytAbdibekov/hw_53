import React, { Component } from 'react';
import './RandomNumber.css';

class RandomNumber extends Component {
    render() {
        return (
            <div className="random-number">
                <p>{this.props.number}</p>
            </div>
        )
    }


}

export default RandomNumber;