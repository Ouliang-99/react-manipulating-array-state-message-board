import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [displayMessage, setDisplayMessage] = useState("");

  const addMessage = (event) => {
    event.preventDefault();
    setMessage([...message, displayMessage]);
  };

  const deleteMessage = (index) => {
    setMessage(message.filter((_, i) => i !== index));
  };
  

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <form onSubmit={addMessage}>
        <div class="message-input-container">
          <label>
            <input
              id="message-text"
              name="message-text"
              type="text"
              placeholder="Enter message here"
              value={displayMessage}
              onChange={(event) => {
                setDisplayMessage(event.target.value);
              }}
            />
          </label>
          <button className="submit-message-button">Submit</button>
        </div>
      </form>
      <div class="board">
        {message.map((message, index) => {
          return (
            <div key={index} className="message">
              <h1>{message}</h1>
              <button
                onClick={() => deleteMessage(index)}
                className="delete-button"
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MessageBoard;
