import ChatBox from "@/components/core/chat/ChatBox";

export default function ChatPage() {
  return (
    <div className=" relative">
      <img
        src="/bg/bg.jpg"
        className=" fixed top-0 left-0 w-full h-svh object-cover opacity-25 select-none "
        alt=""
      />
      <ChatBox />
    </div>
  );
}
