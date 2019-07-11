import React from "react"; 

function InnerSquare(props) {
    return (
        <div className="innersquare">
            <button className={["innersquarebutton", props.active == props.index ? "innersquareactive" : ""].join(" ")} onClick={() => {props.activeChange(props.index)}}>
                {props.value != 0 ? props.value : ""}
            </button>
        </div>
    )
} 


function OuterSquare(props) {
    return (
        <div className="outersquare">
            <div className="outersquarerow">
                <InnerSquare value={props.nums[0]} index={props.indexes[0]} activeChange={props.activeChange} active={props.active}></InnerSquare>
                <InnerSquare value={props.nums[1]} index={props.indexes[1]} activeChange={props.activeChange} active={props.active}></InnerSquare>
                <InnerSquare value={props.nums[2]} index={props.indexes[2]} activeChange={props.activeChange} active={props.active}></InnerSquare>
            </div>
            <div className="outersquarerow">
                <InnerSquare value={props.nums[3]} index={props.indexes[3]} activeChange={props.activeChange} active={props.active}></InnerSquare>
                <InnerSquare value={props.nums[4]} index={props.indexes[4]} activeChange={props.activeChange} active={props.active}></InnerSquare>
                <InnerSquare value={props.nums[5]} index={props.indexes[5]} activeChange={props.activeChange} active={props.active}></InnerSquare>
            </div>
            <div className="outersquarerow">
                <InnerSquare value={props.nums[6]} index={props.indexes[6]} activeChange={props.activeChange} active={props.active}></InnerSquare>
                <InnerSquare value={props.nums[7]} index={props.indexes[7]} activeChange={props.activeChange} active={props.active}></InnerSquare>
                <InnerSquare value={props.nums[8]} index={props.indexes[8]} activeChange={props.activeChange} active={props.active}></InnerSquare>
            </div>
        </div>
    );
}


function Board(props) {

    function generateInner(i) {
        const oneBegin = Math.floor(i/ 3) * 27 + (i % 3) * 3; 
        const oneEnd = Math.floor(i/3) * 27 + (i % 3) * 3 + 3;
        
        const twoBegin = Math.floor(i/3) * 27 + (i % 3) * 3 + 9;
        const twoEnd = Math.floor(i/3) * 27 + (i % 3) * 3 + 12;

        const threeBegin = Math.floor(i/3) * 27 + (i % 3) * 3 + 18;
        const threeEnd = Math.floor(i/3) * 27 + (i % 3) * 3 + 21;

        const one = props.board.slice(oneBegin, oneEnd);
        const two = props.board.slice(twoBegin, twoEnd); 
        const three = props.board.slice(threeBegin, threeEnd); 
        
        const indexNum = [];
        for (let i = oneBegin; i < oneEnd; i++) {
            indexNum.push(i); 
        }

        for (let i = twoBegin; i < twoEnd; i++) {
            indexNum.push(i); 
        }

        for (let i = threeBegin; i < threeEnd; i++) {
            indexNum.push(i); 
        }

        const squareNums = [...one, ...two, ...three]; 
        return <OuterSquare indexes={indexNum} 
                            nums={squareNums} 
                            activeChange={props.activeChange}
                            active={props.active}
                            ></OuterSquare>;
    }

    return (
        <div className="board">
            <div className="boardrow">
                {generateInner(0)}
                {generateInner(1)}
                {generateInner(2)}
            </div>
            <div className="boardrow">
                {generateInner(3)}
                {generateInner(4)}
                {generateInner(5)}
            </div>
            <div className="boardrow">
                {generateInner(6)}
                {generateInner(7)}
                {generateInner(8)}
            </div>
        </div>
    );
}

export default Board; 