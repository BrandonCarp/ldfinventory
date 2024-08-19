import Image from "next/image";
import Navbar from "./ui/navbar";
export default function Home() {
  return (
    <main className="flex flex-col ">
      <Navbar />
      <h1>Home Page</h1>
    </main>
  );
}
