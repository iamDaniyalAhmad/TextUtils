import React, { useState } from "react";

export default function TextForm(prop) {

  const handleUpClick=()=>{
    // console.log("You clicked on UpperCase");
    let newText = text.toUpperCase();
    setText(newText);
    prop.showAlert("Converted to UpperCase","success");
  }
  const handleLowClick=()=>{
    // console.log("You clicked on UpperCase");
    let newText = text.toLowerCase();
    setText(newText);
    prop.showAlert("Converted to lowerCase","success");
  }
  const changeUpClick = (event) =>{
    // console.log("On Change Fired");
    setText(event.target.value);
  }

  const handleCopy = () =>{
    let newText = document.getElementById("exampleFormControlTextarea1");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    document.getSelection().removeAllRanges();
    prop.showAlert("Copy to Clipboard","success");
  }

  const clear = () =>{
    let newText = "";
    setText(newText);
    prop.showAlert("Text Cleared","success");
  }

  const extraSpace = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    prop.showAlert("Extra Spaces Removed","success");
  }


  const [text, setText] = useState("");
  return (
    <>
      <div className="container my-3" style={{color: prop.mode==='light'?'Black':'White'}}>
        <h1>{prop.heading}</h1>
        <div className="form-group">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            onChange={changeUpClick}
            placeholder="Enter text here"
          ></textarea>
        </div>
        <button disabled={text.length===0} className={`btn btn-${prop.mode==='light'?'primary':'warning'} mx-1 my-1`} onClick={handleUpClick}>UpperCase</button>
        <button disabled={text.length===0} className={`btn btn-${prop.mode==='light'?'primary':'warning'} mx-1 my-1`} onClick={handleLowClick}>LowerCase</button>
        <button disabled={text.length===0} className={`btn btn-${prop.mode==='light'?'primary':'warning'} mx-1 my-1`} onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className={`btn btn-${prop.mode==='light'?'primary':'warning'} mx-1 my-1`} onClick={clear}>Clear Text</button>
        <button disabled={text.length===0} className={`btn btn-${prop.mode==='light'?'primary':'warning'} mx-1 my-1`} onClick={extraSpace}>Remove Space</button>
      </div>
      <div className="container" style={{color: prop.mode==='light'?'Black':'White'}}>
        {/* First Method  */}
        {/* <p>Words {text.length>0?text.split(/ \w/).length:"0"} and Characters {text.length}</p> */}
        {/* Another Method */}
        <p>Words {text.split(/\s+/).filter((e)=>{return e.length!==0}).length} and Characters {text.length}</p>
        <h3 className="my-2">Preview:</h3>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
      </div>

    </>
  );
}
