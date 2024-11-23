import Link from "next/link";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
    return( 
    <>
    <h1>Hello, login Page!</h1>
    <Link href='logout'>log out</Link>       
  
  </>
    )}