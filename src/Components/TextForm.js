import React, {useState} from 'react'

export default function TextForm(props) {
    
    const [text, setText] = useState("");

    const handleClear = () => {
        setText("")
    }
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }

    const onChangeFunc = (event) => {
        console.log("onChangeFunc clicked");
        setText(event.target.value)
    }
  return (
    <div className="container my-4">
        <div className='container'>
            <h1>Enter your text to analyze below:</h1>
            <textarea name="" style={{backgroundColor: props.mode==='dark'?'grey':'white'}} value={text} onChange={onChangeFunc} id="" cols="100" rows="8
            "></textarea> <br />
            <button onClick={handleUpClick} className={`btn mx-3 btn-outline-${props.mode=== 'dark'?'light':'dark'}`}>Click for Uppercase</button>
            <button onClick={handleLowClick} className={`btn mx-3 btn-outline-${props.mode=== 'dark'?'light':'dark'}`}>Click for Lowercase</button>
            <button onClick={handleClear} className={`btn mx-3 btn-outline-${props.mode=== 'dark'?'light':'dark'}`}>Clear</button>


            <h3>Your text preview:</h3>
            <p my-3>{text}</p>
            <p>your text has {text.length} characters and {text.split(" ").length - 1} words</p>
        </div>
    </div>
  )
}
