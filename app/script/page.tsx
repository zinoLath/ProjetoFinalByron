'use client'
import Link from "next/link";
import React from "react";
import xerath_script from "@/assets/xerath-script.png";
import Image from "next/image";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";


const ElojobPage = () => {
  const [selectedKeysCurrent, setSelectedKeysCurrent] = React.useState(new Set(["Ferro"]));
  const [selectedKeysFuture, setSelectedKeysFuture] = React.useState(new Set(["Ouro"]));

  const selectedValueCurrent = React.useMemo(
    () => Array.from(selectedKeysCurrent).join(", ").replaceAll("_", " "),
    [selectedKeysCurrent])
  const selectedValueFuture = React.useMemo(
    () => Array.from(selectedKeysFuture).join(", ").replaceAll("_", " "),
    [selectedKeysFuture])

  const eloMap = new Map();
  eloMap.set("Ferro",0);
  eloMap.set("Bronze",1);
  eloMap.set("Prata",2);
  eloMap.set("Ouro",3);
  eloMap.set("Platina",4);
  eloMap.set("Esmeralda",5);
  eloMap.set("Diamante",6);
  eloMap.set("Mestre",7);
  eloMap.set("Grão-Mestre",8);
  eloMap.set("Desafiante",9);

  const colors = ["#9c9c9c", "#ffc69e", "#d9d9d9", "#ffe59e", "#9effe8", "#9effa9", "#9efaff", "#b69eff", "#ff9e9e", "#9ebbff"];

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
                <div className="text-center justify-self-start place-self-start self-start bg-red-700 hover:bg-red-600 shadow-lg hover:shadow-2xl text-white px-5 py-5 w-52 rounded-2xl text-xl transition-all">
                  <button>ASSINE JÁ!</button>
                </div>
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
