import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

export default function ImageGrid() {
    return (
            <div className="image-gallery">
                <a href="/" className="grid-image">
                    <StaticImage src="../images/item-01.png" alt="No 9 Boards logo" />
                    <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>Mr. Hare</h2>
                            <span></span>
                            <p>Indian ink - pencil</p>
                            <p>2019</p>
                        </div>
                    </div>
                </a>
                <a href="/" className="grid-image">
                    <StaticImage src="../images/item-02.png" alt="No 9 Boards logo" />
                    <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>Hipster Skeleton</h2>
                            <span></span>   
                            <p>Indian ink - pencil</p>
                            <p>2019</p>
                        </div>
                    </div>
                </a>
                <a href="/" className="grid-image">
                    <StaticImage src="../images/item-03.png" alt="No 9 Boards logo" />
                    <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>Bottled Up</h2>
                            <span></span>
                            <p>Indian ink - pencil</p>
                            <p>2018</p>
                        </div>
                    </div>
                </a>
                <a href="/" className="grid-image">
                    <StaticImage src="../images/item-04.png" alt="No 9 Boards logo" />
                    <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>Forest in a Bottle</h2>
                            <span></span>   
                            <p>Acrylic pen - Indian ink</p>
                            <p>2019</p>
                        </div>
                    </div>
                </a>
                <a href="/" className="grid-image">
                    <StaticImage src="../images/item-05.png" alt="No 9 Boards logo" />
                    <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>Clockwork</h2>
                            <span></span>  
                            <p>Acrylic pen - Indian ink</p>
                            <p>2018</p>
                        </div>
                    </div>
                </a>
                <a href="/" className="grid-image">
                    <StaticImage src="../images/item-06.png" alt="No 9 Boards logo" />
                    <div className="grid-image-overlay">
                        <div className="overlay-text">
                            <h2>Burnout</h2>
                            <span></span> 
                            <p>Indian ink - pencil</p>
                            <p>2019</p>
                        </div>
                    </div>
                </a>
            </div>
    )
}
