import Image from "next/image";
import Navbar from "./ui/navbar";
import LoginForm from "./loginForm/LoginForm";

export default function Home() {
  return (
    <main className="flex flex-col ">
      <Navbar />
      <div className="">
        <LoginForm />
      </div>
    </main>
  );
}
