import logo from "@/assets/logo.png"
import Image from "next/image"
import Link from "next/link";

export const Header = () => {
  return (
	<>
		<header className="flex items-center justify-center h-44 bg-white text-black " >
			<div className="flex flex-col lg:flex-row items-center justify-between w-full">
				<picture className="pl-0 lg:pl-40">
					<Image src={logo} alt="logo" className="h-28 w-48"/>
				</picture>

				<ul className="links flex items-center gap-10 pr-0 lg:pr-40 nexa-font text-sm sm:text-lg md:text-xl xl:text-2xl 2xl:text-4xl">
					<li><Link href={'/'} className="underline hover:underline-offset-8 hover:text-lg sm:hover:text-xl md:hover:text-2xl xl:hover:text-4xl 2xl:hover:text-8xl transition-all">Home</Link></li>
					<li><Link href={'/sobre'} className="underline hover:underline-offset-8 hover:text-lg sm:hover:text-xl md:hover:text-2xl xl:hover:text-4xl 2xl:hover:text-8xl transition-all">Sobre</Link></li>
					<li><Link href={'/elojob'} className="underline hover:underline-offset-8 hover:text-lg sm:hover:text-xl md:hover:text-2xl xl:hover:text-4xl 2xl:hover:text-8xl transition-all">Elojob</Link></li>
					<li><Link href={'/script'} className="underline hover:underline-offset-8 hover:text-lg sm:hover:text-xl md:hover:text-2xl xl:hover:text-4xl 2xl:hover:text-8xl transition-all">Script</Link></li>
				</ul>
			</div>
		</header>
	</>
  );
};
