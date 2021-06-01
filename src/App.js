import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [textInput, setTextInput] = useState("");
  const updateTextInput = (e) => setTextInput(e.target.value);

  const [list, setList] = useState([]);
  const postTweet = () => {
    setList([textInput, ...list]);
    setTextInput("");
  };

  const deleteTweet = (item, index) => {
    // which tweet to delete
    list.splice(index, 1);

    // so that we can update the view
    setList([...list]);
  };

  return (
    <div>
      <h1 className="bg-success text-light p-3   sticky-top">
        Twitter Application Demo
      </h1>

      <div className="alert alert-danger row">
        <input
          type="text"
          value={textInput}
          onChange={(e) => updateTextInput(e)}
          className="form-control mb-1"
          placeholder="post your tweet here"
        />
        <input
          type="button"
          className="btn btn-danger  rounded"
          onClick={() => postTweet()}
          value=" Click to Tweet"
        />
      </div>

      {list.map((item, index) => (
        <div
          key={index}
          className="alert alert-dark m-4 d-flex justify-content-between align-items-center rounded"
        >
          {item}
          <button
            className="btn btn-outline-danger"
            onClick={() => deleteTweet(item, index)}
          >
            Delete X
          </button>
        </div>
      ))}
    </div>
  );
}
