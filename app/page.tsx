import Image from "next/image";
import Link from "next/link";
import xerath from "@/assets/xerath.png"

export default function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <Image src={xerath} alt="xerath" />

      <Link href={'/elojob'} className="text-red-500">Elojob</Link>
    </>
  );
}
