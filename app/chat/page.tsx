import ChatBox from "@/components/core/chat/ChatBox";

export default function ChatPage() {
  return (
    <div className=" relative">
      <img
        src="/bg/bg.jpg"
        className=" fixed top-0 left-0 w-full h-svh object-cover opacity-25 select-none "
        alt=""
      />
      <img
        className=" fixed top-1/2 left-1/2 -translate-y-96 -translate-x-24       object-cover opacity-10 select-none "
        src="/brand/irth_logo_no_pj.png"
        alt=""
      />
      <ChatBox />
    </div>
  );
}
