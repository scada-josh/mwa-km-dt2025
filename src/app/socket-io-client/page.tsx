'use client'

// import { usePathname } from "next/navigation";
import React, { useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

// let socket: Socket;

export default function Page() {
    const socketClient = io("http://localhost:3000");
    // const pathname = usePathname();
    const [isConnected, setIsConnected] = React.useState(false);

    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState("");
    const socketRef = useRef<Socket | null>(null);

    React.useEffect(() => {

        if(socketClient.connected) {
            onConnect();
        }

        socketRef.current = socketClient;

        function onConnect() {
            // console.log("onConnect Function")
            console.log("✅ Connected:", socketClient.id);
            setIsConnected(true);
        }


        function onDisconnect() {
            // console.log("onConnect Function")
            console.log("✅ Disconnected:", socketClient.id);
            setIsConnected(false);
        }

        socketClient.on('connect', onConnect);
        socketClient.on('disconnect', onDisconnect);
        socketClient.on("message", (msg: string) => {
            setMessages((prev) => [...prev, msg]);
        });

        return () => {
            socketClient.off('connect', onConnect);
            socketClient.off('disconnect', onDisconnect);
            socketClient.off("message", (msg: string) => {
                setMessages((prev) => [...prev, msg]);
            });
            socketClient.disconnect();
        }

    }, [])
  

    const sendMessage = () => {
    console.log("sendMessage");
    if (input && socketRef.current) {
        socketRef.current.emit("message", input);
        setMessages((prev) => [...prev, input]);
        setInput("");
    } else {
        console.warn("⚠️ Socket not ready");
    }
    };

  return (
    <main>
      <p>Socket.io Client</p>
      <p>สถานะการเชื่อมต่อ : {isConnected ? "Connected" : "Disconnect"}</p>

        <div>
        <h2>📡 Socket.IO Chat</h2>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={sendMessage}>Send</button>
        <ul>
            {messages.map((msg, i) => (
            <li key={i}>💬 {msg}</li>
            ))}
        </ul>
        </div>
    </main>
  );
}