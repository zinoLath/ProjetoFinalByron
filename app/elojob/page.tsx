'use client'
import Link from "next/link";
import React from "react";
import challenger from "@/assets/challenger.png";
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
      <div className="bg-[url('/elojob-bg.png')] bg-local bg-origin-border bg-center bg-cover h-fit py-32"> 
        <div className="flex flex-row elojob-bg m-auto w-[51rem] h-[51rem] items-center justify-center place-content-center py-32">
          <div className="w-full">
            <div className="text-center">
              ELOJOB / DUOBOOST<br/>
              Você pode escolher adicionais no<br/>
              momento de finalizar o pedido, como por<br/>
              exemplo: Flash no D ou no F, rotas<br/>
              específicas.
            </div>
            <div className="lg:grid lg:grid-cols-3 place-content-center items-center justify-items-center justify-center mx-auto content-center w-fit lg:w-auto mb-10 lg:mb-0">
              <div className="mx-auto lg:mx-0 lg:flex-none w-fit text-center lg:text-right justify-self-center lg:justify-self-end">
                Elo Atual:<br/>
                <Dropdown>
                  <DropdownTrigger>
                    <Button 
                      variant="solid"
                      style={{color: colors[eloMap.get(selectedValueCurrent)],}} 
                    >          
                    {selectedValueCurrent}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu 
                    aria-label="Static Actions"
                    selectionMode="single"
                    disallowEmptySelection
                    selectedKeys={selectedKeysCurrent}
                    onSelectionChange={setSelectedKeysCurrent}>
                    <DropdownItem style={{color: colors[eloMap.get("Ferro")],}} key="Ferro">Ferro</DropdownItem>
                    <DropdownItem style={{color: colors[eloMap.get("Bronze")],}} key="Bronze">Bronze</DropdownItem>
                    <DropdownItem style={{color: colors[eloMap.get("Prata")],}} key="Prata">Prata</DropdownItem>
                    <DropdownItem style={{color: colors[eloMap.get("Ouro")],}} key="Ouro">Ouro</DropdownItem>
                    <DropdownItem style={{color: colors[eloMap.get("Platina")],}} key="Platina">Platina</DropdownItem>
                    <DropdownItem style={{color: colors[eloMap.get("Esmeralda")],}} key="Esmeralda">Esmeralda</DropdownItem>
                    <DropdownItem style={{color: colors[eloMap.get("Diamante")],}} key="Diamante">Diamante</DropdownItem>
                    <DropdownItem style={{color: colors[eloMap.get("Mestre")],}} key="Mestre">Mestre</DropdownItem>
                    <DropdownItem style={{color: colors[eloMap.get("Grão-Mestre")],}} key="Grão-Mestre">Grão-Mestre</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
              <picture className="h-36 lg:h-72 w-28 lg:w-56 m-10 mb-0">
                <Image className="h-36 lg:h-auto w-36 lg:w-auto" src={challenger} alt="a" />
              </picture>
              <div className="mx-auto lg:mx-0 lg:flex-none w-fit text-center lg:text-left justify-self-center lg:justify-self-start">
                Elo desejado:<br/>
                <Dropdown>
                  <DropdownTrigger>
                    <Button 
                      variant="solid"
                      style={{color: colors[eloMap.get(selectedValueFuture)],}} 
                    >          
                    {selectedValueFuture}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu 
                    aria-label="Static Actions"
                    selectionMode="single"
                    disallowEmptySelection
                    selectedKeys={selectedKeysFuture}
                    onSelectionChange={setSelectedKeysFuture}>
                    <DropdownItem style={{color: colors[eloMap.get("Bronze")],}} key="Bronze">Bronze</DropdownItem>
                    <DropdownItem style={{color: colors[eloMap.get("Prata")],}} key="Prata">Prata</DropdownItem>
                    <DropdownItem style={{color: colors[eloMap.get("Ouro")],}} key="Ouro">Ouro</DropdownItem>
                    <DropdownItem style={{color: colors[eloMap.get("Platina")],}} key="Platina">Platina</DropdownItem>
                    <DropdownItem style={{color: colors[eloMap.get("Esmeralda")],}} key="Esmeralda">Esmeralda</DropdownItem>
                    <DropdownItem style={{color: colors[eloMap.get("Diamante")],}} key="Diamante">Diamante</DropdownItem>
                    <DropdownItem style={{color: colors[eloMap.get("Mestre")],}} key="Mestre">Mestre</DropdownItem>
                    <DropdownItem style={{color: colors[eloMap.get("Grão-Mestre")],}} key="Grão-Mestre">Grão-Mestre</DropdownItem>
                    <DropdownItem style={{color: colors[eloMap.get("Desafiante")],}} key="Desafiante">Desafiante</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </div>
            <div className="text-center text-4xl mb-10">
              Valor:<br/>R$ {Math.max((eloMap.get(selectedValueFuture)-eloMap.get(selectedValueCurrent))*100,0)},00
            </div>
            <div className="text-center bg-red-700 hover:bg-red-600 shadow-lg hover:shadow-2xl text-white m-auto px-10 py-5 w-52 rounded-2xl text-lg transition-all">
              <button>COMPRE JÁ!</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElojobPage
