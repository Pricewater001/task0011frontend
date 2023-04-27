import React, { useState, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import io from "socket.io-client";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const socket = io("http://192.168.196.214:3002");
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const socket = io("http://192.168.196.214:3002");
    socket.on("message", handleReceiveMessage);
    return () => {
      socket.off("message", handleReceiveMessage);
      socket.disconnect();
    };
  }, []);

  const handleReceiveMessage = (newMessage) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessage)
    );
  };

  const handleSendMessage = (newMessage) => {
    const socket = io("http://192.168.196.214:3002");
    socket.emit("message", newMessage[0].text);
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={handleSendMessage}
      user={{
        _id: 1,
      }}
      keyExtractor={(message) => message.id.toString()}
      inverted={true}
    />
  );
};

export default Chat;
