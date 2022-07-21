import React, {useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState('Enter Text Here');
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase","success")

  }

  const handleOnChange = (event) =>{
    setText(event.target.value)
  }
  return (
    <div>
      <div className="container" style={{color : props.mode==='dark' ? 'white' : 'black'}}>
        <h3>{props.heading}</h3>
        <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark' ? 'grey' : 'white ', color : props.mode==='dark' ? 'white' : 'black'}}></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      </div>
      <div className="container mt-2" style={{color : props.mode==='dark' ? 'white' : 'black'}}>
        <h4>Your Text Summary</h4>
        <p>{text.split(" ").length} Words, {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes for Read</p>
        <h5>Preview</h5>
        <p>{text.length>0? text : "Enter Something in the textbox anbove to preview it here"}</p>
      </div>
    </div>
  )
}
