import Image from "next/image";
import Link from "next/link";
import lux from "@/assets/lux.png"
import tahm from "@/assets/tahm-kench.png"
import morde from "@/assets/mordekaiser.png"
import eve from "@/assets/evelynn.png"
import challenger from "@/assets/challenger.png"
import xerath from "@/assets/xerath.png"
import mf from "@/assets/mf.png"
import sc1 from "@/assets/screenshot1.png"
import sc2 from "@/assets/screenshot2.png"
import sc3 from "@/assets/screenshot3.png"
import sc4 from "@/assets/screenshot4.png"

export default function Home() {
  return (
    <>
    <div className="bg-no-repeat">
      <div className="lux-bg w-full h-fit py-10">
        <div className="mx-auto max-w-6xl px-10 ">
          <picture className="w-full">
            <Image src={lux} alt="lux"/>
          </picture>
          </div>
          <div className="h1 lux-button justify-center items-center text-3xl py-2">
            O MELHOR JEITO DE CONSEGUIR SEU ELO VERDADEIRO
          </div>
          
        </div>
        <div className="max-w-4xl flex flex-col space-y-10 md:space-y-0 md:flex-row justify-center items-center m-auto">
          <div className="flex flex-col justify-center items-center p-3 py-5 trust-cards w-44 text-center">
            <picture className="w-12 pb-4">
              <Image src={tahm} alt="tahm kench"/>
            </picture>
            Prazo de 30 dias ou seu dinheiro de volta!
          </div>
          <div className="flex flex-col justify-center items-center p-3 py-5 trust-cards w-44 text-center">
            <picture className="w-12 pb-4">
              <Image src={morde} alt="mordekaiser"/>
            </picture>
            Melhor custo benefício do mercado!
          </div>
          <div className="flex flex-col justify-center items-center p-3 py-5 trust-cards w-44 text-center">
            <picture className="w-12 pb-4">
              <Image src={eve} alt="evelynn"/>
            </picture>
            Jogue com seu main para evitar suspeitas!
          </div>
        </div>
      </div>

      <div className="text-4xl sm:text-6xl h1 text-center py-20 px-20">
        CONHEÇA NOSSOS PRODUTOS!
      </div>
      
      <div className="max-w-4xl flex flex-col space-y-10 min-[1150px]:space-y-0 min-[1150px]:flex-row justify-center items-center min-[1150px]:items-start m-auto min-[1150px]:space-x-16 xl:space-x-32">
        <div className="flex flex-col justify-center items-start p-3 py-5 product-cards w-96 text-center text-4xl transition-all drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] bg-[#1A1A29] hover:bg-[#0d0d15]">
          <picture className="w-72 pb-4 m-auto">
            <Image src={challenger} alt="challenger"/>
          </picture>
          <div className="m-auto mb-4">
            Suba para qualquer elo desde o ouro até challenger!
          </div>
          <div className="m-auto text-base">
            Suba já
          </div>
        </div>
        <div className="flex flex-col justify-center items-start p-3 py-5 product-cards w-96 text-center text-4xl transition-all drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] bg-[#1A1A29] hover:bg-[#0d0d15]">
          <picture className="w-72 pb-4 m-auto">
            <Image src={xerath} alt="xerath"/>
          </picture>
          <div className="m-auto mb-4">
            Script para Xerath, esquiva e kiting
          </div>
          <div className="m-auto text-base">
            Adquira seu Faker mode!
          </div>
        </div>
        <div className="flex flex-col justify-center items-start p-3 py-5 product-cards w-96 text-center text-4xl transition-all drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] bg-[#1A1A29] hover:bg-[#0d0d15]">
          <picture className="w-72 pb-4 m-auto">
            <Image src={mf} alt="miss fortune"/>
          </picture>
          <div className="m-auto mb-4">
            Participe de sorteio de skins do seu campeão favorito
          </div>
          <div className="m-auto text-base">
            Ganhe já!
          </div>
        </div>
      </div>

      <div className="w-full feedback-bg">
        <div className="text-6xl h1 text-center py-20 px-20">
          O QUE FALAM SOBRE NÓS
        </div>
        <div className="flex flex-col flex-wrap lg:flex-row items-center justify-between w-full py-10 lg:px-40 max-w-fit m-auto">
          <picture className="w-96 pb-4 m-auto">
            <Image src={sc1} alt="screenshot"/>
          </picture>
          <picture className="w-96 pb-4 m-auto">
            <Image src={sc2} alt="screenshot"/>
          </picture>
          <picture className="w-96 pb-4 m-auto">
            <Image src={sc3} alt="screenshot"/>
          </picture>
          <picture className="w-96 pb-4 m-auto">
            <Image src={sc4} alt="screenshot"/>
          </picture>
        </div>
      </div>

    </>
  );
}
