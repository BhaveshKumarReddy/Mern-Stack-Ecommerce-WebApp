import React, { useEffect, useRef, useState } from 'react';
import './Voice.css';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { search } from './actions/searchAction';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
 
function Voice() {

  const history = useHistory();
  const dispatch = useDispatch();

  const commands = [
    {
      command: "search * items",
      callback: (item) => {
        console.log(item);
        dispatch(search(item));
        history.push("/searchres");
      }
    },
    {
      command: "open *",
      callback: (website) => {
        console.log(website);
        switch (website) {
          case "contacts":
            history.push("/contact");
            break;
          case "login":
            history.push("/login");
            break;
          case "sign in":
            history.push("/login");
            break;
          case "account":
            history.push("/login");
            break;
          case "car":
            history.push("/checkout");
            break;
          case "cart":
            history.push("/checkout");
            break;
          case "card":
            history.push("/checkout");
            break;
          case "order":
            history.push("/myorders");
            break;
          case "orders":
            history.push("/myorders");
            break;
          default:
            history.push("/"+website);
            break;
        }
      },
    },
    {
      command: "change background colour to *",
      callback: (color) => {
        document.body.style.background = color;
      },
    },
    {
      command: "reset",
      callback: () => {
        handleReset();
      },
    }
  ];

  const {transcript, resetTranscript } = useSpeechRecognition({commands});
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);

  const handleListing = () => {
    console.log("listening");
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };

  const stopHandle = () => {
    console.log("off");
    console.log(transcript);
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };

  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };

  const onAndOff = () => {
    new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a').play();
    if(isListening) 
        stopHandle();
    else 
        handleListing();
  }

  return (
      <div onClick={onAndOff} className="mic-main-box" ref={microphoneRef} >
        <div >
           <span className={`material-symbols-outlined mic-box ${isListening ? `mic-on` : `mic-off`}`}>
               {isListening ? "mic" : "mic_off"}
           </span>
        </div>
      </div>
  )
}

export default Voice;

/*
<div className="microphone-status">
    {isListening ? "Listening........." : "Click to start Listening"}
</div>

{isListening && (
    <button className="microphone-stop btn" onClick={stopHandle}>
      Stop
    </button>
)}
        
{transcript && (
        <div className="microphone-result-container">
          <div className="microphone-result-text">{transcript}</div>
          <button className="microphone-reset btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      )}
*/