import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image src={"logo.svg"} alt="CareFence logo" width={300} height={100} />
      <p className="italic mt-4 text-lg">&quot;Clock in within the safe zone&quot;</p>
      <Button type="primary" className="mt-4">Hello Btn</Button>
      <div className="flex gap-4 mt-4">
        <Link href="/auth/login">
          <Button>Login</Button>
        </Link>
        <Link href="/dashboard/profile">
          <Button>Profile</Button>
        </Link>
        <Link href="/auth/logout">
          <Button>Logout</Button>
        </Link>
      </div>
    </div>
  );
}
