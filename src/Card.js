import React from "react";
import "./Newsp.css";
const Card = (props) => {
    return (
        <div class="card">
                <div class="card_img">
                    <img src={props.imgsrc} alt=""></img>
                </div>
                <div class="card_body">
                    <h2 class="card_title">{props.title}</h2>
                    <p>{props.content}</p>
                    <p class="card_author">by: {props.author}</p>
                    <a href={props.link} target="_blank" class="read_more">Read article</a>
                </div>
            </div>
        );
};
export default Card;