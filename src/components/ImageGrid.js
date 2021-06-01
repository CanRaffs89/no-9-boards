import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function ImageGrid() {
    return (
            <div className="image-gallery">
                <a href="/" className="grid-image">
                    <StaticImage src="../images/thumbs/bottled-up.png" alt="bottle" />
                    <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>Bottled Up</h2>
                            <span></span>
                            <p>Indian Ink - Pencil</p>
                            <p>2018</p>
                        </div>
                    </div>
                </a>
                <a href="/" className="grid-image">
                    <StaticImage src="../images/thumbs/clockwork.png" alt="clockwork" />
                    <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>Clockwork</h2>
                            <span></span>   
                            <p>Indian Ink - Pencil</p>
                            <p>2018</p>
                        </div>
                    </div>
                </a>
                <a href="/" className="grid-image">
                    <StaticImage src="../images/thumbs/forest-bottle.png" alt="forest" />
                    <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>Forest in a Bottle</h2>
                            <span></span>
                            <p>Acrylic Pen - Pencil</p>
                            <p>2019</p>
                        </div>
                    </div>
                </a>
                <a href="/" className="grid-image">
                    <StaticImage src="../images/thumbs/monsters.png" alt="monsters" />
                    <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>Here Be Monsters</h2>
                            <span></span>   
                            <p>Acrylic Pen - Indian Ink</p>
                            <p>2019</p>
                        </div>
                    </div>
                </a>
                <a href="/" className="grid-image">
                    <StaticImage src="../images/thumbs/hare.png" alt="hare" />
                    <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>Mr. Hare</h2>
                            <span></span>  
                            <p>Indian Ink - Pencil</p>
                            <p>2019</p>
                        </div>
                    </div>
                </a>
                <a href="/" className="grid-image">
                    <StaticImage src="../images/thumbs/burnout.png" alt="burnout" />
                    <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>Burnout</h2>
                            <span></span> 
                            <p>Indian Ink - Pencil</p>
                            <p>2019</p>
                        </div>
                    </div>
                </a>
                <a href="/" className="grid-image">
                    <StaticImage src="../images/thumbs/hipster-skeleton.png" alt="skeleton" />
                    <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>Hipster Skeleton</h2>
                            <span></span> 
                            <p>Indian Ink - Pencil</p>
                            <p>2019</p>
                        </div>
                    </div>
                </a>
                <a href="/" className="grid-image">
                    <StaticImage src="../images/thumbs/zen-mountains.png" alt="mountain" />
                    <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>Zen Mountains</h2>
                            <span></span> 
                            <p>Acrylic Pen - Pencil</p>
                            <p>2018</p>
                        </div>
                    </div>
                </a>
            </div>
    )
}


