import React from "react";
import "./Events.css";
const Ep = (props) => {
    return (
            <li>
              <div class="event-header">
                <div class="event-icon">
                  <img src={props.imgsrc} alt="" />
                </div>
                <div class="event-details">
                  <div class="event-title"><a href="#">{props.title}</a></div>
                  <div class="event-date">{props.date}</div>
                  <div className="cont">
                  <p>{props.content}</p>
                    <a href={props.link} target="_blank" >More Info</a>
                  </div>
                </div>
              </div>
            </li>
    );
};
export default Ep;