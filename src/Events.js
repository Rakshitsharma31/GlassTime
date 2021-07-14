import React from "react";
import "./Events.css";
import Ep from "./Ep.js";
import Edata from "./Edata.js";
const Events = () => {
    return (<div className="bg">
        <div class="page-container">
  
        <div class="events-container module">
          <h2>Events</h2>
          <ul class="events-list">
          {Edata.map((val) =>{
    return(
        <Ep
                imgsrc={val.imgsrc}
                title={val.title}
                date={val.date}
                content={val.content}
                link={val.link}
            />
    );
})};
          </ul>
        </div>
      
      </div>
      </div>
    );
};
export default Events;