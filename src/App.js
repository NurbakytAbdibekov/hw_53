import React, { Component } from 'react';
import RandomNumber from './Components/RandomNumber';
import './App.css';

class App extends Component {
    state = {
        numbers: []
    };

    render() {
        return (
            <div className="App" className="container">
                <div className="d-flex justify-content-center">
                    <div className='button'>
                        <button onClick={() => this.buttonClick()}>
                            <p>New numbers</p>
                        </button>
                    </div>
                </div>

                <div className="d-flex justify-content-center">
                    <div className="row">
                        <RandomNumber number={this.state.numbers[0]} />
                        <RandomNumber number={this.state.numbers[1]} />
                        <RandomNumber number={this.state.numbers[2]} />
                        <RandomNumber number={this.state.numbers[3]} />
                        <RandomNumber number={this.state.numbers[4]} />
                    </div>
                </div>
            </div>
        );
    }



    newArray = () => {
        let numbers = [];
        for (let i = 0; i < 5; i++) {
            let number = Math.floor(Math.random() * 31) + 5;
            if (numbers.indexOf(number) > -1){
                i-=1
            }
            else {
                numbers.push(number)
            }
        }
        return numbers.sort(function (a, b) {
            return a-b
        });

    };


    buttonClick = () => {
        let newState = {...this.state};
        newState.numbers = this.newArray();
        this.setState(newState);
    }
}


export default App;
