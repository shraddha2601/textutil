import React, {useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState('Enter Text Here');
  const handleUpClick = () =>{
    // console.log("UpperCase Was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }

  const handleOnChange = (event) =>{
    // console.log("on Change");
    setText(event.target.value)
  }
  // setText("New Text");       
  return (
    <div>
      <div className="container">
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      </div>
      <div className="container mt-2">
        <h4>Your Text Summary</h4>
        <p>{text.split(" ").length} Words, {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes for Read</p>
        <h5>Preview</h5>
        <p>{text}</p>
      </div>
    </div>
  )
}
