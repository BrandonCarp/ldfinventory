import Image from "next/image";
import Link from "next/link";
import lcpLogo from "../ui/images/LCP.webp";
import ldfLogo from "../ui/images/LDF.webp";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center p-5">
      {/* Center below div */}
      <div className=" flex w-full justify-center items-center ">
        <Image src={ldfLogo} alt="LDF Logo" width={250} />
        <Image src={lcpLogo} alt="LCP Logo" width={100} />
      </div>
      <div className="flex mr-5">
        <Link className="" href="/">
          Home
        </Link>
        {/* <Image src={lcpLogo} alt="LCP Logo" width={125} /> */}
      </div>
    </nav>
  );
}
