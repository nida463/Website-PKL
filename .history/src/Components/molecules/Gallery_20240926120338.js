// Gallery.js
import React from 'react';
import './Gallery.css'; // CSS untuk Gallery
import GalleryCard from './GalleryCard';

const Gallery = () => {
    const projects = [
        { id: 1, title: 'Judul Proyek 1', subtitle: 'UI, Art Direction', image: '/img/Image1.png' },
        { id: 2, title: 'Judul Proyek 2', subtitle: 'UI, Art Direction', image: '/img/Image2.png' },
        { id: 3, title: 'Judul Proyek 3', subtitle: 'UI, Art Direction', image: '/img/Image3.png' },
        { id: 4, title: 'Judul Proyek 4', subtitle: 'UI, Art Direction', image: '/img/Image4.png' },
        { id: 5, title: 'Judul Proyek 5', subtitle: 'UI, Art Direction', image: '/img/Image5.png' },
        { id: 6, title: 'Judul Proyek 6', subtitle: 'UI, Art Direction', image: '/img/Image6.png' }
    ];

    return (
        <div className="gallery-container">
            <h2 className="latest-work">Karya Terbaru</h2>
            <div className="gallery-section">
                {projects.map(item => (
                    <GalleryCard key={item.id} src={item.image} alt={item.title} title={item.title} subtitle={item.subtitle} />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
