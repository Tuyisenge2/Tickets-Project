import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>Hello, Dashboard Page!</h1>
      <Link href='/dashboard/settings' > go to setting</Link>
    </>
  );
}
