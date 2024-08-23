import { useState } from "react";
import "./chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() === "") return;

    // เพิ่มข้อความของผู้ใช้
    const newMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // เพิ่มข้อความตอบกลับจาก Chatbot
    const responseMessage = generateResponse(input);
    setMessages((prevMessages) => [...prevMessages, responseMessage]);

    setInput(""); // ล้างช่อง input
  };

  const generateResponse = (inputText) => {
    let responseText = "ขอโทษครับ ฉันไม่เข้าใจคำถาม";

    // กำหนดกฎการตอบกลับที่นี่
    if (inputText.includes("สวัสดี")) {
      responseText = "สวัสดีครับ! มีอะไรให้ช่วยไหมครับ?";
    } else if (inputText.includes("ชื่อ")) {
      responseText = "ฉันคือ Chatbot ที่คุณกำหนดเองได้ครับ!";
    }

    return { sender: "bot", text: responseText };
  };

  return (
    <div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="btn_a">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="พิมพ์ข้อความที่นี่"
          className="input"
        />
        <button onClick={handleSend}>ส่ง</button>
      </div>
    </div>
  );
};

export default Chatbot;
