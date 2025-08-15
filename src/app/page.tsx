import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image src={"logo.svg"} alt="CareFence logo" width={300} height={100} />
      <p className="italic mt-4 text-lg">&quot;Clock in within the safe zone&quot;</p>
    </div>
  );
}
