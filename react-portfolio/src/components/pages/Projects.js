import React from 'react';
import Game from '../../assets/images/game.png'
import Weather from '../../assets/images/weather.png'
import Wildlife from '../../assets/images/wildlifeCensus.png'
import Daily from '../../assets/images/Daily.png'
import JATE from '../../assets/images/JATE.png'
import Note from '../../assets/images/Note.png'

export default function Projects() {
    return (
        <div className='Projects'>

            <h1>PROJECTS</h1>

            <div id="box1">
                <a href='https://nameless-journey-91177.herokuapp.com/'><img id="gameSS" src={Game} alt='screenshot'></img></a>
                <div id="project1Text">
                    <a href='https://github.com/xleonard1/Game-Project-2/'><h1 id="project1Title">NINJA-GO</h1></a>
                    <p id="project1Details">PHASER.JS / EXPRESS / SQL</p>
                </div>
            </div>


            <div id="box2">
                <a href='https://mdschenck.github.io/Wildlife-Census/'><img id="wildLifeSS" src={Wildlife} alt='screenshot'></img></a>
                <div id="project2Text">
                    <a href='https://github.com/mdschenck/Wildlife-Census/'><h1 id="project2Title">WILD_LIFE CENSUS</h1></a>
                    <p id="project2Details">WIKIPEDIA API / MAPBOX / GBIF</p>
                </div>
            </div>

            <div id="box3">
                <a href='https://ianjustinferris.github.io/Weather_Dashboard/'><img id="gameSS" src={Weather} alt='screenshot'></img></a>
                <div id="project3Text">
                    <a href='https://github.com/ianjustinferris/Weather_Dashboard/'><h1 id="project3Title">WEATHER_DASHBOARD</h1></a>
                    <p id="project3Details">WEATHER API / MOMENT.JS</p>
                </div>
            </div>

            <div id="box4">
                <a href='https://ianjustinferris.github.io/Daily_Planner/'><img id="Daily" src={Daily} alt='screenshot'></img></a>
                <div id="project4Text">
                    <a href='https://github.com/ianjustinferris/Daily_Planner'><h1 id="project4Title">DAILY_PLANNER</h1></a>
                    <p id="project4Details">LOCAL STORAGE / JAVASCRIPT</p>
                </div>
            </div>


            <div id="box5">
                <a href='https://aqueous-beyond-75853.herokuapp.com/'><img id="JATE" src={JATE} alt='screenshot'></img></a>
                <div id="project5Text">
                    <a href='https://github.com/ianjustinferris/Text-Editor'><h1 id="project5Title">TEXT_EDITOR</h1></a>
                    <p id="project5Details">PWA / EXPRESS / CODE-MIRROR</p>
                </div>
            </div>

            <div id="box6">
                <a href='https://note-taker-deploy-ijf.herokuapp.com/'><img id="Note" src={Note} alt='screenshot'></img></a>
                <div id="project6Text">
                    <a href='https://github.com/ianjustinferris/Note_Taker'><h1 id="project6Title">NOTE_TAKER</h1></a>
                    <p id="project6Details">EXPRESS / JAVASCRIPT</p>
                </div>
            </div>

        </div>
    )
};