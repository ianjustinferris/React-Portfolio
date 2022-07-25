import React from 'react';
import portrait from '../../assets/images/headshot.png'

export default function About() {
    return (
        <div className="About">
            <div className='aboutWrapper'>
                <h1>ABOUT</h1>
                <img className='portrait' src={portrait} alt='head-shot'></img>
                <p id="aboutText">
                    A background in Engineering and Art, I'm looking to integrate those skills into the world of Web-Development. Most recently I'm
                    interested Machine Learning applications as it relates how we interact with the world on a daily basis.
                </p>
            </div>
        </div>
    );
}
