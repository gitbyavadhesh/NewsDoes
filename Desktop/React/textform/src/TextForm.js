import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText);
    }
     const handleLowClick = ()=>{
        console.log("Lowercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handelOnChange = (event)=>{
        console.log("on change");
        setText(event.target.value);
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    // text ="new text";
    // setText("new text");
    return (
      <>
    <div className='container'>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handelOnChange} id="myText" rows="8"></textarea>
</div> 
    <button className="btn primary mx-1" onClick={handleUpClick} style={{background: "blue"}}>convert to UpperCase</button>
    <button className="btn primary mx-1" onClick={handleLowClick} style={{background: "green"}}>convert to LowerCase</button>
    </div>
    <div className="container my-2">
      <h2>your text summary</h2>
      <p>{text.split(" ").length} worda and {text.length} characters</p>
      <p><b>{0.008 * text.split(" ").length}: Minutes to read its</b></p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  )
}
