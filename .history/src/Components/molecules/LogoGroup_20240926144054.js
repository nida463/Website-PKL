import React from 'react';
import Logo from '../atoms/Logo'; // Pastikan jalur ini benar

const LogoGroup = () => {
    const logos = [
        { src: "/img/Google.png", alt: "Google Logo" },
        { src: "/img/Nike.png", alt: "Nike Logo" },
        { src: "/img/Samsung.png", alt: "Samsung Logo" },
        { src: "/img/Apple.png", alt: "Apple Logo" },
        { src: "/img/Adidas.png", alt: "Adidas Logo" }
    ];

    return (
        <div className="logo-group">
            {logos.map((logo, index) => (
                <Logo key={index} src={logo.src} alt={logo.alt} />
            ))}
        </div>
    );
};

export default LogoGroup;
