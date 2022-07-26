import React from 'react';
import portrait from '../../assets/images/headshotBW.png'

export default function About() {
    return (
        <div className="About">
            <h1 className='aboutHeader'>ABOUT</h1>
            <img className='portrait animate__animated animate__fadeInUpBig' src={portrait} alt="portrait"></img>
            <h2 className='aboutText'> A background in Engineering and Art, I'm looking to integrate those skills into the world of Web-Development. Most recently I've been
                interested in Machine Learning applications as they relate to how we interact with the world on a daily basis.</h2>
        </div>
    )
}
