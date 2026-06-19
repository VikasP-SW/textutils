import React, { useState } from 'react'





const TextForm = (props) => {

    const handleUpClick = () => {
        // console.log("Uppercase was clicked :" + text)
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
    }
    const handleLoClick = () => {
        // console.log("Lowercase was clicked :" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
        props.showAlert("Text Cleared", "success");
    }
    const handleCapitalizeClick = () => {
        let words = text.toLowerCase().split(" ");

        let newText = words.map((word) => {
            if (word.length === 0) return word;

            return word.charAt(0).toUpperCase() + word.slice(1);
        }).join(" ");

        setText(newText);
        props.showAlert("Converted to Capitalize Case", "success");
    }
    const handleSentenceCaseClick = () => {
        if (text.length === 0) return;

        let newText = text.charAt(0).toUpperCase() +
            text.slice(1).toLowerCase();

        setText(newText);
        props.showAlert("Converted to Sentence Case", "success");
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied Successfully", "success");
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/\s+/).join(" ");
        setText(newText);
        props.showAlert("Extra Spaces Removed", "success");
    }
    const handleReverseClick = () => {
        let newText = text.split("").reverse().join("");
        setText(newText);
        props.showAlert("Text Reversed Successfully", "success");

    }
    const handleRemoveNumbers = () => {
        let newText = text.replace(/[0-9]/g, "");
        setText(newText);
        props.showAlert("Numbers Removed Successfully", "success");
    }
    const handleRemoveSpecial = () => {
        let newText = text.replace(/[^a-zA-Z0-9\s]/g, "");
        setText(newText);
        props.showAlert("Special Characters Removed", "success");
    }
    const handleSpeak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        props.showAlert("Text Speech Started", "success");
    }
    const handleDownload = () => {
        const element = document.createElement("a");
        const file = new Blob([text], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "text.txt";
        document.body.appendChild(element);
        element.click();
        props.showAlert("File Downloaded Successfully", "success");
    }
    const handleOnChange = (event) => {
        // console.log("On Change")
        setText(event.target.value)

    }

    const [text, setText] = useState('');

    //text = "new text";// wrong way to change the state
    //setText = ("new text");// Correct way to change the state 

    return (
        <>
            <div className='container' style={{
                backgroundColor: props.theme,
                color:
                    props.theme === '#86efac' ||
                        props.theme === '#fdba74' ||
                        props.theme === '#7dd3fc' ||
                        props.theme === 'white'
                        ? 'black'
                        : 'white'
            }}>
                <h1
                    className="kaushan-font"
                    style={{
                        color: '#E61C69',
                        fontFamily: 'Kaushan Script, cursive',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}
                >
                    {props.heading}
                </h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                        style={{
                            backgroundColor: props.theme,
                            color:
                                props.theme === '#86efac' ||
                                    props.theme === '#fdba74' ||
                                    props.theme === '#7dd3fc' ||
                                    props.theme === '#f9a8d4' ||
                                    props.theme === 'white'
                                    ? 'black'
                                    : 'white',

                            border:
                                props.theme === '#86efac' ||
                                    props.theme === '#fdba74' ||
                                    props.theme === '#7dd3fc' ||
                                    props.theme === '#f9a8d4' ||
                                    props.theme === 'white'
                                    ? '1px solid rgba(0,0,0,0.2)'
                                    : '1px solid rgba(255,255,255,0.2)',

                            boxShadow: `
  0 4px 12px rgba(0,0,0,0.15),
  0 8px 25px rgba(0,0,0,0.10)
`,
                            transition: 'all 0.3s ease'
                        }}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2 mt-2" onClick={handleUpClick}>
                    Convert to Uppercase
                </button>

                <button className="btn btn-success mx-2 mt-2" onClick={handleLoClick}>
                    Convert to Lowercase
                </button>

                <button className="btn btn-danger mx-2 mt-2" onClick={handleClearClick}>
                    Clear Text
                </button>

                <button className="btn btn-warning mx-2 mt-2" onClick={handleCapitalizeClick}>
                    Capitalize Case
                </button>

                <button className="btn btn-info mx-2 mt-2" onClick={handleSentenceCaseClick}>
                    Sentence Case
                </button>

                <button className="btn btn-secondary mx-2 mt-2" onClick={handleCopyClick}>
                    Copy Text
                </button>

                <button className="btn btn-dark mx-2 mt-2" onClick={handleExtraSpaces}>
                    Remove Spaces
                </button>

                <button className="btn btn-primary mx-2 mt-2" onClick={handleReverseClick}>
                    Reverse
                </button>

                <button className="btn btn-success mx-2 mt-2" onClick={handleRemoveNumbers}>
                    Remove Numbers
                </button>

                <button className="btn btn-danger mx-2 mt-2" onClick={handleRemoveSpecial}>
                    Remove Special Characters
                </button>

                <button className="btn btn-warning mx-2 mt-2" onClick={handleSpeak}>
                    Text to Speech
                </button>

                <button className="btn btn-info mx-2 mt-2" onClick={handleDownload}>
                    Download TXT
                </button>
            </div>

            <div
                className="container my-3"
                style={{
                    color:
                        props.theme === '#86efac' ||
                            props.theme === '#fdba74' ||
                            props.theme === '#7dd3fc' ||
                            props.theme === '#f9a8d4' ||
                            props.theme === 'white'
                            ? 'black'
                            : 'white'
                }}
            >
                <h1
                    style={{
                        fontFamily: 'Kaushan Script, cursive',
                        color: '#E61C69',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}
                >
                    Your text summary
                </h1>
                <p>
                    {text.trim() === "" ? 0 : text.trim().split(/\s+/).length}
                    words and {text.replace(/\s/g, "").length} characters
                </p>
                <p>
                    {0.008 * (text.trim() === "" ? 0 : text.trim().split(/\s+/).length)}
                    {" "}Minutes read
                </p>
                <h2
                    style={{
                        fontFamily: 'Kaushan Script, cursive',
                        color: '#E61C69',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                    }}
                >
                    Preview
                </h2>

                <div
                    className="p-3 rounded"
                    style={{
                        backgroundColor: props.theme,
                        color:
                            props.theme === '#86efac' ||
                                props.theme === '#fdba74' ||
                                props.theme === '#7dd3fc' ||
                                props.theme === '#f9a8d4' ||
                                props.theme === 'white'
                                ? 'black'
                                : 'white'
                    }}
                >
                    {text.length > 0
                        ? text
                        : "Enter some text above to preview it"}
                </div>

                <p>Lines: {text === "" ? 0 : text.split("\n").length}</p>
                <p>Characters (without spaces): {text.replace(/\s/g, "").length}</p>
            </div>
        </>
    )

}

export default TextForm
