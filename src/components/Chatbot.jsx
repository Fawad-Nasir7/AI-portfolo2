import { useState } from "react";
import { Bot, Send, X } from "lucide-react";

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! I'm Fawad's AI assistant. Ask me about his skills, projects or experience.",
    },
  ]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    const userMessage = input;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
      {
        role: "bot",
        text: getResponse(userMessage),
      },
    ]);

    setInput("");
  };

  const getResponse = (message) => {
    const text = message.toLowerCase();

    if (text.includes("skill")) {
      return "Fawad works with HTML, CSS, JavaScript, React.js, Tailwind CSS, Git, GitHub, REST APIs and MongoDB.";
    }

    if (text.includes("project")) {
      return "Fawad has worked on an E-Commerce Product Manager, Currency Converter, ShopEase and Personal Portfolio projects.";
    }

    if (text.includes("react")) {
      return "React.js is one of Fawad's main frontend technologies.";
    }

    if (text.includes("contact")) {
      return "You can use the contact form on this website to get in touch.";
    }

    return "I'm Fawad's portfolio assistant. You can ask me about his skills, React experience, projects or contact information.";
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[350px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b1025] shadow-2xl">

          <div className="flex items-center justify-between bg-violet-600 p-4">
            <div className="flex items-center gap-3">
              <Bot />
              <div>
                <h3 className="font-bold">Fawad AI</h3>
                <p className="text-xs text-violet-200">
                  Portfolio Assistant
                </p>
              </div>
            </div>

            <button onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
          </div>

          <div className="h-80 space-y-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.role === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-4 py-3 text-sm ${
                    message.role === "user"
                      ? "bg-violet-600"
                      : "bg-white/10 text-gray-300"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={sendMessage}
            className="flex gap-2 border-t border-white/10 p-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me something..."
              className="min-w-0 flex-1 rounded-lg bg-white/10 px-3 py-2 text-sm outline-none placeholder:text-gray-500"
            />

            <button
              type="submit"
              className="rounded-lg bg-violet-600 p-2 hover:bg-violet-700"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 shadow-lg shadow-violet-900/40 transition hover:scale-110 hover:bg-violet-700"
      >
        {open ? <X /> : <Bot />}
      </button>
    </>
  );
}

export default Chatbot;