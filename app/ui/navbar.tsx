import Image from "next/image";
import Link from "next/link";
import lcpLogo from "../ui/images/LCP.webp";
import ldfLogo from "../ui/images/LDF.webp";

export default function Navbar() {
  return (
    <nav className=" p-3">
      <div className="container flex">
        <Image src={ldfLogo} alt="LDF Logo" width={175} />
        <Image src={lcpLogo} alt="LCP Logo" width={150} />
        <Link className="" href="/">Home</Link>
      </div>
    </nav >
  );
}
