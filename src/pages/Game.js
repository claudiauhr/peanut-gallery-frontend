// import Header from "../components/Header";
// import JoinGame from "../components/JoinGame";
// import StartGame from "../components/StartGame";
// import HostDisplay from "../components/HostDisplay";
// import PlayerDisplay from "../components/PlayerDisplay";
import { useState} from "react";

import socketIO from 'socket.io-client';
import JoinGame from '../components/JoinGame';

const socket = socketIO.connect('http://localhost:4000');
socket.on('user connect', (message) =>{
    console.log('connected');
})

function Game () {
    const SERVER_URL = {
        isLoggedIn: true
        }
    const fetch = (url) => {
        return url;
        }
    const results = fetch(SERVER_URL)

    console.log(results.isLoggedIn)

    const (results.isLoggedIn) === props.isLoggedIn;
        if (isLoggedIn === true) {
            return <StartGame />;
        } else {
            return <JoinGame />;
        }

    const beginGame = props.beginGame;
    if ({<JoinGame />}) {
        return <PlayerDisplay />
    } else {
        return <HostDisplay />
    }
}

export default Game;

