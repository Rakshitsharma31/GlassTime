import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./Carousel.css";

const carousel = () => {
    return (
            <Carousel autoPlay interval="5000" transitionTime="5000" showThumbs={false} >
                <div>
                    <img src="https://images.pexels.com/photos/262347/pexels-photo-262347.jpeg" />
                    <p className="legend">glass</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/287263/pexels-photo-287263.jpeg" />
                    <p className="legend">glass</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/989941/pexels-photo-989941.jpeg" />
                    <p className="legend">glass</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/1407278/pexels-photo-1407278.jpeg" />
                    <p className="legend">Legend 4</p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/239919/pexels-photo-239919.jpeg" />
                    <p className="legend">Legend 5</p>
                </div>
            </Carousel>
            
  );
};

export default carousel;
