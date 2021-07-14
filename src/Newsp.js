import React from "react";
import "./Newsp.css";
import Card from "./Card.js";
import Ndata from "./Ndata.js";

const News = () => {
    return (<div className="bg">
        <div class="container">
        <div class="grid">
            {Ndata.map((val) =>{
    return(
        <Card 
                imgsrc={val.imgsrc}
                title={val.title}
                content={val.content}
                author={val.author}
                link={val.link}
            />
    );
})};
        </div>
    </div>
    </div>
);
};
export default News;