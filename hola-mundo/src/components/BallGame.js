import React, {Component} from 'react';
import '../BallGame.css';
import Balls from '../models/balls';

class BallGame extends React.Component {

    componentDidMount(){
        var balls = new Balls;
        var ballsHtml = balls.generateBalls();
        var ballBoard = document.getElementById('ball-board');        
        ballBoard.innerHTML = ballsHtml;

        var b = document.getElementsByClassName('ball');       
    }

    render() {
        return (
            <div>
                <header>
                    <div>Puntos</div>
                    <div>Tiempo</div>
                </header>
                <div id="ball-board"></div>
                <div id="basket-board"></div>
                <footer>
                    <div>Vidas</div>
                </footer>
            </div>
        );
      }
}

export default BallGame;