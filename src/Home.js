import React, { Component } from 'react';
import { Button, Menu, MenuItem } from 'react-foundation';

var title1 = {
    fontWeight: 300
}

var introText = {
    fontWeight: 300
}

function HomeIntro(props){
    return(
        <div className="HomeIntro">
            <h1 style={title1}>PLAYING BASEMENTS</h1>            
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                 laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <p style={introText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                  non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Button className="Button">GET THE ALBUM</Button>
        </div>
    );
}

function HomeMenu(props){
    return(
        <div className="HomeMenu">
            <ul>
                <li><a>Music</a></li>
                <li>|</li>
                <li><a>Shows</a></li>
                <li>|</li>
                <li><a>About</a></li>                
                <li>|</li>
                <li><a>Photos</a></li>
            </ul>
        </div>
    );
}

var title = {
    color: 'white',
    backgroundColor: 'black',
    fontWeight: 300,
    
}

function HomeTitle(props) {
    return (
        <div className="HomeTitle">
            <h1 style={title}>THE BAND ALEXANDER</h1>
        </div>
    );
}

export {HomeIntro, HomeMenu, HomeTitle};