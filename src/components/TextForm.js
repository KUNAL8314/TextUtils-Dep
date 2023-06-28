import React, { useState } from 'react'


let status = false;
export default function Textform(props) {
    const handleUpClick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase","success");
    }
    const handleClear=()=>{
        setText("");
        props.showAlert("Cleared the Text","success");
    }
    const handleCopy=()=>{
        let text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied to Clipboard","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }
    const handleOnChange = (event) => {
        if (status === false) {
            let string = event.target.value;
            event.target.value = string[string.length - 1];
            status = true;
        }
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div className={`container my-3 text-${props.mode==='dark'?'white':'black'}`}>
                <form>
                    <h2>{props.heading}</h2>
                    <div className="mb-3">
                        <textarea value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea>
                    </div>
                </form>
                <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleClear}>Clear</button>
                <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-3 my-1" disabled={text.length===0} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className={`container my-3 text-${props.mode==='dark'?'white':'black'}`}>
                <h2>Your text summary</h2>
                <p><strong>{text.split(" ").filter((element)=>{return element.length!==0}).length}</strong> words and <strong>{text.length}</strong> characters</p>
                <p><strong>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}</strong> Minutes to read</p>
                <h2>Preview</h2>
                <p>{text==="Enter text here"?"Nothing to preview":text}</p>
            </div>
        </>
    )
}
