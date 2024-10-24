import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState([]);
  const [addmessage, setAddMessage] = useState("");

  const handleAddMessage = (event) => {
    event.preventDefault();
    const newMessage = [...message];
    newMessage.push(addmessage);
    setMessage(newMessage);
    setAddMessage("");
  };

  const deleteMessage = (messageIndex) => {
    const newMessage = [...message];
    newMessage.splice(messageIndex, 1);
    setMessage(newMessage);
  };

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={addmessage}
            onChange={(event) => {
              setAddMessage(event.target.value);
            }}
          />
        </label>
        <button onClick={handleAddMessage} className="submit-message-button">
          Submit
        </button>
      </div>
      {message.map((msg, index) => (
        <div className="board" key={index}>
          <div className="message">
            <h1>{msg}</h1>
            <button
              onClick={(index) => {
                deleteMessage(index);
              }}
              className="delete-button"
            >
              x
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MessageBoard;
