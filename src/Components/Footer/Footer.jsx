import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <p>Elaborado por:</p>
            <a>
                <p>Kevin Andres Moreno Perez</p>
            </a>
            <a            >
                <p>Juan David Ramirez Alvarez</p>
            </a>
            <a
                href="https://www.uniamazonia.edu.co/inicio/index.php/es/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'inherit', cursor: 'pointer' }}
            >
                <p>Universidad de la Amazonia</p>
            </a>
            <p>2025</p>
        </footer>
    )
}

export default Footer