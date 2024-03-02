'use client'
import Link from "next/link";
import React from "react";
import xerath_script from "@/assets/xerath-script.png";
import Image from "next/image";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";


const ElojobPage = () => {

  return (
    <>
      <div className="bg-[url('/script-bg.png')] bg-local bg-origin-border bg-cover h-fit py-48 bg-top"> 
        <div className="script-bg rounded-[4.375rem] m-auto md:w-[46rem] h-[31rem] items-center justify-center place-content-center max-w-sm sm:max-w-lg md:max-w-max">
          <div className="flex flex-row items-center justify-center place-content-center py-16">
            <div className="md:grid grid-cols-2 w-[90%] h-fit">
              <div className="md:grid grid-rows-3 text-left h-fit">
                <div className="text-4xl h1">
                  PLANO MENSAL
                </div>
                <div className="text-sm mb-5">
                  Contendo scripts para skillshots, kiting, esquiva, timer da jungle, mudança de skin e timer de skill.
                </div>
                <div className="text-2xl">
                  R$ 150,00
                </div>
                <Link href={"/buy"}>
                <div className="text-center justify-self-start place-self-start self-start bg-red-700 hover:bg-red-600 shadow-lg hover:shadow-2xl text-white px-5 py-5 w-52 rounded-2xl text-xl transition-all">
                  <button>ASSINE JÁ!</button>
                </div>
                </Link>
              </div>
              <picture className="collapse md:visible">
                <Image src={xerath_script} alt="xerath" />
              </picture>
            </div>
          </div>
          
          <div className="text-center">
            Entrega virtual, será enviada por e-mail após a compra.
          </div>
        </div>
      </div>
    </>
  );
};

export default ElojobPage
