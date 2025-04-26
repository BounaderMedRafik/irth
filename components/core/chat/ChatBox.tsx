"use client";

import { useState, useEffect, useRef } from "react";
import { useGenerateAnswer } from "@/hooks/useGenerateAnswer"; // Make sure this path is correct
import { AnimatePresence, motion } from "motion/react";
import { marked } from "marked";
import { Loader } from "lucide-react";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

const suggestions: string[] = [
  "Talk to me about Timgad?",
  "What’s special about Ghardaïa and its architecture?",
  "Can you tell me about the Casbah of Algiers?",
  "What are some historical landmarks in Constantine?",
];

interface Message {
  role: "user" | "ai";
  content: string;
}

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState<string>("");
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const { generateAnswer, loading } = useGenerateAnswer();

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: inputText,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    scrollToBottom();

    const aiResponse = await generateAnswer(userMessage.content);

    if (aiResponse) {
      const aiMessage: Message = {
        role: "ai",
        content: aiResponse,
      };
      setMessages((prev) => [...prev, aiMessage]);
      scrollToBottom();
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="h-full min-h-screen wrapper flex flex-col">
      <AnimatePresence mode="wait">
        {messages.length < 1 ? (
          <motion.div
            key="empty"
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { ease: [0.25, 1, 0.5, 1] },
            }}
            exit={{
              opacity: 0,
              y: -20,
              filter: "blur(10px)",
              transition: { ease: [0.5, 0, 0.75, 0] },
            }}
            className="h-full w-full flex-col min-h-[60vh] text-center flex items-center justify-center"
          >
            <div className="max-w-xl p-5 w-full">
              <div className="text-4xl flex items-center justify-center">
                Welcome to{" "}
                <img className="size-14" src="/brand/irth.svg" alt="" />
              </div>
              <div className="md:text-sm text-xs mt-7">
                <div>
                  {suggestions.map((item, i) => (
                    <div
                      onClick={() => setInputText(item)}
                      key={i}
                      className="opacity-75 line-clamp-1 md:line-clamp-none hover:opacity-100 transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <div className="flex-1 overflow-y-auto p-4 pt-[40%] pb-44">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  transition: { ease: [0.25, 1, 0.5, 1] },
                }}
                className={`mb-2 ${
                  msg.role === "user" ? "text-right" : "text-left"
                }`}
              >
                {msg.role === "ai" && (
                  <img
                    className="size-8 border rounded-sm mb-1"
                    src="/brand/irth-favcon.svg"
                    alt=""
                  />
                )}
                <div
                  className={`inline-block relative py-2 px-4 rounded-xl ${
                    msg.role === "user"
                      ? "bg-accent/75 border border-accent/75 shadow-2xl text-foreground"
                      : "bg-primary/25 text-foreground border border-foreground/10 rounded-tl-none"
                  }`}
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        msg.role === "ai" ? marked(msg.content) : msg.content,
                    }}
                  />
                </div>
              </motion.div>
            ))}
            <AnimatePresence mode="wait">
              {loading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { ease: [0.25, 1, 0.5, 1] },
                  }}
                  className="w-full flex items-end justify-start"
                >
                  <div className="inline-block py-2 px-4 rounded-xl bg-foreground/75 text-background mr-0">
                    <div className="flex items-center gap-2">
                      <div>Writing A Reply</div>
                      <Loader className="animate-spin" size={13} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={chatEndRef} />
          </div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-14 left-1/2 -translate-x-1/2 max-w-xl p-0 w-full">
        <input
          placeholder="Think With Me..."
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSend();
          }}
          className="border border-foreground/10 shadow-xl rounded-full py-4 px-14 w-full overflow-hidden focus-visible:outline-none bg-background"
        />
        <div
          onClick={handleSend}
          className="h-[90%] aspect-square rounded-full absolute right-1 top-1/2 -translate-y-1/2 flex items-center justify-center bg-accent hover:opacity-75 transition-all duration-300 ease-in cursor-pointer"
        >
          <FaRegPaperPlane size={18} />
        </div>
        <div className="absolute left-5 top-1/2 -translate-y-1/2">
          <FaCircleUser size={24} />
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
