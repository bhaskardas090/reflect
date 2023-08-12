import React, { useState } from "react";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  TypingIndicator,
} from "@chatscope/chat-ui-kit-react";
import "../styles/ChatBot.css";
import { Link } from "react-router-dom";

const API_KEY = "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";

const systemMessage = {
  role: "system",
  content:
    "Before responding, assess if the question pertains to wellness, health, and happiness. If it falls within these topics, provide answers akin to those offered by a psychology doctor, offering insights and guidance. Limit responses exclusively to queries related to health, wellness, and happiness. For any unrelated questions, kindly remind the user to focus on wellness-related topics. Keep your responses in simple English and short maximum 70 words.",
};

const ChatBot = () => {
  const [messages, setMessages] = useState([
    {
      message:
        "Hello, I'm ReflectGPT! where we journey towards a happier and healthier you!",
      sentTime: "just now",
      sender: "ChatGPT",
      direction: "incoming",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const sendMessage = async (message) => {
    const newMessage = {
      message,
      sentTime: new Date().toLocaleTimeString(),
      sender: "user",
      direction: "outgoing",
    };

    setMessages([...messages, newMessage]);
    setIsTyping(true);

    try {
      const response = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [systemMessage, { role: "user", content: message }],
          }),
        }
      );

      const data = await response.json();

      const botReply =
        data.choices[0]?.message?.content ||
        "Sorry, I couldn't understand that.";

      const botMessage = {
        message: botReply,
        sentTime: new Date().toLocaleTimeString(),
        sender: "ChatGPT",
      };
      // console.log('Bot Message ***',botMessage)
      setMessages([...messages, newMessage, botMessage]);
    } catch (error) {
      console.error("Error sending message to ChatGPT:", error);
    }

    setIsTyping(false);
  };
  console.log("Messges List ***", messages);
  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      <MainContainer>
        <ChatContainer>
          <MessageList
            scrollBehavior="smooth"
            typingIndicator={
              isTyping ? (
                <TypingIndicator content="Reflect AI is thinkging" />
              ) : null
            }
          >
            {messages.map((message, index) => (
              <Message key={index} model={message} className="message" />
            ))}
          </MessageList>
          <MessageInput
            placeholder="Type message here"
            onSend={sendMessage}
            attachButton={false}
          />
        </ChatContainer>
      </MainContainer>
      <Link to="/">
        <img
          src="https://cdn-icons-png.flaticon.com/128/10346/10346993.png"
          alt="back"
          style={{
            position: "absolute",
            top: "3vh",
            right: "5vw",
            width: "30px",
            height: "30px",
            zIndex: "100",
          }}
        />
      </Link>
    </div>
  );
};

export default ChatBot;
