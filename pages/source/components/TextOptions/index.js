import React, { useState, useEffect, useRef } from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";


export default function TextOptions() {
  const [textEntry, setTextEntry] = useState("");
  const [countText, setCountText] = useState(0);

  const textAreaRef = useRef(null);

  useEffect(() => {
    setCountText(textEntry.length);
  }, [textEntry]);

  const encodeText = () => {
    if (textEntry.length > 0) {
      setTextEntry(encodeURI(textEntry));
      setTimeout(() => {
        copyText();
      }, 100);
    } else {
      alert("type or paste something before...");
    }
  };

  const decodeText = () => {
    if (textEntry.length > 0) {
      setTextEntry(decodeURI(textEntry));
      setTimeout(() => {
        copyText();
      }, 100);
    } else {
      alert("type or paste something before...");
    }
  };

  const lowercase = () => {
    if (textEntry.length > 0) {
      setTextEntry(textEntry.toLowerCase());
      setTimeout(() => {
        copyText();
      }, 100);
    } else {
      alert("type or paste something before...");
    }
  };

  const uppercase = () => {
    if (textEntry.length > 0) {
      setTextEntry(textEntry.toUpperCase());
      setTimeout(() => {
        copyText();
      }, 100);
    } else {
      alert("type or paste something before...");
    }
  };

  const copyText = () => {
    if (textEntry.length > 0) {
      textAreaRef.current.select();
      document.execCommand("copy");
      handleClick();
    } else {
      alert("type or paste something before...");
    }
  };

  const clearText = () => {
    setTextEntry("");
    textAreaRef.current.focus();
  };

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="BoxToolArea">
      <h1>
        Hello! Simply enter your text and choose the case you want to convert it
        to.
      </h1>

      <textarea
        ref={textAreaRef}
        placeholder="Type or paste your content here"
        value={textEntry}
        onChange={(e) => setTextEntry(e.target.value)}
      />

      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Copied to clipboard!"
      />

      <p>Character Count: {countText}</p>

      <div className="functionalOptions">
        <div className="buttonFunc" onClick={encodeText}>
          Encode Text
        </div>
        <div className="buttonFunc" onClick={decodeText}>
          Decode Text
        </div>
        <div className="buttonFunc" onClick={lowercase}>
          lower case
        </div>
        <div className="buttonFunc" onClick={uppercase}>
          UPPER CASE
        </div>
        <div className="buttonFunc" onClick={copyText}>
          Copy Text
        </div>
        <div className="buttonFunc" onClick={clearText}>
          Clear Text
        </div>
      </div>
    </div>
  );
}
