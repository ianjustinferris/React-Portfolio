import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer() {
    return (
        <Navbar fixed="bottom" >
            <div className='Footer'>
                <a href="https://github.com/ianjustinferris" target="_blank" rel="noreferrer"
                ><i class="fa-brands fa-github"></i></a>

                <a href="https://codepen.io/IanJustinFerris" target="_blank" rel="noreferrer"
                ><i class="fa-brands fa-codepen"></i></a>

                <a
                    href="https://www.linkedin.com/in/ian-ferris-114b3633/"
                    target="_blank" rel="noreferrer"
                ><i class="fa-brands fa-linkedin"></i></a>
                <a href="mailto: ianjustinferris@gmail.com" target="blank" rel="noreferrer"><i class="fa-solid fa-at"></i></a>
            </div>
        </Navbar>
    );
}