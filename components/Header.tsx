import logo from "@/assets/logo.png"
import Image from "next/image"

export const Header = () => {
  return (
	<>
		<header className="flex items-center justify-center h-44 bg-white text-black " >
			<div className="flex flex-col lg:flex-row items-center justify-between w-full">
				<picture className="pl-0 lg:pl-40">
					<Image src={logo} alt="logo" className="h-28 w-48"/>
				</picture>

				<ul className="flex items-center gap-10 pr-0 lg:pr-40 nexa-font">
					<li>Home</li>
					<li>Sobre</li>
					<li>Elojob</li>
					<li>Script</li>
				</ul>
			</div>
		</header>
	</>
  );
};
