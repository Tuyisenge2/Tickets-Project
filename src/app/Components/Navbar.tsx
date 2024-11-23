import Link from "next/link";
import React from "react";
import Image from "next/image";
import imagePc from "./imagePC.png";
export default function Navbar() {
  return (
    <div className='flex gap-6'>
      <Image src={imagePc} alt="PC Shop" 
      quality={100}
      placeholder="blur"
      width={30} height={30} />
      <h1> my navbar head </h1>
      <Link href='/dashboard'>Dashboard</Link>
      <Link href='/Tickets'>Tickets</Link>
    </div>
  );
}
