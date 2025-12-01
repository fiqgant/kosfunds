"use client";
import { useState, useRef, useEffect } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto scroll ke bawah setiap ada pesan baru
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const text = input;
    setInput("");

    setMessages((prev) => [...prev, { sender: "user", text }]);
    setTyping(true);

    try {
      const res = await fetch("/api/advice/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });

      const data = await res.json();

      setTyping(false);

      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: data.reply || "AI tidak dapat merespon." },
      ]);
    } catch (err) {
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Terjadi kesalahan saat menghubungi server." },
      ]);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className=" fixed 
    bottom-20        /* posisi di mobile */
    md:bottom-5      /* posisi di layar medium ke atas */
    right-5 
    w-14 h-14 
    rounded-full 
    bg-blue-600 text-white 
    shadow-lg text-2xl 
    flex items-center justify-center 
    z-50 hover:bg-blue-700 
    transition"
      >
        💬
      </button>

      {/* Chat Popup */}
      {open && (
        <div className="fixed 
    bottom-40       
    md:bottom-24     
    right-5 
    w-80 
    h-[420px] 
    bg-white 
    rounded-2xl 
    shadow-2xl 
    border 
    flex flex-col 
    animate-[fadeIn_0.3s] 
    z-50">

          {/* Header */}
          <div className="p-4 bg-blue-600 text-white rounded-t-2xl flex items-center gap-3 shadow-md">
            <div className="w-10 h-10 rounded-full bg-white text-blue-600 flex items-center justify-center font-bold">
              AI
            </div>
            <div>
              <p className="font-semibold text-sm">Kosfunds AI Assistant</p>
              <p className="text-xs text-blue-200">Selalu siap membantu 💡</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-2 ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {/* Avatar AI */}
                {msg.sender === "ai" && (
                  <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
                    AI
                  </div>
                )}

                {/* Bubble */}
                <div
                  className={`px-3 py-2 rounded-xl max-w-[70%] text-sm shadow ${
                    msg.sender === "user"
                      ? "bg-blue-100 text-blue-900 rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>

                {/* Avatar User */}
                {msg.sender === "user" && (
                  <div className="w-7 h-7 bg-gray-300 text-gray-700 rounded-full flex items-center justify-center text-xs">
                    U
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {typing && (
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
                  AI
                </div>
                <div className="bg-gray-200 text-gray-600 px-3 py-2 rounded-xl text-sm animate-pulse shadow">
                  AI sedang mengetik...
                </div>
              </div>
            )}

            <div ref={chatEndRef}></div>
          </div>

          {/* Input Area */}
          <div className="flex border-t p-3 gap-2">
            <input
              className="flex-1 px-3 py-2 rounded-xl border bg-gray-50 focus:ring-2 focus:ring-blue-400 outline-none text-sm"
              placeholder="Ketik pesan..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-blue-600 text-white px-4 rounded-xl shadow hover:bg-blue-700 transition"
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
