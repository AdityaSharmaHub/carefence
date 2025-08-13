import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Image src={"logo.svg"} alt="CareFence logo" width={360} height={100} />
      <p className="italic mt-4 text-xl">"Clock in within the safe zone"</p>
    </div>
  );
}
