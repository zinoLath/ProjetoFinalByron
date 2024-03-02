'use client'
import Link from "next/link";
import React from "react";
import xerath_script from "@/assets/xerath-script.png";
import Image from "next/image";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/dropdown";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/input";
import emailjs from '@emailjs/browser';


const ElojobPage = () => {
    var name = "";
    var email = "";
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        name = e.target.value;
      }
    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        email = e.target.value;
    }
    const sendEmail = () => {
        emailjs.init({
            publicKey: 'uDBlZx3gAMtJvu7Kc',
            // Do not allow headless browsers
            blockHeadless: true,
            blockList: {
            },
            limitRate: {
              // Set the limit rate for the application
              id: 'app',
              // Allow 1 request per 10s
              throttle: 10000,
            },
          });
    
        emailjs
          .send('service_afvedbm', 'template_0zsuim7', {
            publicKey: 'uDBlZx3gAMtJvu7Kc',
            name: name,
            reply_to: email,
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <>
      <div className="bg-[url('/script-bg.png')] bg-local bg-origin-border bg-cover h-fit py-48 bg-top"> 
        <div className="script-bg rounded-[4.375rem] m-auto md:w-[46rem] h-[31rem] items-center justify-center place-content-center max-w-sm sm:max-w-lg md:max-w-max">
          <div className="flex flex-row items-center justify-center place-content-center py-16">
            <div className="w-[90%] h-fit">
              <div className="md:grid grid-rows-3 text-left h-fit  m-aut">
                <div className="text-sm mb-5  m-auto">
                  Os dados da sua compra serão enviados por e-mail.
                </div>
                <Input
                type="name"
                label="Nome"
                className="max-w-xs  m-auto  mb-2"
                onChange={onChangeName}
                />
                <Input
                type="email"
                label="Email"
                className="max-w-xs  m-auto  mb-2"
                onChange={onChangeEmail}
                />
                <div className="m-auto text-center justify-self-start place-self-start self-start bg-red-700 hover:bg-red-600 shadow-lg hover:shadow-2xl text-white px-5 py-5  rounded-2xl text-xl transition-all">
                  <button onClick={sendEmail}>FINALIZE SUA COMPRA</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center w-[90%] m-auto">
            Entrega virtual, será enviada por e-mail após a compra.
          </div>
        </div>
      </div>
    </>
  );
};

export default ElojobPage
