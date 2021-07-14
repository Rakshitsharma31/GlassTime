import React, { Component } from 'react';
import "./Home.css";
import Frame from "./Frame.js";
import Card from "./Card.js";
import Carousel from "./Carousel.js";
import Ndata from "./Ndata.js";
const Home = () => {
    return (<div className="cat">
        <Carousel/>
        <div className="full"><h1>Magazines</h1>
        <Frame/>
        </div>
        <div className="full"><h1>News</h1>
        <div class="container">
        <div class="grid">
            <Card
            imgsrc={Ndata[1].imgsrc}
            title={Ndata[1].title}
            content={Ndata[1].content}
            author={Ndata[1].author}
            link={Ndata[1].link}
            />
            <Card
            imgsrc={Ndata[2].imgsrc}
            title={Ndata[2].title}
            content={Ndata[2].content}
            author={Ndata[2].author}
            link={Ndata[2].link}
            />
            <Card
            imgsrc={Ndata[3].imgsrc}
            title={Ndata[3].title}
            content={Ndata[3].content}
            author={Ndata[3].author}
            link={Ndata[3].link}
            />
        </div>
        </div>
        </div>
        <div className="about">
        <h1>About Glass Time</h1>
        <div className="in">
        <p>GLASS TIME is a publishing company, managed by a highly experienced editorial and administrative staff. 
        It has a dedicated and responsible team for providing quality journals and related services to its readers. 
        <br/>
        The company publishes GLASS TIME which is the fastest growing top-notch journal of India for the global glass industry. 
        <br/>It is published quarterly and circulated among glass manufacturers, glass processors, glass-machinery &<br/> tool manufacturers, art glass processors, glass dealers, architects, builders, aluminium fabricators, interior decorators and the automobile industry across the globe.
        <br/>GLASS TIME e-magazine, the first glass-related e-magazine of India, is also available online and on mobile phone, free of cost at http://www.glasstime.in</p>
        </div>
        </div>
    </div>
);
};
export default Home;