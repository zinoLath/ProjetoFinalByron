import instalogo from "@/assets/logo-insta.png"
import logo from "@/assets/logo.png"
import cards from "@/assets/card-companies.png"
import Image from "next/image"

export const Footer = () => {
  return (
	<>
	  <footer className="flex bg-white min-h-96 h-fit text-black nexa-font" >
		<div className="flex flex-col lg:flex-row items-center justify-between w-full py-10">
			<div className="mx-auto lg:mx-0 lg:pl-40 lg:pr-0">
				<div className="w-fit max-w-96 pb-5 px-5 text-justify">
					Xerth Elojobs busca garantir que nossos serviços sejam executados com a máxima qualidade e segurança para nossos clientes,
					uma vez que a sua satisfação é a nossa maior prioridade! Além disso, agilidade, profissionalismo e um preço super acesivel,
					são algumas das vantages que o nosso serviço oferece!
				</div>
				<div className="">
					<picture>
						<Image src={instalogo} alt="instagram:" />
					</picture>
				</div>
			</div>

			<picture className="w-96 bg-red-400">
				<Image src={logo} alt="Logo:" />
			</picture>

			<div className="lg:pr-40">
				<picture className="w-96">
					<Image src={cards} alt="Logo:" />
				</picture>
			</div>
		</div>
	  </footer>
	</>
  );
};
