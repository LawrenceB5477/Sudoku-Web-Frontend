import React from "react";

function ControlButton(props) {
    return (
        <button className="controlsbutton" onClick={() => {props.buttonPress(props.control)}}>
            {props.control != 10 ? props.control : "Cl"}
        </button>
    );
}


function Controls(props) {
    return (
        <div className="controls">
            <h1>Controls</h1>
            <div className="controlsrow">
                <ControlButton control={1} buttonPress={props.buttonPress}></ControlButton>
                <ControlButton control={2} buttonPress={props.buttonPress}></ControlButton>
                <ControlButton control={3} buttonPress={props.buttonPress}></ControlButton>
                <ControlButton control={4} buttonPress={props.buttonPress}></ControlButton>
                <ControlButton control={5} buttonPress={props.buttonPress}></ControlButton>
            </div>
            <div className="controlsrow">
                <ControlButton control={6} buttonPress={props.buttonPress}></ControlButton>
                <ControlButton control={7} buttonPress={props.buttonPress}></ControlButton>
                <ControlButton control={8} buttonPress={props.buttonPress}></ControlButton>
                <ControlButton control={9} buttonPress={props.buttonPress}></ControlButton>
                <ControlButton control={10} buttonPress={props.buttonPress}></ControlButton>
            </div>
        </div>
    );
}

export default Controls; 