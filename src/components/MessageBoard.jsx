import { useState } from "react";
function MessageBoard() {
  const [messageList, setMessageList] = useState([]);
  const [inputMessage, setInputMessages] = useState("");
  const addMessage = () => {
    const newMessage = {
      id: messageList.length + 1,
      message: inputMessage,
    };
    setMessageList([...messageList, newMessage]);
    setInputMessages("");
  };
  const deleteMessage = (id) => {
    const updateMessageList = messageList.filter(
      (message) => message.id !== id
    );
    setMessageList(updateMessageList);
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
            value={inputMessage}
            onChange={(e) => setInputMessages(e.target.value)}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div class="board">
        {messageList.map((item) => (
          <div className="message">
            <h1 key={item.id}>{item.message}</h1>
            <button
              className="delete-button"
              onClick={() => deleteMessage(item.id)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
