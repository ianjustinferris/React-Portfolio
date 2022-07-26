import React from 'react';
import ResumeDL from '../../assets/images/RESUME (3).pdf'

export default function Resume() {
    return (
        <div className='Resume'>
            <h1>RESUME</h1>
            <a href={ResumeDL} download><i class="fa-solid fa-file-user"></i></a>
            <ul>
                <h2>- HTML 5</h2>
                <h2>- CSS 3</h2>
                <h2>- JAVASCRIPT</h2>
                <h2>- SQL</h2>
                <h2>- NoSQL</h2>
                <h2>- PHASER.JS</h2>
                <h2>- J QUERY</h2>
                <h2>- EXPRESS</h2>
                <h2>- REACT</h2>
                <h2>- MATLAB</h2>
            </ul>
        </div>
    );
}
