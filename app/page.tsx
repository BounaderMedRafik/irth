import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className=" size-24 bg-background border-foreground border-2"></div>
      <div className=" size-24 bg-accent"></div>
      <div className=" size-24 bg-primary"></div>
      <div className=" size-24 bg-foreground"></div>
      <div className=" size-24 bg-secondary"></div>
    </div>
  );
}
