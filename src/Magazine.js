import React from "react";
import "./Magazine.css";
import Frame from "./Frame.js"
const Magazine = () => {
    return (<div className="bg">
        <div className="full"><h1>Magazines</h1>
        <Frame/>
        <div class="grid">
        <div class="card">
            <div class="card_img">
                <img src="https://i.ibb.co/fXcxr0D/mg.png" alt="magazine"></img>
            </div>
            <div class="card_body">
                <h2 class="card_title">Vol-11 | Issue-4 | Dec 19-Feb 20</h2>
                <a href="https://drive.google.com/file/d/16cI_zhQcTMKlLksEcvH7IOsmlFbdkwEA/view?usp=sharing" target="_blank" class="read_more">Download PDF</a>
            </div>
        </div>
        </div>
        </div>
    </div>
);
};
export default Magazine;