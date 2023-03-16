import React from "react"

function Info() {
    return (
        <div className="container">
            <img className="profile-pic" src="./images/wojkek.jpg" />
            <h1>Wojciech Różaniecki</h1>
            <h2>(future) Frontend Dev</h2>
            <p>wojtek3204@wp.pl</p>
            <div className="btn-container">
                <button id="email-btn">Email</button>
                <a 
                    id="linkedin-link"
                    href="https://www.linkedin.com/in/wojciech-różaniecki-246622207/"
                    target="_blank"
                >Linkedin</a>
            </div>
        </div>
    )
}

function About() {
    return (
        <div className="secondary-container">
            <h3>About</h3>
            <p>Info working</p>
        </div>
    )
}

function Interests() {
    return (
        <div className="secondary-container">
            <h3>Interests</h3>
            <p>Info working</p>
        </div>
    )
}

function Footer() {
    return (
        <div className="container">
            <p>Info working</p>
        </div>
    )
}


export default function App() {
    return (
        <div className="app-container">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}
